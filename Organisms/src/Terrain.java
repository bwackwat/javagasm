import java.awt.Color;

class Terrain {

    static final int DIRT = 0;
    static final int GRASS = 1;
    static final int WATER = 2;
    static final int EMPTY = 3;
    private Color color = Color.GRAY;
    private double speedModifier = 1;
    private boolean walkable = true;
    private int type = EMPTY;

    public Terrain() {
    }

    public Terrain(int type) {
        this.type = type >= 0 && type <= 3 ? type : 3;
        setType();
    }

    private void setType() {
        if (type == DIRT) {
            color = new Color(150, 75, 0, 255);
            speedModifier = 0.5;
        } else if (type == GRASS) {
            color = Color.GREEN.darker();
        } else if (type == WATER) {
            color = Color.BLUE;
            walkable = false;
        }
    }

    public void generateFrom(Terrain t) {
        double r = Math.random();
        if (t.getType() == DIRT) {
            this.type = r < .85 ? DIRT : r < .95 ? GRASS : WATER;
        } else if (t.getType() == GRASS) {
            this.type = r < .85 ? GRASS : DIRT;
        } else if (t.getType() == WATER) {
            this.type = r < .80 ? WATER : DIRT;
        }
        setType();
    }

    public int getType() {
        return type;
    }

    public Color getColor() {
        return color;
    }
}
