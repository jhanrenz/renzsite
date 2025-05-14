import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Facebook, Linkedin, Twitter, Github, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profile from "@/assets/profile_photo.jpg";

const ContactSection = () => {
  const email = "jhanrenzventura@gmail.com";
  const number = "0960 549 22757"
  const location = "Asingan, Pangasinan"
  return (
    <div className="space-y-4 flex flex-col items-center text-center p-6">
      <img src={profile} alt="Profile" width={120} height={120} className="rounded-full shadow-md" />
      <h2 className="text-xl font-semibold text-gray-800">Get in Touch</h2>
      <div className="text-gray-600">
        <p className="flex items-center gap-2"><Mail size={20} /> {email}</p>
        <p className="flex items-center gap-2"><Phone size={20} /> {number}</p>
        <p className="flex items-center gap-2"><MapPin size={20} /> {location}</p>
      </div>
      <motion.div
  className="flex justify-center gap-4 mt-4"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.6 }}
>
  <a href="https://mail.google.com/mail/u/0/#sent?compose=new" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition">
    <Mail size={24} />
  </a>
  <a href="https://web.facebook.com/jhanrenzzz" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition">
    <Facebook size={24} />
  </a>
  <a href="https://www.linkedin.com/in/jhan-renz-ventura-697516311/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition">
    <Linkedin size={24} />
  </a>
  <a href="https://x.com/jhanrenzz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition">
    <Twitter size={24} />
  </a>
  <a href="https://github.com/jhanrenz" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:scale-110 transition">
    <Github size={24} />
  </a>
</motion.div>

    </div>
  );
};

const MessageForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    setSubmitted(true);
  };

  return (
    <div className="p-6 w-full">
      {submitted ? (
        <p className="text-green-600 text-center text-lg font-medium">
          Thank you! Your message has been sent successfully.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <Input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <Input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <Textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} rows={4} required />
          </div>
          <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800 transition">Send Message</Button>
        </form>
      )}
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-4xl bg-white shadow-lg rounded-2xl border border-gray-200 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6">
          <ContactSection />
        </div>
        <div className="w-px bg-gray-300"></div> {/* Separator */}
        <div className="w-full md:w-1/2 p-6">
          <MessageForm />
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
