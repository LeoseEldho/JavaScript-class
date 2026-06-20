 class Father {
	void bike() {
		System.out.println("father bike");
	}
}

public class MethodOverriding extends Father{
 void bike() {
		System.out.println("Son bike");
	}
	public static void main(String[] args) {
		MethodOverriding s=new MethodOverriding();
	}
}
