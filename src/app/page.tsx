'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ProviderInfo from '@/components/ProviderInfo';
import PracticeInfo from '@/components/PracticeInfo';
import ServicesAndTreatments from '@/components/ServicesAndTreatments';
import InsuranceAndPayment from '@/components/InsuranceAndPayment';
import ReviewsAndTestimonials from '@/components/ReviewsAndTestimonials';

// Mock data for the dental profile
const mockData = {
  provider: {
    name: 'Dr. Emily Thompson',
    title: 'DDS, MS',
    gender: 'Female',
    languages: ['English', 'Spanish'],
    experience: 15,
    rating: 4.8,
    reviewCount: 127,
    education: {
      degree: 'Doctor of Dental Surgery',
      institution: 'University of California, San Francisco',
      year: 2008,
    },
    specializations: [
      { name: 'Cosmetic Dentistry', primary: true },
      { name: 'Orthodontics' },
      { name: 'Periodontics' },
      { name: 'Endodontics' },
    ],
  },
  practice: {
    name: 'Thompson Dental Care',
    address: '123 Dental Street, San Francisco, CA 94105',
    phone: '(555) 123-4567',
    email: 'info@thompsondental.com',
    businessHours: [
      { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    features: [
      'Free Parking',
      'Wheelchair Accessible',
      'Digital X-rays',
      'Sedation Dentistry',
      'Emergency Services',
      'Child-friendly Environment',
    ],
    images: [
      {
        id: '1',
        src: '/images/clinic-1.jpg',
        alt: 'Modern dental clinic reception',
        caption: 'Our state-of-the-art facility'
      },
      {
        id: '2',
        src: '/images/clinic-2.jpg',
        alt: 'Treatment room',
        caption: 'Advanced treatment rooms with the latest technology'
      },
      {
        id: '3',
        src: '/images/clinic-3.jpg',
        alt: 'Dental team',
        caption: 'Our experienced dental care team'
      }
    ],
  },
  services: {
    categories: [
      'General Dentistry',
      'Cosmetic Dentistry',
      'Orthodontics',
      'Periodontics',
      'Endodontics',
      'Pediatric Dentistry',
    ],
    list: [
      {
        id: '1',
        name: 'Teeth Whitening',
        description: 'Professional teeth whitening treatment for a brighter smile',
        duration: '1 hour',
        price: '$299',
        category: 'Cosmetic Dentistry',
        icon: '/icons/whitening.svg',
      },
      {
        id: '2',
        name: 'Dental Implants',
        description: 'Restore missing teeth with permanent dental implants',
        duration: '2-3 hours',
        price: '$3,000+',
        category: 'General Dentistry',
        icon: '/icons/implants.svg',
      },
      // Add more services as needed
    ],
  },
  insurance: {
    insuranceProviders: [
      { name: 'Delta Dental', logo: '/logos/delta-dental.svg' },
      { name: 'Aetna', logo: '/logos/aetna.svg' },
      { name: 'Cigna', logo: '/logos/cigna.svg' },
      { name: 'Blue Cross Blue Shield', logo: '/logos/bcbs.svg' },
    ],
    paymentMethods: [
      { name: 'Credit Card', icon: '/icons/credit-card.svg' },
      { name: 'Debit Card', icon: '/icons/debit-card.svg' },
      { name: 'HSA/FSA', icon: '/icons/hsa.svg' },
      { name: 'Cash', icon: '/icons/cash.svg' },
    ],
    financingOptions: [
      'CareCredit Financing',
      'In-house Payment Plans',
      'Third-party Financing Available',
    ],
    additionalInfo: 'We work with most major insurance providers and offer flexible payment options to make dental care accessible to everyone.',
  },
  reviews: {
    averageRating: 4.8,
    totalReviews: 127,
    reviews: [
      {
        id: '1',
        patientName: 'Sarah Johnson',
        rating: 5,
        date: 'March 15, 2024',
        comment: 'Dr. Thompson is amazing! She made me feel comfortable during my entire visit and explained everything clearly.',
        treatment: 'Teeth Whitening',
        verified: true,
      },
      {
        id: '2',
        patientName: 'Michael Chen',
        rating: 5,
        date: 'March 10, 2024',
        comment: 'The staff is very friendly and professional. The office is clean and modern. Highly recommend!',
        treatment: 'Dental Cleaning',
        verified: true,
      },
      // Add more reviews as needed
    ],
  },
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <Header
            name={mockData.provider.name}
            title={mockData.provider.title}
            categories={mockData.provider.specializations}
            experience={mockData.provider.experience}
            rating={mockData.provider.rating}
            reviewCount={mockData.provider.reviewCount}
            images={mockData.practice.images}
          />

          {/* Provider Information */}
          <ProviderInfo {...mockData.provider} />

          {/* Practice Information */}
          <PracticeInfo {...mockData.practice} />

          {/* Services and Treatments */}
          <ServicesAndTreatments
            services={mockData.services.list}
            categories={mockData.services.categories}
          />

          {/* Insurance and Payment */}
          <InsuranceAndPayment {...mockData.insurance} />

          {/* Reviews and Testimonials */}
          <ReviewsAndTestimonials {...mockData.reviews} />
        </div>
      </div>
    </main>
  );
} 