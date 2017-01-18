import java.awt.Color;
import java.awt.Graphics;

import javax.swing.JPanel;

public class GamePanel extends JPanel implements Runnable {
	private static final long	serialVersionUID	= 7090271883187839291L;
	
	private Thread				panelThread			= new Thread(this);
	
	private StatePacket			gameState			= new StatePacket();
	
	public GamePanel() {
		this.panelThread.start();
	}
	
	public void updateState(Packet p) {
		this.gameState.updateState(p);
	}
	
	public void setGameState(StatePacket gameState) {
		this.gameState = gameState;
	}
	
	public void paint(Graphics g) {
		g.setColor(Color.BLACK);
		g.fillRect(0, 0, 800, 600);
		g.setColor(Color.WHITE);
		for (int i = 0; i < gameState.positions.size(); i++) {
			if (gameState.positions.get(i) != null) {
				g.drawLine(gameState.positions.get(i).x - 10, gameState.positions.get(i).y, gameState.positions.get(i).x + 10,
						gameState.positions.get(i).y);
				g.drawLine(gameState.positions.get(i).x, gameState.positions.get(i).y - 10, gameState.positions.get(i).x,
						gameState.positions.get(i).y + 10);
			}
		}
	}
	
	public void run() {
		while (true) {
			try {
				Thread.sleep(50);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			this.repaint();
		}
	}
}
