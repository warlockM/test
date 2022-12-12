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
          <div class="md:flex place-content-center p-10 space-x-10 sm:m-4">
            {reviews.map((review) => (
              <li key={review.id}>
                <div class="flex flex-wrap bg-slate-100">
                    <img
                      src={review.fields.Image[0].thumbnails.large.url}
                      class="p-4 object-cover shrink-0"
                    ></img>
                  <p class="text-3xl p-3">{review.fields.Name}</p>
                  <p class="text-3xl p-3 font-bold">{review.fields.Rating}★</p>
                  <p class="p-4">"{review.fields.Feedback}"</p>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
}