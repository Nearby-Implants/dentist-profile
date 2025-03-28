import Header from '@/components/Header';

const mockData = {
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
      src: '/images/team.jpg',
      alt: 'Dental team',
      caption: 'Our experienced dental care team'
    }
  ],
  profile: {
    name: "Dr. Emily Thompson",
    categories: [
      { name: "Oral & Maxillofacial Surgery", primary: true },
      { name: "Dental Implants" },
      { name: "Cosmetic Dentistry" },
      { name: "Orthodontics" }
    ],
    yearsOfExperience: 15,
    rating: 4.8,
    reviewCount: 120
  },
  contactInfo: {
    phone: "+1 (555) 123-4567",
    email: "dr.thompson@dentalcare.com",
    address: "123 Medical Center Blvd, Suite 500",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    businessHours: [
      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ]
  },
  services: [
    {
      id: "1",
      name: "Dental Implants",
      price: "Starting at $2,500",
      duration: "2-3 hours",
      description: "Complete implant procedure including consultation and follow-up",
      icon: "🦷"
    },
    {
      id: "2",
      name: "Wisdom Teeth Removal",
      price: "Starting at $1,200",
      duration: "1-2 hours",
      description: "Safe extraction of wisdom teeth under local or general anesthesia",
      icon: "🦷"
    },
    {
      id: "3",
      name: "Full Mouth Reconstruction",
      price: "Custom Quote",
      duration: "Multiple Sessions",
      description: "Comprehensive treatment to restore dental function and aesthetics",
      icon: "✨"
    }
  ],
  insurance: {
    accepted: [
      "Delta Dental",
      "Cigna",
      "Aetna",
      "MetLife",
      "Guardian"
    ],
    paymentMethods: [
      "Cash",
      "Credit Cards",
      "CareCredit",
      "Insurance"
    ]
  },
  qualifications: {
    education: [
      {
        id: "edu1",
        title: "Doctor of Dental Surgery",
        institution: "University of California",
        period: "2011 - 2015"
      },
      {
        id: "edu2",
        title: "Advanced Certification in Oral Surgery",
        institution: "American Board of Oral Surgery",
        period: "2016"
      }
    ],
    certifications: [
      "Board Certified Oral & Maxillofacial Surgeon",
      "American Dental Association Member",
      "California Dental Association Member"
    ]
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <Header 
          images={mockData.images}
          profile={mockData.profile}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Contact & Location */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact & Location</h2>
            {/* Add contact details component */}
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h2>
            {/* Add business hours component */}
          </div>
        </div>

        {/* Services */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Services & Treatments</h2>
          {/* Add services component */}
        </div>

        {/* Insurance & Payment */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Insurance & Payment Methods</h2>
          {/* Add insurance component */}
        </div>

        {/* Qualifications */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qualifications & Certifications</h2>
          {/* Add qualifications component */}
        </div>
      </div>
    </main>
  );
} 