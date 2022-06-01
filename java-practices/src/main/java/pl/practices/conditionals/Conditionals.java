package pl.practices.conditionals;

public class Conditionals {


    public static void main(String[] args) {
        int val1 = 5;
        int val2 = 7;
        int maxVal = val1 > val2 ? val1 : val2;

        //nex section

        double v1;
        double v2;
        double result;

        //switch statement

        char code = 'd';

        switch (code) {
            case 'a':
                System.out.println("Ładne A");
                break;
            case 'd':
                System.out.println("Ładne D");
                break;
            default:
                System.out.println("Nie ma literki");
        }


        System.out.println(maxVal);
    }
}
