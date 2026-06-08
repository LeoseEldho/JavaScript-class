// public class ifStatement {
//     public static void main(String[] args) {
//         int age = 18;
//         boolean result = age >= 18 ? true : false;
//         System.out.println(""+result);

//     }
// }

public class ifStatement {
    public static void main(String[] args) {
        // int age = 1;
        // if (age >= 18) {
        //     System.out.println(""+true);
        // } else {
        //     System.out.println(""+false);
        // }

        // int age = 1;
        // if (age >= 30) {
        //     System.out.println("uncle");
        // } else if (age >= 18) {
        //     System.out.println("teen");
        // } else {
        //     System.out.println("boy");
        // }

        // int a = 15;
        // int b = 15;
        // if (a > b) {
        //     System.out.println(""+a);
        // } else if (a < b) {
        //     System.out.println(""+b);
        // } else {
        //     System.out.println("=");
        // }

        // int mark = -8;
        // if (mark>=81&&mark<=100) {
        //     System.out.println("very good");
        // } else if (mark>=35&&mark<=80) {
        //     System.out.println("good");
        // } else if(mark>=0&&mark<=34){
        //     System.out.println("fail");
        // } else {
        //     System.out.println("invailed");
        // }

        // int num =-3;
        // if (num >= 0) {
        //     System.out.println("Positive number");
        // } else {
        //     System.out.println("Negative number");
        // }

        // int num = 8;
        // if (num % 2 == 0) {
        //     System.out.println("even Number");
        // } else  {
        //     System.out.println("odd Number");
        // }

        int a = 15;
        if (a <= 10) {
            System.out.println("inside outerif");
            if (a == 5) {
                System.out.println("equal");
            } else {
                System.out.println("not equal to a ");
            }
        } else {
            System.out.println("greater than a");
        }
    }
}