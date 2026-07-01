public class Demo {

	public int num=234;
	public void walk() {
		System.out.println("person walking");
	}
	public static void main(String[] args) {
		Demo d=new Demo();
		System.out.println(d.num);
		d.walk();
	}
}

