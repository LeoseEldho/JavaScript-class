// public class DemoMethod {
//     void display()
//     {
//         System.out.println("hello");
//     }
//     public static void main(String[] args) {
//         System.out.println("start");

//         DemoMethod d = new DemoMethod();
//       d.display();

//         System.out.println("end");
//     }
// }

public class DemoMethod {
//	method without argument and without return statement;
	void m1() {
		System.out.println("hello");
	}
	
//	method with argument and without return statement;
	
	void m2(String name,int a){
		System.out.println(name +" and the age is :"+a);
	}
//   method with argument and with return statement;
	int m3(int a) { 
		return a*a;
	}
//  method without argument and with return statement;
	String m4() {
		return "Java";
	}
	public static void main(String[] argument) {
		DemoMethod method1=new DemoMethod();
		DemoMethod method2=new DemoMethod();
		DemoMethod method3=new DemoMethod();
		DemoMethod method4=new DemoMethod();
		
		method1.m1();
		method2.m2("loki", 100000);
		
		System.out.println(method3.m3(4));
		
		System.out.println(method4.m4());
	}
}