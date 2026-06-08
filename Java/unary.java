// public  class unary {
//      public static void main(String[] argument) {
//          int x = 10;
//          System.out.println("" + x);
//          x++;
//          System.out.println("" + x);
//          x++;
//          System.out.println("" + x);

//          x--;
//          System.out.println("" + x);
//          x--;
//          System.out.println("" + x);
//     }
// }


public class unary {
    public static void main(String[] args) {
        int x = 5;
        int y = x++;
        System.out.println("hii " + x+" "+y);

        int a = 5;
        int b = ++a;
        System.out.println("haa " + a+" "+ b);
        

        int c = 5;
        int d = c--;
        System.out.println("hii " + c+" "+d);

        int e = 5;
        int f = --e;
        System.out.println("haa "+e+" "+f);
    }
}