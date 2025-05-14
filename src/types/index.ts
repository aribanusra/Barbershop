export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'classic' | 'premium' | 'package';
}

export interface Barber {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
  };
  specialties: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  image?: string;
  rating: number;
  text: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'support';
}