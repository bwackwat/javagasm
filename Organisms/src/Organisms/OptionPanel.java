package Organisms;

import java.awt.Graphics;
import java.awt.Rectangle;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

class OptionPanel extends RunnablePanel implements MouseListener, KeyListener {

    private Rectangle[] buttons = new Rectangle[4];

    OptionPanel(){
        this.addMouseListener(this);
        new PanelThread(this);
    }

    @Override
    public void paint(Graphics g){

    }

    public void run(){

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
        if (e.getKeyCode() == KeyEvent.VK_F1) {
            Main.PAUSE = !Main.PAUSE;
        } else if (e.getKeyCode() == KeyEvent.VK_F2) {
            Main.VIEWGRID = !Main.VIEWGRID;
        } else if (e.getKeyCode() == KeyEvent.VK_F3) {
            Main.VIEWAGES = !Main.VIEWAGES;
        } else if (e.getKeyCode() == KeyEvent.VK_F4) {
            Main.VIEWSIGHT = !Main.VIEWSIGHT;
        }
    }
}
