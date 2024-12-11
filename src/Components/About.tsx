import {
  ArrowUpRight,
  Calendar,
  Globe,
  Phone,
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import SkillsSection from "./Skill";

type InfoItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const AboutSection = () => {
  const profileData = {
    title: "Web Developer",
    description:
      "Aspiring Web developer skilled in JavaScript, ReactJS, and NextJS. Passionate about delivering engaging, responsive user interfaces with strong organizational skills, ready to contribute effectively to team success and growth.",
    birthday: "7 Nov 1996",
    website: "www.example.com",
    phone: "+123 456 7890",
    city: "PratapGarh",
    age: "30",
    degree: "Graduate",
    email: "as19961107@gmail.com",
    job: "Available",
  };

  const InfoItem = ({ icon: Icon, label, value }: InfoItemProps) => (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-blue-600" />
      <span className="font-medium min-w-[6rem]">{label}:</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center">About</h1>
      <div className="flex justify-center items-center  mb-10">
      <div className="h-0.5 w-28 bg-gray-300"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative">
          <div className="aspect-auto relative">
            <img
              src="Ankitapic.jpeg"
              alt="Profile"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {profileData.title}
          </h2>
          <p className="text-gray-600 italic">{profileData.description}</p>
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              <InfoItem
                icon={Calendar}
                label="Birthday"
                value={profileData.birthday}
              />
              <InfoItem
                icon={Globe}
                label="Website"
                value={profileData.website}
              />
              <InfoItem icon={Phone} label="Phone" value={profileData.phone} />
              <InfoItem icon={MapPin} label="City" value={profileData.city} />
            </div>
            <div>
              <InfoItem
                icon={ArrowUpRight}
                label="Age"
                value={profileData.age}
              />
              <InfoItem
                icon={GraduationCap}
                label="Degree"
                value={profileData.degree}
              />
              <InfoItem icon={Mail} label="Email" value={profileData.email} />
              <InfoItem
                icon={Briefcase}
                label="Freelance"
                value={profileData.job}
              />
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque.
          </p>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
};

export default AboutSection;
