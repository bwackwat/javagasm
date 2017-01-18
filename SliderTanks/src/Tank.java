import java.awt.*;

public class Tank extends Thing
{
	public String myState = "Running";
	public String myFacing = "Up";
	public int myShotsFired = 0;

	public double myHealth;
	public int myAmmo;
	public int myCurrentAmmo;
	public int myReloadTime;
	public int myShotDelay;
	public int myRespawnTime;
	
	public double myMaxHealth;
	public int myMaxAmmo;
	public int myMaxCurrentAmmo;
	public int myMaxReloadTime;
	public int myMaxShotDelay;
	public int myMaxRespawnTime;
	
	public double myUpSpeed = 0;
	public double myDownSpeed = 0;
	public double myLeftSpeed = 0;
	public double myRightSpeed = 0;
	
	public double myMaxSpeed;
	public double myAcceleration;
	public double myDecceleration;
	
	public double myBulletDamage;
	public int myBulletSpeed;
	
	public ControlSet myControls = new ControlSet();

	public Tank(int x, int y, Configuration c)
	{	
		super(x, y, 10, 10);
		myBulletDamage = c.myTankBulletDamage;
		myBulletSpeed = c.myTankBulletSpeed;
		myMaxSpeed = c.myTankMaxSpeed;
		myAcceleration = c.myTankAcceleration;
		myDecceleration = c.myTankDecceleration;
		myMaxHealth = c.myTankMaxHealth;
		myMaxAmmo = c.myTankMaxAmmo;
		myMaxCurrentAmmo = c.myTankMaxCurrentAmmo;
		myMaxReloadTime = c.myTankMaxReloadTime;
		myMaxShotDelay = c.myTankMaxShotDelay;
		myMaxRespawnTime = c.myTankMaxRespawnTime;
		
		myHealth = myMaxHealth;
		myAmmo = myMaxAmmo;
		myReloadTime = myMaxReloadTime;
		myCurrentAmmo = myMaxCurrentAmmo;
		myRespawnTime = myMaxRespawnTime;
		myShotDelay = myMaxShotDelay;
	}
}