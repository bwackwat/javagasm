import java.util.*;

public class Player
{
	public Tank myTank = new Tank(0, 0, new Configuration());
	
	public int myKills = 0;
	public int myDeaths = 0;
	
	public ArrayList<Bullet> myBullets = new ArrayList<Bullet>();
	public ArrayList<Explosion> myExplosions = new ArrayList<Explosion>();
}