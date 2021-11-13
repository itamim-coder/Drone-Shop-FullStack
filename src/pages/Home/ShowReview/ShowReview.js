import React, {useEffect, useState} from 'react';
import './ShowReview.css'

const ShowReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('https://stormy-woodland-20048.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="mt-5">
            <h1 className="text-center mt-5">WHAT OUR CLIENTS SAY</h1>
            <div className="row review-div text-center ">
                    {
                        reviews.map((review) =>(
                          <div className="column ">
                               
                              <div className="pb-3">
                              <h1>{review?.name}</h1>
                               <p>{review?.review}</p>     
                               <h3>Rating : {review?.rating}</h3>                    
                             
                  
                            </div>
                            

                          </div>
                          
                        ))
                    }
                </div>
        </div>
    );
};

export default ShowReview;