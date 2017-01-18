import java.awt.Color;
import java.awt.Graphics;

class Unit{
    double x = 0;
    double y = 0;
    
    //facing angle
    double fa = 0;
    //movement angle
    double ma = 0;

    UnitType ut = new UnitType();
    
    boolean selected = false;
    boolean visible = false;

    Action queue[] = new Action[100];

// WAYPOINTSSS
    private int W_SIZE = 4;
    private Color W_COLOR = Color.RED;
    
    Unit(){
        for(int i = 0; i < queue.length; i++){
            queue[i] = new Action(0);
        }
    }
    void set(double nx, double ny, int nsize, double nspeed){
        x = nx; y = ny;
        ut.set(nspeed, nsize);
        visible = true;
    }
    void addAct(int t, int x, int y){
        for(int i = 0; i < queue.length; i++){
            if(queue[i].type == 0){
                queue[i].type = t;
                queue[i].x = x;
                queue[i].y = y;
                return;
            }
        }
    }
    void act(int t, int x, int y){
        for(int i = 0; i < queue.length; i++){
            queue[i] = new Action(0);
        }
        queue[0].type = t;
        queue[0].x = x;
        queue[0].y = y;
    }
    void act(){
        if(queue[0].type == 1){
            ma = Math.atan2(queue[0].y - y, queue[0].x - x);
            if(Math.abs(ma - fa) <= ut.turnrate){
                x += ut.speed * Math.cos(fa);
                y += ut.speed * Math.sin(fa);
            }else{
                if(ma - fa < 0){
                    fa -= ut.turnrate;
                }else{
                    fa += ut.turnrate;
                }
            }
            if((queue[0].y - y) * (queue[0].y - y) + (queue[0].x - x) * (queue[0].x - x) <= ut.speed * ut.speed){
                for(int i = 0; i < queue.length - 1; i++){
                    queue[i] = queue[i + 1];
                }
                queue[queue.length - 1] = new Action(0);
            }
        }
    }
    void draw(Graphics g){
        int px = (int)(x - ut.size / 2);
        int py = (int)(y - ut.size / 2);
        if(selected){
            for(int i = 0; i < queue.length - 1; i++){
                if(queue[i].type != 0){
                    g.setColor(W_COLOR);
                    g.fillOval((int)(queue[i].x - W_SIZE / 2), (int)(queue[i].y - W_SIZE / 2), W_SIZE, W_SIZE);
                }
            }
            g.setColor(ut.selectedColor);
            g.fillOval(px - ut.selectedSize, py - ut.selectedSize, ut.size + ut.selectedSize * 2, ut.size + ut.selectedSize * 2);
        }
        g.setColor(ut.color);
        g.fillOval(px, py, ut.size, ut.size);
        g.setColor(Color.BLACK);
        g.drawLine((int)x, (int)y, (int)(x + (20 + ut.size) * Math.cos(fa)), (int)(y + (20 + ut.size) * Math.sin(fa)));
    }
}