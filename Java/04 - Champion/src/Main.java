import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input =  scanner.nextLine().split(" ");
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

        HashMap<Integer,Integer> sortedMap = numbers
                .entrySet()
                .stream()
                .sorted(Map.Entry.<Integer, Integer>comparingByValue().reversed())
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));

        int max = (int)sortedMap.values().toArray()[0];
        int resultIndex = 0;

        for (int i = 1; i < sortedMap.values().size(); i++){
            if ((int)sortedMap.values().toArray()[i] > max){
                resultIndex = i;
            }
            else if((int)sortedMap.values().toArray()[i] == max){
                if((int)sortedMap.keySet().toArray()[i] < (int)sortedMap.keySet().toArray()[resultIndex]){
                    resultIndex = i;
                }
            }
        }

        System.out.println((int)sortedMap.keySet().toArray()[resultIndex] + " " + (int)sortedMap.get(sortedMap.keySet().toArray()[resultIndex]));
    }
}
