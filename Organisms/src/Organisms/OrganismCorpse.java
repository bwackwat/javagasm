package Organisms;


import java.awt.Color;
import java.awt.Graphics;

class OrganismCorpse implements Entity {

    private double x;
    private double y;
    private int size;

    OrganismCorpse(Organism o){
        x = o.getX();
        y = o.getY();
        size = o.getSize();
    }

    public void paint(Graphics g) {
        if(Main.VIEWDEAD){
            g.setColor(Color.BLACK);
            g.drawOval((int) (x - size / 2.), (int) (y - size / 2.), size, size);
        }
    }

    public void run(GamePanel panel) {
    }
}
