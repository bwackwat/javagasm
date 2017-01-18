import java.io.Serializable;

public class Packet implements Serializable {
	private static final long	serialVersionUID	= 1357677185551433053L;
	
	public int					id;
	public int					action;
	public int					key;
	
	public Packet(int player, int action, int key) {
		this.id = player;
		this.action = action;
		this.key = key;
	}
}
