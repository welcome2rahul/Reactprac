import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Css/Slider.css'

export default function Image(props) {
    
    const settings = {
        dot:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase:"linear", 
    }

    return (
        
       <Slider {...settings} className="Slider">
           
       {/* <div className="container mt-5 carousel">
            <h1 className ="slider_title">Latest Jobs</h1>
            </div> */}
            <div className="card-wrapper inner">
                <div className="card">
                    <div className="card-image" >
                        <h1>Job Title</h1>
                        <h2>Job Role</h2>
                        <p>Jobs Description</p>
                    </div>
                   
                    <div className = "details">
                        <button className="btn btn-danger" >Apply</button>
                    </div>
                </div>
            </div>
            <div className="card-wrapper inner">
                <div className="card">
                    <div className="card-image" >
                        <h1>Job Title</h1>
                        <h2>Job Role</h2>
                        <p>Jobs Description</p>
                    </div>
                   
                    <div className = "details">
                        <button className="btn btn-danger" >Apply</button>
                    </div>
                </div>
            </div>
            <div className="card-wrapper inner">
                <div className="card">
                    <div className="card-image" >
                        <h1>Job Title</h1>
                        <h2>Job Role</h2>
                        <p>Jobs Description</p>
                    </div>
                   
                    <div className = "details">
                        <button className="btn btn-danger" >Apply</button>
                    </div>
                </div>
            </div>
            <div className="card-wrapper inner">
                <div className="card">
                    <div className="card-image" >
                        <h1>Job Title</h1>
                        <h2>Job Role</h2>
                        <p>Jobs Description</p>
                    </div>
                   
                    <div className = "details">
                        <button className="btn btn-danger" >Apply</button>
                    </div>
                </div>
            </div>
            <div className="card-wrapper inner">
                <div className="card">
                    <div className="card-image" >
                        <h1>Job Title</h1>
                        <h2>Job Role</h2>
                        <p>Jobs Description</p>
                    </div>
                   
                    <div className = "details">
                        <button className="btn btn-danger" >Apply</button>
                    </div>
                </div>
            </div>
            
       </Slider>
       
    )
}
