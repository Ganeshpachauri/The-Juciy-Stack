<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String N = (String) session.getAttribute("userName");
    if (N == null) {
        response.sendRedirect("index.html");
    } else {
%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Offers-The Juicy Stack</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./CSS/style.css">
        <link rel="stylesheet" href="./CSS/offers.css">
        <link rel="stylesheet" href="./CSS/responsive.css">
        <link rel="stylesheet" href="./CSS/offersresponsive.css">
        <link rel="preconnect" href="https://fonts. googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet">
        <link rel="icon" type="image/png" href="./Assets/the_juicy_stack.png">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
              integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">


    </head>

    <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="75">
        <header class="header_wrapper">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid bar">
                    <a class="navbar-brand " href="#">
                        <img src="./Assets/the_juicy_stack.png " />
                        <span class="title ">The Juicy Stack</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav menu-navbar-nav align-items-center">
                            <li class="nav-item">
                                <a class="nav-link " href="home.jsp">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.jsp">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="desc.jsp">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="offers.html">Offers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="review.jsp">Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="main-btn" style=' padding: -15px' href="UHome.jsp"><i class='bx bx-user' style='font-size: 24px'  ></i></a>
                            </li>  
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section class="bannere_wrapper">
            <div class="container-fluid mt-2 mt-sm-5">
                <div class="background-image">
                    <div class="text-overlay">
                        <h1>offers</h1>
                        <p>Burgers with a Side of Happiness!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="offers">
            <div class="row d-flex justify-content-around">
                <div class="col-12">
                    <div class="img-fluid p-2">
                        <div class="item-image"><img src="./Assets/off1.png" width="100%"></div>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-around">
                <div class="col-12">
                    <div class="img-fluid p-2">
                        <div class="item-image"><img src="./Assets/off2.png" width="100%"></div>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-around">
                <div class="col-12">
                    <div class="img-fluid p-2">
                        <div class="item-image"><img src="./Assets/off3.png" width="100%"></div>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-around">
                <div class="col-12">
                    <div class="img-fluid p-2">
                        <div class="item-image"><img src="./Assets/off4.png" width="100%"></div>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-around">
                <div class="col-12">
                    <div class="img-fluid p-2">
                        <div class="item-image"><img src="./Assets/off5.png" width="100%"></div>
                    </div>
                </div>
            </div>

        </section>

        <section class="footer_wrapper mt-1 mt-sm-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-6 text-center text-md-start">
                        <div class="footer-logo mb-3 mb-md-0">
                            <img src="./Assets/the_juicy_stack.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <ul
                            class="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center social-icon mb-3 mb-mb-0">
                            <li>
                                <a href="#">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="copyright-text text-center mb-3 mb-lg-0">
                            <p class="mb-0">
                                Copyright &COPY; 2023
                                <a href="#">
                                   The Juicy Stack
                                </a>.
                                All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
                integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
        <script src="./JS/main.js"></script>

    </body>

</html>
<%
    }
%>