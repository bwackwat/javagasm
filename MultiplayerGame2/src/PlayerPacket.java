import java.io.Serializable;

public class PlayerPacket implements Serializable {
	private static final long	serialVersionUID	= 3402953913190433745L;
	
	public int					id;
	public String				name;
	
	public PlayerPacket(int id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public boolean isComplete() {
		return id != -1 && name != null;
	}
}