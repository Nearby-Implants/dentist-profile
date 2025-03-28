'use client';

import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

interface ProfileHeaderProps {
  name: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  profileImage: string;
  specialty: string;
}

const ProfileHeader = ({
  name,
  rating,
  reviewCount,
  startingPrice,
  profileImage,
  specialty,
}: ProfileHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={profileImage}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
              <p className="text-gray-600 mt-1">{specialty}</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
                <span className="text-blue-800 font-semibold">Starting from {startingPrice}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({reviewCount} reviews)</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader; 