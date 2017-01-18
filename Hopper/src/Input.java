import java.awt.event.KeyListener;
import java.awt.event.KeyEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.awt.event.MouseEvent;

public class Input implements KeyListener, MouseListener, MouseMotionListener{
    public boolean key[];
    public boolean pressed = false;
    public boolean moving = false;
    public int x = 0;
    public int y = 0;

    public Input(){
        key = new boolean[255];
    }
    public void keyPressed(KeyEvent e){
        key[e.getKeyCode()] = true;
    }
    public void keyReleased(KeyEvent e){
        key[e.getKeyCode()] = false;
    }
    public void keyTyped(KeyEvent e){
    }
    public void mouseEntered(MouseEvent e){
    }
    public void mouseExited(MouseEvent e){
    }
    public void mousePressed(MouseEvent e){
    }
    public void mouseReleased(MouseEvent e){
    }
    public void mouseClicked(MouseEvent e){
    }
    public void mouseMoved(MouseEvent e){
    }
    public void mouseDragged(MouseEvent e){
    }
}