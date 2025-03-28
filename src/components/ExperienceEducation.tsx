'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
}

interface ExperienceEducationProps {
  experience: TimelineItem[];
  education: TimelineItem[];
}

const TimelineSection = ({ items, icon: Icon, title }: { 
  items: TimelineItem[],
  icon: any,
  title: string 
}) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <Icon className="w-6 h-6 text-blue-600" />
      {title}
    </h3>
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-6 border-l-2 border-gray-200"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
          <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="font-semibold text-gray-900">{item.title}</h4>
            <p className="text-blue-600 mt-1">{item.institution}</p>
            <p className="text-sm text-gray-500 mt-1">{item.period}</p>
            {item.description && (
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ExperienceEducation = ({ experience, education }: ExperienceEducationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6"
    >
      <TimelineSection 
        items={experience} 
        icon={BriefcaseIcon} 
        title="Professional Experience" 
      />
      <TimelineSection 
        items={education} 
        icon={AcademicCapIcon} 
        title="Education" 
      />
    </motion.div>
  );
};

export default ExperienceEducation; 