import java.awt.Dimension;
import java.awt.Toolkit;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.WindowConstants;

public class ProgressWindow extends JFrame {
	private static final long		serialVersionUID	= 1L;
	
	public static final Dimension	INITIAL_SCREEN_SIZE	= Toolkit.getDefaultToolkit().getScreenSize();
	
	private int						width				= 300;
	private int						height				= 100;
	
	private JLabel					message = new JLabel("Loading...");
	
	public ProgressWindow() {
		super("Please wait...");
		super.setDefaultCloseOperation(WindowConstants.DO_NOTHING_ON_CLOSE);
		super.setResizable(false);
		super.setLayout(null);
		super.setBounds(ProgressWindow.INITIAL_SCREEN_SIZE.width / 2 - this.width / 2, ProgressWindow.INITIAL_SCREEN_SIZE.height / 2 - this.height
				/ 2, this.width, this.height);
		super.setUndecorated(true);
		super.setAlwaysOnTop(true);
		this.message.setBounds(50, 25, 10000, 50);
		super.add(this.message);
	}
}