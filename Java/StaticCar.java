public class StaticCar {

	static int cost=10;
	
	public static void main(String[] args) {
		System.out.println(StaticCar.cost);
		StaticCar.cost=20;
        System.out.println(StaticCar.cost);
        System.out.println("----------------------");

        StaticCar c1 = new StaticCar();
        System.out.println(c1.cost);
	}

}
