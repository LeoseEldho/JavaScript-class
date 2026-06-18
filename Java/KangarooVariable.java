public class KangarooVariable {
    	double height=55.5;
	
	void main() {
	 double height=4.4;
		System.out.println(height);
		System.out.println(this.height );
	}

	public static void main(String[] args) {
		KangarooVariable k1=new KangarooVariable();
//		System.out.println(k1.height);
		k1.main();
	}
}
