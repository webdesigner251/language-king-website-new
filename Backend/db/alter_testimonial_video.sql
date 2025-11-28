-- Add new columns to testimonial_video table
ALTER TABLE testimonial_video 
ADD COLUMN heading TEXT,
ADD COLUMN description TEXT,
ADD COLUMN student_name VARCHAR(255),
ADD COLUMN student_tag VARCHAR(255),
ADD COLUMN student_avatar VARCHAR(255);
