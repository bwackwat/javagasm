import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JPanel;

class GamePanel extends RunnablePanel implements MouseListener, KeyListener {

    private Terrain[][] terrain = new Terrain[33][11];
    private final int TSIZE = 20;
    private final int EWIDTH = terrain.length * TSIZE;
    private final int EHEIGHT = terrain[0].length * TSIZE;
    private final int STARTING_ORGANISMS = 25;
    private Entity[] entities = new Entity[500];
    private int nextEntityIndex = 0;
    private int maxOrganismsAlive = 0;
    private int organismsAlive = 0;
    private JPanel topPanel;

    GamePanel(JPanel topPanel) {
        this.topPanel = topPanel;
        this.addMouseListener(this);
        restart();
        new PanelThread(this);
    }

    private void restart() {
        if (organismsAlive > maxOrganismsAlive) {
            maxOrganismsAlive = organismsAlive;
            System.out.println(maxOrganismsAlive);
        }
        organismsAlive = 0;

        for (int x = 0; x < terrain.length; x++) {
            for (int y = 0; y < terrain[x].length; y++) {
                terrain[x][y] = new Terrain();
            }
        }
        terrain[(int) (Math.random() * terrain.length)][(int) (Math.random() * terrain[0].length)] = new Terrain(Terrain.GRASS);

        for (int i = 0; i < entities.length; i++) {
            entities[i] = new Organism();
        }
        nextEntityIndex = 0;
        for (int i = 0; i < STARTING_ORGANISMS; i++) {
            addEntity(new Organism(Math.random() * EWIDTH, Math.random() * EHEIGHT));
        }
    }

    @Override
    public void paint(Graphics g) {
        this.setBounds(topPanel.getWidth() / 2 - EWIDTH / 2, topPanel.getHeight() / 2 - EHEIGHT / 2, EWIDTH, EHEIGHT);
        for (int x = 0; x < terrain.length; x++) {
            for (int y = 0; y < terrain[x].length; y++) {
                g.setColor(terrain[x][y].getColor());
                g.fillRect(x * TSIZE, y * TSIZE, TSIZE, TSIZE);
                if (Main.VIEWGRID) {
                    g.setColor(Color.BLACK);
                    g.drawRect(x * TSIZE, y * TSIZE, TSIZE, TSIZE);
                }
            }
        }
        g.setColor(Color.BLACK);
        g.drawRect(0, 0, EWIDTH - 1, EHEIGHT - 1);
        for (int i = 0; i < entities.length; i++) {
            entities[i].paint(g);
        }
    }

    public void run() {
        if (!Main.PAUSE) {
            boolean active = false;
            for (int i = 0; i < entities.length; i++) {
                entities[i].run(this);
                if (entities[i] instanceof Organism) {
                    Organism o = (Organism) entities[i];
                    if (o.isExists()) {
                        active = true;
                    }
                }
            }
            if (!active) {
                restart();
            }
        }
    }

    public void addEntity(Entity e) {
        entities[nextEntityIndex] = e;
        nextEntityIndex++;
        if (e instanceof Organism) {
            Organism o = (Organism) e;
            if (o.isExists()) {
                organismsAlive++;
            }
        }
    }

    @Override
    public int getWidth() {
        return EWIDTH;
    }

    @Override
    public int getHeight() {
        return EHEIGHT;
    }

    public Entity[] getEntities() {
        return entities;
    }

    public void setEntities(Entity[] entities) {
        this.entities = entities;
    }

    public void mouseClicked(MouseEvent e) {
    }

    public void mousePressed(MouseEvent e) {
    }

    public void mouseReleased(MouseEvent e) {
    }

    public void mouseEntered(MouseEvent e) {
    }

    public void mouseExited(MouseEvent e) {
    }

    public void keyTyped(KeyEvent e) {
    }

    public void keyPressed(KeyEvent e) {
    }

    public void keyReleased(KeyEvent e) {
    }
}
