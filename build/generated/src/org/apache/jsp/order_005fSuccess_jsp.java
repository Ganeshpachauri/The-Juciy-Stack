package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class order_005fSuccess_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write('\n');

    String name = (String) session.getAttribute("userName");
    String email = (String) session.getAttribute("userEmail");
    if (name != null) {
        response.sendRedirect("index.html");
    } else {

      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("    <head>\n");
      out.write("        <meta charset=\"UTF-8\">\n");
      out.write("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
      out.write("        <title>The Juciy Stack</title>\n");
      out.write("        <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n");
      out.write("        <link rel=\"stylesheet\" href=\"./CSS/style.css\">\n");
      out.write("        <link rel=\"stylesheet\" href=\"./CSS/oSuccess.css\">\n");
      out.write("        <link rel=\"stylesheet\" href=\"./CSS/responsive.css\">\n");
      out.write("        <link rel=\"preconnect\" href=\"https://fonts. googleapis.com\">\n");
      out.write("        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n");
      out.write("        <link\n");
      out.write("            href=\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600;700&display=swap\"\n");
      out.write("            rel=\"stylesheet\">\n");
      out.write("        <link rel=\"icon\" type=\"image/png\" href=\"./Assets/the_juicy_stack.png\">\n");
      out.write("        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>\n");
      out.write("        <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\"\n");
      out.write("              integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n");
      out.write("\n");
      out.write("\n");
      out.write("    </head>\n");
      out.write("\n");
      out.write("    <body data-bs-spy=\"scroll\" data-bs-target=\".navbar\" data-bs-offset=\"75\">\n");
      out.write("        <header class=\"header_wrapper\">\n");
      out.write("            <nav class=\"navbar navbar-expand-lg fixed-top\">\n");
      out.write("                <div class=\"container-fluid bar\">\n");
      out.write("                    <a class=\"navbar-brand \" href=\"#\">\n");
      out.write("                        <img src=\"./Assets/the_juicy_stack.png \" />\n");
      out.write("                        <span class=\"title \">The Juciy Stack</span>\n");
      out.write("                    </a>\n");
      out.write("                    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\"\n");
      out.write("                            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n");
      out.write("                        <span class=\"navbar-toggler-icon\"></span>\n");
      out.write("                    </button>\n");
      out.write("                    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n");
      out.write("                        <ul class=\"navbar-nav menu-navbar-nav align-items-center\">\n");
      out.write("                            <li class=\"nav-item\">\n");
      out.write("                                <a class=\"nav-link\"  href=\"home.jsp\">Home</a>\n");
      out.write("                            </li>\n");
      out.write("                            <li class=\"nav-item\">\n");
      out.write("                                <a class=\"nav-link\" href=\"about.jsp\">About</a>\n");
      out.write("                            </li>\n");
      out.write("                            <li class=\"nav-item\">\n");
      out.write("                                <a class=\"nav-link\" href=\"desc.jsp\">Menu</a>\n");
      out.write("                            </li>\n");
      out.write("                            <li class=\"nav-item\">\n");
      out.write("                                <a class=\"nav-link \" href=\"offers.jsp\">Offers</a>\n");
      out.write("                            </li>\n");
      out.write("                            <li class=\"nav-item\">\n");
      out.write("                                <a class=\"nav-link \" href=\"review.jsp\">Review</a>\n");
      out.write("                            </li>\n");
      out.write("                            <li class=\"nav-item\">\n");
      out.write("                                <a class=\"main-btn\" style=' padding: -15px' href=\"logout.jsp\"><i class='bx bx-log-out' style='font-size: 24px'  ></i></a>\n");
      out.write("                            </li>                           \n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("            </nav>\n");
      out.write("        </header>\n");
      out.write("        <section class=\"container d-flex justify-content-center align-items-center\">\n");
      out.write("            <div class=\"video\">\n");
      out.write("                <div class=\"embed-responsive embed-responsive-16by9\">\n");
      out.write("                    <video id=\"video1\" autoplay  muted>\n");
      out.write("                        <source src=\"./Assets/order.mp4\" type=\"video/mp4\">\n");
      out.write("                    </video>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("        </section>\n");
      out.write("        \n");
      out.write("        <section class=\"footer_wrapper mt-5\">\n");
      out.write("            <div class=\"container\">\n");
      out.write("                <div class=\"row align-items-center\">\n");
      out.write("                    <div class=\"col-lg-4 col-md-6 text-center text-md-start\">\n");
      out.write("                        <div class=\"footer-logo mb-3 mb-md-0\">\n");
      out.write("                            <img src=\"./Assets/the_juicy_stack.png\" alt=\"\">\n");
      out.write("                        </div>\n");
      out.write("                    </div>\n");
      out.write("                    <div class=\"col-lg-4 col-md-6 text-center\">\n");
      out.write("                        <ul\n");
      out.write("                            class=\"list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center social-icon mb-3 mb-mb-0\">\n");
      out.write("                            <li>\n");
      out.write("                                <a href=\"#\">\n");
      out.write("                                    <i class=\"fab fa-instagram\"></i>\n");
      out.write("                                </a>\n");
      out.write("                            </li>\n");
      out.write("                            <li>\n");
      out.write("                                <a href=\"#\">\n");
      out.write("                                    <i class=\"fab fa-facebook\"></i>\n");
      out.write("                                </a>\n");
      out.write("                            </li>\n");
      out.write("                            <li>\n");
      out.write("                                <a href=\"#\">\n");
      out.write("                                    <i class=\"fab fa-twitter\"></i>\n");
      out.write("                                </a>\n");
      out.write("                            </li>\n");
      out.write("                        </ul>\n");
      out.write("                    </div>\n");
      out.write("                    <div class=\"col-lg-4 col-md-12\">\n");
      out.write("                        <div class=\"copyright-text text-center mb-3 mb-lg-0\">\n");
      out.write("                            <p class=\"mb-0\">\n");
      out.write("                                Copyright &COPY; 2023\n");
      out.write("                                <a href=\"#\">\n");
      out.write("                                    The Juciy Stack\n");
      out.write("                                </a>.\n");
      out.write("                                All Rights Reserved.\n");
      out.write("                            </p>\n");
      out.write("                        </div>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("        </section>\n");
      out.write("        <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js\"\n");
      out.write("                integrity=\"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p\"\n");
      out.write("        crossorigin=\"anonymous\"></script>\n");
      out.write("        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js\"\n");
      out.write("                integrity=\"sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF\"\n");
      out.write("        crossorigin=\"anonymous\"></script>\n");
      out.write("        <script src=\"./JS/main.js\"></script>\n");
      out.write("        <script src=\"./JS/index.js\"></script>\n");
      out.write("\n");
      out.write("\n");
      out.write("    </body>\n");
      out.write("\n");
      out.write("</html>\n");

        }

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
