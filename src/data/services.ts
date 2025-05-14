import { Service } from '../types';

export const services: Service[] = [
  // Classic Services
  {
    id: 1,
    name: "Classic Haircut",
    description: "Precision haircut with professional styling",
    price: 25,
    duration: "30 min",
    category: "classic"
  },
  {
    id: 2,
    name: "Beard Trim",
    description: "Precise beard shaping and line-up",
    price: 15,
    duration: "20 min",
    category: "classic"
  },
  {
    id: 3,
    name: "Kids Haircut (12 & under)",
    description: "Haircut for children 12 and younger",
    price: 18,
    duration: "25 min",
    category: "classic"
  },
  {
    id: 4,
    name: "Senior Haircut (65+)",
    description: "Haircut with special care for seniors",
    price: 20,
    duration: "30 min",
    category: "classic"
  },
  {
    id: 5,
    name: "Head Shave",
    description: "Complete head shave with straight razor",
    price: 30,
    duration: "30 min",
    category: "classic"
  },
  {
    id: 6,
    name: "Line-Up & Edge Refinement",
    description: "Precision line-up and edge detail work",
    price: 15,
    duration: "15 min",
    category: "classic"
  },

  // Premium Services
  {
    id: 7,
    name: "Haircut & Beard Combo",
    description: "Premium haircut with beard trim and styling",
    price: 35,
    duration: "45 min",
    category: "premium"
  },
  {
    id: 8,
    name: "Hot Towel Shave",
    description: "Traditional hot towel straight razor shave",
    price: 35,
    duration: "40 min",
    category: "premium"
  },
  {
    id: 9,
    name: "Hair Color",
    description: "Professional hair coloring service",
    price: 50,
    duration: "60 min",
    category: "premium"
  },
  {
    id: 10,
    name: "Fade & Design",
    description: "Precision fade with custom hair design",
    price: 40,
    duration: "45 min",
    category: "premium"
  },
  {
    id: 11,
    name: "Face & Scalp Treatment",
    description: "Rejuvenating face and scalp treatment",
    price: 30,
    duration: "30 min",
    category: "premium"
  },

  // Packages
  {
    id: 12,
    name: "The Deluxe Package",
    description: "Haircut, beard trim, hot towel treatment, and styling",
    price: 50,
    duration: "75 min",
    category: "package"
  },
  {
    id: 13,
    name: "Father & Son Special",
    description: "Haircuts for father and son, includes styling",
    price: 40,
    duration: "60 min",
    category: "package"
  },
  {
    id: 14,
    name: "Groom's Package",
    description: "Pre-wedding premium grooming package",
    price: 65,
    duration: "90 min",
    category: "package"
  },
  {
    id: 15,
    name: "Executive Package",
    description: "Complete grooming experience with all premium services",
    price: 75,
    duration: "120 min",
    category: "package"
  }
];