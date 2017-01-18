import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import java.awt.*;

/*
 *This class is the template for ALL menus.
 *Very efficient and easy to implement.
 *
 *Uses the interface ActionListener to check
 *whe buttons have been pressed.
 */
public class OptionChooser implements ActionListener
{
	public JFrame myFrame;
	public JButton myButtons[];
	public int myChoose;
	
	public boolean done = false;;
	
	public OptionChooser(String t, String[] o)
	{
		done = false;
		
		myButtons = new JButton[o.length];
		myFrame = new JFrame(t);
		
    	myFrame.setSize(250, o.length * 40);
    	myFrame.setLocation(new Point((int)Toolkit.getDefaultToolkit().getScreenSize().getWidth() / 2 - myFrame.getWidth() / 2, (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight() / 2 - myFrame.getHeight() / 2));
    	myFrame.setResizable(false);
    	myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    	myFrame.setLayout(new GridLayout(o.length, 1));
    	myFrame.setAlwaysOnTop(true);
    	
		for(int i = 0; i < o.length; i++)
		{
			myButtons[i] = new JButton(o[i]);
			myButtons[i].addActionListener(this);
			myFrame.add(myButtons[i]);
		}
		
    	myFrame.setVisible(true);
	}
	
	public void actionPerformed(ActionEvent e)
	{
		for(int i = 0; i < myButtons.length; i++)
			if(e.getActionCommand().equals(myButtons[i].getText()))
			{
				myChoose = i;
				myFrame.setVisible(false);
				done = true;
				return;
			}
	}
}