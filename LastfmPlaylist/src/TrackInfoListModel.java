import java.util.ArrayList;

import javax.swing.ListModel;
import javax.swing.event.ListDataListener;

public class TrackInfoListModel implements ListModel<RecentTrackInfo> {
	private ArrayList<RecentTrackInfo>	list	= new ArrayList<RecentTrackInfo>();
	
	public void addListDataListener(ListDataListener l) {
	}
	
	public void addElement(RecentTrackInfo s) {
		this.list.add(s);
	}
	
	public void removeElement(int i) {
		this.list.remove(i);
	}
	
	public RecentTrackInfo getElementAt(int index) {
		return this.list.get(index);
	}
	
	public int getSize() {
		return this.list.size();
	}
	
	public void removeListDataListener(ListDataListener l) {
	}
	
}
