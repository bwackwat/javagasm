import Particles.ParticleEmitter;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Toolkit;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.awt.geom.AffineTransform;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.PrintStream;
import java.util.Scanner;
import javax.swing.JFrame;
import javax.swing.JPanel;

class Asteroids extends Thread implements KeyListener, MouseListener, MouseMotionListener{
    static final JFrame f = new JFrame("Asteroids");
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
            if(state == 0 || state == 1 || state == 3 || state == 4){
                Graphics2D g2 = (Graphics2D)g.create();
                AffineTransform t = new AffineTransform();
                t.rotate(angle, x, y);
                g2.transform(t);
                g2.setColor(Color.WHITE);
//                g2.drawRect((int)x - shipSize / 2, (int)y - shipSize / 2, shipSize, shipSize);
                g2.drawLine((int)x - shipSize / 2, (int)y - shipSize / 2, (int)x + shipSize, (int)y);
                g2.drawLine((int)x - shipSize / 2, (int)y - shipSize / 2 + shipSize, (int)x + shipSize, (int)y);
                g2.drawLine((int)x - shipSize / 2, (int)y - shipSize / 2, (int)x - shipSize / 2, (int)y + shipSize / 2);
                for(int i = 0; i < maxBullets; i++){
                    if(bullets[i].life > 0){
                        bullets[i].draw(g);
                    }
                }
            }
            if(state == 3 || state == 4){
                g.setFont(new Font("Arial", Font.BOLD, 30));
                if(highlight == 4){
                    g.setColor(Color.GRAY);
                    g.drawString("Back", f.getWidth() - 97, 43);
                }
                g.setColor(Color.WHITE);
                g.drawString("Back", f.getWidth() - 100, 40);
            }
            if(state == 3){
                g.setFont(new Font("Arial", Font.BOLD, 70));
                g.setColor(Color.GRAY);
                g.drawString("INSTRUCTIONS", 23, 73);
                g.setColor(Color.WHITE);
                g.drawString("INSTRUCTIONS", 20, 70);
                g.setFont(new Font("ARIAL", Font.PLAIN, 19));
                g.drawString("Control your ship with the arrow keys; avoid the asteroids.", 20, 110);
                g.drawString("Use the spacebar to fire a bullet; there can only be " + maxBullets + " bullets at any time.", 20, 135);
                g.drawString("Destroy all of the asteroids on every level.", 20, 160);
                g.drawString("Once an asteroid is destroyed, it will split into two smaller asteroids if it is big enough.", 20, 185);
                g.drawString("You will gain one life at the completion of each level, however, at zero lives you will lose.", 20, 210);
            }else if(state == 0){
                g.setFont(new Font("Arial", Font.BOLD, 70));
                g.setColor(Color.GRAY);
                g.drawString("ASTEROIDS", 23, 73);
                g.setColor(Color.WHITE);
                g.drawString("ASTEROIDS", 20, 70);
                g.setFont(new Font("Arial", Font.BOLD, 40));
                g.setColor(Color.GRAY);
                if(highlight == 1){
                    g.drawString("New Game", 23, 143);
                }else if(highlight == 2){
                    g.drawString("Instructions", 23, 193);
                }else if(highlight == 3){
                    g.drawString("Highscores", 23, 243);
                }
                g.setColor(Color.WHITE);
                g.drawString("New Game", 20, 140);
                g.drawString("Instructions", 20, 190);
                g.drawString("Highscores", 20, 240);
            }else if(state == 1 || state == 2 || state == 5){
                for(int i = 0; i < maxAsteroids; i++){
                    if(asteroids[i].alive){
                        asteroids[i].draw(g);
                    }
                }
                g.setFont(new Font("Arial", Font.BOLD, 30));
                g.drawString("Score: " + score, 5, 30);
                g.drawString("Level " + level, f.getWidth() / 2 - 53, 30);
                g.drawString("Lives: " + lives, f.getWidth() - 125, 30);
            }else if(state == 2){
                g.setFont(new Font("Arial", Font.BOLD, 30));
                g.drawString("Lives: " + lives, f.getWidth() - 100, 30);
                g.drawString("Score: " + score, 5, 30);
            }else if(state == 4){
                g.setFont(new Font("Arial", Font.BOLD, 70));
                g.setColor(Color.GRAY);
                g.drawString("HIGHSCORES", 23, 73);
                g.setColor(Color.WHITE);
                g.drawString("HIGHSCORES", 20, 70);
                try{
                    Scanner s = new Scanner(new FileReader(highscoresFile));
                    g.setFont(new Font("Arial", Font.BOLD, 30));
                    for(int i = 0; i < numScores; i++){
                        g.drawString((i + 1) + ". " + names[i] + " - " + scores[i], 30, 120 + i * 30);
                    }
                }catch(FileNotFoundException e){
                    System.out.println(e);
                }
            }
            if(state == 2 || state == 5){
                g.setFont(new Font("Arial", Font.BOLD, 70));
                g.setColor(Color.GRAY);
                g.drawString("GAME OVER", f.getWidth() / 2 - 215, f.getHeight() / 4);
                g.setColor(Color.WHITE);
                g.drawString("GAME OVER", f.getWidth() / 2 - 218, f.getHeight() / 4 - 3);
                g.setFont(new Font("Arial", Font.BOLD, 40));
                if(highlight == 6){
                    g.setColor(Color.GRAY);
                    g.drawString("Main Menu", f.getWidth() / 2 - 102, f.getHeight() - 42);
                }
                g.setColor(Color.WHITE);
                g.drawString("Main Menu", f.getWidth() / 2 - 105, f.getHeight() - 45);
            }
            if(state == 2){
                g.setFont(new Font("Arial", Font.BOLD, 40));
                g.setColor(Color.GRAY);
                g.drawString("No Highscore.", f.getWidth() / 2 - 127, f.getHeight() / 4 + 78);
                g.setColor(Color.WHITE);
                g.drawString("No Highscore.", f.getWidth() / 2 - 130, f.getHeight() / 4 + 75);
            }
            if(state == 5){
                g.setFont(new Font("Arial", Font.BOLD, 40));
                g.setColor(Color.GRAY);
                g.drawString("New Highscore!", f.getWidth() / 2 - 157, f.getHeight() / 4 + 53);
                g.setColor(Color.WHITE);
                g.drawString("New Highscore!", f.getWidth() / 2 - 160, f.getHeight() / 4 + 50);
                g.setFont(new Font("Arial", Font.BOLD, 30));
                g.setColor(Color.GRAY);
                g.drawString("Enter your name below and submit:", f.getWidth() / 2 - 257, f.getHeight() / 4 + 103);
                g.setColor(Color.WHITE);
                g.drawString("Enter your name below and submit:", f.getWidth() / 2 - 260, f.getHeight() / 4 + 100);
                g.setColor(Color.BLACK);
                g.fillRect(100, f.getHeight() / 4 + 130, f.getWidth() - 200, 50);
                g.setColor(Color.WHITE);
                g.drawRect(100, f.getHeight() / 4 + 130, f.getWidth() - 200, 50);
                g.drawString(name, 110, f.getHeight() / 4 + 170);
                if(highlight == 5){
                    g.setColor(Color.GRAY);
                    g.drawString("Submit", f.getWidth() / 2 - 52, f.getHeight() / 4 + 223);
                }
                g.setColor(Color.WHITE);
                g.drawString("Submit", f.getWidth() / 2 - 55, f.getHeight() / 4 + 220);
            }
            ce.draw(g);
            se.draw(g);
            if(state == 0 || state == 3 || state == 4){
                be.draw(g);
            }
        }
    };
    private boolean keys[] = new boolean[256];

    private int mx = 0;
    private int my = 0;
    private boolean mc = false;

    private double x = fw / 2;
    private double y = fh / 2;
    private double xv = 0;
    private double yv = 0;
    private double angle = 0;

    private final int shipSize = 15;
    private final double velocity = .05;
    private final double turnRate = .05;

    private final String highscoresFile = "highscores.txt";
    private final int numScores = 15;
    private String names[] = new String[numScores];
    private int scores[] = new int[numScores];
    private String name = "";
    private int winningIndex = 0;

    private final int maxBullets = 5;
    private Bullet bullets[] = new Bullet[maxBullets];
    private int bulletCounter = 0;
    private boolean shot = false;

    private final int maxAsteroids = 100;
    private Asteroid asteroids[] = new Asteroid[maxAsteroids];
    private int asteroidCounter = 0;
    
    private int startLives = 2;
    private int lives = startLives;
    private int score = 0;
    private int level = 0;
    private int state = 0;
    private int highlight = 0;

