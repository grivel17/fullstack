package pl.practices.loopsandarrays;

public class LoopsAndArrays {
    public static void main(String[] args) {
        int someValue = 4;
        int factorial = 1;

        while (someValue > 1) {
            factorial *= someValue;
            someValue--;
        }
    //simple array

        int[] intArray = new int[5];
        int[] intArray2 = {1,2,3,4,5};
        int sum = 0;
        int sum2 = 0;


        for(int i=0; i < intArray2.length; i++){
            sum += intArray2[i];
        }

        for (int i: intArray2
             ) {
            sum2 += intArray2[i-1]+2;
        }


        System.out.println(sum2);
    }
}
