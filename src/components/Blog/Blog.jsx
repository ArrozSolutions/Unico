import React from "react";
import "./Blog.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Footer/Newsletter/Newsletter";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="blog">
        <div className="blog-heading">
          <span>Recent Posts</span>
          <h3>Blogs</h3>
        </div>
        <div className="blog-container">
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://images.unsplash.com/photo-1579408795979-966a21467a34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="blog-text">
                    <span>10 April 2023 / Millet Meusli</span>
                    <Link className="blog-title link" to="/Millet-Meusli">Check to know what goes behind in making the Millet Meusli that makes it so delicious </Link>
                    <p>Here is the complete list of ingredients that we add to our Millet Meusli in order to make them super light and healthy, which makes it the best kickstarter for your day</p>
                    <Link className="a link" to={"/Millet-Meusli"}>Read More</Link>
                </div>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="blog-text">
                    <span>27 April 2023 / Millet Bar</span>
                    <Link className="blog-title link" to="/Millet-Bar">Check to know what goes behind in making the Millet BarCracker that makes it so delicious </Link>
                    <p>Here is the complete list of ingredients that we add to our Millet Bars in order to make them super light and healthy, which makes it the best kickstarter for your day</p>
                    <Link className="a link" to={"/Millet-Bar"}>Read More</Link>
                </div>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://images.unsplash.com/photo-1579400219231-9575c05eb875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="blog-text">
                    <span>18 June 2023 / Millet Laddo</span>
                    <Link className="blog-title link" to="/Millet-Laddo">Check to know what goes behind in making the Millet Laddos that makes it so delicious </Link>
                    <p>Here is the complete list of ingredients that we add to our Millet Laddos in order to make them super light and healthy, which makes it the best kickstarter for your day</p>
                    <Link className="a link" to={"/Millet-laddo"}>Read More</Link>
                </div>
            </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
