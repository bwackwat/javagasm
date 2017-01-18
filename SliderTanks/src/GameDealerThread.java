import java.awt.event.*;
import javax.swing.*;
import java.util.*;
import java.awt.*;
import java.io.*;

/*
 *This thread should be considered the
 *"main" class because it is what handles
 *all of the other classes functions,
 *while linking them together.
 */
public class GameDealerThread extends Thread
{
    public GamePlayingPanel gamePlayingPanel;
    public MapDrawingPanel mapDrawingPanel;
    public ValueBox valueBox;
    public ComboBoxFrame comboBoxFrame;
    public OptionChooser optionChooser;
    public MapFileDealer mapFileDealer;
    
    public Configuration configuration = new Configuration();
    
    public String myPlayingButtonText[] = {
        "Load Map",
        "Reset Map",
        "Main Menu",
        "Exit"
    };
    
    public String myMenuButtonText[] = {
        "Start Game",
        "Map Editor",
        "Exit"
    };
    
    public String myEditorButtonText[] = {
        "Border",
        "Obstacle",
        "Health Zone",
        "Reload Zone",
        "Spawn Zone",
        "Load Map",
        "Save Map",
        "Clear Map",
        "Main Menu",
        "Exit"
    };
    
    public String state = "Main Menu";
    
    /*
     *Constructor to  take nothing and simply
     *start the game up with the main menu.
     */
    public GameDealerThread()
    {
        mainMenu();
    }
    
    /*
     *This method can be called to show the
     *main menu, it overrides the only
     *OptionChooser and will replace any other
     *menu automatically, but not JFrames
     *in general.
     */
    public void mainMenu()
    {
        optionChooser = new OptionChooser("Slider Tanks Main Menu", myMenuButtonText);
        while(!optionChooser.done){}
        
        if(optionChooser.myChoose == 0)
            if(loadMap() == null)
            {
                mainMenu();
                return;
            }
                else
                gamePlayingPanel = new GamePlayingPanel(loadMap(), configuration);
        if(optionChooser.myChoose == 1)
            mapDrawingPanel = new MapDrawingPanel();
        if(optionChooser.myChoose == 2)
            System.exit(0);
        
        state = myMenuButtonText[optionChooser.myChoose];
    }
    
    /*
     *As well as MainMenu() this is called
     *whenever a user decides to load a map.
     *Returns the map read from class
     *MapFileDealer.
     */
    public Map loadMap()
    {
        File[] listOfFiles = new File(System.getProperty("user.dir")).listFiles();
        ArrayList<String> tempMaps = new ArrayList<String>();
    
        for(int i = 0; i < listOfFiles.length; i++)
            if(listOfFiles[i].isFile())
                if(listOfFiles[i].getName().substring(listOfFiles[i].getName().indexOf("."), listOfFiles[i].getName().length()).equals(".stm"))
                    tempMaps.add(listOfFiles[i].getName().substring(0, listOfFiles[i].getName().indexOf(".")));
        
        String[] yourMaps = new String[tempMaps.size()];
        for(int i = 0; i < tempMaps.size(); i++)
            yourMaps[i] = tempMaps.get(i);
            
        if(tempMaps.size() == 0)
            return null;
        
        comboBoxFrame = new ComboBoxFrame("Load Map", "Choose a map from the list:", "Load", yourMaps);
        while(!comboBoxFrame.done){}
        
        mapFileDealer = new MapFileDealer();
        try
        {
            return mapFileDealer.readMap(comboBoxFrame.myCombo.getSelectedItem().toString());
        } catch(IOException ioe)
        {
            System.out.println(ioe);
        }
        return new Map();
    }
    
    /*
     *In relation to LoadMap, this takes a Map
     *and uses the MapFileDealer to then write
     *the .stm (Slider Tanks Map) file.
     */
    public void saveMap(Map m)
    {
        valueBox = new ValueBox("Save Map", "Enter the name of the map:", "Save");
        while(!valueBox.done){}
        
        mapFileDealer = new MapFileDealer();
        try
        {
            try
            {
                mapFileDealer.writeMap(valueBox.myText.getText(), m);
            } catch(FileNotFoundException fnfe)
            {
                saveMap(m);
            }
        } catch(IOException ioe)
        {
            System.out.println(ioe);
        }
    }
    
