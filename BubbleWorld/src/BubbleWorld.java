import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.util.ArrayList;

import javax.swing.JFrame;
import javax.swing.JPanel;


public class BubbleWorld extends JPanel implements KeyListener, MouseMotionListener, MouseListener{
	private static final long serialVersionUID = 1L;
	
	public static int BubbleDiameter = 20;
	public static int BubbleRadius = 10;
	
	private BubblePoint movingPoint;
	
	public ArrayList<BubbleScene> BubbleScenes = new ArrayList<BubbleScene>();
	public int curScene = 0;
	
	public static void main(String[] args){
		BubbleWorld main = new BubbleWorld();
		BubbleScene linetest = new BubbleScene();
		linetest.BubbleObjects.add(new BubbleLine(200, 200, 400, 400, 1));
		main.BubbleScenes.add(linetest);
	}
	
	public BubbleWorld(){
		JFrame frame = new JFrame("Welcome to Bubble World!");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setBounds(100, 100, 800, 600);
		
		frame.setContentPane(this);
		
		frame.setVisible(true);

		frame.addKeyListener(this);
		frame.addMouseListener(this);
		frame.addMouseMotionListener(this);
		
		new BubbleWorldRepainter(this).start();
	}
	
	public void paint(Graphics g){
		g.setColor(Color.BLACK);
		g.fillRect(0, 0, this.getWidth(), this.getHeight());

		if(BubbleScenes.size() > 0){
			g.setColor(Color.WHITE);
			g.setFont(new Font("Courier", Font.PLAIN, 14));
			g.drawString("Welcome to BubbleScene!", 100, 100);
			BubbleScenes.get(curScene).paint(g);
		}
	}

	@Override
	public void keyPressed(KeyEvent e) {
		System.out.println("Pressed: " + e.getKeyCode() + "(" + e.getKeyChar() + ")");
		
		if(e.getKeyCode() == 45){
			
		}else if(e.getKeyCode() == 61){
			
		}
	}

	@Override
	public void keyReleased(KeyEvent e) {
	}

	@Override
	public void keyTyped(KeyEvent e) {
	}

	@Override
	public void mouseDragged(MouseEvent e) {
		System.out.println("Mouse: (" + e.getX() + ", " + e.getY() + ")");
		if(movingPoint != null){
			movingPoint.X = e.getX();
			movingPoint.Y = e.getY();
		}
	}

	@Override
	public void mouseMoved(MouseEvent e) {
	}

	@Override
	public void mouseClicked(MouseEvent e) {
	}

	@Override
	public void mouseEntered(MouseEvent e) {
	}

	@Override
	public void mouseExited(MouseEvent e) {
	}

	@Override
	public void mousePressed(MouseEvent e) {
		if(BubbleScenes.size() > 0){
			BubblePoint check = BubbleScenes.get(curScene).getSelectPoint(e.getX(), e.getY());
			if(check != null){
				movingPoint = check;
			}
		}
	}

	@Override
	public void mouseReleased(MouseEvent e) {
		movingPoint = null;
	}
}
