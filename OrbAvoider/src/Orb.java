import java.awt.Color;
import java.awt.Graphics;

class Orb{
    double x = 0;
    double y = 0;
    private double xv = 0;
    private double yv = 0;
    
    private double acceleration = 0.0000001;
    
    static final int size = 10;
    
    private Trail trails[] = new Trail[5];
    private int nextTrail = 0;
    private int spawnCounter = 0;
    
    boolean alive = false;

    Orb(){}
    Orb(double nx, double ny){
        x = nx;
        y = ny;
        double r = Math.random();
        acceleration *= r + 0.5;
        double a = r * Math.PI * 2;
        xv += (acceleration + 0.001) * Math.cos(a);
        yv += (acceleration + 0.001) * Math.sin(a);
        Color c = new Color((int)between(r * 255 * 3, 0, 255), (int)between(r * 255 * 3 - 255, 0, 255), (int)between(r * 255 * 3 - 255 * 2, 0, 255), 255);
        for(int i = 0; i < trails.length; i++){
            trails[i] = new Trail(c);
        }
        alive = true;
    }
    private double between(double n, double l, double h){
        if(n < l){
            return l;
        }
        if(n > h){
            return h;
        }
        return n;
    }
    void run(int mx, int my){
        for(int i = 0; i < trails.length; i++){
            if(trails[i].life > 0){
                trails[i].run();
            }
        }
        if(spawnCounter == 0){
            trails[nextTrail].show(x, y);
            spawnCounter = Trail.maxLife / trails.length;
            nextTrail++;
            if(nextTrail == trails.length){
                nextTrail = 0;
            }
        }
        spawnCounter--;
        x += xv;
        y += yv;
        double a = Math.atan2(my - y, mx - x);
        xv += acceleration * Math.cos(a);
        yv += acceleration * Math.sin(a);
    }
    void draw(Graphics g){
//        for(int i = 0; i < trails.length; i++){
//            if(trails[i].life > 0){
//                trails[i].draw1(g);
//            }
//        }
        for(int i = 0; i < trails.length; i++){
            if(trails[i].life > 0){
                trails[i].draw2(g);
            }
        }
        g.setColor(Color.WHITE);
        g.fillOval((int)(x - size / 2.), (int)(y - size / 2.), size, size);
    }
}