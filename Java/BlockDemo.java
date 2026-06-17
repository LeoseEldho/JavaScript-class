public class BlockDemo {
	static int age;
	static {
		System.out.println("hai i am static");
		BlockDemo.age = 10;
	}
	
	public static void main(String[] argument) {
		System.out.println("sdfa");
		System.out.println(BlockDemo.age);
	}
	static {
		BlockDemo.age = 20;
	}
}
