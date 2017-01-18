import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import java.awt.*;

/*
 *This method is a simple pop-up box that
 *is used mainly when loading maps.
 *
 *Used the ActionListener only for the
 *completion button ("Done").
 */
public class ComboBoxFrame implements ActionListener
{
	public JFrame myFrame;
	public JButton myButton;
	public JComboBox myCombo;
	
	public boolean done = false;
	
	/*
     *The constructor takes 4 String used for
     *the title text, the label text, and the 
     *button text. The fourth String is used
     *for all of the items in the JComboBox.
     */
	public ComboBoxFrame(String t, String l, String b, String[] p)
	{
		myFrame = new JFrame(t);
		myButton = new JButton(b);
		myCombo = new JComboBox(p);
		
    	myFrame.setSize(250, 100);
    	myFrame.setLocation(new Point((int)Toolkit.getDefaultToolkit().getScreenSize().getWidth() / 2 - myFrame.getWidth() / 2, (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight() / 2 - myFrame.getHeight() / 2));
    	myFrame.setResizable(false);
    	myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    	myFrame.setLayout(new GridLayout(3, 1));
    	myFrame.setAlwaysOnTop(true);
    	
		myFrame.add(new JLabel(" " + l));
		myFrame.add(myCombo);
		myFrame.add(myButton);
		
		myCombo.setEditable(false);
		myButton.addActionListener(this);
		
    	myFrame.setVisible(true);
	}
	
	/*
     *Simply enough, this simply hides the class,
     *and the boolean done is used to let the
     *GameDealerThread check and continue once
     *decided.
     */
	public void actionPerformed(ActionEvent e)
	{
		myFrame.setVisible(false);
		done = true;
	}
}