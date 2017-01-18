import java.awt.Dimension;
import java.awt.Toolkit;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.JFrame;
import javax.swing.UIManager;
import javax.swing.WindowConstants;

public class Main extends JFrame implements KeyListener{
	private static final long		serialVersionUID	= 1L;
	
	public static final Dimension	INITIAL_SCREEN_SIZE	= Toolkit.getDefaultToolkit().getScreenSize();
	
	private final PatternPanel		panel				= new PatternPanel();
	
	public static void main(String[] args) {
		try {
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		new Main();
	}
	
	public Main() {
		super("Flower Of Life - Use up and down to zoom.");
		super.setResizable(false);
		super.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
		super.setBounds(0, 0, Main.INITIAL_SCREEN_SIZE.width, Main.INITIAL_SCREEN_SIZE.height);
		super.add(this.panel);
		super.addKeyListener(this);
		super.setVisible(true);
		while (true) {
			try {
				Thread.sleep(50);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			this.panel.repaint();
		}
	}

	public void keyTyped(KeyEvent e) {
	}

	public void keyPressed(KeyEvent e) {
	}

	public void keyReleased(KeyEvent e) {
		if(e.getKeyCode() == KeyEvent.VK_UP){
			this.panel.in();
		}else if(e.getKeyCode() == KeyEvent.VK_DOWN){
			this.panel.out();
		}
	}
}
