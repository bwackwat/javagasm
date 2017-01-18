import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import java.awt.*;
import java.io.*;

/*
 *This class is the actual panel that supports
 *the playing of the game, this class builds
 *itself on a JFrame and also implements
 *a KeyListener, used for keyboard strokes.
 */
public class GamePlayingPanel extends JPanel implements KeyListener
{
	public ArrayList<PlayerStatBox> myPlayerStatBoxes = new ArrayList<PlayerStatBox>();
	public Map myMap;
	public byte myKeys[] = new byte[255];
	public JFrame myFrame;
	public String myCurrentAction = "";
	
	public int myNumOfPlayers;
	
	public boolean needsAction = false;
	public boolean isPaused = false;
	
	public Configuration myConfiguration;
	
	public double myHealthIncrement;
	public int myAmmoIncrement;
	
	/*
	 *Constructor sets up the configuration with its
	 *variables and sets up the JFrame. It also does
	 *a quick configuration to start the game with
	 *players.
	 */
	public GamePlayingPanel(Map m, Configuration c)
	{
		myConfiguration = c;
		myHealthIncrement = myConfiguration.myHealthZoneHealthIncrement;
		myAmmoIncrement = myConfiguration.myReloadZoneAmmoIncrement;
		myNumOfPlayers = myConfiguration.myNumOfPlayers;
		
		myMap = m;
		
		needsAction = true;
		myFrame = new JFrame("Slider Tanks");
		myFrame.setResizable(false);
    	myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    	myFrame.setAlwaysOnTop(true);
    	
    	for(int i = 0; i < myNumOfPlayers; i++)
    		myPlayerStatBoxes.add(new PlayerStatBox(i + 1));
    	
    	myFrame.add(this);
    	myFrame.addKeyListener(this);
    	
    	resetMap();
    	
    	myFrame.setVisible(true);
	}
	
	/*
	 *Resets that map and uses the isOriented from
	 *the Map class to make sure it doesnt put the
	 *border at an incorrect offset.
	 */
	public void resetMap()
	{
		myFrame.setSize(myMap.myBorder.myWidth + 11, myMap.myBorder.myHeight + 31);
		myFrame.move(0, 0);
		myFrame.add(this);
		
		if(!myMap.isOriented)
		{
			for(int i = 0; i < myMap.myObstacles.size(); i++)
			{
				myMap.myObstacles.get(i).myX -= myMap.myBorder.myX;
				myMap.myObstacles.get(i).myY -= myMap.myBorder.myY;
			}
	    	for(int i = 0; i < myMap.myReloadZones.size(); i++)
			{
				myMap.myReloadZones.get(i).myX -= myMap.myBorder.myX;
				myMap.myReloadZones.get(i).myY -= myMap.myBorder.myY;
			}
	    	for(int i = 0; i < myMap.myHealthZones.size(); i++)
			{
				myMap.myHealthZones.get(i).myX -= myMap.myBorder.myX;
				myMap.myHealthZones.get(i).myY -= myMap.myBorder.myY;
			}
	    	for(int i = 0; i < myMap.mySpawnZones.size(); i++)
			{
				myMap.mySpawnZones.get(i).myX -= myMap.myBorder.myX;
				myMap.mySpawnZones.get(i).myY -= myMap.myBorder.myY;
			}
		}
		myMap.isOriented = true;
			
    	myMap.myBorder.myX = 2;
    	myMap.myBorder.myY = 2;
    	
    	for(int	i = 0; i < myPlayerStatBoxes.size(); i++)
    		respawnTank(i);
		
		myPlayerStatBoxes.get(1).myPlayer.myTank.myControls.setControls(87, 65, 68, 83, 70);
	}
	
