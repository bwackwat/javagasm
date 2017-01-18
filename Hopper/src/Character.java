import java.awt.Color;
import java.awt.event.KeyEvent;
import javax.swing.JFrame;

public class Character{
	public double x = 100;
	public double y = 100;
	public double xv = 0;
	public double yv = 0;
	public double xa = 0;
	public double ya = 0.02;
        public double absorbtion = 0.5;
	public int shape = 0;
	public int size = 10;
	public Color color = Color.RED;
	public int jump = KeyEvent.VK_UP;
	public int left = KeyEvent.VK_LEFT;
	public int right = KeyEvent.VK_RIGHT;
        public boolean air = true;
        public boolean ground = false;

	public void move(Input i){
		x += xv;
		y += yv;
		xv += xa;
		if(!ground){
                    yv += ya;
                }
		if(i.key[jump] && ground){
                    yv = -2;
                    air = true;
                    ground = false;
                }
                boolean l = i.key[left];
                boolean r  =i.key[right];
		if(!(l && r)){
                    if(l){
                        x -= 0.5;
                    } else if(r){
                        x += 0.5;
                    }
                }
	}
        public void collide(JFrame f){
            if(x < 0){
                x = 0;
            } else if(x + size > f.getWidth() - 5){
                x = f.getWidth() - size - 5;
            }
            if(y + size > f.getHeight() - 25){
                yv *= -1 * absorbtion;
                y = f.getHeight() - size - 25;
                if(Math.abs(yv) < 0.1){
                    ground = true;
                    yv = 0;
                }
                air = false;
            }
        }
}