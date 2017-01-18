import java.io.*;

public class MapFileDealer
{
	public BufferedReader inputStream;
	public PrintWriter outputStream;
    
    public Map readMap(String fileName) throws IOException
    {
    	String s;
    	boolean reading = true;
    	Map theMap = new Map();
    	inputStream = new BufferedReader(new FileReader(fileName + ".stm"));
    	s = inputStream.readLine();
    	
		if(!s.equals("Slider Tanks Map"))
			return new Map();
		
    	while(reading)
    	{
    		s = inputStream.readLine();
    		if(s.substring(0, 1).equals("$"))
    			continue;
    		
    		if(s.equals("Border"))
    		{
    			Thing theBorder = new Thing(0, 0, 50, 50);
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 9).equals("Location@"))
    			{
    				int x = Integer.parseInt(s.substring(9, s.indexOf(",")));
    				int y = Integer.parseInt(s.substring(s.indexOf(",") + 1, s.length()));
    				theBorder.myX = x;
    				theBorder.myY = y;
    			}
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 6).equals("Width@"))
    			{
    				int w = Integer.parseInt(s.substring(6, s.length()));
    				theBorder.myWidth = w;
    			}
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 7).equals("Height@"))
    			{
    				int h = Integer.parseInt(s.substring(7, s.length()));
    				theBorder.myHeight = h;
    			}
    			
    			theMap.myBorder = theBorder;
    			continue;
    		}
    		
    		if(s.equals("Obstacle"))
    		{
    			Thing theObstacle = new Thing(0, 0, 50, 50);
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 9).equals("Location@"))
    			{
    				int x = Integer.parseInt(s.substring(9, s.indexOf(",")));
    				int y = Integer.parseInt(s.substring(s.indexOf(",") + 1, s.length()));
    				theObstacle.myX = x;
    				theObstacle.myY = y;
    			}
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 6).equals("Width@"))
    			{
    				int w = Integer.parseInt(s.substring(6, s.length()));
    				theObstacle.myWidth = w;
    			}
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 7).equals("Height@"))
    			{
    				int h = Integer.parseInt(s.substring(7, s.length()));
    				theObstacle.myHeight = h;
    			}
    			
    			theMap.myObstacles.add(theObstacle);
    			continue;
    		}
    		if(s.equals("Spawn Zone"))
    		{
    			Thing theZone = new Thing(0, 0, 25, 25);
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 9).equals("Location@"))
    			{
    				int x = Integer.parseInt(s.substring(9, s.indexOf(",")));
    				int y = Integer.parseInt(s.substring(s.indexOf(",") + 1, s.length()));
    				theZone.myX = x;
    				theZone.myY = y;
    			}
    			
    			theMap.mySpawnZones.add(theZone);
    			continue;
    		}
    		if(s.equals("Reload Zone"))
    		{
    			Thing theZone = new Thing(0, 0, 25, 25);
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 9).equals("Location@"))
    			{
    				int x = Integer.parseInt(s.substring(9, s.indexOf(",")));
    				int y = Integer.parseInt(s.substring(s.indexOf(",") + 1, s.length()));
    				theZone.myX = x;
    				theZone.myY = y;
    			}
    			
    			theMap.myReloadZones.add(theZone);
    			continue;
    		}
    		if(s.equals("Health Zone"))
    		{
    			Thing theZone = new Thing(0, 0, 25, 25);
    			
    			s = inputStream.readLine();
    			if(s.substring(0, 9).equals("Location@"))
    			{
    				int x = Integer.parseInt(s.substring(9, s.indexOf(",")));
    				int y = Integer.parseInt(s.substring(s.indexOf(",") + 1, s.length()));
    				theZone.myX = x;
    				theZone.myY = y;
    			}
    			
    			theMap.myHealthZones.add(theZone);
    			continue;
    		}
    		
    		if(s.equals("Done"))
    			reading = false;
    	}
    	return theMap;
    }
    
    public void writeMap(String filename, Map theMap) throws IOException
    {
    	try
    	{
	    	PrintStream o = new PrintStream(new FileOutputStream(filename + ".stm"));

	    	o.println("Slider Tanks Map");
	    	
	    	if(theMap.myBorder != null)
	    	{
	    		o.println("$");
    			o.println("Border");
		    	o.println("Location@" + theMap.myBorder.myX + "," + theMap.myBorder.myY);
		    	o.println("Width@" + theMap.myBorder.myWidth);
		    	o.println("Height@" + theMap.myBorder.myHeight);
	    	}
	    	
	    	for(int i = 0; i < theMap.myObstacles.size(); i++)
	    	{
	    		o.println("$");
	    		o.println("Obstacle");
	    		o.println("Location@" + theMap.myObstacles.get(i).myX + "," + theMap.myObstacles.get(i).myY);
				o.println("Width@" + theMap.myObstacles.get(i).myWidth);
	    		o.println("Height@" + theMap.myObstacles.get(i).myHeight);
	    	}
	    	
	    	for(int i = 0; i < theMap.mySpawnZones.size(); i++)
	    	{
	    		o.println("$");
	    		o.println("Spawn Zone");
	    		o.println("Location@" + theMap.mySpawnZones.get(i).myX + "," + theMap.mySpawnZones.get(i).myY);
	    	}
	    	
	    	for(int i = 0; i < theMap.myReloadZones.size(); i++)
	    	{
	    		o.println("$");
	    		o.println("Reload Zone");
	    		o.println("Location@" + theMap.myReloadZones.get(i).myX + "," + theMap.myReloadZones.get(i).myY);
	    	}
	    	
	    	for(int i = 0; i < theMap.myHealthZones.size(); i++)
	    	{
	    		o.println("$");
	    		o.println("Health Zone");
	    		o.println("Location@" + theMap.myHealthZones.get(i).myX + "," + theMap.myHealthZones.get(i).myY);
	    	}
	    	
	    	o.println("$");
	    	o.println("Done");
    	} catch (IOException e)
    	{
    		e.printStackTrace();
    	}
    }
}