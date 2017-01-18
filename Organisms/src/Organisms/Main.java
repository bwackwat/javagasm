package Organisms;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Toolkit;
import javax.swing.JFrame;
import javax.swing.JPanel;

class Main extends JFrame {

    static final double SPEED = 1;
    static boolean PAUSE = false;
    static boolean VIEWGRID = false;
    static boolean VIEWAGES = false;
    static boolean VIEWSIGHT = false;
    static boolean VIEWDEAD = true;
    static boolean VIEWMALES = true;
    static boolean VIEWFEMALES = true;

    public static void main(String args[]) {
        new Main();
    }

    Main() {
        super("Organisms");
        this.setResizable(true);
        this.setBounds(0, 0, (int)Toolkit.getDefaultToolkit().getScreenSize().getWidth(), (int)Toolkit.getDefaultToolkit().getScreenSize().getHeight());
        this.setUndecorated(true);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel topPanel = new JPanel() {

            @Override
            public void paint(Graphics g) {
                g.setColor(Color.WHITE);
                g.fillRect(0, 0, this.getWidth(), this.getHeight());
            }
        };
        GamePanel gamePanel = new GamePanel(topPanel);
        topPanel.add(gamePanel);
        this.add(topPanel);
        this.addKeyListener(gamePanel);
        this.setVisible(true);
    }
}
