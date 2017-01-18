import java.awt.Graphics;

interface Entity{
    abstract void paint(Graphics g);
    abstract void run(GamePanel panel);
}
