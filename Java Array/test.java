public class test {
    public static void main(String[] args) {
        int[] a = { 1, 2, 3, 4 };
        System.out.println(a[0]);
        System.out.println(a[1]);
        System.out.println(a[2]);
        System.out.println(a[3]);

        System.out.println("Length :" + a.length);
        System.out.println("For Loop--------------------");
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
        System.out.println("For Loop rev--------------------");
        for (int i = a.length - 1; i >= 0; i--) {
            System.out.println(a[i]);
        }
        System.out.println("While Loop --------------------");
        int i = 0;
        while (i < a.length) {
            System.out.println(a[i]);
            i++;
        }
        System.out.println("While Loop rev--------------------");
        int b = a.length - 1;
        while (b >= 0) {
            System.out.println(a[b]);
            b--;
        }
        System.out.println("Sum of Value with FoorLoop--------------------");
        int[] x = { 10, 20, 30 };
        int sum = 0;
        for (int e = 0; e < x.length; e++) {
            sum += x[e];
        }
        System.out.println(sum);

        System.out.println("Sum of Value with WhileLoop--------------------");
        int total = 0;
        int g = 0;
        while (g < x.length) {
            total += x[g];
            g++;
        }
        System.out.println(total);
    }
}
