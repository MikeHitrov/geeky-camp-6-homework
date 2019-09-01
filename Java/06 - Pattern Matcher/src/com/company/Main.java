package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split(" ");

        char[] text = input[0].toCharArray();

        char[] inputPattern = input[1].toCharArray();

        Boolean result = false;

        if (!inputPattern.toString().contains("*") && !inputPattern.toString().contains("?")){
            if (text.toString().contains(inputPattern.toString())){
                result = true;
            }
            else {
                result = false;
            }
        } else if(inputPattern.toString().contains("*") && !inputPattern.toString().contains("?")){
            int sparkPostion = inputPattern.toString().indexOf("*");
            int firstSymbolPosition = inputPattern.toString().indexOf(inputPattern[1]);

            if (sparkPostion == 0){
                for (int i = text.toString().indexOf(firstSymbolPosition); i < text.length; i++){
                    if (text[i] == inputPattern[sparkPostion])
                }
            }

        } else if(inputPattern.toString().contains("?") && !inputPattern.toString().contains("*")){

        } else {

        }


        System.out.println(result);
    }
}
