
export interface Offer {
  id: string;
  title: string;
  price: string;
  subtitle: string;
  description: string;
  includes: string[];
  bestFor: string;
  isPopular?: boolean;
  gradient: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  content: string;
  author: string;
  tag: string;
}

export interface AddOn {
  name: string;
  price: string;
}
