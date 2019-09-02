import java.util.*;

public class Main {

    final static int MAXN = 105;

    public static String s;
    public static List<String> t = new ArrayList<>();

    public static List<Integer>[] matches = new ArrayList[MAXN];

    public static Boolean check(int index, String t) {

        if (s.length() - index < t.length()) return false;

        for (int i = 0; i < t.length(); i++) {
            if (s.charAt(index + i) != t.charAt(i) && t.charAt(i) != '?') return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < MAXN; i++) {

            matches[i] = new ArrayList<>();

        }

        s = scanner.next();

        String tRaw;
        tRaw = scanner.next();

        String curr = "";
        for (int i = 0; i < tRaw.length(); i++) {
            if (tRaw.charAt(i) == '*') {
                if (curr != "") t.add(curr);
                curr = "";
            } else {
                curr += tRaw.charAt(i);
            }
        }
        if (curr != "") {
            t.add(curr);
        }

        for (int i = 0; i < t.size(); i++) {
            for (int j = 0; j < s.length(); j++) {
                if (check(j, t.get(i)) == true) matches[i].add(j);
            }
        }

        int index = 0;
        for (int i = 0; i < t.size(); i++) {
            if (matches[i].size() == 0) {
                System.out.println(false);
                return;
            }

            Boolean succes = false;
            for (int j = 0; j < matches[i].size(); j++) {
                if (matches[i].get(j) >= index) {
                    index = matches[i].get(j) + t.size();
                    succes = true;

                    break;
                }
            }

            if (succes == false) {
                System.out.println(false);
                return;
            }
        }

        System.out.println(true);
    }

}