public class lgoin {
    public static void main(String[] args) {
        // String id = "admina";
        // int password = 12345;

        // if (id=="admin") {
        //     System.out.println("the id is Vaild");
        //     if (password == 12345) {
        //         System.out.println("the password and id in vaild");
        //         System.out.println("Login is successfully:true");
        //     } else {
        //         System.out.println("password is Wrong!,Login failed");
        //     }
        // } else {
        //     System.out.println("id Not vaild");
        // }

        String gender = "female";
        int age=15;
        if (gender == "male") {
            System.out.println("gender male");
            if (age >= 21) {
            System.out.println("Can  Marriage");
        } else {
            System.out.println("boy,Can Not marriage");
            }
        } else if (gender == "female") {
            System.out.println("gender female");
             if (age >= 18) {
            System.out.println("Can  Marriage");
        } else {
            System.out.println("girl,Can Not marriage");
            }
        } else {
            System.out.println("Gay not allowed;");
        }
    }
}
