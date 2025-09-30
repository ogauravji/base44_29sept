export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  features: string[];
  image_url?: string;
  is_popular: boolean;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  status: string;
  enrolled_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
