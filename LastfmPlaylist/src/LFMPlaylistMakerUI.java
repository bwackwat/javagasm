import java.awt.Desktop;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.net.URI;
import java.text.NumberFormat;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFormattedTextField;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;
import javax.swing.UIManager;
import javax.swing.WindowConstants;

public class LFMPlaylistMakerUI extends JFrame implements ActionListener, MouseListener {
	private static final long		serialVersionUID		= 1L;
	
	private ProgressWindow			p						= new ProgressWindow();
	private Extractor				ex						= new Extractor();
	
	private String					user;
	
	private JLabel					artistInfoLabel			= new JLabel("Double click any artist to use their music!");
	
	private JLabel					similarArtistsLabel		= new JLabel("Similar Artists: None Selected");
	private JScrollPane				similarArtistsPane;
	private JList<String>			similarArtists			= new JList<String>();
	
	private JButton					getSimilarArtists		= new JButton(">");
	
	private JLabel					topArtistsLabel			= new JLabel("Top Artists");
	private JScrollPane				topArtistsPane;
	private JList<String>			topArtists				= new JList<String>();
	
	private JLabel					selectedArtistsLabel	= new JLabel("Selected Artists");
	private JScrollPane				selectedArtistsPane;
	private StringListModel			selectedArtistsModel	= new StringListModel();
	private JList<String>			selectedArtists			= new JList<String>(this.selectedArtistsModel);
	
	private JCheckBox				useRecentTracks			= new JCheckBox("Use Recent Tracks");
	
	private JLabel					playlistTrackCountLabel	= new JLabel("Number of Tracks in Playlist:");
	private JFormattedTextField		playlistTrackCount		= new JFormattedTextField(NumberFormat.getInstance());
	
	private JButton					generatePlaylist		= new JButton("Generate Playlist");
	
	private JLabel					currentPlaylistLabel	= new JLabel("Current Playlist");
	private JScrollPane				currentPlaylistPane;
	private TrackInfoListModel		currentPlaylistModel	= new TrackInfoListModel();
	private JList<RecentTrackInfo>	currentPlaylist			= new JList<RecentTrackInfo>(this.currentPlaylistModel);
	
	private JButton					uploadPlaylist			= new JButton("Upload Playlist");
	
