import React, { useEffect } from 'react';
import './Experience.css'
import img1 from '../../../images/s1.webp'
import img2 from '../../../images/s2.webp'
import img3 from '../../../images/s3.webp'
import img4 from '../../../images/s4.webp'
import Aos from "aos";
import "aos/dist/aos.css"

const Experience = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
},[]);
    return (
        <div  data-aos="fade-right" className="text-center container mt-5">
            <h3><i>Experience</i></h3>
            <h1>FLY IN THE SKY</h1>
            
           
               <div className="experience-div ">
               <div>
                   <img src={img1} alt="" />
                   <h5 className="m-3">Immersive Field Of View</h5>
                   <p>Screen equivalent to 125” screen viewed from 10 feet with 24-bit true color (16 million colors)</p>

                </div>
                 <div>
                 <img src={img2} alt="" />
                 <h5 className="m-3">USB & HDMI</h5>
                   <p>Includes optional full immersion face mask. Supports HDMI industry standard 3D content</p>
                        
                </div>
                 <div>
                 <img src={img3} alt="" />
                 <h5 className="m-3">Battary</h5>
                   <p>Built-in batteries allow the pilot to participate in the sport for hours of racing.</p>
                        
                </div>
                 <div>
                 <img src={img4} alt="" />
                 <h5 className="m-3">Return To Home</h5>
                   <p>Return home tells the drone to automatically come back to you using GPS. It's a very usefu onvenient feature.</p>
                        
                </div>
               </div>
            
        </div>
    );
};

export default Experience;