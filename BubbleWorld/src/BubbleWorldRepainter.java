
public class BubbleWorldRepainter extends Thread{
	private BubbleWorld bubbleWorld;
	public BubbleWorldRepainter(BubbleWorld bubbleWorld){
		this.bubbleWorld = bubbleWorld;
	}
	
	public void run(){
		while(true){
			bubbleWorld.repaint();
			
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
