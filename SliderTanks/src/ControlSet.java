/*
 *This class is used by the Tank class
 *to easily store keyboard statistics.
 *This includes whether it is being
 *pressed and what key actually activates
 *the said action.
 */
public class ControlSet
{
	public int myUpKey = 38;
	public int myLeftKey = 37;
	public int myRightKey = 39;
	public int myDownKey = 40;
	
	public int myShootKey = 32;
	
	public boolean myUpPress = false;
	public boolean myDownPress = false;
	public boolean myLeftPress = false;
	public boolean myRightPress = false;
	
	public boolean myShootPress = false;
	
	/*
	 *This method is only used twice, and
	 *replaces having to replace each key's
	 *assigned code seperately. Not very
	 *efficient due to the fact that the
	 *key codes are in no order whatsoever,
	 *and frankly, don't make any sense.
	 */
	public void setControls(int u, int l, int r, int d, int s)
	{
		myUpKey = u;
		myLeftKey = l;
		myRightKey = r;
		myDownKey = d;
		
		myShootKey = s;
	}
}