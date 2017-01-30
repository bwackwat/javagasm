import java.awt.Color;
import java.awt.Graphics;

class Asteroid{
    double x = 0;
    double y = 0;

    private double xv = 0;
    private double yv = 0;

    int size = 5;

    private static final double maxVelocity = 0.8;
    static final int sizeMultiplier = 15;
    
    boolean alive = false;

    Asteroid(){}
    Asteroid(double nx, double ny, int nsize){
        x = nx;
        y = ny;
        size = nsize;
        xv = (Math.random() * 2 - 1) * maxVelocity;
        yv = (Math.random() * 2 - 1) * maxVelocity;
        alive = true;
    }
    void run(){
        x += xv;
        y += yv;
        if(x > Asteroids.f.getWidth()){
            x = 0;
        }else if(x < 0){
            x = Asteroids.f.getWidth();
        }
        if(y > Asteroids.f.getHeight()){
            y = 0;
        }else if(y < 0){
            y = Asteroids.f.getHeight();
        }
    }
    void draw(Graphics g){
        g.setColor(Color.WHITE);
        g.drawOval((int)x - size * sizeMultiplier / 2, (int)y - size * sizeMultiplier / 2, size * sizeMultiplier, size * sizeMultiplier);
    }
    int explode(Bullet b[]){
        for(int i = 0; i < b.length; i++){
            if(b[i].life > 0 && (b[i].x - x) * (b[i].x - x) + (b[i].y - y) * (b[i].y - y) < size * sizeMultiplier * size * sizeMultiplier / 4){
                return i;
            }
        }
        return -1;
    }
}