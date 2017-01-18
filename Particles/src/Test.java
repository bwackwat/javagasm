
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
    private final JFrame f = new JFrame("Application");
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
            pe.draw(g);
        }
    };
    private boolean keys[] = new boolean[256];

    private int mx = 0;
    private int my = 0;
    private boolean mc = false;

//    ParticleEmitter(double nx,
//                    double ny,
//                    double nv,
//                    double na,
//                    int size,
//                    long plife,
//                    long nlife,
//                    double nvar,
//                    int nrate,
//                    byte nmax,
//                    double nrangle1,
//                    double nrangle2,
//                    double nangle,
//                    Color c[]){
    private ParticleEmitter pe = new ParticleEmitter(
        0.005, //velocity
        -0.000000025, //acceleration
        10, //size
        80000, //particle life
        80000, //emitter life (-1 is infinite)
        0.5, //velocity variation (0 - 1)
        0.5, //size variation (0 - 1)
        500, //rate of particles (iterations before next particle)
        50, //maximum particles possible (will not be replaced)
        0, //new rate of angle change
        0, //angle1
        Math.PI, //angle2          angle goes from angle1 - angle2 to angle1 + angle2
        new Color[]{Color.YELLOW, Color.ORANGE, Color.RED}); //color array

    public static void main(String[] s){
        new Main();
    }
    Main(){
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
    @Override
    public void run(){
        while(true){
            p.repaint();
            pe.run();
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
        pe.start(mx, my);
    }
    public void mouseEntered(MouseEvent e){
    }
    public void mouseExited(MouseEvent e){
    }
    public void mouseDragged(MouseEvent e){
        mx = e.getX();
        my = e.getY();
        pe.set(mx, my);
    }
    public void mouseMoved(MouseEvent e){
        mx = e.getX();
        my = e.getY();
    }
}