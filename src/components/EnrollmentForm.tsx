import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EnrollmentFormProps {
  courseId: string;
  courseTitle: string;
  courseType: "bootcamp" | "masterclass";
  trigger?: React.ReactNode;
  whatsappLink?: string;
}

export const EnrollmentForm = ({ courseId, courseTitle, courseType, trigger, whatsappLink }: EnrollmentFormProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const sendConfirmationEmail = async (name: string, email: string) => {
    try {
      const { error } = await supabase.functions.invoke("send-enrollment-confirmation", {
        body: {
          name,
          email,
          courseTitle,
          courseType
        }
      });

      if (error) {
        console.error("Failed to send confirmation email:", error);
      } else {
        console.log("Confirmation email sent successfully");
      }
    } catch (err) {
      console.error("Error sending confirmation email:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("enrollments").insert({
      course_id: null,
      course_title: courseTitle,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      status: "pending"
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit enrollment. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    // Send confirmation email
    await sendConfirmationEmail(formData.name, formData.email);

    toast({
      title: "Enrollment Submitted!",
      description: whatsappLink 
        ? "Redirecting you to the WhatsApp community..."
        : courseType === "bootcamp" 
          ? "Your enrollment request has been submitted. Check your email for confirmation."
          : "You have been enrolled successfully! Check your email for details.",
    });

    setOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setLoading(false);

    // Redirect to WhatsApp group if link provided
    if (whatsappLink) {
      setTimeout(() => {
        window.open(whatsappLink, "_blank");
      }, 500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button size="lg">Enroll Now</Button>}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enroll in {courseTitle}</DialogTitle>
          <DialogDescription>
            {courseType === "bootcamp" 
              ? "Fill in your details to request enrollment. Our team will contact you for payment."
              : whatsappLink 
                ? "Fill in your details to join this free masterclass. You'll be added to the WhatsApp community group."
                : "Fill in your details to join this free masterclass."
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="enroll-name">Full Name *</Label>
            <Input
              id="enroll-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-email">Email *</Label>
            <Input
              id="enroll-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-phone">Phone Number *</Label>
            <Input
              id="enroll-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 9876543210"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-message">Message (Optional)</Label>
            <Textarea
              id="enroll-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any questions or comments?"
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Submitting..." : whatsappLink ? "Enroll & Join WhatsApp Group" : "Submit Enrollment"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
