import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;

public class ClientHandler extends Thread {
	private Socket				client;
	private ObjectInputStream	input;
	private ObjectOutputStream	output;
	
	private GameServer			server;
	private PlayerPacket		player;
	
	public ClientHandler(GameServer server, PlayerPacket player) {
		this.server = server;
		this.player = player;
	}
	
	public void send(Object o) {
		try {
			this.output.writeObject(o);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void connect(Socket s) throws IOException {
		this.client = s;
		this.input = new ObjectInputStream(this.client.getInputStream());
		this.output = new ObjectOutputStream(this.client.getOutputStream());
		
		this.send(this.player);
		this.send(this.server.getGameState());
		
		this.start();
	}
	
	public boolean isConnected() {
		return !(client == null);
	}
	
	public void disconnect() {
		try {
			this.client.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		this.client = null;
	}
	
	public void run() {
		Object o;
		
		while (this.isConnected()) {
			try {
				o = this.input.readObject();
			} catch (Exception e) {
				e.printStackTrace();
				this.disconnect();
				continue;
			}
			
			if (o instanceof PlayerPacket) {
				// ((PlayerPacket)o).id = this.player.id;
				System.out.println("Received player " + this.player.id + " name: " + ((PlayerPacket) o).name);
				this.player.name = ((PlayerPacket) o).name;
				// this.server.disperse(o);
				continue;
			}else if(o instanceof Packet){
				if (((Packet)o).action == GameClient.LEAVE) {
					this.disconnect();
				}
			}
			
			this.server.disperse(o);
		}
	}
}
