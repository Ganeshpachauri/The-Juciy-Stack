import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.*;

public class register extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse res) {
        try {
            res.setContentType("text/html");
            String name = req.getParameter("name");
            String email = req.getParameter("email");
            String password = req.getParameter("password");

            PrintWriter pw = res.getWriter();

            Class.forName("com.mysql.jdbc.Driver");

            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/TheJuciyStack", "root", "");

            PreparedStatement pst = con.prepareStatement("insert into Registration values(?,?,?)");

            pst.setString(1, email);
            pst.setString(2, name);
            pst.setString(3, password);

            int u = pst.executeUpdate();

            if (u > 0)
                res.sendRedirect("login.html");

        } catch (Exception ett) {
            try {
                PrintWriter out = res.getWriter();

                out.print(ett);
            } catch (Exception et) {

            }
        }
    }
}
