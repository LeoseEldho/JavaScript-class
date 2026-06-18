public class PersonVariable {
    	int age;
	String name;
	PersonVariable(int age,String name){
		this.age=age;
		System.out.println(name+' '+age);
		this.name=name;
	}
	public static void main(String[] args) {
		PersonVariable p=new PersonVariable(21,"loki");
//		p.age=23;
		System.out.println(p.age);
		System.out.println(p.name);
	}
}
