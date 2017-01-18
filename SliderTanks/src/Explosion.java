/*
 *This is the only "physical" object that
 *doesn't extends Thing. This is because
 *Thing is oriented around rectangles and
 *this is drawn with an oval, Thing offers
 *the method toRect() in which this class
 *would have no use of.
 */
public class Explosion
{
	public int myX;
	public int myY;
	public int mySize;
	
	public int myTime = 15;
	
	/*
	 *Constructor takes the new explosions location
	 *its size, and the time that it will stay alive.
	 *its the 4th parameter int t, will always be
	 *taken from the MapFileDealers configuration.
	 */
	public Explosion(int x, int y, int s, int t)
	{
		myX = x;
		myY = y;
		mySize = s;
		myTime = t;
	}
}