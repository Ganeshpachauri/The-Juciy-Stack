import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.sql.*;

public class login extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse res) {
        try {
            res.setContentType("text/html");
            String email = req.getParameter("email");
            String password = req.getParameter("password");
            PrintWriter pw = res.getWriter();

            Class.forName("com.mysql.jdbc.Driver");

            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/thejuciystack", "root", "");

            PreparedStatement pst = con.prepareStatement("select * from registration where Email=? and Password=?");
            pst.setString(1, email);
            pst.setString(2, password);

            ResultSet rs = pst.executeQuery();
            if (rs.next()) {
                res.sendRedirect("menu.html");
            } else {
                RequestDispatcher rd = req.getRequestDispatcher("login.html");
                pw.print("Email or password is incorrect ");
                rd.include(req, res);
            }
        } catch (Exception ett) {
            try {
                PrintWriter out = res.getWriter();

                out.print(ett);
            } catch (Exception et) {

            }
        }
    }
}