	public static void main(String[] args) {
		try {
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		boolean debug = JOptionPane.showConfirmDialog(null, "Do you want to run in debug mode?", "Debug Mode", JOptionPane.YES_NO_OPTION) == JOptionPane.YES_OPTION;
		if (debug) {
			new LFMPlaylistMakerUI(null, debug);
		} else {
			String u = "";
			while (u.isEmpty()) {
				u = JOptionPane.showInputDialog("Enter your LastFM username:");
			}
			new LFMPlaylistMakerUI(u, debug);
		}
	}
	
	public LFMPlaylistMakerUI(String user, boolean debug) {
		super("The Best Playlist: Creating an ideal playlist from your LastFM account's domain knowledge!");
		super.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
		super.setResizable(false);
		super.setLayout(null);
		super.setBounds(0, 0, ProgressWindow.INITIAL_SCREEN_SIZE.width, ProgressWindow.INITIAL_SCREEN_SIZE.height);
		
		this.user = user;
		
		if (!debug) {
			this.p.setVisible(true);
			try {
				this.topArtists = new JList<String>(this.ex.getUserTopArtists(this.user, 25));
			} catch (Exception e) {
				JOptionPane.showMessageDialog(null, e.getMessage());
			}
			this.p.setVisible(false);
		}
		
		this.artistInfoLabel.setBounds(10, 0, 300, 30);
		
		this.topArtistsLabel.setBounds(10, 30, 200, 30);
		this.topArtistsPane = new JScrollPane(this.topArtists);
		this.topArtistsPane.setBounds(10, 60, 200, 300);
		
		this.getSimilarArtists.setBounds(220, 185, 50, 50);
		
		this.similarArtistsLabel.setBounds(280, 30, 200, 30);
		this.similarArtistsPane = new JScrollPane(this.similarArtists);
		this.similarArtistsPane.setBounds(280, 60, 200, 300);
		
		this.selectedArtistsLabel.setBounds(490, 30, 200, 30);
		this.selectedArtistsPane = new JScrollPane(this.selectedArtists);
		this.selectedArtistsPane.setBounds(490, 60, 200, 300);
		
		this.useRecentTracks.setBounds(10, 370, 150, 30);
		
		this.playlistTrackCountLabel.setBounds(10, 400, 150, 30);
		this.playlistTrackCount.setBounds(160, 400, 150, 25);
		this.playlistTrackCount.setText("250");
		
		this.generatePlaylist.setBounds(10, 430, 150, 30);
		
		this.currentPlaylistLabel.setBounds(700, 30, 250, 30);
		this.currentPlaylistPane = new JScrollPane(this.currentPlaylist);
		this.currentPlaylistPane.setBounds(700, 60, 250, 300);
		
		this.uploadPlaylist.setBounds(700, 370, 150, 30);
		
		this.add(this.artistInfoLabel);
		this.add(this.topArtistsLabel);
		this.add(this.topArtistsPane);
		this.add(this.getSimilarArtists);
		this.add(this.similarArtistsLabel);
		this.add(this.similarArtistsPane);
		this.add(this.selectedArtistsLabel);
		this.add(this.selectedArtistsPane);
		this.add(this.useRecentTracks);
		this.add(this.playlistTrackCountLabel);
		this.add(this.playlistTrackCount);
		this.add(this.generatePlaylist);
		this.add(this.currentPlaylistLabel);
		this.add(this.currentPlaylistPane);
		this.add(this.uploadPlaylist);
		
		this.topArtists.addMouseListener(this);
		this.similarArtists.addMouseListener(this);
		this.selectedArtists.addMouseListener(this);
		this.getSimilarArtists.addActionListener(this);
		this.generatePlaylist.addActionListener(this);
		this.uploadPlaylist.addActionListener(this);
		
		this.setVisible(true);
	}
	
	private void generatePlaylist() {
		this.p.setVisible(true);
		try {
			int n = Integer.parseInt(this.playlistTrackCount.getText());
			this.currentPlaylist.setListData(this.ex.getUserRecentTracks(this.user, n));
			this.currentPlaylistLabel.setText("Current Playlist: " + n);
		} catch (Exception ex) {
			JOptionPane.showMessageDialog(null, ex.getMessage());
		}
		this.p.setVisible(false);
	}
	
	private void uploadPlaylist() {
		String token;
		try {
			token = this.ex.getToken();
		} catch (Exception e) {
			e.printStackTrace();
			JOptionPane.showMessageDialog(this, "An authentication token could not be gathered!");
			return;
		}
		
		String uri = "http://www.last.fm/api/auth/?api_key=" + Extractor.API_KEY + "&token=" + token;
		System.out.println("Attempting to open " + uri);
		try {
			Desktop.getDesktop().browse(new URI(uri));
			JOptionPane.showMessageDialog(this, "Please click Ok when you have given the application your permission");
		} catch (Exception e) {
			e.printStackTrace();
			JOptionPane.showMessageDialog(this, "Could not open your default browser to " + uri);
			return;
		}
		
		String sk;
		try {
			sk = this.ex.getSessionKey(token);
		} catch (Exception e) {
			e.printStackTrace();
			JOptionPane.showMessageDialog(this, "A session key could not be gathered!");
			return;
		}
		
		String pl;
		try {
			pl = this.ex.createPlaylist(JOptionPane.showInputDialog(this, "Enter the title of the playlist:"),
					JOptionPane.showInputDialog(this, "Enter a description of the playlist:"), sk);
		} catch (Exception e) {
			e.printStackTrace();
			JOptionPane.showMessageDialog(this, "Could not create the playlist.");
			return;
		}
		
		for (int i = 0; i < this.currentPlaylistModel.getSize(); i++) {
			try {
				this.ex.addTrack(pl, this.currentPlaylistModel.getElementAt(i).getTrack(), this.currentPlaylistModel.getElementAt(i).getArtist(), sk);
			} catch (Exception e) {
				e.printStackTrace();
				JOptionPane.showMessageDialog(this, "Could not add the track " + this.currentPlaylistModel.getElementAt(i).getTrack());
				return;
			}
		}
	}
	
	private void updateSimilarArtists() {
		this.p.setVisible(true);
		try {
			this.similarArtists.setListData(this.ex.getSimilarArtists(this.topArtists.getSelectedValue(), 25));
			this.similarArtistsLabel.setText("Similar Artists: " + this.topArtists.getSelectedValue());
		} catch (Exception ex) {
			JOptionPane.showMessageDialog(null, ex.getMessage());
		}
		this.p.setVisible(false);
	}
	
	public void dispose() {
		super.dispose();
		System.exit(0);
	}
	
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == this.getSimilarArtists) {
			this.updateSimilarArtists();
		} else if (e.getSource() == this.generatePlaylist) {
			this.generatePlaylist();
		} else if (e.getSource() == this.uploadPlaylist) {
			this.uploadPlaylist();
		}
	}
	
	public void mouseClicked(MouseEvent e) {
		if (e.getSource() == this.topArtists && e.getClickCount() == 2) {
			this.selectedArtistsModel.addElement(this.topArtists.getSelectedValue());
			this.selectedArtists.updateUI();
		} else if (e.getSource() == this.similarArtists && e.getClickCount() == 2) {
			this.selectedArtistsModel.addElement(this.similarArtists.getSelectedValue());
			this.selectedArtists.updateUI();
		} else if (e.getSource() == this.selectedArtists && e.getClickCount() == 2) {
			this.selectedArtistsModel.removeElement(this.selectedArtists.getSelectedIndex());
			this.selectedArtists.updateUI();
		}
	}
	
	public void mouseEntered(MouseEvent e) {
	}
	
	public void mouseExited(MouseEvent e) {
	}
	
	public void mousePressed(MouseEvent e) {
	}
	
	public void mouseReleased(MouseEvent e) {
	}
}