/*
 *AP Computer Science A
 *Mr. Remington
 *
 *Final Project
 *
 *John Hayes
 *1/16/08
 */
public class MainClass
{
	/*
	 *The main method creates a game dealer thread
	 *which was made to initially handle all secondary
	 *input, and program control.
	 */
    public static void main(String[] args)
    {
    	GameDealerThread main = new GameDealerThread();
    	main.start();
    }
}