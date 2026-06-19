public class ConstractorOverloading {
    	int id;
	String name;
	double salery;
	
	ConstractorOverloading(int id,String name,double salery){
		this.id=id;
		this.name=name;
		this.salery=salery;
	}
	void display() {
		System.out.println(this.id);
		System.out.println(this.name);
		System.out.println(this.salery);
	}
	public static void main(String[] args) {
		ConstractorOverloading e1=new ConstractorOverloading(10,"loki",1300.23);
		ConstractorOverloading e2=new ConstractorOverloading(20,"thor",1800.23);
		ConstractorOverloading e3=new ConstractorOverloading(30,"Odin",2300.23);
		
		System.out.println("------------------------------");
		e1.display();
		System.out.println("------------------------------");
		e2.display();
		System.out.println("------------------------------");
		e3.display();
		System.out.println("------------------------------");

	}
}
