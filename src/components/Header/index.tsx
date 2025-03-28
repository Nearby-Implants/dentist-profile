'use client';

import ImageCarousel from './ImageCarousel';
import ProfileInfo from './ProfileInfo';

interface HeaderProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    caption?: string;
  }>;
  profile: {
    name: string;
    specialization: string;
    yearsOfExperience: number;
    rating: number;
    reviewCount: number;
  };
}

const Header = ({ images, profile }: HeaderProps) => {
  const handleCallClick = () => {
    // Implement call functionality
    console.log('Call clicked');
  };

  const handleBookClick = () => {
    // Implement booking functionality
    console.log('Book clicked');
  };

  const handleInquiryClick = () => {
    // Implement inquiry functionality
    console.log('Inquiry clicked');
  };

  return (
    <header className="relative">
      <ImageCarousel images={images} />
      <ProfileInfo
        {...profile}
        onCallClick={handleCallClick}
        onBookClick={handleBookClick}
        onInquiryClick={handleInquiryClick}
      />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-up p-4 md:hidden z-50">
        <div className="flex gap-2">
          <button
            onClick={handleCallClick}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Call Now
          </button>
          <button
            onClick={handleBookClick}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Book
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 