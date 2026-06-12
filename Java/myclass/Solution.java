public class Solution {
    public static void main(String[] argu) {
        Employeee e1 = new Employeee();
        Employeee e2 = new Employeee();
        Employeee e3 = new Employeee();

        e1.id = 1;
        e2.id = 2;
        e3.id = 3;

        e1.name = "loki";
        e2.name = "biju";
        e3.name = "thor";

        e1.salary = 230;
        e2.salary = 500;
        e3.salary = 1000;

        System.out.println(e1.name + " " + e1.id + " " + e1.salary);
        System.out.println(e2.name +" "+e2.id+" "+ e2.salary);
        System.out.println(e3.name +" "+e3.id+" "+ e3.salary);
    }
}
