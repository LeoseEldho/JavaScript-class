import java.util.Scanner;
public class FromUser {
	void main(int a,int b) {
	System.out.println(a+b);
}
	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		System.out.println("Enter the no.:");
		int a=s.nextInt();
		
		System.out.println("Enter the no.:");
		int b=s.nextInt();
		
		FromUser d=new FromUser();
		d.main(a, b);
	}
}
