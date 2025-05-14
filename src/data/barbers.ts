import { Barber } from '../types';

export const barbers: Barber[] = [
  {
    id: 1,
    name: "Jason Rodriguez",
    role: "Master Barber & Founder",
    bio: "With over 15 years of experience, Jason has perfected the art of classic and modern cuts. His attention to detail and commitment to client satisfaction has made him one of the most sought-after barbers in the city.",
    image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/"
    },
    specialties: ["Fades", "Beard Styling", "Classic Cuts"]
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Senior Barber",
    bio: "Marcus brings creativity and precision to every haircut. Specializing in modern techniques and designs, he's known for his unique fades and pattern work that leave clients looking their absolute best.",
    image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/"
    },
    specialties: ["Design Work", "Textured Cuts", "Hair Coloring"]
  },
  {
    id: 3,
    name: "Terrance Jackson",
    role: "Barber & Stylist",
    bio: "Terrance is known for his impeccable attention to detail and ability to recommend the perfect style for each client. His friendly demeanor and skilled hands have earned him a loyal following.",
    image: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/"
    },
    specialties: ["Scissor Work", "Straight Razor Shaves", "Styling"]
  }
];