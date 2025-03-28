import ProfileHeader from '../components/ProfileHeader';
import ServicesSection from '../components/ServicesSection';
import ExperienceEducation from '../components/ExperienceEducation';

const mockData = {
  profile: {
    name: "Dr. Emily Thompson",
    rating: 4.8,
    reviewCount: 127,
    startingPrice: "$150",
    profileImage: "/profile-placeholder.jpg",
    specialty: "Cosmetic & Restorative Dentistry"
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
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <ProfileHeader {...mockData.profile} />
        
        <ServicesSection services={mockData.services} />
        
        <ExperienceEducation 
          experience={mockData.experience}
          education={mockData.education}
        />
      </div>
    </main>
  );
} 