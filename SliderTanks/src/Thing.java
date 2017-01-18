import java.awt.*;

/*
 *Im pretty sure that this class would 
 *qualify as a wrapper class because
 *I use toRect(), but im not quite
 *sure.
 */
public class Thing
{
	public int myX;
	public int myY;
	public int myWidth;
	public int myHeight;
	
	public Thing(int x, int y, int w, int h)
	{
		myX = x;
		myY = y;
		myWidth = w;
		myHeight = h;
	}
	
	public Rectangle toRect()
	{
		return new Rectangle(myX, myY, myWidth, myHeight);
	}
}