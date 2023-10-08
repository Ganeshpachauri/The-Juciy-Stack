package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.sql.*;

public final class VUsers_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("        <title>JSP Page</title>\n");
      out.write("        <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n");
      out.write("    </head>\n");
      out.write("    \n");
      out.write("    <style>\n");
      out.write("        .Admin-heading{\n");
      out.write("            background-color: orange;\n");
      out.write("            height: 100px;\n");
      out.write("        }\n");
      out.write("        .mainhead\n");
      out.write("        {\n");
      out.write("            color: white;\n");
      out.write("            font-size: 5rem;\n");
      out.write("        }\n");
      out.write("        .link-admin\n");
      out.write("        {\n");
      out.write("            width: 30px;\n");
      out.write("        }\n");
      out.write("        .main-btn{\n");
      out.write("            display: inline-block;\n");
      out.write("            text-decoration: none;\n");
      out.write("            border-radius: 50px;\n");
      out.write("            padding: 10px 27px;\n");
      out.write("            border:.1rem solid orange;\n");
      out.write("            color: orange;\n");
      out.write("            font-weight: 600;\n");
      out.write("            font-size: 14px;\n");
      out.write("            text-transform: uppercase;\n");
      out.write("            letter-spacing: 1px;\n");
      out.write("            background: linear-gradient(to right,orange 50%,transparent 50%);\n");
      out.write("            background-size: 200% 100%;\n");
      out.write("            background-position: right bottom;\n");
      out.write("            transition: all 2s ease-out;\n");
      out.write("            line-height: 1;\n");
      out.write("\n");
      out.write("        }\n");
      out.write("        .main-btn:hover{\n");
      out.write("            color: white;\n");
      out.write("            background-position: left bottom ;\n");
      out.write("            transition: all 2s ease;\n");
      out.write("        }\n");
      out.write("        .arrow {\n");
      out.write("            font-weight:bolder  ;\n");
      out.write("            margin-right: 5px;\n");
      out.write("         \n");
      out.write("        }\n");
      out.write("        \n");
      out.write("\n");
      out.write("    </style>\n");
      out.write("    <body>\n");
      out.write("         ");

            String N=(String)session.getAttribute("na");
            if(N==null)
            {
          response.sendRedirect("ALogin.html");      
            }
        
      out.write("\n");
      out.write("        <div class=\"Admin-heading container-fluid d-flex justify-content-center align-items-center\">\n");
      out.write("            <h1 class=\"mainhead\">Welcome Admin</h1>\n");
      out.write("        </div>\n");
      out.write("        <div class=\"container-fluid d-flex justify-content-around align-items-center p-5\">\n");
      out.write("            <a class=\"main-btn\" href=\"#users\">View Users</a>\n");
      out.write("            <a class=\"main-btn\" href=\"#orders\">View Orders</a>\n");
      out.write("            <a class=\"main-btn\" href=\"index.html\"> <span class=\"arrow\">&larr;</span>Go Back </a>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("\n");
      out.write("        \n");
      out.write("        ");

            response.setContentType("text/html");

            Class.forName("com.mysql.jdbc.Driver");

            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/thejuciystack", "root", "");

            PreparedStatement pst = con.prepareStatement("select * from registration");
            
            ResultSet rs = pst.executeQuery();
            out.print("<div class='d-flex mt-5 p-5 justify-content-center align-items-center '>"+
                    "<table border='2'>"
                    +"<tr>"
                    + "<th>Email</th>"
                    + "<th>Name</th>"
                    + "<th>Password</th>"
                    + "</tr>");
            while (rs.next()) {
                out.print("<tr>");
                out.print("<td>" + rs.getString(1) + "</td>");
                out.print("<td>" + rs.getString(2) + "</td>");
                out.print("<td>" + rs.getString(3) + "</td>");
                out.print("</tr>");
            }
            out.print("</table>"+"</div>");

        
      out.write("\n");
      out.write("        <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js\"\n");
      out.write("    integrity=\"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p\"\n");
      out.write("    crossorigin=\"anonymous\"></script>\n");
      out.write("  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js\"\n");
      out.write("    integrity=\"sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF\"\n");
      out.write("    crossorigin=\"anonymous\"></script>\n");
      out.write("    </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
