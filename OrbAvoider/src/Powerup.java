import java.awt.Color;
import java.awt.Graphics;

class Powerup{
    double x = 0;
    double y = 0;

    boolean alive = false;

    Powerup(){}
    Powerup(double nx, double ny){
        x = nx;
        y = ny;
        alive = true;
    }
    void draw(Graphics g){
        g.setColor(Color.WHITE);
        g.fillOval((int)(x - Orb.size / 2.), (int)(y - Orb.size / 2.), Orb.size, Orb.size);
    }
}