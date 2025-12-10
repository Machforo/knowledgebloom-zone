import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EnrollmentEmailRequest {
  name: string;
  email: string;
  courseTitle: string;
  courseType: "bootcamp" | "masterclass";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, courseTitle, courseType }: EnrollmentEmailRequest = await req.json();

    console.log(`Sending enrollment confirmation to ${email} for ${courseTitle}`);

    // WhatsApp community link - can be updated by admin
    const whatsappLink = "https://chat.whatsapp.com/your-community-link";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .course-badge { display: inline-block; background: ${courseType === 'masterclass' ? '#10b981' : '#3b82f6'}; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; text-transform: uppercase; margin-bottom: 10px; }
          .whatsapp-btn { display: inline-block; background: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Enrollment Confirmed!</h1>
          </div>
          <div class="content">
            <p>Dear <strong>${name}</strong>,</p>
            
            <p>Thank you for enrolling in our course! We're excited to have you join us.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <span class="course-badge">${courseType}</span>
              <h2 style="margin: 10px 0; color: #333;">${courseTitle}</h2>
              <p style="color: #666; margin: 0;">${courseType === 'masterclass' ? 'Free Course' : 'Paid Course - Our team will contact you for payment details'}</p>
            </div>
            
            <h3>🚀 Next Steps:</h3>
            <ol>
              <li>Join our WhatsApp community to connect with fellow learners</li>
              <li>Watch for updates about course materials and schedules</li>
              <li>Prepare to transform your career with expert-led training!</li>
            </ol>
            
            <div style="text-align: center;">
              <a href="${whatsappLink}" class="whatsapp-btn">
                📱 Join WhatsApp Community
              </a>
            </div>
            
            <p>If you have any questions, feel free to reply to this email or contact us through our website.</p>
            
            <p>Best regards,<br><strong>The TrainingLobe Team</strong></p>
          </div>
          <div class="footer">
            <p>© 2024 TrainingLobe. All rights reserved.</p>
            <p>You're receiving this email because you enrolled in a course on our platform.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "TrainingLobe <onboarding@resend.dev>",
        to: [email],
        subject: `🎓 Enrollment Confirmed: ${courseTitle}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailResponse = await res.json();
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-enrollment-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
