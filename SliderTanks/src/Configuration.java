/*
 *This class acts as a storage bank for variables.
 *
 *Never changing, mainly used for my ease of change.
 */
public class Configuration
{
	public final double myHealthZoneHealthIncrement = 0.03;
	public final int myReloadZoneAmmoIncrement = 1;
	
	public final int myExplosionLifetime = 15;
	
	public final int myFrameDelay = 30;
	public final int myNumOfPlayers = 2;
	
	public final double myTankBulletDamage = 1;
	public final int myTankBulletSpeed = 6;
	
	public final double myTankMaxSpeed = 5;
	public final double myTankAcceleration = 0.2;
	public final double myTankDecceleration = 0.1;
	public final double myTankMaxHealth = 10;
	public final int myTankMaxAmmo = 90;
	public final int myTankMaxCurrentAmmo = 15;
	public final int myTankMaxReloadTime = 45;
	public final int myTankMaxShotDelay = 5;
	public final int myTankMaxRespawnTime = 180;
}