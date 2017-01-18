import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OptionalDataException;
import java.net.Socket;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.WindowConstants;

public class GameClient extends JFrame implements Runnable, KeyListener {
	private static final long	serialVersionUID	= -8267593280766202760L;
	
	public static int			JOIN				= 0;
	public static int			LEAVE				= 1;
	public static int			PRESS				= 2;
	public static int			RELEASE				= 3;
	
	private Socket				server;
	private ObjectInputStream	serverInput;
	private ObjectOutputStream	serverOutput;
	
	private GamePanel			panel				= new GamePanel();
	
	private Thread				clientThread		= new Thread(this);
	
	private PlayerPacket		player;
	
	public static void main(String[] args) {
		try {
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
		} catch (Exception e) {
			e.printStackTrace();
		}
		new GameClient(JOptionPane.showInputDialog("Connect to server address:", "localhost"));
	}
	
	public GameClient(String hostname) {
		super("Game");
		
		try {
			System.out.print("Connecting to " + hostname + ", and opening the input and output object streams: ");
			this.server = new Socket(hostname, GameServer.PORT);
			this.serverOutput = new ObjectOutputStream(this.server.getOutputStream());
			this.serverInput = new ObjectInputStream(this.server.getInputStream());
			System.out.println("SUCCESS");
		} catch (IOException e) {
			System.out.println("FAILURE");
			e.printStackTrace();
			System.exit(1);
		}
		
		this.player = new PlayerPacket(-1, JOptionPane.showInputDialog("Enter your player name: "));
		try {
			this.serverOutput.writeObject(this.player);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		this.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
		this.setBounds(100, 100, 800, 600);
		this.setLayout(null);
		
		this.panel.setBounds(0, 0, 800, 600);
		this.add(this.panel);
		
		this.addKeyListener(this);
		
		this.setVisible(true);
		
		this.clientThread.start();
	}
	
	public PlayerPacket getPlayerPacket() {
		return this.player;
	}
	
	public void dispose() {
		super.dispose();
		try {
			System.out.print("Writing leave packet: ");
			this.serverOutput.writeObject(new Packet(this.player.id, GameClient.LEAVE, 0));
			System.out.println("SUCCESS");
		} catch (IOException e) {
			System.out.println("FAILURE");
			e.printStackTrace();
		}
		System.exit(0);
	}
	
	public void run() {
		Object o;
		
		while (true) {
			try {
				o = this.serverInput.readObject();
			} catch (OptionalDataException eo) {
				System.out.println("Optional data found, ignoring.");
				continue;
			} catch (Exception e) {
				e.printStackTrace();
				JOptionPane.showMessageDialog(null, "The server has unexpectedly shut down!");
				System.exit(0);
				continue;
			}
			
			if (o instanceof StatePacket) {
				this.panel.setGameState((StatePacket) o);
			} else if (o instanceof Packet) {
				this.panel.updateState((Packet) o);
			} else if (o instanceof PlayerPacket) {
				System.out.println("Received player ID: " + ((PlayerPacket) o).id);
				this.player.id = ((PlayerPacket) o).id;
				
				try {
					System.out.print("Writing join packet: ");
					this.serverOutput.writeObject(new Packet(this.player.id, GameClient.JOIN, 0));
					System.out.println("SUCCESS");
				} catch (IOException e) {
					System.out.println("FAILURE");
					e.printStackTrace();
				}
			} else {
				System.out.println("Unknown packet type: " + o.getClass().toString());
			}
		}
	}
	
	public void keyPressed(KeyEvent ke) {
		if (!(ke.getKeyCode() == KeyEvent.VK_LEFT || ke.getKeyCode() == KeyEvent.VK_RIGHT || ke.getKeyCode() == KeyEvent.VK_UP || ke
				.getKeyCode() == KeyEvent.VK_DOWN)) {
			return;
		}
		
		try {
			this.serverOutput.writeObject(new Packet(this.player.id, GameClient.RELEASE, ke.getKeyCode()));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void keyReleased(KeyEvent ke) {
	}
	
	public void keyTyped(KeyEvent ke) {
	}
}