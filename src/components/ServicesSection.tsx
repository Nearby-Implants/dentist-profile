'use client';

import { motion } from 'framer-motion';

interface Service {
  id: string;
  name: string;
  price: string;
  duration?: string;
  description?: string;
  icon: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6">Offered Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-lg">{service.icon}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
                {service.description && (
                  <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                )}
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{service.price}</span>
                  {service.duration && (
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesSection; 