	/*
	 *Respawns the tank of the given player. Picks
	 *a random spawn zone for the tank to start.
	 *this method does NOT apply respawn time from
	 *the tank, 
	 */
	public void respawnTank(int i)
	{
		if(myMap.mySpawnZones.size() == 0)
    	{
    		myPlayerStatBoxes.get(i).myPlayer.myTank = new Tank(50, 50, myConfiguration);
    	} else
    	{
	    	int spawnZNum = new Random().nextInt(myMap.mySpawnZones.size());
			myPlayerStatBoxes.get(i).myPlayer.myTank = new Tank(myMap.mySpawnZones.get(spawnZNum).myX, myMap.mySpawnZones.get(spawnZNum).myY, myConfiguration);
		}
		if(i == 1)
			myPlayerStatBoxes.get(1).myPlayer.myTank.myControls.setControls(87, 65, 68, 83, 70);
	}

	/*
	 *The repaint() method that shows everything,
	 *and handles everything that is currently
	 *happening on the playing field. Checks
	 *collision, keyPresses, and paints everything.
	 */
	protected void paintComponent(Graphics g)
	{
		super.paintComponent(g);
		paintBackground(g);
		paintObstacles(g);
		paintReloadZones(g);
		paintHealthZones(g);
		
		for(int	i =	0; i < myPlayerStatBoxes.size(); i++)
		{
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myRespawnTime <= 0)
			{
				respawnTank(i);
				myPlayerStatBoxes.get(i).myPlayer.myTank.myRespawnTime = myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxRespawnTime;
				myPlayerStatBoxes.get(i).myPlayer.myTank.myState = "Running";
			}
			
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myState == "Dead")
			{
				myPlayerStatBoxes.get(i).myPlayer.myTank.myRespawnTime--;
				myPlayerStatBoxes.get(i).myPlayer.myBullets = new ArrayList<Bullet>();
				continue;
			}
			
