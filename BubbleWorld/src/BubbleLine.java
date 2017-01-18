import java.awt.Graphics;


public class BubbleLine implements BubbleBasedDrawable{
	private BubblePoint start, end;
	private double zoom;
	
	public BubbleLine(double startX, double startY, double endX, double endY, double zoom){
		this.start = new BubblePoint(startX,startY);
		this.end= new BubblePoint(endX,endY);
		this.zoom = zoom;
	}
	
	@Override
	public void paint(Graphics g) {
		double dist = Math.sqrt((start.X - end.X) * (start.X - end.X) + (start.Y - end.X) * (start.Y - end.Y));
		int count = (int)(dist / (this.zoom * BubbleWorld.BubbleDiameter));
		double tempZoom =  dist / (count * BubbleWorld.BubbleDiameter);

		g.drawString("(" + start.X + ", " + start.Y + ")", (int)start.X, (int)start.Y);
		g.drawString("(" + end.X + ", " + end.Y + ")", (int)end.X, (int)end.Y);
		
		double xIncrement = (end.X - start.X) / count;
		double yIncrement = (end.Y - start.Y) / count;
		for(int i = 0; i < count; i++){
			g.drawOval((int)(this.start.X - BubbleWorld.BubbleRadius + xIncrement * i), (int)(this.start.Y - BubbleWorld.BubbleRadius + yIncrement * i), (int)(tempZoom * BubbleWorld.BubbleDiameter), (int)(tempZoom * BubbleWorld.BubbleDiameter));
		}
	}

	@Override
	public BubblePoint getSelectPoint(double mouseX, double mouseY) {
		if(Math.sqrt((start.X - mouseX) * (start.X - mouseX) + (start.Y - mouseY) * (start.Y - mouseY)) < BubbleWorld.BubbleDiameter){
			return start;
		}else if(Math.sqrt((end.X - mouseX) * (end.X - mouseX) + (end.Y - mouseY) * (end.Y - mouseY)) < BubbleWorld.BubbleDiameter){
			return end;
		} 
		return null;
	}
}
