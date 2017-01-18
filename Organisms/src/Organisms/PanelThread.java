package Organisms;


class PanelThread extends Thread {

    private final int SLEEP = 10;
    private RunnablePanel panel;

    PanelThread(RunnablePanel panel) {
        this.panel = panel;
        start();
    }

    @Override
    public void run() {
        while (true) {
            panel.repaint();
            panel.run();
            try {
                sleep(SLEEP);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
    }
}
