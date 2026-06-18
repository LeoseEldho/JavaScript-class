class GrandFather {
    String GrandFatherName = "odin";

    void OdinDisplay() {
        System.out.println("King Odin");
    }
}

 class Father extends GrandFather {
    String FatherName = "Thor";

    void ThorDiplay() {
        System.out.println("God of thunders");
    }
}

 class Son extends Father{
	String SonName="loki";
	void LokiDisplay() {
		System.out.println("God of mischief ");
	}
}

public class Inheritace {
    	public static void main(String[] args) {
		Son s=new Son();
		
		System.out.println("------Variable");
		System.out.println(s.GrandFatherName);
		System.out.println(s.FatherName);
		System.out.println(s.SonName);
		
		System.out.println("------Methods");
		s.OdinDisplay();
		s.ThorDiplay();
		s.LokiDisplay();
	}
}
