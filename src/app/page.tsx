import Header from '@/components/Header';
import ServicesSection from '../components/ServicesSection';
import ExperienceEducation from '../components/ExperienceEducation';

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
    specialization: "Oral & Maxillofacial Surgery",
    yearsOfExperience: 15,
    rating: 4.8,
    reviewCount: 120
  },
  services: [
    {
      id: "1",
      name: "Dental Examination",
      price: "$75",
      duration: "30 min",
      description: "Comprehensive oral examination and consultation",
      icon: "🦷"
    },
    {
      id: "2",
      name: "Teeth Whitening",
      price: "$299",
      duration: "1 hour",
      description: "Professional in-office teeth whitening treatment",
      icon: "✨"
    },
    {
      id: "3",
      name: "Root Canal",
      price: "$800",
      duration: "90 min",
      description: "Complete root canal treatment including follow-up",
      icon: "🦿"
    },
    // Add more services as needed
  ],
  experience: [
    {
      id: "exp1",
      title: "Lead Dentist",
      institution: "Bright Smile Dental Clinic",
      period: "2018 - Present",
      description: "Specializing in cosmetic and restorative procedures"
    },
    {
      id: "exp2",
      title: "Associate Dentist",
      institution: "City Dental Care",
      period: "2015 - 2018",
      description: "General dentistry practice"
    }
  ],
  education: [
    {
      id: "edu1",
      title: "Doctor of Dental Surgery",
      institution: "University of California",
      period: "2011 - 2015"
    },
    {
      id: "edu2",
      title: "Advanced Certification in Cosmetic Dentistry",
      institution: "American Academy of Cosmetic Dentistry",
      period: "2016"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header 
        images={mockData.images}
        profile={mockData.profile}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <ServicesSection services={mockData.services} />
        
        <ExperienceEducation 
          experience={mockData.experience}
          education={mockData.education}
        />
      </div>
    </main>
  );
} 