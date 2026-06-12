public class Returning {
	int display(){
		return 10;
	}
	public static void main(String[] argu) {
		Returning d=new Returning();
	int result=d.display()	;
	System.out.println(result);
	}
}