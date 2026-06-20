public class ConsChaining {
	ConsChaining(int a) {
		this();
		System.out.println(1);

	}

	ConsChaining() {
		//		this(20);
		System.out.println("hello");
	}

	public static void main(String[] args) {
		ConsChaining d1 = new ConsChaining(1);

	}
}

