import java.awt.Color;
import java.awt.Graphics;

class Trail{
    private double x = 0;
    private double y = 0;
    
    private Color color;
    
    static final int maxLife = 25000;
    int life = 0;
    
    private double size = 0.;
    
    Trail(Color c){
        color = c;
    }
    void show(double nx, double ny){
        x = nx;
        y = ny;
        size = 1. * Orb.size;
        life = maxLife;
    }
    void run(){
        size -= 1. *Orb.size / maxLife;
        life--;
    }
    void draw1(Graphics g){
        g.setColor(Color.WHITE);
        g.drawOval((int)(x - size / 2.) - 1, (int)(y - size / 2.) - 1, (int)size + 1, (int)size + 1);
    }
    void draw2(Graphics g){
        g.setColor(color);
        g.fillOval((int)(x - size / 2.), (int)(y - size / 2.), (int)size, (int)size);
    }
}