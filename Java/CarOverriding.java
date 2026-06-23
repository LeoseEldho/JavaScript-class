 class Vehicle {
 void Start() {
	 System.out.println("Vehicle Started");
 }
 
 void Stop() {
	 System.out.println("Vechical Stopped ");
 }
}

public class CarOverriding extends Vehicle{
	
	@Override void Start() {
		System.out.println("car startted");
	}
	void gearShift() {
		System.out.println("Gear shifted");
	}
	public static void main (String[] argu) {
		CarOverriding c=new CarOverriding();
		c.Start();
	}
}
