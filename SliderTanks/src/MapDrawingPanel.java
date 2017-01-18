import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import java.awt.*;
import java.io.*;

/*
 *This class handles the majority of what
 *happend within the map editor. Alongside
 *the help of the GameDealerThread, this
 *class uses MouseListeners to enable the
 *dragging of an object within the current
 *map being edited.
 *
 *Also being a JPanel it can be
 *repainted directly, it builds
 *its JFrame within its constructor.
 */
public class MapDrawingPanel extends JPanel implements MouseListener, MouseMotionListener
{
	public Map myMap = new Map();
	public JFrame myFrame;
	
	public String myCurrentAction = "";
	public int step;
	public boolean needsAction = true;
	public Thing objectBeingDragged;
	
	public int mouseX;
	public int mouseY;
	
	/*
	 *This constructor doesn't alter or do much
	 *of anything, but creates a JFrame in which
	 *the class's Listeners are added.
	 */
	public MapDrawingPanel()
	{
		myFrame = new JFrame("Slider Tanks Map Editor");
		
		myFrame.setSize((int)Toolkit.getDefaultToolkit().getScreenSize().getWidth(), (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight());
    	myFrame.setLocation(new Point(0, 0));
    	myFrame.setResizable(false);
    	myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		myFrame.add(this);
		
		myFrame.addMouseListener(this);
		myFrame.addMouseMotionListener(this);
		
		myFrame.setVisible(true);
	}
	
	/*
	 *Overriding the JPanel's paintComponent method,
	 *and similar to the GamePlayingPanels'
	 *paintComponent(), this sorts through all of
	 *the current map's objects and paints them with
	 *their default attribute.
	 */
	protected void paintComponent(Graphics g)
    {
        super.paintComponent(g);
        g.setColor(Color.BLACK);
        paintBackground(g);
        paintObstacles(g);
        paintSpawnZones(g);
        paintReloadZones(g);
        paintHealthZones(g);
        
        if(myCurrentAction.equals("Clear Map"))
        {
        	myMap = new Map();
        	myCurrentAction = "";
        	needsAction = true;
        }
    }
    
    /*
     *Not used outside paintComponent, and is
     *only made into a method for readability.
     */
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
	
    /*
     *Not used outside paintComponent, and is
     *only made into a method for readability.
     */
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
	
    /*
     *Not used outside paintComponent, and is
     *only made into a method for readability.
     */
	public void paintSpawnZones(Graphics g)
	{
		for(int o = 0; o < myMap.mySpawnZones.size(); o++)
		{
			g.setColor(Color.WHITE);
			g.fillRect(myMap.mySpawnZones.get(o).myX, myMap.mySpawnZones.get(o).myY, myMap.mySpawnZones.get(o).myWidth, myMap.mySpawnZones.get(o).myHeight);
			g.setColor(Color.BLACK);
			g.drawRect(myMap.mySpawnZones.get(o).myX, myMap.mySpawnZones.get(o).myY, myMap.mySpawnZones.get(o).myWidth, myMap.mySpawnZones.get(o).myHeight);
			g.drawRect(myMap.mySpawnZones.get(o).myX + 1, myMap.mySpawnZones.get(o).myY + 1, myMap.mySpawnZones.get(o).myWidth - 2, myMap.mySpawnZones.get(o).myHeight - 2);
			g.drawString("S", myMap.mySpawnZones.get(o).myX + 5, myMap.mySpawnZones.get(o).myY + 15);
			g.drawString("S", myMap.mySpawnZones.get(o).myX + 6, myMap.mySpawnZones.get(o).myY + 16);
		}
	}
	
    /*
     *Not used outside paintComponent, and is
     *only made into a method for readability.
     */
	public void paintHealthZones(Graphics g)
	{
		for(int o = 0; o < myMap.myHealthZones.size(); o++)
		{
			g.setColor(Color.RED);
			g.fillRect(myMap.myHealthZones.get(o).myX, myMap.myHealthZones.get(o).myY, myMap.myHealthZones.get(o).myWidth, myMap.myHealthZones.get(o).myHeight);
			g.setColor(Color.BLACK);
			g.drawRect(myMap.myHealthZones.get(o).myX, myMap.myHealthZones.get(o).myY, myMap.myHealthZones.get(o).myWidth, myMap.myHealthZones.get(o).myHeight);
			g.drawRect(myMap.myHealthZones.get(o).myX + 1, myMap.myHealthZones.get(o).myY + 1, myMap.myHealthZones.get(o).myWidth - 2, myMap.myHealthZones.get(o).myHeight - 2);
			g.drawString("H", myMap.myHealthZones.get(o).myX + 4, myMap.myHealthZones.get(o).myY + 15);
			g.drawString("H", myMap.myHealthZones.get(o).myX + 5, myMap.myHealthZones.get(o).myY + 16);
		}
	}
    
    /*
     *Not used outside paintComponent, and is
     *only made into a method for readability.
     */
    public void paintBackground(Graphics g)
    {
    	if(myMap.myBorder != null)
    	{
    		g.setColor(new Color(69, 150, 38));
	        g.fillRect(myMap.myBorder.myX + 1, myMap.myBorder.myY + 1, myMap.myBorder.myWidth - 1, myMap.myBorder.myHeight - 1);
	        
	        g.setColor(Color.BLACK);
	        g.drawRect(myMap.myBorder.myX, myMap.myBorder.myY, myMap.myBorder.myWidth, myMap.myBorder.myHeight);
	        g.drawRect(myMap.myBorder.myX - 1, myMap.myBorder.myY - 1, myMap.myBorder.myWidth + 2, myMap.myBorder.myHeight + 2);
	        g.drawRect(myMap.myBorder.myX - 2, myMap.myBorder.myY - 2, myMap.myBorder.myWidth + 4, myMap.myBorder.myHeight + 4);
    	}
    }
    
    /*
     *This is the method that is overridden from
     *MouseListener. This method records clicks,
     *and is the frame for making things on the
     *map, in the case where the said object to
     *be added, has a changeable width or height,
     *it checks for another click to finish
     *the object.
     */
    public void mouseClicked(MouseEvent e)
    {
    	if(step == 0)
    	{
	    	if(myCurrentAction.equals("Border"))
	    	{
	    		myMap.myBorder = new Thing(e.getX(), e.getY(), 50, 50);
	    		step = 1;
	    	}
	    	if(myCurrentAction.equals("Obstacle"))
	    	{
	    		myMap.myObstacles.add(new Thing(e.getX(), e.getY(), 50, 50));
	    		step = 1;
	    	}
	    	if(myCurrentAction.equals("Reload Zone"))
	    	{
	    		myMap.myReloadZones.add(new Thing(e.getX(), e.getY(), 25, 25));
	    		myCurrentAction = "";
	    		needsAction = true;
	    	}
	    	if(myCurrentAction.equals("Health Zone"))
	    	{
	    		myMap.myHealthZones.add(new Thing(e.getX(), e.getY(), 25, 25));
	    		myCurrentAction = "";
	    		needsAction = true;
	    	}
	    	if(myCurrentAction.equals("Spawn Zone"))
	    	{
	    		myMap.mySpawnZones.add(new Thing(e.getX(), e.getY(), 25, 25));
	    		myCurrentAction = "";
	    		needsAction = true;
	    	}
	    	return;
    	}
    	if(step == 1)
    	{
    		if(myCurrentAction.equals("Border"))
	    	{
	    		myMap.myBorder.myWidth = e.getX() - myMap.myBorder.myX;
	    		myMap.myBorder.myHeight = e.getY() - myMap.myBorder.myY;
	    	}
	    	if(myCurrentAction.equals("Obstacle"))
	    	{
	    		myMap.myObstacles.get(myMap.myObstacles.size() - 1).myWidth = e.getX() - myMap.myObstacles.get(myMap.myObstacles.size() - 1).myX;
	    		myMap.myObstacles.get(myMap.myObstacles.size() - 1).myHeight = e.getY() - myMap.myObstacles.get(myMap.myObstacles.size() - 1).myY;
	    	}
	    	step = 0;
	    	myCurrentAction = "";
	    	needsAction = true;
	    }
    }
    
    /*
     *This method derives from the MouseMotionListener
     *and is used for when objects in the map are moved
     *for the users preferance. This sets the mouse's
     *position to a rectangle and checks whether it
     *is intersecting any object.
     *
     *If it is, then it sets that object to a malleable
     *object variable and it used in a variety of checks
     *throughout the class.
     */
    public void mouseDragged(MouseEvent e)
    {
    	Thing r = new Thing(e.getX(), e.getY(), 1, 1);
    	
    	if(objectBeingDragged == null)
    	{
    		for(int i = 0; i < myMap.myObstacles.size(); i++)
	    		if(r.toRect().intersects(myMap.myObstacles.get(i).toRect()))
	    		{
	    			objectBeingDragged = myMap.myObstacles.get(i);
	    			break;
	    		}
	    	for(int i = 0; i < myMap.myReloadZones.size(); i++)
	    		if(r.toRect().intersects(myMap.myReloadZones.get(i).toRect()))
	    		{
	    			objectBeingDragged = myMap.myReloadZones.get(i);
	    			break;
	    		}
	    	for(int i = 0; i < myMap.myHealthZones.size(); i++)
	    		if(r.toRect().intersects(myMap.myHealthZones.get(i).toRect()))
	    		{
	    			objectBeingDragged = myMap.myHealthZones.get(i);
	    			break;
	    		}
	    	for(int i = 0; i < myMap.mySpawnZones.size(); i++)
	    		if(r.toRect().intersects(myMap.mySpawnZones.get(i).toRect()))
	    		{
	    			objectBeingDragged = myMap.mySpawnZones.get(i);
	    			break;
	    		}
    	}    	
    			
    	if(objectBeingDragged == null)
    		return;
    		
    	for(int i = 0; i < myMap.myObstacles.size(); i++)
    		if(myMap.myObstacles.get(i).equals(objectBeingDragged))
    		{
    			myMap.myObstacles.get(i).myX = e.getX() - myMap.myObstacles.get(i).myWidth / 2;
    			myMap.myObstacles.get(i).myY = e.getY() - myMap.myObstacles.get(i).myHeight / 2;
    			break;
    		}
    	for(int i = 0; i < myMap.myReloadZones.size(); i++)
    		if(myMap.myReloadZones.get(i).equals(objectBeingDragged))
    		{
    			myMap.myReloadZones.get(i).myX = e.getX() - myMap.myReloadZones.get(i).myWidth / 2;
    			myMap.myReloadZones.get(i).myY = e.getY() - myMap.myReloadZones.get(i).myHeight / 2;
    			break;
    		}
    	for(int i = 0; i < myMap.myHealthZones.size(); i++)
    		if(myMap.myHealthZones.get(i).equals(objectBeingDragged))
    		{
    			myMap.myHealthZones.get(i).myX = e.getX() - myMap.myHealthZones.get(i).myWidth / 2;
    			myMap.myHealthZones.get(i).myY = e.getY() - myMap.myHealthZones.get(i).myHeight / 2;
    			break;
    		}
    	for(int i = 0; i < myMap.mySpawnZones.size(); i++)
    		if(myMap.mySpawnZones.get(i).equals(objectBeingDragged))
    		{
    			myMap.mySpawnZones.get(i).myX = e.getX() - myMap.mySpawnZones.get(i).myWidth / 2;
    			myMap.mySpawnZones.get(i).myY = e.getY() - myMap.mySpawnZones.get(i).myHeight / 2;
    			break;
    		}
    }
    
    /*
     *This method is also overridden from MouseMotionListener
     *and here it is being used to remove the object being dragged
     *(taken from the mouseDragged() method) from the map.
     */
    public void mouseExited(MouseEvent e)
    {
		for(int i = 0; i < myMap.myObstacles.size(); i++)
    		if(myMap.myObstacles.get(i).equals(objectBeingDragged))
    		{
    			myMap.myObstacles.remove(i);
    			break;
    		}
    	for(int i = 0; i < myMap.myReloadZones.size(); i++)
    		if(myMap.myReloadZones.get(i).equals(objectBeingDragged))
    		{
    			myMap.myReloadZones.remove(i);
    			break;
    		}
    	for(int i = 0; i < myMap.myHealthZones.size(); i++)
    		if(myMap.myHealthZones.get(i).equals(objectBeingDragged))
    		{
    			myMap.myHealthZones.remove(i);
    			break;
    		}
    	for(int i = 0; i < myMap.mySpawnZones.size(); i++)
    		if(myMap.mySpawnZones.get(i).equals(objectBeingDragged))
    		{
    			myMap.mySpawnZones.remove(i);
    			break;
    		}
    }
    
    /*
     *When the mouse is released this method simply
     *clears the objectBeingDragged so another object
     *can be dragged. Will only do anything when
     *an object is being dragged, so it doesn't affect
     *much.
     */
    public void mouseReleased(MouseEvent e)
    {
    	objectBeingDragged = null;
    }

	/*
     *These are the three methods taken from
     *MouseListener and MouseMotionListener in
     *which aren't being used.
     */
    public void mouseMoved(MouseEvent e){}
    public void mouseEntered(MouseEvent e){}    
    public void mousePressed(MouseEvent e){}
}