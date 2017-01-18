import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Color;

public class Main extends Thread{
	public JFrame frame = new JFrame("Test Application");
	public JPanel panel = new JPanel(){
                @Override
		public void paint(Graphics g){
			clearPaint(g);
			paintCharacter(g);
		}
		public void clearPaint(Graphics g){
			g.setColor(Color.WHITE);
			g.fillRect(0, 0, frame.getWidth(), frame.getHeight());
		}
		public void paintCharacter(Graphics g){
			g.setColor(c.color);
                        g.fillOval((int)c.x, (int)c.y, (int)c.size, (int)c.size);
		}
	};
	public Input input = new Input();
	public Character c = new Character();

	public static void main(String[] a){
		new Main();
	}
	public Main(){
		frame.setBounds(100, 100, 800, 600);
		frame.setResizable(false);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.add(panel);
                frame.addKeyListener(input);

		start();

		frame.setVisible(true);
	}
        @Override
	public void run(){
		while(true){
			panel.repaint();
			c.move(input);
                        c.collide(frame);
			try{
				sleep(3);
                        }
			catch(Exception e){
				System.out.println(e);
			}
		}
	}
}