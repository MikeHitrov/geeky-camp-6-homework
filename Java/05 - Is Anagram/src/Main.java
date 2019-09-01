import java.util.Arrays;
import java.util.Scanner;

public class Main {

    static void isAnagram(String str1, String str2) {
        String s1 = str1.replaceAll("\\W*\\d*", "");
        String s2 = str2.replaceAll("\\W*\\d*", "");
        boolean status = true;

        if (s1.length() != s2.length()) {
            status = false;
        } else {
            char[] ArrayS1 = s1.toLowerCase().toCharArray();
            char[] ArrayS2 = s2.toLowerCase().toCharArray();
            Arrays.sort(ArrayS1);
            Arrays.sort(ArrayS2);
            status = Arrays.equals(ArrayS1, ArrayS2);
        }
        if (status) {
            System.out.println(status);
        } else {
            System.out.println(status);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");

        isAnagram(input[0], input[1]);
    }
}
