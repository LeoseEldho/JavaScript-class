 class Insta1 {
	void upload() {
		System.out.println("upload image");
	}
}
 class Insta2 extends Insta1{
	@Override void upload() {
		super.upload();
		System.out.println("upload Gif");
	}
	
	void dm() {
		System.out.println("dm message");
	}
}
 class Insta3 extends Insta2{
	@Override void upload(){
		super.upload();
		System.out.println("upload Video");
	}
	@Override void dm() {
		super.dm();
		System.out.println("dm images");
	}
	void Story() {
		System.out.println("image as Story");
	}
}


public class InstaUser {
  	public static void main(String[] args) {
		Insta3 i=new Insta3();
		
		i.upload();
		i.dm();
		i.Story();
	}  
}
