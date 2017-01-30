package Particles;

import java.awt.Color;
import java.awt.Graphics;

public class ParticleEmitter{
    private double x = 0;
    private double y = 0;

    private double vel = 0;
    
    private int size = 0;
    private int particleLife = 0;
    private int life = 0;
    private int maxLife = 0;
    private double vvar = 0;
    private double svar = 0;
    private int rate = 0;
    private int maxParticles = 0;
    private double angleRate = 0;
    private double angle1 = 0;
    private double angle2 = 0;
    private Color colors[];
    
    private Particle p[];
    private int particleCounter = 0;
    private int iterationCounter = 0;
    
    private boolean running = false;

    public ParticleEmitter(
                    double nvel,
                    double naccel,
                    int nsize,
                    int plife,
                    int nlife,
                    double nvvar,
                    double nsvar,
                    int nrate,
                    int nmax,
                    double nrangle,
                    double nangle1,
                    double nangle2,
                    Color c[]){
        vel = nvel;
        size = nsize;
        particleLife = plife;
        maxLife = nlife;
        vvar = nvvar;
        svar = nsvar;
        rate = nrate;
        maxParticles = nmax;
        p = new Particle[maxParticles];
        angleRate = nrangle;
        angle1 = nangle1;
        angle2 = nangle2;
        colors = c;
        for(int i = 0; i < maxParticles; i++){
            p[i] = new Particle(naccel, colors);
        }
    }
    public void set(double nx , double ny){
        x = nx;
        y = ny;
    }
    public void setAngle(double na){
        angle1 = na;
    }
    public void setVel(double nvel){
        vel = nvel;
    }
    public void stop(){
        running = false;
    }
    public void start(double nx , double ny){
        x = nx;
        y = ny;
        life = maxLife;
        running = true;
    }
    public void run(){
        if(life != 0 && running){
            iterationCounter++;
            life--;
            angle1 += angleRate;
            if(angle1 > Math.PI * 2){
                angle1 = 0;
            }
            if(iterationCounter >= rate){
                iterationCounter = 0;
                if(particleCounter == maxParticles)particleCounter = 0;
                p[particleCounter].show(x,
                                        y,
                                        vel,
                                        size,
                                        angle1,
                                        angle2,
                                        vvar,
                                        svar,
                                        particleLife);
                particleCounter++;
            }
        }
        for(int i = 0; i < maxParticles; i++){
            p[i].run();
        }
    }
    public void draw(Graphics g){
        for(int i = 0; i < maxParticles; i++){
            p[i].draw(g);
        }
    }
}