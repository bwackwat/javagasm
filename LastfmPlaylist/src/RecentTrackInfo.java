public class RecentTrackInfo {
	private String	track;
	private String	artist;
	private String	album;
	private int		dateUTS;
	private String	date;
	
	public RecentTrackInfo(String name, String artist, int dateUTS, String date) {
		this.track = name;
		this.artist = artist;
		this.dateUTS = dateUTS;
		this.date = date;
	}
	
	public String getTrack() {
		return track;
	}
	
	public void setTrack(String track) {
		this.track = track;
	}
	
	public String getArtist() {
		return artist;
	}
	
	public void setArtist(String artist) {
		this.artist = artist;
	}
	
	public String getAlbum() {
		return album;
	}
	
	public void setAlbum(String album) {
		this.album = album;
	}
	
	public String toString() {
		return this.track + " - " + this.artist;
	}
}