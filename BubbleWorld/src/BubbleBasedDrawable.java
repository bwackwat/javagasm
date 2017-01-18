import java.awt.Graphics;


public interface BubbleBasedDrawable {
	public BubblePoint getSelectPoint(double mouseX, double mouseY);
	public void paint(Graphics g);
}
