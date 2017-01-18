import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import java.awt.*;
import java.io.*;

/*
 *This class is a plain JPanel that
 *adds itself to a JFrame. This
 *is meant to display all of a players'
 *statistics taken from his tank and
 *things from its Player.
 */
public class PlayerStatBox extends JPanel
{
	public Player myPlayer = new Player();
	public JFrame myFrame = new JFrame("");
	
	/*
     *Consrtuctor adds iself to a new JFrame.
     */
	public PlayerStatBox(int n)
	{
		myFrame.setTitle("Player " + n + " Stats");
    	myFrame.setResizable(false);
    	myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    	myFrame.setSize(250, 360);
    	myFrame.move((int)Toolkit.getDefaultToolkit().getScreenSize().getWidth() - (myFrame.getWidth() * n), 5);
    	myFrame.add(this);
    	myFrame.setVisible(true);
    }
	
	/*
     *This method called through repaint(),
     *is used to refresh persay the stats.
     */
	protected void paintComponent(Graphics g)
	{
		super.paintComponent(g);
		g.drawString(" ---==Player==---", 10, 10);
		g.drawString(" Kills: " + myPlayer.myKills, 10, 35);
		g.drawString(" Deaths: " + myPlayer.myDeaths, 10, 55);
		g.drawString(" Active Bullets: " + myPlayer.myBullets.size(), 10, 75);
		g.drawString(" ---==Tank==---", 10, 95);
		g.drawString(" State: " + myPlayer.myTank.myState, 10, 115);
		g.drawString(" Facing: " + myPlayer.myTank.myFacing, 10, 135);
		g.drawString(" Shots Fired: " + myPlayer.myTank.myShotsFired, 10, 155);
		g.drawString(" Health: " + (int)myPlayer.myTank.myHealth, 10, 175);
		g.drawString(" Ammo: " + myPlayer.myTank.myAmmo, 10, 195);
		g.drawString(" Current Ammo: " + myPlayer.myTank.myCurrentAmmo, 10, 215);
		g.drawString(" Reload Time: " + myPlayer.myTank.myReloadTime, 10, 235);
		g.drawString(" Shot Delay: " + myPlayer.myTank.myShotDelay, 10, 255);
		g.drawString(" Respawn Time: " + myPlayer.myTank.myRespawnTime, 10, 275);
		g.drawString(" Speed: " + (int)(myPlayer.myTank.myUpSpeed + myPlayer.myTank.myDownSpeed + myPlayer.myTank.myLeftSpeed + myPlayer.myTank.myRightSpeed), 10, 295);
		g.drawString(" Acceleration: " + myPlayer.myTank.myAcceleration, 10, 315);
		g.drawString(" Decceleration: " + myPlayer.myTank.myDecceleration, 10, 335);
		g.drawString(" ---====----", 10, 355);
	}
}