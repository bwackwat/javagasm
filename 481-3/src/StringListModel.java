import java.util.ArrayList;

import javax.swing.ListModel;
import javax.swing.event.ListDataListener;


public class StringListModel implements ListModel<String>{
	private ArrayList<String> list = new ArrayList<String>();
	
	public void addListDataListener(ListDataListener l) {
	}
	
	public void addElement(String s){
		this.list.add(s);
	}
	
	public void removeElement(int i){
		this.list.remove(i);
	}

	public String getElementAt(int index) {
		return this.list.get(index);
	}

	public int getSize() {
		return this.list.size();
	}

	public void removeListDataListener(ListDataListener l) {
	}
	
}
