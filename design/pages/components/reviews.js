import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Review(){
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch(
          "https://api.airtable.com/v0/appTH68kRKzLzFA89/Reviews",
          {
            method: "GET",
            headers: {
                "Authorization": "Bearer keyX4YJYB0MQFToGI"
                }
            }
        )
          .then((response) => response.json())
          .then((data) => {
            setReviews(data.records);
          })
    }, []);

    return (
      <div>
        <h1 class="m-10 text-4xl text-center">What people say about us!</h1>
        <ul>
          <div class="grid grid-cols-1 gap-1 md:grid md:grid-cols-2 place-content-center shadow-md">
            {reviews.map((review) => (
              <li key={review.id}>
                <div class="bg-slate-200">
                    <img
                      src={review.fields.Image[0].thumbnails.large.url}
                      class="p-4 object-cover shrink-0"
                    ></img>
                  <p class="text-2xl p-2 font-bold">{review.fields.Name}</p>
                  <p class="p-3">"{review.fields.Feedback}"</p>
                </div>
                
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
}