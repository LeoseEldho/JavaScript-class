
public class Student {

    int mark;
    String name;

    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student();

        System.out.println(s1.mark + " " + s1.name);
        System.out.println(s2.mark + " " + s2.name);

        s1.mark = 500;
        s2.mark = 600;
        s1.name = "biju";
        s2.name = "loki";

        System.out.println(s1.mark + " " + s1.name);
        System.out.println(s2.mark + " " + s2.name);

    }
}
