import java.awt.Color;
import java.awt.Graphics;

class Bullet{
    double x = 0;
    double y = 0;

    private double angle = 0;

    private double xv = 0;
    private double yv = 0;
    
    private static final double maxVelocity = 3.0;
    private static final int maxLife = 10000000;
    private static final int bulletLength = 15;

    int life = 0;

    Bullet(){}
    Bullet(double nx, double ny, double nangle){
        x = nx;
        y = ny;
        angle = nangle;
        xv = maxVelocity * Math.cos(angle);
        yv = maxVelocity * Math.sin(angle);
        life = maxLife;
    }
    void run(){
        x += xv;
        y += yv;
        life--;
    }
    void draw(Graphics g){
        g.setColor(Color.WHITE);
        g.drawLine((int)x, (int)y, (int)(x + bulletLength * Math.cos(angle)), (int)(y + bulletLength * Math.sin(angle)));
    }
}