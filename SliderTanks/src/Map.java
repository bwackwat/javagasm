import java.util.*;
import java.awt.*;

/*
 *A simply wonderful class that holds all
 *physical things that would be included
 *in a map. This however, does NOT include
 *the tanks. Tanks are not saved in any way.
 */
public class Map
{
	public boolean isOriented = false;
	
	public Thing myBorder;
	
	/*
	 *ArrayList O.o!
	 */
	public ArrayList<Thing> myObstacles = new ArrayList<Thing>();
	public ArrayList<Thing> myReloadZones = new ArrayList<Thing>();
	public ArrayList<Thing> myHealthZones = new ArrayList<Thing>();
	public ArrayList<Thing> mySpawnZones = new ArrayList<Thing>();
}