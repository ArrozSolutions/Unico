import React from 'react'
import Header from '../Header/Header'
import Newsletter from '../Footer/Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import "./OurStory.css"
import google from "../../assets/google.png"

const OurStory = () => {
  return (
    <div>
      <Header/>
      <div className='timeline-heading'><h1>Our Story</h1></div>
      <div className="timeline">
        <div className="timeline-container left-container">
        <img className='timeline-img' src={google} alt="" />
            <div className="text-box">
                <h2>Heading-1</h2>
                <small>2015-2016</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur officiis sit odio minima ipsam omnis accusantium aliquid explicabo vero quidem, similique quos nihil sed perspiciatis, illum corporis odit. Non.</p>
            </div>
        </div>
        <div className="timeline-container right-container">
        <img className='timeline-img' src={google} alt="" />
            <div className="text-box">
                <h2>Heading-2</h2>
                <small>2015-2016</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur officiis sit odio minima ipsam omnis accusantium aliquid explicabo vero quidem, similique quos nihil sed perspiciatis, illum corporis odit. Non.</p>
            </div>
        </div>
        <div className="timeline-container left-container">
        <img className='timeline-img' src={google} alt="" />
            <div className="text-box">
                <h2>Heading-3</h2>
                <small>2015-2016</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur officiis sit odio minima ipsam omnis accusantium aliquid explicabo vero quidem, similique quos nihil sed perspiciatis, illum corporis odit. Non.</p>
            </div>
        </div>
        <div className="timeline-container right-container">
        <img className='timeline-img' src={google} alt="" />
            <div className="text-box">
                <h2>Heading-4</h2>
                <small>2015-2016</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur officiis sit odio minima ipsam omnis accusantium aliquid explicabo vero quidem, similique quos nihil sed perspiciatis, illum corporis odit. Non.</p>
            </div>
        </div>
        <div className="timeline-container left-container">
        <img className='timeline-img' src={google} alt="" />
            <div className="text-box">
                <h2>Heading-5</h2>
                <small>2015-2016</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur officiis sit odio minima ipsam omnis accusantium aliquid explicabo vero quidem, similique quos nihil sed perspiciatis, illum corporis odit. Non.</p>
            </div>
        </div>

      </div>

      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default OurStory
