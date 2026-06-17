
    public class NonStaticBlock {
	{
		System.out.println("non Static Block-1");
	}
	{
		System.out.println("non Static Block-2");
	}

	public static void main(String[] args) {
		System.out.println("start");
		
		NonStaticBlock d=new NonStaticBlock();
		System.out.println("end");
	}
	{
		System.out.println("non Static Block-3");
	}
}


// public class Employee {
// 	int age;
// 	{
// 		System.out.println("age->10");
// 		age=10;
// 	}
// 	public static void main(String[] args) {
// 		System.out.println("Start");
// 		Employee e=new Employee();
// 		System.out.println(e.age);
// 		System.out.println("End");
// 	}
// }
