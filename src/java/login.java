
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
                HttpSession session = req.getSession();
                session.setAttribute("userEmail", rs.getString(1));
                session.setAttribute("userName", rs.getString(2));
                res.sendRedirect("desc.jsp");
            } else {
                RequestDispatcher rd = req.getRequestDispatcher("login.html");
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
