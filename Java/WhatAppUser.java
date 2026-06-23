class WhatApp1 {
 void message() {
	 System.out.println("single tick");
 }
}

class WhatApp2 extends WhatApp1 {
    @Override
    void message() {
        super.message();
        System.out.println("Double Tick");
    }

    void Call() {
        System.out.println("Voic Call");
    }
}

 class WhatApp3 extends WhatApp2{
	@Override void message() {
		super.message();
		System.out.println("Blue Tick ");
	}
	@Override void Call() {
		super.Call();
		System.out.println("Video CAll");
	}
	void Story() {
		System.out.println("upload image for story;");
	}
}

public class WhatAppUser {
    	public static void main(String[] args) {
		WhatApp3 w=new WhatApp3();
		
		w.message();
		w.Call();
		w.Story();
	}
}
