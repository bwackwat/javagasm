import java.io.IOException;
import java.net.ServerSocket;
import java.util.ArrayList;

import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

public class GameServer {
	public static int					PORT		= 2048;
	
	private ServerSocket				serverSocket;
	private ArrayList<ClientHandler>	clients		= new ArrayList<ClientHandler>();
	private int							nextClientIndex;
	
	private StatePacket					gameState	= new StatePacket();
	
	public static void main(String[] args) {
		try {
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
		} catch (Exception e) {
			e.printStackTrace();
		}
		new GameServer();
	}
	
	public void disperse(Object o) {
		for (int i = 0; i < this.clients.size(); i++) {
			if (this.clients.get(i).isConnected()) {
				this.clients.get(i).send(o);
			}
		}
		
		if (o instanceof Packet) {
			this.gameState.updateState((Packet) o);
		}
	}
	
	public StatePacket getGameState() {
		return this.gameState;
	}
	
	public GameServer() {
		try {
			System.out.print("Opening server socket on port " + GameServer.PORT + ": ");
			this.serverSocket = new ServerSocket(GameServer.PORT);
			System.out.println("SUCCESS");
		} catch (IOException e) {
			System.out.println("FAILURE");
			e.printStackTrace();
			System.exit(1);
		}
		
		while (true) {
			this.nextClientIndex = -1;
			
			for (int i = 0; i < clients.size(); i++) {
				if (!this.clients.get(i).isConnected()) {
					this.nextClientIndex = i;
					break;
				}
			}
			
			if (this.nextClientIndex == -1) {
				this.nextClientIndex = this.clients.size();
				this.clients.add(new ClientHandler(this, new PlayerPacket(this.nextClientIndex, null)));
			} else {
				this.clients.set(this.nextClientIndex, new ClientHandler(this, new PlayerPacket(this.nextClientIndex, null)));
			}
			
			try {
				System.out.print("Accepting a client on port " + GameServer.PORT + " as player number "
						+ (this.nextClientIndex == -1 ? this.clients.size() : this.nextClientIndex) + ": ");
				this.clients.get(this.nextClientIndex).connect(this.serverSocket.accept());
				System.out.println("SUCCESS");
			} catch (IOException e) {
				System.out.println("FAILURE");
				if (this.clients.get(this.nextClientIndex).isConnected()) {
					this.clients.get(this.nextClientIndex).disconnect();
				}
				e.printStackTrace();
				continue;
			}
		}
	}
}