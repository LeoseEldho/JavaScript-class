public class methodExample {
    int findSquare(int a) {
        return a * a;
    }
    public static void main(String[] args) {
        methodExample d = new methodExample();
        int result = d.findSquare(4);
        System.out.println(result);
    }
}
