public class Car {
        int cost = 10;

        public static void main(String[] args) {
            Car c1 = new Car();
            Car c2 = new Car();
            c2.cost = 20;
            System.out.println(c1.cost+" "+c2.cost);
    }
}
