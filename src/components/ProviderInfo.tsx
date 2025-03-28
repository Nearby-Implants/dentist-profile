'use client';

import { StarIcon } from '@heroicons/react/20/solid';
import { UserIcon, LanguageIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface ProviderInfoProps {
  name: string;
  title: string;
  gender: string;
  languages: string[];
  experience: number;
  rating: number;
  reviewCount: number;
  education: {
    degree: string;
    institution: string;
    year: number;
  };
  specializations: string[];
}

export default function ProviderInfo({
  name,
  title,
  gender,
  languages,
  experience,
  rating,
  reviewCount,
  education,
  specializations,
}: ProviderInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-600">{title}</p>
        </div>
        <div className="flex items-center space-x-1">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="text-gray-900 font-medium">{rating}</span>
          <span className="text-gray-500">({reviewCount} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <UserIcon className="h-5 w-5" />
          <span>{gender}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <LanguageIcon className="h-5 w-5" />
          <span>{languages.join(', ')}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <BriefcaseIcon className="h-5 w-5" />
          <span>{experience} years of experience</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <AcademicCapIcon className="h-5 w-5" />
          <span>{education.degree} from {education.institution}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Specializations</h3>
        <div className="flex flex-wrap gap-2">
          {specializations.map((specialization, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {specialization}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 