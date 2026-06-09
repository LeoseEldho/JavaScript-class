

public class SwitchCase {
    public static void main(String[] argument) {
        // int choise = 3;
        // switch (choise) {
        //     case 1:
        //         System.out.println("in Case 1");
        //     break;
        // case 2:
        //     System.out.println("in Case 2");
        // break;
        //      case 3: System.out.println("in Case 3");   
        //         break;
        //     default:
        //         System.out.println("in Vaild;");
        // }

        // char mark = 'b';
        // switch (mark) {
        //     case 'A':
        //         System.out.println("A" + " very good");
        //         break;
        //     case 'B':
        //         System.out.println("B" + " good ");
        //         break;
        //     case 'c':
        //         System.out.println("C" + " ok");
        //         break;
        //     default:
        //         System.out.println("failed");
        // }


        int a = 3;
        int b = 5;
        int c = 0;
        if (a > b && a > c) {
            System.out.println("A is greater");
        }else if(b>c&&b>a){
            System.out.println("B is greater");
        } else {
            System.out.println("C is greater");
        }
        }
}
