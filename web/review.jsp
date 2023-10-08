<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String N = (String) session.getAttribute("userName");
    String E = (String) session.getAttribute("userEmail");
    if (N == null) {
        response.sendRedirect("index.html");
    } else {
%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Review-The Juicy Stack</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./CSS/style.css">
        <link rel="stylesheet" href="./CSS/review.css">
        <link rel="stylesheet" href="./CSS/responsive.css">
        <link rel="stylesheet" href="./CSS/reviewresponsive.css">
        <link rel="preconnect" href="https://fonts. googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Dancing+Script:wght@700&family=Poppins:wght@400;600;700&display=swap"
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
                                <a class="nav-link " href="about.jsp">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="desc.jsp">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="offers.jsp">Offers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active"  aria-current="page" href="review.jsp">Review</a>
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
                        <h1>reviews</h1>
                        <p>Burgers with a Side of Happiness!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="one-liner ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="heading ">
                            <span class="one-line-heading">
                                Golden words by Our Coustomers
                            </span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="one-liner-content d-flex flex-column  pt-4">
                            <span> "The Juicy Stack: Where every bite's a symphony of flavors, making burger dreams come true." </span>

                            <span> "Savoring a Juicy Stack burger feels like a flavor explosion that awakens your taste buds." </span>

                            <span> "At The Juicy Stack, we're not just stacking burgers; we're stacking unforgettable, mouthwatering
                                experiences." </span>

                            <span> "Burgers that defy gravity, piled high with succulent ingredients – that's The Juicy Stack's
                                trademark." </span>

                            <span> "Elevate your burger game with The Juicy Stack – where passion for flavor meets culinary excellence."
                            </span>

                            <span> "The Juicy Stack: A culinary masterpiece where layers of taste tell stories with every bite." </span>

                            <span> "We're on a mission at The Juicy Stack: Transforming simple ingredients into towering works of art."
                            </span>

                            <span> "Unleash your inner burger connoisseur at The Juicy Stack, where every bite is an adventure." </span>

                            <span> "Taste the extraordinary at The Juicy Stack, where we stack flavors as high as your expectations."
                            </span>

                            <span> "Bite into burger bliss at The Juicy Stack, where our stacks aren't just meals; they're experiences."
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="row p-0 m-0">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="heading">
                    <span class="one-line-heading font ">
                        What Our Customers are Saying
                    </span>
                </div>
            </div>
        </div>

        <section class="detail-review">
            <div class="container-fluid ">

                <div class="row">
                    <div class="col-md-10 d-md-flex">
                        <div class="col-md-3 ds">
                            <div class="detail-item d-flex flex-column align-items-center">
                                <div class="reviwer-image">
                                    <img src="./Assets/reviwer3.png" alt="Customer Image" class="rounded-circle">
                                </div>
                                <div class="reviwer-name mt-3">
                                    Sanjay Singh
                                </div>
                                <div class="rating mt-3">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9  content-color">
                            <div class="reviwer-content">
                                The Juicy Stack is a pioneer in redefining the essence of burger perfection. Their extraordinary creations
                                invite you to experience the exquisite delight of juicy indulgence. These signature patties, masterfully
                                cooked to perfection, find their home nestled between soft, freshly baked buns, complemented by the
                                crispness of farm-fresh vegetables. The enigmatic secret sauce expertly orchestrates a symphony of
                                flavors, an intricate dance upon your palate. Each bite is a revelation, an epiphany of why The Juicy
                                Stack stands as the ultimate destination for burger enthusiasts in search of an indelible culinary journey
                                that transcends the ordinary.
                            </div>
                            <div class="reviwer-content small-screen">
                                The Juicy Stack reimagines burger perfection with their incredible creations. Succulent patties, fresh
                                buns, crisp veggies, and secret sauce combine for a flavorful masterpiece, making them the top choice for
                                burger aficionados.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row rows">
                    <div class="col-2 col-0 rs"></div>
                    <div class="col-md-10  d-md-flex">
                        <div class="col-md-3 ">
                            <div class="detail-item d-flex flex-column align-items-center">
                                <div class="reviwer-image">
                                    <img src="./Assets/reviwer1.jpeg" alt="Customer Image" class="rounded-circle">
                                </div>
                                <div class="reviwer-name mt-3">
                                    Leo watt
                                </div>
                                <div class="rating mt-3">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 content-color">
                            <div class="reviwer-content">
                                The Juicy Stack is a true burger haven! From the first bite, you're greeted with a burst of flavors that
                                dance on your taste buds. Their patties are a work of art, perfectly cooked to deliver that juicy,
                                mouthwatering experience. The combination of fresh buns and crisp vegetables adds delightful textures,
                                making each bite a culinary adventure. The secret sauce is the crown jewel, seamlessly binding all the
                                elements into a symphony of taste. Dining here is an experience that leaves you craving more. If you
                                appreciate the art of burger making, The Juicy Stack is your undisputed destination for a gourmet burger
                                journey.
                            </div>
                            <div class="reviwer-content small-screen">
                                The Juicy Stack delivers a sensory feast with burgers that tantalize taste, texture, and aroma. Each bite
                                transports you to burger heaven, making it a must-visit for burger perfection seekers.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row rows">
                    <div class="col-md-10  d-md-flex">
                        <div class="col-md-3 ">
                            <div class="detail-item d-flex flex-column align-items-center">
                                <div class="reviwer-image">
                                    <img src="./Assets/reviwer2.png" alt="Customer Image" class="rounded-circle">
                                </div>
                                <div class="reviwer-name mt-3">
                                    Rohan Yadav
                                </div>
                                <div class="rating mt-3">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 content-color">
                            <div class="reviwer-content">
                                The Juicy Stack is your gateway to burger bliss, crafting mouthwatering creations that ignite your taste
                                buds and orchestrate a symphony of flavors on your palate. With an enigmatic secret sauce, pristine
                                ingredients, and flawlessly grilled patties, each burger is a delectable masterpiece. Missing out on The
                                Juicy Stack's burgers means bypassing an unparalleled culinary journey. These burgers are culinary
                                canvases, adorned with vivid hues and enticing textures that enthrall your senses, inviting you to savor a
                                gastronomic adventure unlike any other. Succumb to the temptation and embark on a taste expedition that
                                promises to delight your palate.
                            </div>
                            <div class="reviwer-content small-screen">
                                The Juicy Stack crafts burger perfection with secret sauces, fresh ingredients, and expertly grilled
                                patties. Each bite is a flavorful masterpiece, a must-try culinary adventure.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row ro">
                    <div class="col-2 rs"></div>
                    <div class="col-md-10  d-md-flex">
                        <div class="col-md-3 ">
                            <div class="detail-item d-flex flex-column align-items-center">
                                <div class="reviwer-image">
                                    <img src="./Assets/reviwer4.jpeg" alt="Customer Image" class="rounded-circle">
                                </div>
                                <div class="reviwer-name mt-3">
                                    Bharti Agrawal
                                </div>
                                <div class="rating mt-3">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9734;</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9  content-color">
                            <div class="reviwer-content">
                                Prepare to indulge your senses at The Juicy Stack, where burger connoisseurs find culinary nirvana. Their
                                burgers are an exquisite sensory symphony, tantalizing taste, texture, and aroma. As you raise one to your
                                lips, the alluring scent wafts to your nostrils, foretelling the impending gastronomic delight. That
                                initial bite is a transcendent journey to burger paradise. It's the kind of experience that prompts you to
                                momentarily close your eyes and cherish every flavorful moment. If you're on a quest for burger
                                perfection, your search ends at The Juicy Stack, where they meticulously craft burger artistry. The Juicy
                                Stack is your gateway to burger euphoria.
                            </div>
                            <div class="reviwer-content small-screen">
                                The Juicy Stack delivers a sensory feast with burgers that tantalize taste, texture, and aroma. Each bite
                                transports you to burger heaven, making it a must-visit for burger perfection seekers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="feedback container-fluid d-flex justify-content-center align-items-center">

            <div class="containe">
                <div class="star-widget">
                    <input class="none" type="radio" name="rate" id="rate-5">
                    <label for="rate-5" class="fas fa-star"></label>
                    <input class="none" type="radio" name="rate" id="rate-4">
                    <label for="rate-4" class="fas fa-star"></label>
                    <input class="none" type="radio" name="rate" id="rate-3">
                    <label for="rate-3" class="fas fa-star"></label>
                    <input class="none" type="radio" name="rate" id="rate-2">
                    <label for="rate-2" class="fas fa-star"></label>
                    <input class="none" type="radio" name="rate" id="rate-1">
                    <label for="rate-1" class="fas fa-star"></label>
                    <form action="#" method="post">
                        <div class="header">
                            <header></header>
                        </div>
                        <div class="name">
                            <input type="text" placeholder="Name" value="<%=N%>" disabled="disabled">
                        </div>
                        <div class="email">
                            <input type="email" placeholder="Email" value="<%=E%>" disabled="disabled">
                        </div>
                        <div class="textarea">
                            <textarea cols="30"  rows="10" placeholder="Describe your experience.."></textarea>
                        </div>
                        <div class=" d-flex justify-content-center align-items-center">
                            <input type="submit" placeholder="Post" class="main-btn">
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <section class="footer_wrapper mt-0">
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