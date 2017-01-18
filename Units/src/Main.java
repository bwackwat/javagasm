import java.awt.Color;
import java.awt.Graphics;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;

class Main extends Thread implements KeyListener, MouseListener, MouseMotionListener{
    private boolean keys[] = new boolean[255];
    final int UNIT_COUNT = 10;
    final Color BACKGROUND = Color.GREEN;
    final double SPEEDRATE = 1000000;

    private int dx = 0;
    private int dy = 0;
    private int mx = 0;
    private int my = 0;
    private Rectangle drag = new Rectangle(0, 0, 0, 0);
    private boolean dragging = false;

    private JFrame f = new JFrame("Application");
    final int FRAME_WIDTH = (int)Toolkit.getDefaultToolkit().getScreenSize().getWidth();
    final int FRAME_HEIGHT = (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight();

    private JPanel p = new JPanel(){
        @Override
        public void paint(Graphics g){
            clear(g);
            units(g);
            if(dragging){
                int x = dx;
                int y = dy;
                int w = Math.abs(mx - dx);
                int h = Math.abs(my - dy);
                if(mx < dx){
                    x = mx;
                }
                if(my < dy){
                    y = my;
                }
                g.setColor(new Color(0, 0, 0, 25));
                g.fillRect(x, y, w, h);
                g.setColor(Color.BLACK);
                g.drawRect(x, y, w, h);
                drag.x = x;
                drag.y = y;
                drag.width = w;
                drag.height = h;
            }
            drawInterface(g);
        }
        void clear(Graphics g){
            g.setColor(BACKGROUND);
            g.fillRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
        }
        void units(Graphics g){
            for(int i = 0; i < UNIT_COUNT; i++){
                u[i].draw(g);
            }
        }
        void drawInterface(Graphics g){
            g.setColor(I_BG);
            g.fillRect(0, 0, I_LM, FRAME_HEIGHT);
            g.fillRect(FRAME_WIDTH - I_RM, 0, I_RM, FRAME_HEIGHT);
            g.fillRect(0, 0, FRAME_WIDTH, I_TM);
            g.fillRect(0, FRAME_HEIGHT - I_BM, FRAME_WIDTH, I_BM);
            g.setColor(Color.BLACK);
            g.drawRect(I_LM, I_TM, FRAME_WIDTH - I_RM - I_LM, FRAME_HEIGHT - I_BM - I_TM);
        }
    };
    private Unit u[] = new Unit[UNIT_COUNT];

    private final Color I_BG = Color.LIGHT_GRAY;
    private final int I_LM = (int)(FRAME_WIDTH / 40.);
    private final int I_RM = I_LM;
    private final int I_TM = I_LM;
    private final int I_BM = (int)(FRAME_HEIGHT / 4.5);

    public static void main(String[] a){new Main();}
    Main(){
        for(int i = 0; i < UNIT_COUNT; i++){
            u[i] = new Unit();
        }
        u[0].set(100, 100, 20, 400 / SPEEDRATE);
        u[1].set(200, 100, 10, 500 / SPEEDRATE);

        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setBounds(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
        f.setUndecorated(true);
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
            for(int i = 0; i < UNIT_COUNT; i++){
                u[i].act();
            }
            try{
                sleep(0);
            }catch(Exception e){
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
        if(e.getButton() == MouseEvent.BUTTON1){
            for(int i = 0; i < UNIT_COUNT; i++){
                if(!keys[KeyEvent.VK_SHIFT]){
                    u[i].selected = false;
                }
                if(u[i].ut.size * u[i].ut.size > (mx - u[i].x) * (mx - u[i].x) + (my - u[i].y) * (my - u[i].y) && u[i].visible){
                    u[i].selected = true;
                }
            }
        }
    }
    public void mousePressed(MouseEvent e){
        mx = e.getX();
        my = e.getY();
        if(e.getButton() == MouseEvent.BUTTON1){
            dx = mx;
            dy = my;
            dragging = true;
        }
        if(e.getButton() == MouseEvent.BUTTON3){
            for(int i = 0; i < UNIT_COUNT; i++){
                if(u[i].selected){
                    if(keys[KeyEvent.VK_SHIFT]){
                        u[i].addAct(1, mx, my);
                    }else{
                        u[i].act(1, mx, my);
                    }
                }
            }
        }
    }
    public void mouseReleased(MouseEvent e){
        dragging = false;
        mx = e.getX();
        my = e.getY();
        dx = 0;
        dy = 0;
    }
    public void mouseEntered(MouseEvent e){
    }
    public void mouseExited(MouseEvent e){
    }
    public void mouseDragged(MouseEvent e){
        mx = e.getX();
        my = e.getY();
        if(dragging){
            for(int i = 0; i < UNIT_COUNT; i++){
                if(!keys[KeyEvent.VK_SHIFT]){
                    u[i].selected = false;
                }
                if(drag.contains(u[i].x, u[i].y, u[i].ut.size, u[i].ut.size)){
                    u[i].selected = true;
                }
            }
        }
    }
    public void mouseMoved(MouseEvent e){
    }
}