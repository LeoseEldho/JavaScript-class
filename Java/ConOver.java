class Father {
    int a = 23;
}

 class Son extends Father {
    int a = 19;

    void display() {
        int a = 34;
        System.out.println("Son" + " " + a);
        System.out.println(this.a);
        System.out.print(super.a);
    }
}

public class ConOver {
    	public static void main(String[] args) {
		Son s1=new Son();
		s1.display();
	}
}
