import React from "react";
import "./Homepage.css";
import Vector1 from "./All_Images/Vector1.png";
import Vector2 from "./All_Images/Vector2.png";
import Vector3 from "./All_Images/Vector3.png";
import Vector4 from "./All_Images/Vector4.png";
import metaverse from "./All_Images/metaverse.png";
import web3 from "./All_Images/web3.png";
import Badge1 from "./All_Images/Badge1.png";
import Badge2 from "./All_Images/Badge2.png";
import project1 from "./All_Images/project1.png";
import project2 from "./All_Images/project2.png";
import loadMore from "./All_Images/loadMore.png";
import HalfCircle from './All_Images/HalfCircle.png'
import OrnamentC from './All_Images/OrnamentC.jpg'
import { BsArrowRight } from "react-icons/bs";

export default function Homepage() {
  return (
    <>
      {/* service container */}
      <div className="homepage_service   container">
        <div className="about_cards">
        <div className="service_heading_Button">
        <span className="headingButton"><span>Service We Can Help You</span>
          <a href="">See All
          </a></span>  
        </div>

        <div className="box-collage-group row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card" style={{ borderTopLeftRadius:"4rem"
}}>
              <img
                src={Vector1}
                className="card_image1 card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Metaverse</h5>
                <p className="card-text">
                  Have you seen the tech giant Facebook, just revamping all his
                  business to be all in for the metaverse? We there too. With
                  presence and expertise in Decentraland, Somnium Space and
                  Sandbox.
                </p>
                <div className="readMoreBtn">
                <a href="">
                    Read More <BsArrowRight />
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ borderTopRightRadius:"4rem",marginTop:"2.5rem"
}} id="card2down">
              <img
                src={Vector2}
                className="card_image2 card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">UX/UI Research</h5>
                <p className="card-text">
                  Our team of UI/UX experts can deliver to you a portfolio of
                  beautifully crafted designs. Responsiveness, high fidelity and
                  sharp interfaces are our mojo.
                </p>
                <div className="readMoreBtn">

                <a href="">Read More <BsArrowRight />
                  
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card3_Col col ">
          <span className="card3Circle"><img src={HalfCircle} alt="" /></span>
            <div className="card" style={{ borderBottomLeftRadius:"4rem",marginTop:"-2.4rem"
}}> 
              <img
                src={Vector3}
                className="card_image3 card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Branding</h5>
                <p className="card-text">
                  No ideas how to turn your brilliant new idea into a successful
                  brand? We’re here to help. Having guided multiple clients thru
                  this journey, we can assure you are in good hands.
                </p>
                <div className="readMoreBtn">
                <a href=""> Read More <BsArrowRight />
                 
                </a>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ borderBottomRightRadius:"4rem"
}} id="card2down">
              <img
                src={Vector4}
                className="card_image4 card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Web3</h5>
                <p className="card-text">
                  We have a vision for the future of web, having senior
                  developers that have seen and helped to build web 1.0, web 2.0
                  and now working with the latest standards of web3.
                </p>
                <div className="readMoreBtn">
                <a href="">  Read More <BsArrowRight />
               
                </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <div className="ornament">
        <img src={OrnamentC} alt="" />
      </div> */}
      {/* latest_projects */}
      <div className="latest_projects container">
        <div className="projects_heading">
            <h1>Our Latest Projects</h1>
        </div>
        <div class="projects_flexx d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <div className="projects_image">
              <img src={project1} alt="" />
            </div>
            <div className="projects_heading">
              <p>Talent.com - Logo, Full Redesign and Branding</p>
            </div>
            <div className="projects_description"><p>
              Talent.com a new brand identity using their core values of
              optimism, transparency and approachability as inspiration. As a 
              result, we were able to create the most streamlined
              </p></div>
          </div>
          <div class="p-2 bd-highlight">
            <div className="projects_image">
              <img src={project2} alt="" />
            </div>
            <div className="projects_heading">
              <p>Bonfire - Landing Page Design Webby Awards Nomination</p>
              <span className="halfcircle"><img src={HalfCircle} alt="" /></span>
            </div>
            <div className="projects_description"><p>
              Pretty excited to announce that we just got nominated at the Webby
              Awards! easy to understand and to use should be essential for
              every business owner who uses their website.
              </p>  </div>
           
          </div>
        </div>
        <div className="loadMore">
        <a href="" className="loadMoreclass">
          <img src={loadMore} alt="" />
        </a>
        </div>
      </div>

      {/* blogs start */}
      <div className="blogs container">
        <div className="blog_h1">
          <h1>Blog From Insights</h1>
        </div>
        <div class="blogs_cardStart d-flex bd-highlight">
          <div class="blogs_card1 p-2 flex-fill bd-highlight">
            <div className="blogs_image">
              <img src={metaverse} alt="" />
            </div>
            <div className="badge_image">
              <img src={Badge1} alt="" />
            </div>
            <div className="blogs_para">
              Metamandrill provides explanatory and practical<br /> information on
              subjects related to the metaverse.
            </div>
            <div className="blogs_button">
              <a href="">   Read More <BsArrowRight />
              
              </a>
            </div>
          </div>
          <div class="blogs_card2 p-2 flex-fill bd-highlight">
            <div className="blogs_image">
              <img src={web3} alt="" />
            </div>
            <div className="badge_image">
              <img src={Badge2} alt="" />
            </div>
            <div className="blogs_para">
              Clear timeline filters Web3 is going just great and is   <br />definitely
              not an enormous grift ..
            </div>
            <div className="blogs_button">
              <a href="">Read More <BsArrowRight />
             
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
