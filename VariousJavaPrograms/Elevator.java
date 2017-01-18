import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Elevator {
	private static String[]		tf	= new String[] { "Testfile0.txt" };
	
	private static final int	MAX	= 100000;
	
	private static int			pass;
	private static int			stop;
	private static int[]		dest;
	
	private static int			maxdest;
	private static int			last;
	
	private static int[][]		cost;
	
	private static int[][]		prev;
	
	private static int distance(int floora, int floorb) {
		int sum = 0;
		for (int i = 0; i < pass; i++) {
			if (dest[i] > floora && dest[i] <= floorb) {
				sum += Math.min(dest[i] - floora, floorb - dest[i]);
			}
		}
		return sum;
	}
	
	private static void fillCostTable() {
		int tcost;
		for (int a = 1; a <= stop; a++) {
			for (int b = 0; b <= maxdest; b++) {
				cost[b][a] = MAX;
				for (int c = 0; c <= b; c++) {
					tcost = cost[c][a - 1] - distance(c, MAX) + distance(c, b) + distance(b, MAX);
					if (tcost < cost[b][a]) {
						cost[b][a] = tcost;
						prev[b][a] = c;
					}
				}
			}
		}
	}
	
	public static void followPath(int floor, int stops) {
		if (stops > 1) {
			followPath(prev[floor][stops], stops - 1);
		}
		if (stops == stop) {
			System.out.print("and " + floor + ".");
		} else {
			System.out.print(floor + ", ");
		}
	}
	
	public static void main(String[] args) {
		BufferedReader r;
		for (int i = 0; i < tf.length; i++) {
			try {
				r = new BufferedReader(new FileReader(tf[i]));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
				continue;
			}
			try {
				pass = Integer.parseInt(r.readLine());
			} catch (NumberFormatException | IOException e) {
				e.printStackTrace();
				continue;
			}
			try {
				stop = Integer.parseInt(r.readLine());
			} catch (NumberFormatException | IOException e) {
				e.printStackTrace();
				continue;
			}
			try {
				String line = r.readLine();
				String[] sdest = line.split(" ");
				dest = new int[sdest.length];
				maxdest = 0;
				for (int j = 0; j < sdest.length; j++) {
					dest[j] = Integer.parseInt(sdest[j]);
					if (dest[j] > maxdest) {
						maxdest = dest[j];
					}
				}
			} catch (NumberFormatException | IOException e) {
				e.printStackTrace();
				continue;
			}
			try {
				r.close();
			} catch (IOException e) {
				e.printStackTrace();
				continue;
			}
			
			cost = new int[maxdest + 1][pass];
			prev = new int[maxdest + 1][pass];
			for (int a = 0; a <= maxdest; a++) {
				cost[a][0] = distance(0, MAX);
				prev[a][0] = -1;
			}
			fillCostTable();
			System.out.println("Using " + tf[i] + "...");
			System.out.println(pass + " passengers and " + stop + " stops:");
			System.out.print("floor/stop\t");
			for (int a = 0; a <= stop; a++) {
				System.out.print(a + "\t\t");
			}
			System.out.println();
			for (int a = 0; a <= maxdest; a++) {
				System.out.print(a);
				for (int b = 0; b <= stop; b++) {
					System.out.print("\t\t" + cost[a][b]);
				}
				System.out.println();
			}
			last = 0;
			for (int a = 1; a <= maxdest; a++) {
				if (cost[a][stop] < cost[last][stop]) {
					last = a;
				}
			}
			System.out.print("The elevator will stop on floors ");
			followPath(last, stop);
			System.out.println();
			System.out.println("For a total cost of " + cost[last][stop]);
		}
	}
} 