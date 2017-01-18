public class TopTrackInfo {
	private String	track;
	private String	artist;
	private String	album;
	private int		playcount;
	
	public TopTrackInfo(String name, String artist, int playcount) {
		this.track = name;
		this.artist = artist;
		this.playcount = playcount;
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