			myPlayerStatBoxes.get(i).myPlayer.myTank.myShotDelay--;
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myState.equals("Reloading"))
				myPlayerStatBoxes.get(i).myPlayer.myTank.myReloadTime--;
				
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myReloadTime <= 0)
			{
				myPlayerStatBoxes.get(i).myPlayer.myTank.myReloadTime = myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxReloadTime;
				if(myPlayerStatBoxes.get(i).myPlayer.myTank.myAmmo > 0)
					myPlayerStatBoxes.get(i).myPlayer.myTank.myCurrentAmmo = myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxCurrentAmmo;
				myPlayerStatBoxes.get(i).myPlayer.myTank.myState = "Running";
			}
			
			if(myPlayerStatBoxes.get(i).myPlayer.myTank != null)
				checkKeyPresses(i);
			g.setColor(Color.BLACK);
			paintBullets(g, i);
			if(myPlayerStatBoxes.get(i).myPlayer.myTank != null)
				moveTank(i);
			moveBullets(i);
			checkReloadZones(i);
			checkHealthZones(i);
			checkCollision(i);
			if(myPlayerStatBoxes.get(i).myPlayer.myTank != null)
				paintTanks(g, i);
			
			myPlayerStatBoxes.get(i).repaint();
		}
		
		for(int	i =	0; i < myPlayerStatBoxes.size(); i++)
			paintExplosions(g, i);
	}
	
	public void	checkKeyPresses(int i)
	{
		if(myKeys[myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myLeftKey] == 1)
		{
			myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing = "Left";
			myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myLeftPress = true;
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed < myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed)
				myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed += myPlayerStatBoxes.get(i).myPlayer.myTank.myAcceleration;
		} else
		{
			myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myLeftPress = false;
		}
		if(myKeys[myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myRightKey] == 1)
		{
			myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing = "Right";
		  	myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myRightPress = true;
		  	if(myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed < myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed)
				myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed += myPlayerStatBoxes.get(i).myPlayer.myTank.myAcceleration;
	    } else
	    {
	    	myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myRightPress = false;
	    }
		if(myKeys[myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myUpKey] == 1)
		{
		  	myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing = "Up";
		  	myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myUpPress = true;
		  	if(myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed < myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed)
				myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed += myPlayerStatBoxes.get(i).myPlayer.myTank.myAcceleration;
	    } else
	    {
	    	myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myUpPress = false;
	    }
		if(myKeys[myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myDownKey]	== 1)
		{
		  	myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing = "Down";
		  	myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myDownPress = true;
		  	if(myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed < myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed)
				myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed += myPlayerStatBoxes.get(i).myPlayer.myTank.myAcceleration;
		} else
	    {
	    	myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myDownPress = false;
	    }
	    
		if(myKeys[myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myShootKey] == 1)
		{
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myCurrentAmmo <= 0)
				myPlayerStatBoxes.get(i).myPlayer.myTank.myState = "Reloading";
			
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myShotDelay <= 0 && myPlayerStatBoxes.get(i).myPlayer.myTank.myCurrentAmmo > 0 && myPlayerStatBoxes.get(i).myPlayer.myTank.myAmmo > 0)
			{
				if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Up"))
		        	myPlayerStatBoxes.get(i).myPlayer.myBullets.add(new Bullet(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 5, myPlayerStatBoxes.get(i).myPlayer.myTank.myY - 8, "Up", myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletDamage, myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletSpeed));
		        if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Down"))
		        	myPlayerStatBoxes.get(i).myPlayer.myBullets.add(new Bullet(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 5, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 16, "Down", myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletDamage, myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletSpeed));
		        if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Left"))
		        	myPlayerStatBoxes.get(i).myPlayer.myBullets.add(new Bullet(myPlayerStatBoxes.get(i).myPlayer.myTank.myX - 8, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 6, "Left", myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletDamage, myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletSpeed));
		        if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Right"))
		        	myPlayerStatBoxes.get(i).myPlayer.myBullets.add(new Bullet(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 16, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 6, "Right", myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletDamage, myPlayerStatBoxes.get(i).myPlayer.myTank.myBulletSpeed));
		        	
		        myPlayerStatBoxes.get(i).myPlayer.myTank.myShotsFired++;
		        myPlayerStatBoxes.get(i).myPlayer.myTank.myShotDelay = myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxShotDelay;
		        myPlayerStatBoxes.get(i).myPlayer.myTank.myCurrentAmmo--;
		        myPlayerStatBoxes.get(i).myPlayer.myTank.myAmmo--;
			}
		}
	}
	
	/*
	 *In this class, as of many I am using for
	 *and if statement to check collision of
	 *tanks to obstacles and tanks to bullets.
	 *this also deals with tanks dieing.
	 */
	public void	checkCollision(int i)
	{
		if(myPlayerStatBoxes.get(i).myPlayer.myTank != null)
			for(int o = 0; o < myPlayerStatBoxes.get(i).myPlayer.myBullets.size(); o++)
				for(int p = 0; p < myPlayerStatBoxes.size(); p++)
				{
					if(myPlayerStatBoxes.get(i).myPlayer.myTank.myState == "Dead")
			 			continue;
			 		if(myPlayerStatBoxes.get(p).myPlayer.myTank.myState == "Dead")
			 			continue;
			 			
					if(myPlayerStatBoxes.get(i).myPlayer == myPlayerStatBoxes.get(p).myPlayer)
						continue;
					
					if(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).toRect().intersects(myPlayerStatBoxes.get(p).myPlayer.myTank.toRect()))
					{
						myPlayerStatBoxes.get(p).myPlayer.myTank.myHealth -= myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myDamage;
						myPlayerStatBoxes.get(i).myPlayer.myExplosions.add(new Explosion(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myX, myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myY, 9, myConfiguration.myExplosionLifetime));
						if(myPlayerStatBoxes.get(p).myPlayer.myTank.myHealth <= 0)
						{
							myPlayerStatBoxes.get(p).myPlayer.myTank.myState = "Dead";
							myPlayerStatBoxes.get(i).myPlayer.myKills++;
							myPlayerStatBoxes.get(p).myPlayer.myDeaths++;
							myPlayerStatBoxes.get(i).myPlayer.myExplosions.add(new Explosion(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myX , myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myY, 18, myConfiguration.myExplosionLifetime));
							break;
						}
						myPlayerStatBoxes.get(i).myPlayer.myBullets.remove(o);
					}
				}
		
		for(int o = 0; o < myPlayerStatBoxes.get(i).myPlayer.myBullets.size(); o++)
			for(int f = 0; f < myMap.myObstacles.size(); f++)
				if(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).toRect().intersects(myMap.myObstacles.get(f).toRect()))
				{
					myPlayerStatBoxes.get(i).myPlayer.myExplosions.add(new Explosion(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myX, myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myY, 7, myConfiguration.myExplosionLifetime));
					myPlayerStatBoxes.get(i).myPlayer.myBullets.remove(o);
					break;
				}
		
		for(int o = 0; o < myPlayerStatBoxes.get(i).myPlayer.myBullets.size(); o++)
			if(!myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).toRect().intersects(myMap.myBorder.toRect()))
			{
				myPlayerStatBoxes.get(i).myPlayer.myExplosions.add(new Explosion(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myX, myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myY, 7, myConfiguration.myExplosionLifetime));
				myPlayerStatBoxes.get(i).myPlayer.myBullets.remove(o);
			}
		
		if(myPlayerStatBoxes.get(i).myPlayer.myTank != null)
			for(int o = 0; o < myMap.myObstacles.size(); o++)
			{
				if(myPlayerStatBoxes.get(i).myPlayer.myTank.toRect().intersects(new Rectangle(myMap.myObstacles.get(o).myX, myMap.myObstacles.get(o).myY, myMap.myObstacles.get(o).myWidth, 2)))
				{
					myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed = 0;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myY -= (int)myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
				}
				if(myPlayerStatBoxes.get(i).myPlayer.myTank.toRect().intersects(new Rectangle(myMap.myObstacles.get(o).myX, myMap.myObstacles.get(o).myY, 2, myMap.myObstacles.get(o).myHeight)))
				{
					myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed = 0;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myX -= (int)myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
				}
				if(myPlayerStatBoxes.get(i).myPlayer.myTank.toRect().intersects(new Rectangle(myMap.myObstacles.get(o).myX + myMap.myObstacles.get(o).myWidth, myMap.myObstacles.get(o).myY, 2, myMap.myObstacles.get(o).myHeight)))
				{
					myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed = 0;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myX += (int)myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
				}
				if(myPlayerStatBoxes.get(i).myPlayer.myTank.toRect().intersects(new Rectangle(myMap.myObstacles.get(o).myX, myMap.myObstacles.get(o).myY + myMap.myObstacles.get(o).myHeight, myMap.myObstacles.get(o).myWidth, 2)))
				{
					myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed = 0;
					myPlayerStatBoxes.get(i).myPlayer.myTank.myY += myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
				}
			}
	}
	
	public void paintObstacles(Graphics g)
	{
		for(int o = 0; o < myMap.myObstacles.size(); o++)
		{
			g.setColor(Color.GRAY);
			g.fillRect(myMap.myObstacles.get(o).myX, myMap.myObstacles.get(o).myY, myMap.myObstacles.get(o).myWidth, myMap.myObstacles.get(o).myHeight);
			g.setColor(Color.BLACK);
			g.drawRect(myMap.myObstacles.get(o).myX, myMap.myObstacles.get(o).myY, myMap.myObstacles.get(o).myWidth, myMap.myObstacles.get(o).myHeight);
			g.drawRect(myMap.myObstacles.get(o).myX - 1, myMap.myObstacles.get(o).myY - 1, myMap.myObstacles.get(o).myWidth + 2, myMap.myObstacles.get(o).myHeight + 2);
			g.drawRect(myMap.myObstacles.get(o).myX - 2, myMap.myObstacles.get(o).myY - 2, myMap.myObstacles.get(o).myWidth + 4, myMap.myObstacles.get(o).myHeight + 4);
		}
	}
	
	public void paintReloadZones(Graphics g)
	{
		for(int o = 0; o < myMap.myReloadZones.size(); o++)
		{
			g.setColor(Color.BLUE);
			g.fillRect(myMap.myReloadZones.get(o).myX, myMap.myReloadZones.get(o).myY, myMap.myReloadZones.get(o).myWidth, myMap.myReloadZones.get(o).myHeight);
			g.setColor(Color.BLACK);
			g.drawRect(myMap.myReloadZones.get(o).myX, myMap.myReloadZones.get(o).myY, myMap.myReloadZones.get(o).myWidth, myMap.myReloadZones.get(o).myHeight);
			g.drawRect(myMap.myReloadZones.get(o).myX + 1, myMap.myReloadZones.get(o).myY + 1, myMap.myReloadZones.get(o).myWidth - 2, myMap.myReloadZones.get(o).myHeight - 2);
			g.drawString("R", myMap.myReloadZones.get(o).myX + 5, myMap.myReloadZones.get(o).myY + 15);
			g.drawString("R", myMap.myReloadZones.get(o).myX + 6, myMap.myReloadZones.get(o).myY + 16);
		}
	}
	
	public void paintHealthZones(Graphics g)
	{
		for(int o = 0; o < myMap.myHealthZones.size(); o++)
		{
			g.setColor(Color.RED);
			g.fillRect(myMap.myHealthZones.get(o).myX, myMap.myHealthZones.get(o).myY, myMap.myHealthZones.get(o).myWidth, myMap.myHealthZones.get(o).myHeight);
			g.setColor(Color.BLACK);
			g.drawRect(myMap.myHealthZones.get(o).myX, myMap.myHealthZones.get(o).myY, myMap.myHealthZones.get(o).myWidth, myMap.myHealthZones.get(o).myHeight);
			g.drawRect(myMap.myHealthZones.get(o).myX + 1, myMap.myHealthZones.get(o).myY + 1, myMap.myHealthZones.get(o).myWidth - 2, myMap.myHealthZones.get(o).myHeight - 2);
			g.drawString("H", myMap.myHealthZones.get(o).myX + 5, myMap.myHealthZones.get(o).myY + 15);
			g.drawString("H", myMap.myHealthZones.get(o).myX + 6, myMap.myHealthZones.get(o).myY + 16);
		}
	}
	
	public void	paintBackground(Graphics g)
	{
		if(myMap.myBorder == null)
			return;
			
		g.setColor(new Color(69, 150, 38));
		g.fillRect(myMap.myBorder.myX +	1, myMap.myBorder.myY +	1, myMap.myBorder.myWidth -	1, myMap.myBorder.myHeight - 1);
		g.setColor(Color.BLACK);
		g.drawRect(myMap.myBorder.myX, myMap.myBorder.myY, myMap.myBorder.myWidth, myMap.myBorder.myHeight);
		g.drawRect(myMap.myBorder.myX -	1, myMap.myBorder.myY -	1, myMap.myBorder.myWidth +	2, myMap.myBorder.myHeight + 2);
		g.drawRect(myMap.myBorder.myX -	2, myMap.myBorder.myY -	2, myMap.myBorder.myWidth +	4, myMap.myBorder.myHeight + 4);
	}
	
	public void	paintTanks(Graphics	g, int i)
	{
		g.setColor(Color.GRAY);
		g.fillRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX,	myPlayerStatBoxes.get(i).myPlayer.myTank.myY, myPlayerStatBoxes.get(i).myPlayer.myTank.myWidth, myPlayerStatBoxes.get(i).myPlayer.myTank.myHeight);
		g.setColor(Color.BLACK);
		g.drawRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX,	myPlayerStatBoxes.get(i).myPlayer.myTank.myY, myPlayerStatBoxes.get(i).myPlayer.myTank.myWidth, myPlayerStatBoxes.get(i).myPlayer.myTank.myHeight);
		
		g.setColor(Color.GRAY);

		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Up"))
			g.fillRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 5, myPlayerStatBoxes.get(i).myPlayer.myTank.myY - 3, 1, 9);
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Down"))
			g.fillRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 5, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 5, 1, 9);
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Left"))
			g.fillRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX - 3, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 5, 9, 1);
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Right"))
			g.fillRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 5, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 5, 9, 1);

		g.setColor(Color.BLACK);
		
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Up"))
			g.drawRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 4, myPlayerStatBoxes.get(i).myPlayer.myTank.myY - 4, 2, 10);
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Down"))
			g.drawRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 4, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 4, 2, 10);
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Left"))
			g.drawRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX - 4, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 4, 10, 2);
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myFacing.equals("Right"))
			g.drawRect(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 4, myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 4, 10, 2);
	}
	
	public void	paintBullets(Graphics g, int i)
	{
		for(int o = 0; o < myPlayerStatBoxes.get(i).myPlayer.myBullets.size(); o++)
			g.fillRect(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myX, myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myY, myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myWidth, myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myHeight);
	}
	
	public void	paintExplosions(Graphics g,	int i)
	{
		for(int o = 0; o < myPlayerStatBoxes.get(i).myPlayer.myExplosions.size(); o++)
	    {
			g.setColor(Color.YELLOW);
			g.fillOval(myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myX - 1, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myY - 1, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize);
			g.setColor(new Color(255, 100, 0));
			g.fillOval(myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myX + myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize / 8, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myY + myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize / 8, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize * 3 / 4, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize * 3 / 4);
			g.setColor(Color.RED);
			g.fillOval(myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myX + myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize / 4, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myY + myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize / 4, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize / 2, myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).mySize / 2);		
			
			myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myTime--;
			
			if(myPlayerStatBoxes.get(i).myPlayer.myExplosions.get(o).myTime <= 0)
				myPlayerStatBoxes.get(i).myPlayer.myExplosions.remove(o);
	    }
	}
	
	/*
	 *This is one of the MANY examples of how this
	 *class uses operators. Here, a tank is being
	 *compared to the borders width and height to
	 *emulate a borders collision.
	 */
	public void	moveTank(int i)
	{
		if(myMap.myBorder != null)
	    {
	    	if(myPlayerStatBoxes.get(i).myPlayer.myTank.myX <= myMap.myBorder.myX)
	    	{
	    		myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed = 0;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myX += (int)myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
			}
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myX + 10 >= myMap.myBorder.myWidth)
			{
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed = 0;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myX -= (int)myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
			}
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myY <= myMap.myBorder.myY)
			{
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed = 0;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myY += (int)myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
			}
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myY + 10 >= myMap.myBorder.myHeight)
			{
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed = myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed = 0;
			 	myPlayerStatBoxes.get(i).myPlayer.myTank.myY -= (int)myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxSpeed;
			}
	   	}
	   	
	   	if(!myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myLeftPress && myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed > 0)
	   	 	myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed -= myPlayerStatBoxes.get(i).myPlayer.myTank.myDecceleration;
	   	if(!myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myRightPress	&& myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed	> 0)
	   	 	myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed -= myPlayerStatBoxes.get(i).myPlayer.myTank.myDecceleration;
	   	if(!myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myUpPress &&	myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed > 0)
	   	 	myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed -= myPlayerStatBoxes.get(i).myPlayer.myTank.myDecceleration;
	   	if(!myPlayerStatBoxes.get(i).myPlayer.myTank.myControls.myDownPress && myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed > 0)
	   	 	myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed -= myPlayerStatBoxes.get(i).myPlayer.myTank.myDecceleration;
	   	 	
	   	if(myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed < 0)
	   		myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed = 0;
		if(myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed < 0)
	   		myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed = 0;
	   	if(myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed	< 0)
	   		myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed = 0;
	   	if(myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed < 0)
	   		myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed = 0;
	   		
		myPlayerStatBoxes.get(i).myPlayer.myTank.myX += myPlayerStatBoxes.get(i).myPlayer.myTank.myRightSpeed;
		myPlayerStatBoxes.get(i).myPlayer.myTank.myY += myPlayerStatBoxes.get(i).myPlayer.myTank.myDownSpeed;
		myPlayerStatBoxes.get(i).myPlayer.myTank.myX -= myPlayerStatBoxes.get(i).myPlayer.myTank.myLeftSpeed;
		myPlayerStatBoxes.get(i).myPlayer.myTank.myY -= myPlayerStatBoxes.get(i).myPlayer.myTank.myUpSpeed;
	}
	
	public void	moveBullets(int i)
	{
		for(int o = 0; o < myPlayerStatBoxes.get(i).myPlayer.myBullets.size(); o++)
		{
			if(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myFacing.equals("Up"))
			 	myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myY -= myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).mySpeed;
			if(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myFacing.equals("Down"))
				myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myY += myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).mySpeed;
			if(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myFacing.equals("Left"))
				myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myX -= myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).mySpeed;
			if(myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myFacing.equals("Right"))
				myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).myX += myPlayerStatBoxes.get(i).myPlayer.myBullets.get(o).mySpeed;
		}
	}
	
	public void	checkReloadZones(int i)
	{
		for(int o = 0; o < myMap.myReloadZones.size(); o++)
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myX >= myMap.myReloadZones.get(o).myX && myPlayerStatBoxes.get(i).myPlayer.myTank.myX + myPlayerStatBoxes.get(i).myPlayer.myTank.myWidth <= myMap.myReloadZones.get(o).myX + myMap.myReloadZones.get(o).myWidth && myPlayerStatBoxes.get(i).myPlayer.myTank.myY >= myMap.myReloadZones.get(o).myY && myPlayerStatBoxes.get(i).myPlayer.myTank.myY + myPlayerStatBoxes.get(i).myPlayer.myTank.myHeight <= myMap.myReloadZones.get(o).myY + myMap.myReloadZones.get(o).myHeight && myPlayerStatBoxes.get(i).myPlayer.myTank.myAmmo < myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxAmmo)
				myPlayerStatBoxes.get(i).myPlayer.myTank.myAmmo += myAmmoIncrement;
	}
	
	public void	checkHealthZones(int i)
	{
		for(int o = 0; o < myMap.myHealthZones.size(); o++)
			if(myPlayerStatBoxes.get(i).myPlayer.myTank.myX >= myMap.myHealthZones.get(o).myX && myPlayerStatBoxes.get(i).myPlayer.myTank.myX + myPlayerStatBoxes.get(i).myPlayer.myTank.myWidth <= myMap.myHealthZones.get(o).myX + myMap.myHealthZones.get(o).myWidth && myPlayerStatBoxes.get(i).myPlayer.myTank.myY >= myMap.myHealthZones.get(o).myY && myPlayerStatBoxes.get(i).myPlayer.myTank.myY + myPlayerStatBoxes.get(i).myPlayer.myTank.myHeight <= myMap.myHealthZones.get(o).myY + myMap.myHealthZones.get(o).myHeight && myPlayerStatBoxes.get(i).myPlayer.myTank.myHealth < myPlayerStatBoxes.get(i).myPlayer.myTank.myMaxHealth)
				myPlayerStatBoxes.get(i).myPlayer.myTank.myHealth += myHealthIncrement;
	}
	
	public void	keyPressed(KeyEvent e)
	{
		myKeys[e.getKeyCode()] = 1;
	}
	
	public void keyReleased(KeyEvent e)
	{
		myKeys[e.getKeyCode()] = 0;
	}
	
	public void keyTyped(KeyEvent e){}
}