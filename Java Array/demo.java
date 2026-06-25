
public class demo {
	public static void main(String[] args) {
		

		//array declaration
		int [] b;
		//array creation
		b=new int[3];
		
		b[0]=1;
		b[2]=3;
		b[1]=2;
		
		System.out.println(b[0]);
		System.out.println(b[1]);
		System.out.println(b[2]);
		System.out.println("-------------------------------------");
		
		//array declaration and creation;
		
		int [] c=new int[4];
		System.out.println(c[0]);
		System.out.println(c[1]);
		System.out.println(c[2]);
		
		c[0]=1;
		c[2]=3;
		c[1]=2;
		c[3]=4;
		System.out.println(c[0]);
		System.out.println(c[1]);
		System.out.println(c[2]);
		
		System.out.println("-------------------------------------");
		
		int [] a= {1,2,3,3,45,5};
		System.out.println(a.length);
		System.out.println(a[4]);
		System.out.println("-------------------------------------");
		
	}
}
