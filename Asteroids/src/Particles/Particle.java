package Particles;

import java.awt.Color;
import java.awt.Graphics;

class Particle{
    private double x = 0;
    private double y = 0;

    private double xv = 0;
    private double yv = 0;

    private double xa = 0;
    private double ya = 0;

    private double vel = 0;
    private double accel = 0;

    private int size = 0;

    private int life = 0;
    
    private int colorTimer = 0;
    private int timePerColor = 0;
    private int colorIndex = 0;
    
    private double red = 0;
    private double green = 0;
    private double blue = 0;
    private double alpha = 0;
    
    private double cr = 0;
    private double cg = 0;
    private double cb = 0;
    private double ca = 0;
    
    private Color colors[];

    Particle(double naccel, Color c[]){
        accel = naccel;
        colors = c;
    }
    void show(double nx,
              double ny,
              double nvel,
              int nsize,
              double nangle1,
              double nangle2,
              double vvar,
              double svar,
              int nlife){
        if(life < 1){
            x = nx;
            y = ny;
            vel = nvel - nvel * vvar + Math.random() * (nvel + nvel * vvar) * vvar;
            size = (int)(nsize - nsize * svar + Math.random() * (nsize + nsize * svar) * svar);
            double angle = nangle1 + (Math.random() * 2 - 1) * nangle2;
            xv = vel * Math.cos(angle);
            yv = vel * Math.sin(angle);
            xa = accel * Math.cos(angle);
            ya = accel * Math.sin(angle);
            life = nlife;
            timePerColor = (int)(1. * life / (colors.length - 1));
            colorIndex = 0;
        }
    }
    void set(double nx, double ny){
        x = nx;
        y = ny;
    }
    void run(){
        if(life > 0){
            xv += xa;
            yv += ya;
            x += xv;
            y += yv;
            if(colorTimer <= 0){
                colorTimer = timePerColor;
                if(colorIndex < colors.length - 1){
                    colorIndex++;
                }
                red = colors[colorIndex - 1].getRed();
                green = colors[colorIndex - 1].getGreen();
                blue = colors[colorIndex - 1].getBlue();
                alpha = colors[colorIndex - 1].getAlpha();
                cr = (colors[colorIndex].getRed() - colors[colorIndex - 1].getRed()) * 1. / timePerColor;
                cg = (colors[colorIndex].getGreen() - colors[colorIndex - 1].getGreen()) * 1. / timePerColor;
                cb = (colors[colorIndex].getBlue() - colors[colorIndex - 1].getBlue()) * 1. / timePerColor;
                ca = (colors[colorIndex].getAlpha() - colors[colorIndex - 1].getAlpha()) * 1. / timePerColor;
            }
            colorTimer--;
            red += cr;
            green += cg;
            blue += cb;
            alpha += ca;
            life--;
        }
    }
    void draw(Graphics g){
        if(life > 0){
            g.setColor(new Color((int)red, (int)green, (int)blue, (int)alpha));
            g.fillOval((int)(x - 1. * size / 2), (int)(y - 1. * size / 2), size, size);
        }
    }
}