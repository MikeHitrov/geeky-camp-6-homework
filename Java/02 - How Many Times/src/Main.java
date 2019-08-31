import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        Map<Integer, Integer> numbers = new LinkedHashMap<Integer, Integer>();

        numbers.put(Integer.parseInt(input[0]), 1);

        for (int i = 1; i < input.length; i++){
            Integer key = Integer.parseInt(input[i]);

            if(numbers.containsKey(key)){
                numbers.replace(key, numbers.get(key) + 1);
            }
            else{
                numbers.put(key, 1);
            }
        }

        for (int i = 0; i < numbers.keySet().size(); i++) {
            if (i == 0){
                System.out.print(numbers.keySet().toArray()[0] + " " + numbers.get(numbers.keySet().toArray()[0]));
            }
            else {
                System.out.print(" " + numbers.keySet().toArray()[i] + " " + numbers.get(numbers.keySet().toArray()[i]));
            }
        }

        System.out.println();
    }
}


