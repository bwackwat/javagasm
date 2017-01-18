import java.awt.Color;
import java.awt.Graphics;
import java.awt.Toolkit;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;

class Main extends Thread implements KeyListener, MouseListener, MouseMotionListener{
    private final JFrame f = new JFrame("Orb Avoidance");
    private final int fw = 800;
    private final int fh = 600;

    private final int sw = (int)Toolkit.getDefaultToolkit().getScreenSize().getWidth();
    private final int sh = (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight();

    private final JPanel p = new JPanel(){
        private final Color bg = Color.BLACK;
        @Override
        public void paint(Graphics g){
            g.setColor(bg);
            g.fillRect(0, 0, f.getWidth(), f.getHeight());
            for(int i = 0; i < orbs.length; i++){
                if(orbs[i].alive){
                    orbs[i].draw(g);
                }
            }
            for(int i = 0; i < pups.length; i++){
                if(pups[i].alive){
                    pups[i].draw(g);
                }
            }
        }
    };
    private boolean keys[] = new boolean[256];

    private int mx = fw / 2;
    private int my = fh / 2;
    private boolean mc = false;

    private Orb orbs[] = new Orb[20];
    private int nextOrb = 0;
    private Powerup pups[] = new Powerup[10];
    private int nextPup = 0;
    
    public static void main(String[] s){
        new Main();
    }
    Main(){
        for(int i = 0; i < orbs.length; i++){
            orbs[i] = new Orb();
        }
        for(int i = 0; i < pups.length; i++){
            pups[i] = new Powerup();
        }

        f.setBounds(100, 100, fw, fh);
        f.setResizable(false);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setUndecorated(false);
        f.add(p);
        f.addKeyListener(this);
        f.addMouseListener(this);
        f.addMouseMotionListener(this);

        start();

        f.setVisible(true);
    }
    private boolean noOrbs(){
        for(int i = 0; i < orbs.length; i++){
            if(orbs[i].alive){
                return false;
            }
        }
        return true;
    }
    private boolean noPups(){
        for(int i = 0; i < pups.length; i++){
            if(pups[i].alive){
                return false;
            }
        }
        return true;
    }
    private void newOrb(double nx, double ny){
        double a = Math.random() * Math.PI * 2;
        orbs[nextOrb] = new Orb(nx, ny);
        nextOrb++;
        if(nextOrb == orbs.length){
            nextOrb = 0;
        }
    }
    private void newPup(){
        pups[nextPup] = new Powerup(((f.getWidth() - Orb.size * 2) * Math.random()) + Orb.size, ((f.getHeight() - Orb.size * 2) * Math.random()) + Orb.size);
        nextPup++;
        if(nextPup == pups.length){
            nextPup = 0;
        }
    }
    @Override
    public void run(){
        while(true){
            p.repaint();
            for(int i = 0; i < orbs.length; i++){
                if(orbs[i].alive){
                    orbs[i].run(mx, my);
                }
            }
            for(int i = 0; i < orbs.length; i++){
                for(int i0 = 0; i0 < pups.length; i0++){
                    if(orbs[i].alive && pups[i0].alive && (orbs[i].x - pups[i0].x) * (orbs[i].x - pups[i0].x) + (orbs[i].y - pups[i0].y) * (orbs[i].y - pups[i0].y) < Orb.size * Orb.size * 4){
                        orbs[i].alive = false;
                        pups[i0].alive = false;
                        for(int r = (int)(Math.random() * 2) + 2; r >= 0; r--){
                            newOrb(pups[i0].x, pups[i0].y);
                        }
                    }
                }
            }
            if(noOrbs()){
                newPup();
                newOrb(mx, my);
            }
            if(noPups()){
                newPup();
            }
            try{
                sleep(0);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
    public void keyTyped(KeyEvent e){
    }
    public void keyPressed(KeyEvent e){
        keys[e.getKeyCode()] = true;
    }
    public void keyReleased(KeyEvent e){
        keys[e.getKeyCode()] = false;
    }
    public void mouseClicked(MouseEvent e){
        mx = e.getX();
        my = e.getY();
    }
    public void mousePressed(MouseEvent e){
        mx = e.getX();
        my = e.getY();
        mc = true;
    }
    public void mouseReleased(MouseEvent e){
        mx = e.getX();
        my = e.getY();
        mc = false;
    }
    public void mouseEntered(MouseEvent e){
    }
    public void mouseExited(MouseEvent e){
    }
    public void mouseDragged(MouseEvent e){
        mx = e.getX();
        my = e.getY();
    }
    public void mouseMoved(MouseEvent e){
        mx = e.getX();
        my = e.getY();
    }
}