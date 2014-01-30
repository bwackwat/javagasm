import java.awt.Graphics;
import java.util.ArrayList;


public class BubbleScene {
	public ArrayList<BubbleBasedDrawable> BubbleObjects = new ArrayList<BubbleBasedDrawable>();
	
	public BubblePoint getSelectPoint(double mouseX, double mouseY){
		for(BubbleBasedDrawable object : BubbleObjects){
			return object.getSelectPoint(mouseX, mouseY);
		}
		return null;
	}
	
	public void paint(Graphics g){
		for(BubbleBasedDrawable object : BubbleObjects){
			object.paint(g);
		}
	}
}
