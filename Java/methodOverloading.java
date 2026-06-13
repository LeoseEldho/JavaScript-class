public class methodOverloading {
    	void m1(int a) {
		System.out.println("sdfasdf"+' '+a);
	}
	String m1(String a) {
		return a;
	};
	void m1(double a) {
		System.out.println(a);
	}
	void m1(int a ,String y) {
		System.out.println(a+" "+y);
	}
	public static void main(String[] aru) {
		methodOverloading d1=new methodOverloading();
		
//		System.out.println(d1.m1("sdf"));
//		System.out.println(d1.m1(3));
		d1.m1(3);
	}
}
