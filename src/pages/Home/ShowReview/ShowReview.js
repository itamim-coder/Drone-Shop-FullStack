import React, {useEffect, useState} from 'react';
import './ShowReview.css'

const ShowReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1>review</h1>
            <div className="row review-div text-center">
                    {
                        reviews.map((review) =>(
                          <div className="column ">
                               {/* <div class=""> */}
                               <h1>{review?.name}</h1>
                               <p>{review?.review}</p>
                               <h3>{review?.rating}</h3>
                            {/* </div> */}

                          </div>
                        ))
                    }
                </div>
        </div>
    );
};

export default ShowReview;