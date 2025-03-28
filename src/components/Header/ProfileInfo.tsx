'use client';

import { StarIcon, PhoneIcon, CalendarIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

interface ProfileInfoProps {
  name: string;
  specialization: string;
  yearsOfExperience: number;
  rating: number;
  reviewCount: number;
  onCallClick: () => void;
  onBookClick: () => void;
  onInquiryClick: () => void;
}

const ProfileInfo = ({
  name,
  specialization,
  yearsOfExperience,
  rating,
  reviewCount,
  onCallClick,
  onBookClick,
  onInquiryClick,
}: ProfileInfoProps) => {
  return (
    <div className="bg-white shadow-lg rounded-b-2xl px-6 py-8 -mt-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Provider Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <p className="text-xl text-blue-600 mt-1">{specialization}</p>
            <p className="text-gray-600 mt-2">{yearsOfExperience}+ Years of Experience</p>
            
            {/* Rating */}
            <div className="flex items-center mt-3 gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {rating}/5 ({reviewCount}+ reviews)
              </span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={onCallClick}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </button>
            <button
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              <CalendarIcon className="h-5 w-5" />
              Book Consultation
            </button>
            <button
              onClick={onInquiryClick}
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo; 