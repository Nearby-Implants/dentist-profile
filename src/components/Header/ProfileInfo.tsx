'use client';

import { StarIcon, PhoneIcon, CalendarIcon, EnvelopeIcon, PlusIcon } from '@heroicons/react/24/solid';

interface Category {
  name: string;
  primary?: boolean;
}

interface ProfileInfoProps {
  name: string;
  categories: Category[];
  yearsOfExperience: number;
  rating: number;
  reviewCount: number;
  onCallClick: () => void;
  onBookClick: () => void;
  onInquiryClick: () => void;
}

const ProfileInfo = ({
  name,
  categories,
  yearsOfExperience,
  rating,
  reviewCount,
  onCallClick,
  onBookClick,
  onInquiryClick,
}: ProfileInfoProps) => {
  const primaryCategory = categories.find(cat => cat.primary);
  const otherCategories = categories.filter(cat => !cat.primary);
  const hasMoreCategories = otherCategories.length > 0;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-6">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {/* Provider Info */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {primaryCategory && (
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {primaryCategory.name}
                </span>
              )}
              {hasMoreCategories && (
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium flex items-center gap-1">
                  <PlusIcon className="h-4 w-4" />
                  {otherCategories.length} other {otherCategories.length === 1 ? 'category' : 'categories'}
                </span>
              )}
            </div>
            <p className="text-gray-600 mt-4">{yearsOfExperience}+ Years of Experience</p>
          </div>

          {/* Rating */}
          <div className="flex justify-center items-center gap-2 border-t border-b border-gray-100 py-4">
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

          {/* Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={onCallClick}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </button>
            <button
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
            >
              <CalendarIcon className="h-5 w-5" />
              Book Consultation
            </button>
            <button
              onClick={onInquiryClick}
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors shadow-sm hover:shadow-md"
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