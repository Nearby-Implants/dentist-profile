'use client';

import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

interface BusinessHours {
  day: string;
  hours: string;
}

interface Image {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface PracticeInfoProps {
  name: string;
  address: string;
  phone: string;
  email: string;
  businessHours: BusinessHours[];
  features: string[];
  images: Image[];
}

export default function PracticeInfo({
  name,
  address,
  phone,
  email,
  businessHours,
  features,
  images,
}: PracticeInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <div className="mt-2 flex items-center text-gray-600">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>{address}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <span>{email}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
          <div className="space-y-2">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between text-gray-600">
                <span>{schedule.day}</span>
                <span>{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Practice Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <BuildingOfficeIcon className="h-5 w-5 mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Clinic Photos</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="aspect-w-16 aspect-h-9">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover rounded-lg"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 