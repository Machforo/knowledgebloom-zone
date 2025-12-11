-- Make course_id nullable and add course_title to track enrollments for non-DB courses
ALTER TABLE public.enrollments ALTER COLUMN course_id DROP NOT NULL;

-- Add course_title column to store course name directly
ALTER TABLE public.enrollments ADD COLUMN IF NOT EXISTS course_title TEXT;

-- Drop the foreign key constraint to allow enrollments for courses not in DB
ALTER TABLE public.enrollments DROP CONSTRAINT IF EXISTS enrollments_course_id_fkey;