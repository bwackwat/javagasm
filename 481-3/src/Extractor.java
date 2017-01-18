import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.MessageDigest;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class Extractor {
	// api signature =
	// md5("api_keyxxxxxxxxmethodauth.getSessiontokenxxxxxxxmysecret")
	// sig = md5(api_key + API_KEY + auth.getSessiontoken + API_SECRET);
	public static final String		API_ROOT	= "http://ws.audioscrobbler.com/2.0/";
	// An example key:
	// public static final String API_KEY = "b25b959554ed76058ac220b7b2e0a026";
	// Jake's key:
	public static final String		API_KEY		= "8373fbb3c244a574832d84d0c4ca9ab5";
	public static final String		API_SECRET	= "4fa5f0ec49c0a36d36a515538138e4ed";
	public static String			API_SIG;
	
	private DocumentBuilderFactory	dbf			= DocumentBuilderFactory.newInstance();
	private DocumentBuilder			db;
	
	public Extractor() {
		String sig = "api_key" + API_KEY + "auth.getSessiontoken" + API_SECRET;
		System.out.println("Creating signature from: " + sig);
		try {
			Extractor.API_SIG = new String(MessageDigest.getInstance("MD5").digest((sig).getBytes()), "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(0);
		}
		System.out.println("Created signature: " + Extractor.API_SIG);
		
		try {
			this.db = dbf.newDocumentBuilder();
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		}
	}
	
	public String getToken() throws MalformedURLException, SAXException, IOException {
		System.out.println("Acquiring token.");
		
		String s = Extractor.API_ROOT + "?method=auth.gettoken" + "&api_key=" + Extractor.API_KEY + "&api_sig=" + Extractor.API_SIG;
		System.out.println("Requesting " + s);
		
		Document dom = this.db.parse(new URL(s).openStream());

		return dom.getElementsByTagName("token").item(0).getTextContent();
	}
	
	public String getSessionKey(String token) throws MalformedURLException, SAXException, IOException {
		System.out.println("Acquiring session key.");
		
		String s = Extractor.API_ROOT + "?method=auth.getsession" + "&api_key=" + Extractor.API_KEY + "&api_sig=" + Extractor.API_SIG + "&token="
				+ token;
		System.out.println("Requesting " + s);
		
		Document dom = this.db.parse(new URL(s).openStream());

		return dom.getElementsByTagName("key").item(0).getTextContent();
	}
	
	public String createPlaylist(String title, String description, String sk) throws MalformedURLException, IOException, SAXException {
		String s = Extractor.API_ROOT + "?method=playlist.create" + "&api_key=" + Extractor.API_KEY + "&api_sig=" + Extractor.API_SIG + "&sk=" + sk
				+ "&title=" + title.replace(' ', '+') + "&description=" + description.replace(' ', '+');
		System.out.println("Requesting " + s);
		
		Document dom = this.db.parse(new URL(s).openStream());

		return dom.getElementsByTagName("id").item(0).getTextContent();
	}
	
	public void addTrack(String playlist, String track, String artist, String sk) throws MalformedURLException, IOException {
		String s = Extractor.API_ROOT + "?method=playlist.addtrack" + "&api_key=" + Extractor.API_KEY + "&api_sig=" + Extractor.API_SIG + "&sk=" + sk
				+ "&track=" + track.replace(' ', '+') + "&artist=" + artist.replace(' ', '+') + "&playlistid=" + playlist;
		System.out.println("Requesting " + s);
		
		new URL(s).openStream();
	}
	
	public String[] getUserTopArtists(String user, int num) throws MalformedURLException, SAXException, IOException, ParserConfigurationException {
		System.out.println("Searching top artists for " + user + ".");
		String[] top;
		
		String s = Extractor.API_ROOT + "?method=user.gettopartists" + "&api_key=" + Extractor.API_KEY + "&user=" + user + "&limit=" + num;
		System.out.println("Requesting " + s);
		
		Document dom = this.db.parse(new URL(s).openStream());
		
		NodeList names = dom.getElementsByTagName("name");
		
		top = new String[names.getLength()];
		System.out.println("Found " + top.length + " top artists for " + user + "!");
		
		for (int i = 0; i < top.length; i++) {
			top[i] = names.item(i).getTextContent();
		}
		
		return top;
	}
	
	public TopTrackInfo[] getUserTopTracks(String user, int num) throws MalformedURLException, SAXException, IOException,
			ParserConfigurationException {
		System.out.println("Searching top tracks for " + user + ".");
		TopTrackInfo[] top;
		
		String s = Extractor.API_ROOT + "?method=user.gettoptracks" + "&api_key=" + Extractor.API_KEY + "&user=" + user + "&limit=" + num;
		System.out.println("Requesting " + s);
		
		Document dom = this.db.parse(new URL(s).openStream());
		
		NodeList tracks = dom.getElementsByTagName("track");
		NodeList playcount = dom.getElementsByTagName("playcount");
		NodeList artist = dom.getElementsByTagName("artist");
		
		top = new TopTrackInfo[tracks.getLength()];
		System.out.println("Found " + top.length + " top artists for " + user + "!");
		
		for (int i = 0; i < top.length; i++) {
			top[i] = new TopTrackInfo(tracks.item(i).getAttributes().getNamedItem("name").getTextContent(), artist.item(i).getChildNodes().item(0)
					.getTextContent(), Integer.parseInt(playcount.item(i).getTextContent()));
		}
		
		return top;
	}
	
	public String[] getSimilarArtists(String artist, int num) throws MalformedURLException, SAXException, IOException, ParserConfigurationException {
		artist = artist.replace(' ', '+');
		System.out.println("Searching similar artists for " + artist + ".");
		String[] top;
		
		String s = Extractor.API_ROOT + "?method=artist.getsimilar" + "&api_key=" + Extractor.API_KEY + "&artist=" + artist + "&limit=" + num;
		System.out.println("Requesting " + s);
		
		Document dom = this.db.parse(new URL(s).openStream());
		
		NodeList names = dom.getElementsByTagName("name");
		
		top = new String[names.getLength()];
		System.out.println("Found " + top.length + " similar artists for " + artist + "!");
		
		for (int i = 0; i < top.length; i++) {
			top[i] = names.item(i).getTextContent();
		}
		
		return top;
	}
	
	public RecentTrackInfo[] getUserRecentTracks(String user, int num) throws MalformedURLException, SAXException, IOException,
			ParserConfigurationException {
		System.out.println("Searching recent tracks for " + user + ".");
		RecentTrackInfo[] top = null;
		int next = 0;
		Document dom;
		NodeList names;
		NodeList artists;
		NodeList dates;
		String s;
		int page = 0;
		
		while (true) {
			s = Extractor.API_ROOT + "?method=user.getrecenttracks" + "&api_key=" + Extractor.API_KEY + "&user=" + user + "&limit=200&page=" + page;
			System.out.println("Requesting " + s);
			
			dom = this.db.parse(new URL(s).openStream());
			
			if (page == 0) {
				int n = Integer.parseInt(dom.getElementsByTagName("recenttracks").item(0).getAttributes().getNamedItem("total").getNodeValue());
				if (n < num) {
					num = n;
				}
				top = new RecentTrackInfo[num];
			}
			
			names = dom.getElementsByTagName("name");
			artists = dom.getElementsByTagName("artist");
			dates = dom.getElementsByTagName("date");
			
			for (int i = 0; i < names.getLength(); i++) {
				top[next] = new RecentTrackInfo(names.item(i).getTextContent(), artists.item(i).getTextContent(), Integer.parseInt(dates.item(i)
						.getAttributes().getNamedItem("uts").getNodeValue()), dates.item(i).getTextContent());
				next++;
				if (next == top.length) {
					break;
				}
			}
			if (next == top.length) {
				break;
			}
			
			page++;
		}
		
		System.out.println("Found " + top.length + " recent tracks for " + user + "!");
		return top;
	}
}