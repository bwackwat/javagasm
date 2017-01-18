/*
 *The bullets class like any other subclass
 *only has a few differences than Thing,
 *this class contains the bullets speed,
 *damage and its facing direction.
 */
public class Bullet extends Thing
{
	public String myFacing;
	
	public double myDamage = 1;
	public int mySpeed = 6;
	
	/*
	 *The constructor takes its location and all
	 *of the class variables. myDamage and mySpeed
	 *are taken from the tank that shot. That tank,
	 *in return, gets its bullet damage and bullet
	 *speed from the configuration in GamePlayingPanel.
	 */
	public Bullet(int x, int y, String s, double d, int speed)
	{
		super(x, y, 2, 2);
		myFacing = s;
		myDamage = d;
		mySpeed = speed;
	}
}