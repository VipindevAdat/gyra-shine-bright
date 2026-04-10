import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Globe, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    studentName: "",
    grade: "",
    school: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just show success — backend will be added with Lovable Cloud
    setSubmitted(true);
    toast({
      title: "Registration received!",
      description: "We'll get back to you within 2-3 business days.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container text-center max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Get Started</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-foreground mt-3 mb-5">
              Join GYRA Today
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Register your interest or reach out with any questions. We welcome students, parents, teachers, and potential mentors.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="text-center py-16 bg-card rounded-xl shadow-card">
                    <CheckCircle className="text-primary mx-auto mb-4" size={48} />
                    <h2 className="text-2xl font-heading font-extrabold text-foreground mb-2">Thank You!</h2>
                    <p className="text-muted-foreground mb-6">Your registration has been received. We'll be in touch soon.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-card p-8 space-y-6">
                    <h2 className="text-2xl font-heading font-extrabold text-foreground mb-2">Registration & Contact Form</h2>
                    <p className="text-sm text-muted-foreground mb-6">Fill in the details below and we'll connect you with the right program.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required placeholder="Full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required placeholder="you@email.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>I am a *</Label>
                      <Select value={formData.role} onValueChange={(v) => handleChange("role", v)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent / Guardian</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="mentor">Potential Mentor / Advisor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student Name</Label>
                        <Input id="studentName" value={formData.studentName} onChange={(e) => handleChange("studentName", e.target.value)} placeholder="Student's full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade / Class</Label>
                        <Input id="grade" value={formData.grade} onChange={(e) => handleChange("grade", e.target.value)} placeholder="e.g. Grade 7" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="school">School Name</Label>
                      <Input id="school" value={formData.school} onChange={(e) => handleChange("school", e.target.value)} placeholder="Name of school" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Any questions or additional information..." rows={4} />
                    </div>

                    <Button type="submit" className="bg-gradient-hero hover:opacity-90 transition-opacity w-full sm:w-auto px-8">
                      <Send className="mr-2" size={16} />
                      Submit Registration
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact info sidebar */}
              <div className="space-y-8">
                <div className="bg-card rounded-xl shadow-card p-8">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                        <Mail className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:info@thinkgyra.org" className="text-sm text-primary hover:underline">
                          info@thinkgyra.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                        <Globe className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Website</p>
                        <a href="https://thinkgyra.org" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          thinkgyra.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                        <MapPin className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Headquarters</p>
                        <p className="text-sm text-muted-foreground">Kerala, India<br />Global Operations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navy rounded-xl p-8 text-primary-foreground">
                  <h3 className="font-heading font-bold text-lg mb-3">For Schools & Institutions</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
                    Interested in setting up a GYRA chapter at your school? We'd love to partner with you. Reach out to learn about institutional partnerships.
                  </p>
                  <a href="mailto:info@thinkgyra.org" className="text-sm text-primary-foreground underline hover:no-underline">
                    Email us directly →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
