public class StudentContractor {
    int age;

    StudentContractor(int a) {
        age = a;
    }
    public static void main(String[] args) {
        StudentContractor s1 = new StudentContractor(32);
        StudentContractor s2 = new StudentContractor(23);

        System.out.println(s1.age);
        System.out.println(s2.age);
    }
}
