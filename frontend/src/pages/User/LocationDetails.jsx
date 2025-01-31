import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useGetSpecificLocationQuery, useAddLocationReviewMutation } from "../../redux/api/location";
import { Lk } from "react-flags-select";
import { LuKeySquare } from 'react-icons/lu';

function LocationDetails() {
  const { id: locationId } = useParams();
  const [comment, setComment] = useState("");
  const { data: location, refetch, isLoading, error } = useGetSpecificLocationQuery(locationId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingLocationReview }] = useAddLocationReviewMutation();

   console.log(userInfo.username)
  const submitHandler = async (e) => {
    e.preventDefault();
    if ( !comment) {
      toast.error("Please provide comment.");
      return;
    }

    try {
      await createReview({ id: locationId, comment }).unwrap();
      refetch();
      toast.success("Review created successfully");
      setComment("");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  if (isLoading) {
    return <p className="text-center text-xl text-gray-400">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">An error occurred while fetching the location details.</p>;
  }

  return (
    <div className="container mx-auto my-10 p-5 bg-gray-900 text-white rounded-2xl shadow-2xl">
      <div className="flex justify-between items-start">
        <div className="w-1/3 space-y-6 p-7">
          <h3 className="text-3xl font-semibold text-gray-100 mb-4">Reviews</h3>
          {location?.reviews?.length > 0 ? (
            <div className="space-y-6">
              {location?.reviews.map((review, id) => (
                <div key={id} className="p-4 bg-gray-800 rounded-xl shadow-md transition-all hover:bg-gray-700">
                  <div className="flex items-center gap-2">
                     <p className="text-blue-700 font-semibold">{review.name}</p>
                     <span className="text-gray-500">{review.usercountry}</span>
                  </div>
                  <p className="text-white mt-2">{review.comment}</p>
                   </div>
              ))}   
            </div>
          ) : (
            <p className="text-gray-400">No reviews yet. Be the first to leave a review!</p>
          )}
        </div>

        <div className="w-2/3">
          <div className="flex justify-center items-center mb-8">
            <img
              src={location?.image || "fallback-image-url"}
              alt={location?.name}
              className="w-full max-w-xl rounded-2xl shadow-lg object-cover transition-all hover:scale-105"
            />
          </div>

          <section>
            <h2 className="text-4xl font-extrabold text-gray-100 mb-4">{location?.name}</h2>
            <p className="text-lg text-gray-300">{location?.detail}</p>
          </section>

          <div className="mt-4">
            <p className="text-2xl font-semibold text-gray-200">Rating: {location?.rating}</p>
            <div className="mt-2">
              <p className="text-lg font-medium text-gray-200">Types:</p>
              <ul className="list-disc pl-6 space-y-1">
                {location?.type?.map((type, index) => (
                  <li key={index} className="text-gray-300">{type}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-3xl font-semibold text-gray-100 mb-4">Add a Review</h3>
            {userInfo ? (
              <form onSubmit={submitHandler} className="space-y-6">
                <div>
                  <label htmlFor="comment" className="block text-lg font-medium text-gray-200">Comment</label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mt-2 w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="4"
                    placeholder="Write your review here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white py-3 px-8 rounded-xl transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={loadingLocationReview}
                >
                  {loadingLocationReview ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            ) : (
              <p className="text-gray-400">You need to be logged in to leave a review.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
