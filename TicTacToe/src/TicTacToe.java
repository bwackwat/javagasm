import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Toolkit;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JFrame;
import javax.swing.JPanel;

class TicTacToe extends Thread implements MouseListener{

    private ParticleEmitter pe = new ParticleEmitter(
            0.003, //velocity
            -0.0000001, //acceleration
            10, //size
            60000, //particle life
            60000, //emitter life (-1 is infinite)
            0, //velocity variation (0 - 1)
            1, //size variation (0 - 1)
            200, //rate of particles (iterations before next particle)
            100, //maximum particles possible (will not be replaced)
            0, //new rate of angle change
            0, //angle1
            Math.PI, //angle2          angle goes from angle1 - angle2 to angle1 + angle2
            new Color[]{new Color(50, 150, 0, 0), new Color(100, 200, 0, 255), new Color(200, 255, 0, 255)});
    private final JFrame f = new JFrame("Tic Tac Toe");
    private final int fw = 800;
    private final int fh = 800;

    private final int sw = (int)Toolkit.getDefaultToolkit().getScreenSize().getWidth();
    private final int sh = (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight();

    private final JPanel p = new JPanel(){
        private final Color bg = Color.WHITE;
        @Override
        public void paint(Graphics g){
            g.setColor(bg);
            g.fillRect(0, 0, f.getWidth(), f.getHeight());

            g.setColor(Color.BLACK);
            g.drawRect(0, 0, f.getWidth(), f.getHeight());
            g.drawRect(f.getWidth() / 3, 0, f.getWidth() / 3, f.getHeight() / 3);
            g.drawRect(0, f.getHeight() / 3, f.getWidth() / 3, f.getHeight() / 3);
            g.drawRect(f.getWidth() * 2 / 3, f.getHeight() / 3, f.getWidth() / 3, f.getHeight() / 3);
            g.drawRect(f.getWidth() / 3, f.getHeight() * 2 / 3, f.getWidth() / 3, f.getHeight() / 3);

            for(byte i = 0; i < 3; i++){
                for(byte i0  = 0; i0 < 3; i0++){
                    if(o[i][i0] == 0){
                        continue;
                    }else if(o[i][i0] == 1){
                        g.setColor(Color.BLUE);
                        g.drawOval(i * f.getWidth() / 3 + 1, i0 * f.getHeight() / 3 + 1, f.getWidth() / 3 - 1, f.getHeight() / 3 - 1);
                    }else{
                        g.setColor(Color.RED);
                        g.drawLine(i * f.getWidth() / 3, i0 * f.getHeight() / 3, (i + 1) * f.getWidth() / 3, (i0 + 1) * f.getHeight() / 3);
                        g.drawLine((i + 1) * f.getWidth() / 3, i0 * f.getHeight() / 3, i * f.getWidth() / 3, (i0 + 1) * f.getHeight() / 3);
                    }
                }
            }

            if(over){
                g.setColor(Color.BLACK);
                g.setFont(end);
                if(winner != 3){
                    g.drawString("Player " + winner + " wins!", 100, 100);
                }else{
                    g.drawString("No one wins!", 100, 100);
                }
                g.drawString("(click to restart)", 100, 150);
            }
            pe.draw(g);
        }
    };
    private Font end = new Font("Serif", Font.BOLD, 40);

    private byte o[][] = new byte[3][3];
    private boolean turn = true;
    private boolean over = false;
    private byte winner = 0;

    private int mx = 0;
    private int my = 0;

    public static void main(String[] s){
        new TicTacToe();
    }
    TicTacToe(){
        for(byte i = 0; i < 3; i++){
            for(byte i0  = 0; i0 < 3; i0++){
                o[i][i0] = 0;
            }
        }

        f.setBounds(100, 100, fw, fh);
        f.setResizable(false);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.add(p);
        f.addMouseListener(this);

        start();

        f.setVisible(true);
    }
    private byte checkWinner(){
        for(byte i = 0; i < 3; i++){
            if(o[i][0] == o[i][1] && o[i][0] == o[i][2]){
                return o[i][0];
            }
        }
        for(byte i = 0; i < 3; i++){
            if(o[0][i] == o[1][i] && o[0][i] == o[2][i]){
                return o[0][i];
            }
        }
        if(o[0][0] == o[1][1] && o[0][0] == o[2][2]){
            return o[0][0];
        }
        if(o[0][2] == o[1][1] && o[0][2] == o[2][0]){
            return o[0][2];
        }
        for(byte i = 0; i < 3; i++){
            for(byte i0  = 0; i0 < 3; i0++){
                if(o[i][i0] == 0){
                    return 0;
                }
            }
        }
        return 3;
    }
    @Override
    public void run(){
        while(true){
            p.repaint();
            winner = checkWinner();
            pe.run();
            if(winner != 0){
                over = true;
            }
            try{
                sleep(0);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
    public void mouseClicked(MouseEvent e){
        mx = e.getX();
        my = e.getY();
        pe.start(mx, my);
        if(over){
            for(byte i = 0; i < 3; i++){
                for(byte i0  = 0; i0 < 3; i0++){
                    o[i][i0] = 0;
                }
            }
            turn = true;
            over = false;
            winner = 0;
            return;
        }
        for(byte i = 0; i < 3; i++){
            for(byte i0  = 0; i0 < 3; i0++){
                if(mx > i * f.getWidth() / 3. &&
                    mx < (i + 1) * f.getWidth() / 3. &&
                    my > i0 * f.getHeight()  / 3. &&
                    my < (i0 + 1) * f.getHeight() / 3. &&
                    o[i][i0] == 0){
                    if(turn){
                        o[i][i0] = 1;
                    }else{
                        o[i][i0] = 2;
                    }
                    turn = !turn;
                }
            }
        }
    }
    public void mousePressed(MouseEvent e){}
    public void mouseReleased(MouseEvent e){}
    public void mouseEntered(MouseEvent e){}
    public void mouseExited(MouseEvent e){}
}
