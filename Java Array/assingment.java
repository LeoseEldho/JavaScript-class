public class assingment {
    public static void main(String[] args) {
        int count = 0;
        int [] array={10,20,10,30};
        for (int i = 0; i < array.length; i++) {
            if ( array[i]==10) {
                count++;
            }
        }
        System.out.println(count+": times");
    }
}
