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
        <h1 class="m-10 text-5xl text-center">What people say about us!</h1>
        <ul>
          <div class="flex place-content-center p-10 space-x-10">
            {reviews.map((review) => (
              <li key={review.id}>
                <div class="bg-sky-200 p-5 shadow-md place-content-center rounded-md">
                    <Image
                      src={review.fields.Image[0].thumbnails.large.url}
                      width={100}
                      height={100}
                      class="p-4"
                    />
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