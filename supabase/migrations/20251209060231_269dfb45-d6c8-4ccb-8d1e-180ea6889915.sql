-- Add policies for admin operations (using service role key bypass)
-- These allow all operations for the admin panel which uses direct Supabase calls

-- Courses - allow all operations (admin manages via simple auth)
CREATE POLICY "Allow all course operations" ON public.courses FOR ALL USING (true) WITH CHECK (true);

-- Enrollments - allow read and update for admin
CREATE POLICY "Allow read enrollments" ON public.enrollments FOR SELECT USING (true);
CREATE POLICY "Allow update enrollments" ON public.enrollments FOR UPDATE USING (true) WITH CHECK (true);

-- Resources - allow all operations
CREATE POLICY "Allow all resource operations" ON public.resources FOR ALL USING (true) WITH CHECK (true);

-- Contacts - allow read
CREATE POLICY "Allow read contacts" ON public.contact_submissions FOR SELECT USING (true);

-- Enable realtime for enrollments and contacts
ALTER PUBLICATION supabase_realtime ADD TABLE public.enrollments;
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_submissions;