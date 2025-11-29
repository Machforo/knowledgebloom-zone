export const getCourseFaqs = (courseId: string) => {
  const commonFaqs = [
    {
      question: "How do I enroll in this course?",
      answer: "Click the 'Enroll Now' button and follow the registration process. You'll get immediate access to course materials once enrolled."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course content."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, you'll receive a verified certificate upon successfully completing all course modules and assessments."
    },
    {
      question: "Can I access course materials after completion?",
      answer: "Absolutely! You'll have lifetime access to all course materials, including future updates."
    },
    {
      question: "Is there instructor support available?",
      answer: "Yes, instructors are available for questions through the course discussion forums and scheduled Q&A sessions."
    }
  ];

  return commonFaqs;
};
