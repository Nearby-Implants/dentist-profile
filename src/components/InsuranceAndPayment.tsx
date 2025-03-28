'use client';

import { CreditCardIcon, ShieldCheckIcon, BanknotesIcon } from '@heroicons/react/24/outline';

interface InsuranceProvider {
  name: string;
  logo?: string;
}

interface PaymentMethod {
  name: string;
  icon?: string;
}

interface InsuranceAndPaymentProps {
  insuranceProviders: InsuranceProvider[];
  paymentMethods: PaymentMethod[];
  financingOptions: string[];
  additionalInfo: string;
}

export default function InsuranceAndPayment({
  insuranceProviders,
  paymentMethods,
  financingOptions,
  additionalInfo,
}: InsuranceAndPaymentProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Insurance & Payment</h2>
        <p className="mt-2 text-gray-600">
          We accept various insurance providers and offer flexible payment options
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Accepted Insurance</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                {provider.logo ? (
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="text-gray-700 font-medium">{provider.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                {method.icon ? (
                  <img
                    src={method.icon}
                    alt={method.name}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="text-gray-700 font-medium">{method.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Financing Options</h3>
          <div className="space-y-3">
            {financingOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center text-gray-600"
              >
                <BanknotesIcon className="h-5 w-5 mr-2" />
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <ShieldCheckIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-blue-800">Additional Information</h4>
              <p className="mt-1 text-sm text-blue-700">{additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 