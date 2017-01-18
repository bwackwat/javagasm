/*
 * Programming Assignment 1 - Depth First Search
 * 
 * John Paul Hayes II
 * CPE 349 - Kearns
 * 4/23/2012
 */

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.LinkedList;
import java.util.Stack;

public class GraphDFS {
	
	public static String[]	tf	= new String[] { "Testfile0.txt", "Testfile1.txt", "Testfile2.txt", "Testfile3.txt" };
	
	public static LinkedList<Integer> nodes = new LinkedList<Integer>();
	
	public static void main(String[] args) {
		String line;
		String[] lines;
		int edges, verts, a, b;
		boolean[][] con;
		
		BufferedReader r;
		for (int i = 0; i < tf.length; i++) {
			try {
				r = new BufferedReader(new FileReader(tf[i]));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
				continue;
			}
			try {
				edges = Integer.parseInt(r.readLine());
			} catch (NumberFormatException | IOException e) {
				e.printStackTrace();
				continue;
			}
			try {
				verts = Integer.parseInt(r.readLine());
			} catch (NumberFormatException | IOException e) {
				e.printStackTrace();
				continue;
			}
			con = new boolean[verts][verts];
			while (true) {
				try {
					line = r.readLine();
					if (line == null) {
						break;
					}
					lines = line.split(" ");
				} catch (IOException e) {
					break;
				}
				a = Integer.parseInt(lines[0]) - 1;
				b = Integer.parseInt(lines[1]) - 1;
				con[a][b] = true;
				con[b][a] = true;
			}
			
			for (int j = 0; j < verts; j++) {
				nodes.add(j);
			}
			
			System.out.println("The connected components of " + tf[i] + " are:");
			
			while(!nodes.isEmpty()){
				printConnections(con, verts, nodes.getFirst());
				 System.out.println();
			}
			
			System.out.println();
		}
	}
	
	public static void printConnections(boolean con[][], int verts, int r){
		System.out.print((r + 1) + ", ");
		nodes.remove((Integer)r);
		for (int j = 0; j < verts; j++) {
			if (con[r][j]) {
				if (nodes.contains(j)) {
					printConnections(con, verts, j);
				}
			}
		}
	}
}