    /*
     *The default method for Threads that is
     *run when the threads start() method is
     *called. Mine is in a while(true) loop
     *and works very well in common occasions.
     *
     *This method will always be checking the
     *String state, and whether it is on "Main
     * Menu", "Map Editor", or "Start Game" this
     *thread is what is being used to wait for
     *input and controls other classes.
     */
    public void run()
    {
        while(true)
        {
            while(state.equals("Start Game"))
            {
                gamePlayingPanel.repaint();
                
                if(gamePlayingPanel.myKeys[80] == 1 && !gamePlayingPanel.isPaused)
                    gamePlayingPanel.isPaused = true;
                
                if(gamePlayingPanel.myKeys[80] == 1)
                {
                    try
                    {
                        sleep(200);
                    }
                    catch(InterruptedException e)
                    {
                        System.out.println(e);
                    }
                }
                
                while(gamePlayingPanel.isPaused)
                    if(gamePlayingPanel.myKeys[80] == 1)
                    {
                        gamePlayingPanel.isPaused = false;
                        try
                        {
                            sleep(200);
                        }
                        catch(InterruptedException e)
                        {
                            System.out.println(e);
                        }
                    }
                    
                if(gamePlayingPanel.needsAction)
                {
                    optionChooser = new OptionChooser("Playing Menu", myPlayingButtonText);
                    optionChooser.myFrame.setLocation(new Point(gamePlayingPanel.myFrame.getWidth(), gamePlayingPanel.myFrame.getHeight()));
                    gamePlayingPanel.myFrame.requestFocus();
                    gamePlayingPanel.needsAction = false;
                }
                
                if(optionChooser.done)
                {
                    if(optionChooser.myChoose == 0)
                    {
                        gamePlayingPanel.myMap = loadMap();
                        gamePlayingPanel.resetMap();
                        gamePlayingPanel.needsAction = true;
                    }
                    
                    if(optionChooser.myChoose == 1)
                    {
                        gamePlayingPanel.resetMap();
                        gamePlayingPanel.needsAction = true;
                    }
                    
                    if(optionChooser.myChoose == 2)
                    {
                        gamePlayingPanel.myFrame.setVisible(false);
                        gamePlayingPanel.needsAction = false;
                        gamePlayingPanel.myPlayerStatBoxes.get(0).myFrame.setVisible(false);
                        gamePlayingPanel.myPlayerStatBoxes.get(1).myFrame.setVisible(false);
                        gamePlayingPanel.myPlayerStatBoxes = null;
                        gamePlayingPanel = null;
                        
                        state = "Main Menu";
                        
                        mainMenu();
                    }
                    
                    if(optionChooser.myChoose == 3)
                        System.exit(0);
                }
                try
                {
                    sleep(configuration.myFrameDelay);
                }
                catch(InterruptedException e)
                {
                    System.out.println(e);
                }
            }
            while(state.equals("Map Editor"))
            {
                mapDrawingPanel.repaint();
                
                if(mapDrawingPanel.needsAction)
                {
                    mapDrawingPanel.needsAction = false;
                    optionChooser = new OptionChooser("Toolbar", myEditorButtonText);
                    optionChooser.myFrame.setLocation(new Point(mapDrawingPanel.myFrame.getWidth() - optionChooser.myFrame.getWidth(), 0));
                }
                
                if(optionChooser.done)
                {
                    mapDrawingPanel.myCurrentAction = myEditorButtonText[optionChooser.myChoose];
                    
                    if(optionChooser.myChoose == 5)
                    {
                        mapDrawingPanel.myMap = loadMap();
                        mapDrawingPanel.needsAction = true;
                    }
                        
                    if(optionChooser.myChoose == 6)
                    {
                        saveMap(mapDrawingPanel.myMap);
                        mapDrawingPanel.needsAction = true;
                    }
                    
                    if(optionChooser.myChoose == 8)
                    {
                        mapDrawingPanel.myFrame.setVisible(false);
                        mapDrawingPanel.myFrame = null;
                        if(mapDrawingPanel.needsAction)
                            optionChooser = null;
                        mapDrawingPanel.needsAction = false;
                        mapDrawingPanel = null;
                        
                        state = "Main Menu";
                        mainMenu();
                    }
                    
                    if(optionChooser.myChoose == 9)
                        System.exit(0);
                }
            }
        }
    }
}