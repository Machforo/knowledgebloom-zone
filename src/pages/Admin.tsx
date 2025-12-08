import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Plus, Trash2, Edit, Upload, Eye } from "lucide-react";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin@123";

interface Course {
  id: string;
  title: string;
  description: string;
  course_type: "bootcamp" | "masterclass";
  price: number;
  duration: string;
  image_url: string;
  instructor_name: string;
  instructor_image: string;
  instructor_bio: string;
  syllabus: string[];
  what_you_learn: string[];
  who_is_for: string[];
  is_active: boolean;
  created_at: string;
}

interface Enrollment {
  id: string;
  course_id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "pending" | "approved" | "rejected" | "paid";
  created_at: string;
  courses?: { title: string; course_type: string };
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_type: string;
  course_id: string | null;
  is_public: boolean;
  created_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [isAddResourceOpen, setIsAddResourceOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check session
  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchCourses();
      fetchEnrollments();
      fetchContacts();
      fetchResources();
      setupRealtimeSubscriptions();
    }
  }, [isAuthenticated]);

  const setupRealtimeSubscriptions = () => {
    const enrollmentChannel = supabase
      .channel("enrollments-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "enrollments" }, () => {
        fetchEnrollments();
      })
      .subscribe();

    const contactChannel = supabase
      .channel("contacts-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "contact_submissions" }, () => {
        fetchContacts();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(enrollmentChannel);
      supabase.removeChannel(contactChannel);
    };
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "true");
      setIsAuthenticated(true);
      toast({ title: "Welcome Admin!", description: "You have successfully logged in." });
    } else {
      toast({ title: "Invalid Credentials", description: "Please check your email and password.", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  const fetchCourses = async () => {
    const { data } = await supabase.from("courses").select("*").order("created_at", { ascending: false });
    if (data) setCourses(data as Course[]);
  };

  const fetchEnrollments = async () => {
    const { data } = await supabase
      .from("enrollments")
      .select("*, courses(title, course_type)")
      .order("created_at", { ascending: false });
    if (data) setEnrollments(data as Enrollment[]);
  };

  const fetchContacts = async () => {
    const { data } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
    if (data) setContacts(data as ContactSubmission[]);
  };

  const fetchResources = async () => {
    const { data } = await supabase.from("resources").select("*").order("created_at", { ascending: false });
    if (data) setResources(data as Resource[]);
  };

  const updateEnrollmentStatus = async (id: string, status: "approved" | "rejected") => {
    const { error } = await supabase.from("enrollments").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    } else {
      toast({ title: "Success", description: `Enrollment ${status}` });
      fetchEnrollments();
    }
  };

  const deleteCourse = async (id: string) => {
    const { error } = await supabase.from("courses").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete course", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Course deleted" });
      fetchCourses();
    }
  };

  const deleteResource = async (id: string) => {
    const { error } = await supabase.from("resources").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete resource", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Resource deleted" });
      fetchResources();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Manage Courses</CardTitle>
                  <CardDescription>Add, edit, or remove courses</CardDescription>
                </div>
                <AddCourseDialog open={isAddCourseOpen} onOpenChange={setIsAddCourseOpen} onSuccess={fetchCourses} editCourse={editingCourse} setEditingCourse={setEditingCourse} />
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">{course.title}</TableCell>
                        <TableCell>
                          <Badge variant={course.course_type === "bootcamp" ? "default" : "secondary"}>
                            {course.course_type}
                          </Badge>
                        </TableCell>
                        <TableCell>{course.course_type === "masterclass" ? "Free" : `₹${course.price}`}</TableCell>
                        <TableCell>{course.duration || "-"}</TableCell>
                        <TableCell>
                          <Badge variant={course.is_active ? "default" : "outline"}>
                            {course.is_active ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => { setEditingCourse(course); setIsAddCourseOpen(true); }}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteCourse(course.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {courses.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">No courses yet</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="enrollments">
            <Card>
              <CardHeader>
                <CardTitle>Enrollment Requests</CardTitle>
                <CardDescription>Manage course enrollment requests</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enrollments.map((enrollment) => (
                      <TableRow key={enrollment.id}>
                        <TableCell className="font-medium">{enrollment.name}</TableCell>
                        <TableCell>{enrollment.email}</TableCell>
                        <TableCell>{enrollment.phone}</TableCell>
                        <TableCell>{enrollment.courses?.title || "-"}</TableCell>
                        <TableCell>
                          <Badge variant={enrollment.courses?.course_type === "bootcamp" ? "default" : "secondary"}>
                            {enrollment.courses?.course_type || "-"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            enrollment.status === "approved" ? "default" :
                            enrollment.status === "rejected" ? "destructive" :
                            enrollment.status === "paid" ? "default" : "outline"
                          }>
                            {enrollment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(enrollment.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          {enrollment.status === "pending" && (
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => updateEnrollmentStatus(enrollment.id, "approved")}>Approve</Button>
                              <Button size="sm" variant="destructive" onClick={() => updateEnrollmentStatus(enrollment.id, "rejected")}>Reject</Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                    {enrollments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center text-muted-foreground">No enrollments yet</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
                <CardDescription>View all contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.phone || "-"}</TableCell>
                        <TableCell>{contact.subject || "-"}</TableCell>
                        <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                        <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                    {contacts.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">No contacts yet</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Resources</CardTitle>
                  <CardDescription>Manage downloadable resources</CardDescription>
                </div>
                <AddResourceDialog open={isAddResourceOpen} onOpenChange={setIsAddResourceOpen} onSuccess={fetchResources} courses={courses} />
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Public</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {resources.map((resource) => (
                      <TableRow key={resource.id}>
                        <TableCell className="font-medium">{resource.title}</TableCell>
                        <TableCell className="max-w-xs truncate">{resource.description || "-"}</TableCell>
                        <TableCell>{resource.file_type || "-"}</TableCell>
                        <TableCell>
                          <Badge variant={resource.is_public ? "default" : "outline"}>
                            {resource.is_public ? "Public" : "Private"}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(resource.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <a href={resource.file_url} target="_blank" rel="noopener noreferrer">
                                <Eye className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteResource(resource.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {resources.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">No resources yet</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

// Add Course Dialog Component
const AddCourseDialog = ({ open, onOpenChange, onSuccess, editCourse, setEditingCourse }: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void; 
  onSuccess: () => void;
  editCourse: Course | null;
  setEditingCourse: (course: Course | null) => void;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    course_type: "bootcamp" as "bootcamp" | "masterclass",
    price: 0,
    duration: "",
    image_url: "",
    instructor_name: "",
    instructor_image: "",
    instructor_bio: "",
    syllabus: "",
    what_you_learn: "",
    who_is_for: "",
    is_active: true
  });
  const { toast } = useToast();

  useEffect(() => {
    if (editCourse) {
      setFormData({
        title: editCourse.title,
        description: editCourse.description || "",
        course_type: editCourse.course_type,
        price: editCourse.price,
        duration: editCourse.duration || "",
        image_url: editCourse.image_url || "",
        instructor_name: editCourse.instructor_name || "",
        instructor_image: editCourse.instructor_image || "",
        instructor_bio: editCourse.instructor_bio || "",
        syllabus: (editCourse.syllabus || []).join("\n"),
        what_you_learn: (editCourse.what_you_learn || []).join("\n"),
        who_is_for: (editCourse.who_is_for || []).join("\n"),
        is_active: editCourse.is_active
      });
    } else {
      setFormData({
        title: "",
        description: "",
        course_type: "bootcamp",
        price: 0,
        duration: "",
        image_url: "",
        instructor_name: "",
        instructor_image: "",
        instructor_bio: "",
        syllabus: "",
        what_you_learn: "",
        who_is_for: "",
        is_active: true
      });
    }
  }, [editCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const courseData = {
      title: formData.title,
      description: formData.description,
      course_type: formData.course_type,
      price: formData.course_type === "masterclass" ? 0 : formData.price,
      duration: formData.course_type === "masterclass" ? null : formData.duration,
      image_url: formData.image_url,
      instructor_name: formData.instructor_name,
      instructor_image: formData.instructor_image,
      instructor_bio: formData.instructor_bio,
      syllabus: formData.syllabus.split("\n").filter(Boolean),
      what_you_learn: formData.what_you_learn.split("\n").filter(Boolean),
      who_is_for: formData.who_is_for.split("\n").filter(Boolean),
      is_active: formData.is_active
    };

    let error;
    if (editCourse) {
      ({ error } = await supabase.from("courses").update(courseData).eq("id", editCourse.id));
    } else {
      ({ error } = await supabase.from("courses").insert(courseData));
    }

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: `Course ${editCourse ? "updated" : "created"} successfully` });
      onOpenChange(false);
      setEditingCourse(null);
      onSuccess();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setEditingCourse(null); }}>
      <DialogTrigger asChild>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Course</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editCourse ? "Edit Course" : "Add New Course"}</DialogTitle>
          <DialogDescription>Fill in the course details</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <Select value={formData.course_type} onValueChange={(v: "bootcamp" | "masterclass") => setFormData({ ...formData, course_type: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="bootcamp">Bootcamp (Paid)</SelectItem>
                  <SelectItem value="masterclass">Masterclass (Free)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} />
          </div>
          {formData.course_type === "bootcamp" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Price (₹)</Label>
                <Input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })} />
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="e.g., 8 weeks" />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label>Image URL</Label>
            <Input value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} placeholder="https://..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Instructor Name</Label>
              <Input value={formData.instructor_name} onChange={(e) => setFormData({ ...formData, instructor_name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Instructor Image URL</Label>
              <Input value={formData.instructor_image} onChange={(e) => setFormData({ ...formData, instructor_image: e.target.value })} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Instructor Bio</Label>
            <Textarea value={formData.instructor_bio} onChange={(e) => setFormData({ ...formData, instructor_bio: e.target.value })} rows={2} />
          </div>
          <div className="space-y-2">
            <Label>Syllabus (one item per line)</Label>
            <Textarea value={formData.syllabus} onChange={(e) => setFormData({ ...formData, syllabus: e.target.value })} rows={4} placeholder="Module 1: Introduction&#10;Module 2: Basics&#10;..." />
          </div>
          <div className="space-y-2">
            <Label>What You'll Learn (one item per line)</Label>
            <Textarea value={formData.what_you_learn} onChange={(e) => setFormData({ ...formData, what_you_learn: e.target.value })} rows={3} />
          </div>
          <div className="space-y-2">
            <Label>Who Is This For (one item per line)</Label>
            <Textarea value={formData.who_is_for} onChange={(e) => setFormData({ ...formData, who_is_for: e.target.value })} rows={3} />
          </div>
          <DialogFooter>
            <Button type="submit">{editCourse ? "Update" : "Create"} Course</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Add Resource Dialog Component
const AddResourceDialog = ({ open, onOpenChange, onSuccess, courses }: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void; 
  onSuccess: () => void;
  courses: Course[];
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file_url: "",
    file_type: "",
    course_id: "",
    is_public: true
  });
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from("resources").upload(fileName, file);

    if (error) {
      toast({ title: "Upload Error", description: error.message, variant: "destructive" });
    } else {
      const { data: urlData } = supabase.storage.from("resources").getPublicUrl(fileName);
      setFormData({ ...formData, file_url: urlData.publicUrl, file_type: file.type });
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase.from("resources").insert({
      title: formData.title,
      description: formData.description,
      file_url: formData.file_url,
      file_type: formData.file_type,
      course_id: formData.course_id || null,
      is_public: formData.is_public
    });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Resource added successfully" });
      onOpenChange(false);
      setFormData({ title: "", description: "", file_url: "", file_type: "", course_id: "", is_public: true });
      onSuccess();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Resource</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Resource</DialogTitle>
          <DialogDescription>Upload a file or add a URL</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={2} />
          </div>
          <div className="space-y-2">
            <Label>Upload File</Label>
            <Input type="file" onChange={handleFileUpload} disabled={uploading} />
            {uploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
          </div>
          <div className="space-y-2">
            <Label>Or Enter URL</Label>
            <Input value={formData.file_url} onChange={(e) => setFormData({ ...formData, file_url: e.target.value })} placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label>Link to Course (optional)</Label>
            <Select value={formData.course_id} onValueChange={(v) => setFormData({ ...formData, course_id: v })}>
              <SelectTrigger><SelectValue placeholder="Select course" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="">None</SelectItem>
                {courses.map((c) => (
                  <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!formData.file_url}>Add Resource</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Admin;