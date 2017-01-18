import java.awt.Color;
import java.awt.Graphics;
import java.awt.Point;
import java.util.ArrayList;

import javax.swing.JPanel;

public class PatternPanel extends JPanel {
	private static final long	serialVersionUID	= 1L;
	
	private int					size				= 40;
	private int					var;
	
	private ArrayList<Point>	circles				= new ArrayList<Point>();
	
	private void getCircles() {
		var = (size - (int) (Math.sqrt(3) * size / 2)) / 2;
		circles.clear();
		int x = -size;
		int y = -size;
		boolean a = true;
		while (true) {
			circles.add(new Point(x, y));
			x += size - var * 2;
			if (x > Main.INITIAL_SCREEN_SIZE.width) {
				if (a) {
					x = size / 2 - var;
					a = !a;
				} else {
					x = 0;
					a = !a;
				}
				y += size / 4;
			}
			if (y > Main.INITIAL_SCREEN_SIZE.height) {
				break;
			}
		}
	}
	
	public PatternPanel() {
		super();
		
		this.getCircles();
	}
	
	public void in() {
		if (size > 20) {
			size -= 4;
		}

		this.getCircles();
	}
	
	public void out() {
		size += 4;

		this.getCircles();
	}
	
	public void paint(Graphics g) {
		g.setColor(Color.WHITE);
		g.fillRect(0, 0, Main.INITIAL_SCREEN_SIZE.width, Main.INITIAL_SCREEN_SIZE.height);
		
		g.setColor(Color.BLACK);
		for (int i = 0; i < this.circles.size(); i++) {
			g.drawOval((int) this.circles.get(i).getX() - this.size / 2, (int) this.circles.get(i).getY() - this.size / 2, this.size, this.size);
		}
	}
}
