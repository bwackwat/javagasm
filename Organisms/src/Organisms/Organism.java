package Organisms;

import java.awt.Color;
import java.awt.Graphics;
import java.util.Random;

class Organism implements Entity {

    private double x;
    private double y;
    private double speed = 1 * Main.SPEED;
    private final int maturitySize = 10;
    private int size = 8;
    private double angle = Math.random() * Math.PI * 2;
    private final double angleRate = 0 * Main.SPEED;
    private final int maxHealth = (int) (15 * 100 / Main.SPEED);
    private int health = maxHealth;
    private int age = 0;
    private final int maxAgeCounter = (int) (100 / Main.SPEED);
    private int ageCounter = maxAgeCounter;
    private boolean exists = false;
    private final boolean male = new Random().nextBoolean();
    private final Color maleColor = Color.RED;
    private final Color femaleColor = Color.YELLOW;
    private final Color color = male ? maleColor : femaleColor;
    private boolean mature = false;
    private final int maturity = 3;
    private final int maxCapableOffspring = 3;
    private int capableOffspring = 0;
    private final int sightRange = 75;
    private final int sightAngluarRange = 120;
    private final Color sightViewColor = new Color(255, 255, 0, 50);

    Organism() {
    }

    Organism(double x, double y) {
        this.x = x;
        this.y = y;
        exists = true;
    }

    private double getDistanceFrom(Organism o) {
        return (this.x - o.getX()) * (this.x - o.getX()) + (this.y - o.getY()) * (this.y - o.getY());
    }

    public void paint(Graphics g) {
        if (!exists || (male && !Main.VIEWMALES) || (!male && !Main.VIEWFEMALES)) {
            return;
        }
        if (Main.VIEWSIGHT) {
            g.setColor(sightViewColor);
            g.fillPolygon(new int[]{(int) x, (int) (x + sightRange * Math.cos(angle - sightAngluarRange)), (int) (x + sightRange * Math.cos(angle + sightAngluarRange))}, new int[]{(int) y, (int) (y + sightRange * Math.sin(angle - sightAngluarRange)), (int) (y + sightRange * Math.sin(angle + sightAngluarRange))}, 3);
        }
        g.setColor(color);
        g.fillOval((int) (x - size / 2.), (int) (y - size / 2.), size, size);
        g.setColor(Color.BLACK);
        g.drawOval((int) (x - size / 2.), (int) (y - size / 2.), size, size);
        if (Main.VIEWAGES) {
            g.drawString(age + "", (int) x, (int) y - size);
        }
    }

    public void run(GamePanel panel) {
        if (!exists) {
            return;
        }
        ageCounter--;
        if (ageCounter <= 0) {
            age++;
            if (age == maturity) {
                mature = true;
                size = maturitySize;
                capableOffspring = (int) (Math.random() * (maxCapableOffspring));
            }
            if (mature) {
                if (capableOffspring < 1) {
                    capableOffspring = (int) (Math.random() * (maxCapableOffspring));
                }
            }
            ageCounter = maxAgeCounter;
        }
        if (health < 0) {
            exists = false;
            panel.addEntity(new OrganismCorpse(this));
        } else {
            health--;
            x += speed * Math.cos(angle);
            y += speed * Math.sin(angle);
            angle += (Math.random() - 0.5) * angleRate;
            if (x - size / 2 < 0) {
                x = size / 2;
                angle = Math.atan2(speed * Math.sin(angle), speed * Math.cos(angle + Math.PI));
            } else if (x + size / 2 > panel.getWidth()) {
                x = panel.getWidth() - size / 2;
                angle = Math.atan2(speed * Math.sin(angle), speed * Math.cos(angle + Math.PI));
            }
            if (y - size / 2 < 0) {
                y = size / 2;
                angle = Math.atan2(speed * Math.sin(angle + Math.PI), speed * Math.cos(angle));
            } else if (y + size / 2 > panel.getHeight()) {
                y = panel.getHeight() - size / 2;
                angle = Math.atan2(speed * Math.sin(angle + Math.PI), speed * Math.cos(angle));
            }
            for (int i = 0; i < panel.getEntities().length; i++) {
                if (panel.getEntities()[i] instanceof Organism) {
                    Organism o = (Organism) panel.getEntities()[i];
                    if (o != this && o.isExists() && capableOffspring > 0 && o.getCapableOffspring() > 0 && this.getDistanceFrom(o) < size / 2. + o.getSize() / 2.) {
                        panel.addEntity(new Organism(this.getX(), this.getY()));
                        capableOffspring--;
                        o.setCapableOffspring(o.getCapableOffspring() - 1);
                    }
                } else {
                    continue;
                }

            }
        }
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getCapableOffspring() {
        return capableOffspring;
    }

    public void setCapableOffspring(int capableOffspring) {
        this.capableOffspring = capableOffspring;
    }

    public boolean isMature() {
        return mature;
    }

    public void setMature(boolean mature) {
        this.mature = mature;
    }

    public boolean isExists() {
        return exists;
    }

    public void setExists(boolean exists) {
        this.exists = exists;
    }
}
