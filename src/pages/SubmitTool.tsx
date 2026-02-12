import { useState } from "react";
import { categories } from "@/data/tools";
import { toast } from "sonner";
import { Send } from "lucide-react";

const SubmitTool = () => {
  const [form, setForm] = useState({ name: "", category: "", description: "", website: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.description || !form.website) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Tool submitted successfully! We'll review it soon.");
    setForm({ name: "", category: "", description: "", website: "", email: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Submit a Tool</h1>
        <p className="text-muted-foreground">Know a great AI tool? Share it with the community.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-gradient-card border border-border/50 p-8 shadow-card">
        <div>
          <label className="block text-sm font-medium mb-1.5">Tool Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="e.g. ChatGPT"
            maxLength={100}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Category *</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Description *</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            placeholder="Briefly describe the tool..."
            maxLength={500}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Website Link *</label>
          <input
            type="url"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="https://example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Email <span className="text-muted-foreground">(optional)</span></label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="your@email.com"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-primary text-primary-foreground font-medium rounded-lg px-4 py-3 text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Send className="h-4 w-4" /> Submit Tool
        </button>
      </form>
    </div>
  );
};

export default SubmitTool;
