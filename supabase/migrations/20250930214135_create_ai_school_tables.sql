/*
  # AI School Database Schema

  1. New Tables
    - `courses`
      - `id` (uuid, primary key)
      - `title` (text) - Course title
      - `description` (text) - Course description
      - `level` (text) - Beginner, Intermediate, Advanced
      - `duration` (text) - Course duration
      - `price` (numeric) - Course price
      - `features` (jsonb) - Course features array
      - `image_url` (text) - Course image
      - `is_popular` (boolean) - Popular badge
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `enrollments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `course_id` (uuid, references courses)
      - `status` (text) - pending, confirmed, completed
      - `enrolled_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `message` (text) - Contact message
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated and public access as appropriate
*/

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  level text NOT NULL DEFAULT 'Beginner',
  duration text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  features jsonb DEFAULT '[]'::jsonb,
  image_url text,
  is_popular boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'pending',
  enrolled_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Courses policies (public read, admin write)
CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO anon, authenticated
  USING (true);

-- Enrollments policies
CREATE POLICY "Users can view own enrollments"
  ON enrollments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own enrollments"
  ON enrollments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own enrollments"
  ON enrollments FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Contact submissions policies
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample courses
INSERT INTO courses (title, description, level, duration, price, features, is_popular) VALUES
('AI Skills Mastermind', 'Master the fundamentals of artificial intelligence and machine learning. Learn from industry experts and build real-world AI applications.', 'Beginner', '8 Weeks', 2999, '["Live interactive sessions", "Hands-on projects", "Industry expert instructors", "Certificate of completion", "Lifetime access to materials"]'::jsonb, true),
('Advanced Machine Learning', 'Deep dive into advanced ML algorithms, neural networks, and deep learning techniques. Perfect for data scientists and AI enthusiasts.', 'Advanced', '12 Weeks', 4999, '["Advanced neural networks", "Real-world case studies", "Kaggle competitions", "Job placement support", "1-on-1 mentorship"]'::jsonb, true),
('AI for Business Leaders', 'Understand AI applications in business, strategy, and decision-making. Transform your organization with AI-driven insights.', 'Intermediate', '6 Weeks', 3499, '["Executive-focused curriculum", "Business case studies", "AI strategy frameworks", "ROI optimization", "Networking opportunities"]'::jsonb, false),
('Natural Language Processing', 'Learn to build AI systems that understand and generate human language. From chatbots to sentiment analysis.', 'Intermediate', '10 Weeks', 3999, '["Transformer models", "GPT and BERT applications", "Real NLP projects", "Industry applications", "Career support"]'::jsonb, true),
('Computer Vision Mastery', 'Master image and video analysis with deep learning. Build applications from facial recognition to autonomous systems.', 'Advanced', '10 Weeks', 4499, '["CNN architectures", "Object detection", "Image segmentation", "Real-time processing", "Portfolio projects"]'::jsonb, false),
('Prompt Engineering Pro', 'Master the art of prompt engineering for ChatGPT, Claude, and other LLMs. Unlock the full potential of AI assistants.', 'Beginner', '4 Weeks', 1499, '["Practical prompt techniques", "Real-world applications", "AI productivity tools", "Use case library", "Community access"]'::jsonb, false);
