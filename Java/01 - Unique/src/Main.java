import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
	    String input = scanner.nextLine();
	    Boolean result = true;
	    List<Character> chars = new ArrayList<Character>();
	    chars.add(input.charAt(0));

        for (int i = 1; i < input.length(); i++){
            if(chars.contains(input.charAt(i))){
                result = false;
                break;
            }
            else {
                chars.add(input.charAt(i));
            }
        }


        System.out.println(result);
    }
}
