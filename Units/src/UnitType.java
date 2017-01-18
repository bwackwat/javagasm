import java.awt.Color;

class UnitType{
    double speed = 0;
    double turnrate = 0.00001;
    int size = 0;

    int selectedSize = 5;

    Color color = Color.BLACK;
    Color selectedColor = Color.BLUE;

    void set(double nspeed, int nsize){
        speed = nspeed;
        size = nsize;
    }
}