//        public ParticleEmitter(
//                    double nvel,
//                    double naccel,
//                    int nsize,
//                    int plife,
//                    int nlife,
//                    double nvvar,
//                    double nsvar,
//                    int nrate,
//                    int nmax,
//                    double nrangle,
//                    double nangle1,
//                    double nangle2,
//                    Color c[]){
    private ParticleEmitter ce = new ParticleEmitter(
        5,
        0,
        3,
        30,
        30,
        1,
        0,
        1,
        40,
        0,
        0,
        Math.PI,
        new Color[]{Color.WHITE, new Color(255, 255, 255, 0)});

          /* 5,
            0,
            3,
            50,//how long
            -1,
            0.5,
            0,
            1,//how many per
            1000,//how many allowed
            0,
            0,
            TO
        0.001,
        0,
        3,
        100000,
        -1,
        0.5,
        0,
        1000,
        1000,
        0,
        0,
            */
    private ParticleEmitter se = new ParticleEmitter(
        5,
        0,
        3,
        50,
        -1,
        0.5,
        0,
        1,
        1000,
        0,
        0,
        Math.PI / 10,
        new Color[]{Color.WHITE, new Color(255, 255, 255, 0)});
    private ParticleEmitter be = new ParticleEmitter(
        10,
        0.0001,
        3,
        125,
        -1,
        0,
        0,
        5,
        40,
        0,
        0,
        Math.PI,
        new Color[]{Color.WHITE, new Color(255, 255, 255, 0)});

    public static void main(String[] s){
        new Asteroids();
    }
    Asteroids(){
        try{
            Scanner s = new Scanner(new FileReader(highscoresFile));
            for(int i = 0; i < numScores; i++){
                names[i] = s.nextLine();
                scores[i] = Integer.parseInt(s.nextLine());
            }
        }catch(FileNotFoundException e){
            System.out.println(e);
            try{
                PrintStream s = new PrintStream(new FileOutputStream(highscoresFile));
                for(int i = 0; i < numScores; i++){
                    s.println("Empty");
                    s.println(0);
                }
            }catch(FileNotFoundException e0){
                System.out.println(e0);
            }
        }

        be.start(fw / 2, fh / 2);

        for(int i = 0; i < maxBullets; i++){
            bullets[i] = new Bullet();
        }
        for(int i = 0; i < maxAsteroids; i++){
            asteroids[i] = new Asteroid();
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
    private boolean noAsteroids(){
        for(int i = 0; i < maxAsteroids; i++){
            if(asteroids[i].alive){
                return false;
            }
        }
        return true;
    }
    private int isWinner(){
        for(int i = 0; i < numScores; i++){
            if(score > scores[i]){
                return i;
            }
        }
        return -1;
    }
    @Override
    public void run(){
        new Thread(new Runnable() {
            @Override
            public void run() {
                while(true){
                    p.repaint();
                    try{
                        Thread.sleep(10);
                    }catch(InterruptedException e){
                        System.out.println(e);
                    }
                }
            }
        }).start();
        while(true){
            ce.run();
            se.run();
            if(state == 0 || state == 3 || state == 4){
                be.run();
            }
            if(state == 0 || state == 1 || state == 3 || state == 4){
                for(int i = 0; i < maxBullets; i++){
                    if(bullets[i].life > 0){
                        bullets[i].run();
                    }
                }
                x += xv;
                y += yv;
                if(x > f.getWidth()){
                    x = 0;
                }else if(x < 0){
                    x = f.getWidth();
                }
                if(y > f.getHeight()){
                    y = 0;
                }else if(y < 0){
                    y = f.getHeight();
                }
                if(keys[KeyEvent.VK_UP] && !keys[KeyEvent.VK_DOWN]){
                    xv += velocity * Math.cos(angle);
                    yv += velocity * Math.sin(angle);
                    se.start(x, y);
                    se.setAngle(angle - Math.PI);
                }else if(keys[KeyEvent.VK_DOWN] && !keys[KeyEvent.VK_UP]){
                    xv -= velocity * Math.cos(angle);
                    yv -= velocity * Math.sin(angle);
                    se.start(x, y);
                    se.setAngle(angle - Math.PI * 2);
                }else{
                    se.stop();
                }
                if(keys[KeyEvent.VK_SPACE] && !shot){
                    bullets[bulletCounter] = new Bullet(x, y, angle);
                    bulletCounter++;
                    if(bulletCounter == maxBullets){
                        bulletCounter = 0;
                    }
                    shot = true;
                }else if(!keys[KeyEvent.VK_SPACE]){
                    shot = false;
                }
                if(keys[KeyEvent.VK_LEFT] && !keys[KeyEvent.VK_RIGHT]){
                    angle -= turnRate;
                    if(angle < 0){
                        angle = Math.PI * 2;
                    }
                }else if(keys[KeyEvent.VK_RIGHT] && !keys[KeyEvent.VK_LEFT]){
                    angle += turnRate;
                    if(angle > Math.PI * 2){
                        angle = 0;
                    }
                }
            }
            if(state == 1 || state == 2 || state == 5){
                for(int i = 0; i < maxAsteroids; i++){
                    if(asteroids[i].alive){
                        asteroids[i].run();
                        int c = asteroids[i].explode(bullets);
                        if(c >= 0){
                            score += asteroids[i].size * 100;
                            bullets[c].life = 0;
                            ce.start(asteroids[i].x, asteroids[i].y);
                            splitAsteroid(i);
                        }
                        if(lives > 0 && (x - asteroids[i].x) * (x - asteroids[i].x) + (y - asteroids[i].y) * (y - asteroids[i].y) < (shipSize + asteroids[i].size * Asteroid.sizeMultiplier / 2) * (shipSize + asteroids[i].size * Asteroid.sizeMultiplier / 2)){
                            lives--;
                            ce.start(x, y);
                            if(lives < 1){
                                winningIndex = isWinner();
                                if(winningIndex >= 0){
                                    name = "";
                                    state = 5;
                                }else{
                                    state = 2;
                                }
                            }
                            splitAsteroid(i);
                            se.stop();
                            x = f.getWidth() / 2;
                            y = f.getHeight() / 2;
                            xv = 0;
                            yv = 0;
                            angle = 0;
                        }
                    }
                }
            }
            if(state == 1){
                if(noAsteroids()){
                    level++;
                    for(int i = 0; i < level; i++){
                        asteroids[i] = new Asteroid(f.getHeight() / 2 * Math.cos(Math.random() * Math.PI * 2) + f.getWidth() / 2, f.getHeight() / 2 * Math.sin(Math.random() * Math.PI * 2) + f.getHeight() / 2, 5);
                    }
                    lives++;
                }
            }
            try{
                Thread.sleep(10);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
    private void splitAsteroid(int i){
        asteroids[i].alive = false;
        if(asteroids[i].size > 1){
            asteroids[asteroidCounter] = new Asteroid(asteroids[i].x + asteroids[i].size / 2, asteroids[i].y  + asteroids[i].size / 2, asteroids[i].size - 1);
            asteroidCounter++;
            if(asteroidCounter == maxAsteroids){
                asteroidCounter = 0;
            }
            asteroids[asteroidCounter] = new Asteroid(asteroids[i].x + asteroids[i].size / 2, asteroids[i].y  + asteroids[i].size / 2, asteroids[i].size - 1);
            asteroidCounter++;
            if(asteroidCounter == maxAsteroids){
                asteroidCounter = 0;
            }
        }
    }
    public void keyTyped(KeyEvent e){
        if(state == 5){
            if(keys[KeyEvent.VK_SHIFT]){
                name += String.valueOf(e.getKeyChar()).toUpperCase();
            }else if(keys[KeyEvent.VK_BACK_SPACE]){
                if(name.length() > 0){
                    name = name.substring(0, name.length() - 1);
                }
            }else{
                name += e.getKeyChar();
            }
        }
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
        System.out.println(mx + "," + my);
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
        if(state != 1){
            ce.start(mx, my);
        }
        if(state == 0){
            if(mx > 15 && mx < 250){
                if(my > 120 &&  my < 165){
                    state = 1;
                    lives = startLives;
                    level = 0;
                    score = 0;
                    x = f.getWidth() / 2;
                    y = f.getHeight() / 2;
                    xv = 0;
                    yv = 0;
                    angle = 0;
                    for(int i = 0; i < maxAsteroids; i++){
                        asteroids[i] = new Asteroid();
                    }
                }else if(my > 175 &&  my < 220){
                    state = 3;
                }else if(my > 230 &&  my < 275){
                    state = 4;
                }
            }
        }
        if(state == 3 || state == 4){
            if(mx > f.getWidth() - 100 && mx < f.getWidth() - 25 && my > 35 && my < 65){
                state = 0;
            }
        }
        if(state == 5){
            if(mx > f.getWidth() / 2 - 55 && mx < f.getWidth() / 2 + 50 && my > f.getHeight() / 4 + 210 && my < f.getHeight() / 4 + 245){
                state = 0;
                if(!name.equals("")){
                    for(int i = numScores - 1; i > winningIndex; i--){
                        scores[i] = scores[i - 1];
                        names[i] = names[i - 1];
                    }
                    scores[winningIndex] = score;
                    names[winningIndex] = name;
                    try{
                        PrintStream s = new PrintStream(new FileOutputStream(highscoresFile));
                        for(int i = 0; i < numScores; i++){
                            s.println(names[i]);
                            s.println(scores[i]);
                        }
                    }catch(FileNotFoundException e0){
                        System.out.println(e0);
                    }
                }
            }
        }
        if(state == 2 || state == 5){
            if(mx > f.getWidth() / 2 - 105 && mx < f.getWidth() / 2 + 105 && my > f.getHeight() - 60 && my < f.getHeight() - 15){
                state = 0;
            }
        }
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
        if(state == 0){
            if(mx > 15 && mx < 250){
                if(my > 120 &&  my < 165){
                    highlight = 1;
                }else if(my > 175 &&  my < 220){
                    highlight = 2;
                }else if(my > 230 &&  my < 275){
                    highlight = 3;
                }
            }else{
                highlight = 0;
            }
        }
        if(state == 3 || state == 4){
            if(mx > f.getWidth() - 100 && mx < f.getWidth() - 25 && my > 35 && my < 65){
                highlight = 4;
            }else{
                highlight = 0;
            }
        }
        if(state == 5){
            if(mx > f.getWidth() / 2 - 55 && mx < f.getWidth() / 2 + 50 && my > f.getHeight() / 4 + 210 && my < f.getHeight() / 4 + 245){
                highlight = 5;
            }else{
                highlight = 0;
            }
        }
        if(state == 2 || state == 5){
            if(mx > f.getWidth() / 2 - 105 && mx < f.getWidth() / 2 + 105 && my > f.getHeight() - 60 && my < f.getHeight() - 15){
                highlight = 6;
            }
        }
    }
}