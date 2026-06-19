

public class ConOverCar {
 	ConOverCar(int a,String name){
		System.out.println(a+" "+name);
		
	}
	ConOverCar(String d,int a){
		System.out.println(a+" "+d);
	}
	
	ConOverCar(String brand ){
		System.out.println(brand);
	}
	
	public static void main(String[] args) {
		ConOverCar c1=new ConOverCar(2,"loki");
		ConOverCar c3=new ConOverCar("BMW");
		
	}   
}
