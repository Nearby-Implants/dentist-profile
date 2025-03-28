'use client';

import { StarIcon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface Review {
  id: string;
  patientName: string;
  rating: number;
  date: string;
  comment: string;
  treatment?: string;
  verified: boolean;
}

interface ReviewsAndTestimonialsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function ReviewsAndTestimonials({
  reviews,
  averageRating,
  totalReviews,
}: ReviewsAndTestimonialsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Patient Reviews</h2>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-lg font-medium text-gray-900">{averageRating}</span>
          </div>
          <span className="ml-2 text-gray-600">({totalReviews} reviews)</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <UserCircleIcon className="h-10 w-10 text-gray-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">{review.patientName}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          className={`h-4 w-4 ${
                            index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    {review.verified && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {review.treatment && (
                <span className="text-sm text-gray-500">{review.treatment}</span>
              )}
            </div>
            <p className="mt-3 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          View All Reviews
        </button>
      </div>
    </div>
  );
} 