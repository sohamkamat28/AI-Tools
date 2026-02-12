import { useState } from "react";
import { toast } from "sonner";
import { Mail, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <p className="text-muted-foreground">Have a question or feedback? We'd love to hear from you.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-gradient-card border border-border/50 p-8 shadow-card">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
            <User className="h-4 w-4 text-muted-foreground" /> Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Your name"
            maxLength={100}
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
            <Mail className="h-4 w-4 text-muted-foreground" /> Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="your@email.com"
            maxLength={255}
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
            <MessageSquare className="h-4 w-4 text-muted-foreground" /> Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            placeholder="Your message..."
            maxLength={1000}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-primary text-primary-foreground font-medium rounded-lg px-4 py-3 text-sm hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
