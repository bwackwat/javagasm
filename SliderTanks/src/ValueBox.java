import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import java.awt.*;

public class ValueBox implements ActionListener
{
	public JFrame myFrame;
	public JButton myButton;
	public JTextField myText;
	
	public boolean done = false;
	
	public ValueBox(String t, String l, String b)
	{
		myFrame = new JFrame(t);
		myButton = new JButton(b);
		myText = new JTextField();
		
    	myFrame.setSize(250, 100);
    	myFrame.setLocation(new Point((int)Toolkit.getDefaultToolkit().getScreenSize().getWidth() / 2 - myFrame.getWidth() / 2, (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight() / 2 - myFrame.getHeight() / 2));
    	myFrame.setResizable(false);
    	myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    	myFrame.setLayout(new GridLayout(3, 1));
    	myFrame.setAlwaysOnTop(true);
    	
		myFrame.add(new JLabel(" " + l));
		myFrame.add(myText);
		myFrame.add(myButton);
		
		myButton.addActionListener(this);
		
    	myFrame.setVisible(true);
	}
	
	public void actionPerformed(ActionEvent e)
	{
		myFrame.setVisible(false);
		done = true;
	}
}