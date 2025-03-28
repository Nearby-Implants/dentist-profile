'use client';

import { CurrencyDollarIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  icon?: string;
}

interface ServicesAndTreatmentsProps {
  services: Service[];
  categories: string[];
}

export default function ServicesAndTreatments({
  services,
  categories,
}: ServicesAndTreatmentsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Services & Treatments</h2>
        <p className="mt-2 text-gray-600">
          Comprehensive dental care services tailored to your needs
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.category}</p>
              </div>
              {service.icon && (
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-8 h-8 object-contain"
                />
              )}
            </div>

            <p className="mt-3 text-gray-600">{service.description}</p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                <span>{service.price}</span>
              </div>
            </div>

            <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 