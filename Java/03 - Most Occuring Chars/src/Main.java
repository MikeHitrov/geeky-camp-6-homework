import java.util.Scanner;

public class Main {

    public static void longestSequence(int[] a) {
        int count = 1, max = 1;

        for (int i = 1; i < a.length; i++) {
            if (a[i] == a[i - 1]) {
                count++;
            } else {
                if (count > max) {
                    max = count;
                }
                count = 1;
            }
        }

        if (count> max)
            System.out.println(count);
        else
            System.out.println(max);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char[] input = scanner.nextLine().toCharArray();
        int[] array = new int[input.length];

        for (int i = 0; i < input.length; i++){
            array[i] = (int)input[i];
        }

        longestSequence(array);
    }
}
