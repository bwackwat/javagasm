import java.awt.Point;
import java.awt.event.KeyEvent;
import java.io.Serializable;
import java.util.ArrayList;

public class StatePacket implements Serializable {
	private static final long	serialVersionUID	= 9033068625748312060L;
	
	public ArrayList<Point>		positions			= new ArrayList<Point>();
	
	public void updateState(Packet p) {
		if (p.action == GameClient.JOIN) {
			if (p.id >= this.positions.size()) {
				this.positions.add(new Point(500, 500));
			} else {
				this.positions.set(p.id, new Point(500, 500));
			}
		} else if (p.action == GameClient.LEAVE) {
			this.positions.set(p.id, null);
		} else if (p.action == GameClient.RELEASE) {
			if (p.key == KeyEvent.VK_LEFT) {
				this.positions.get(p.id).translate(-5, 0);
			} else if (p.key == KeyEvent.VK_RIGHT) {
				this.positions.get(p.id).translate(5, 0);
			} else if (p.key == KeyEvent.VK_UP) {
				this.positions.get(p.id).translate(0, -5);
			} else if (p.key == KeyEvent.VK_DOWN) {
				this.positions.get(p.id).translate(0, 5);
			}
		}
	}
}