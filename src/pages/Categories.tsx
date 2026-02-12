import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ToolCard from "@/components/ToolCard";
import { categories, tools, type Category } from "@/data/tools";

const Categories = () => {
  const [params] = useSearchParams();
  const initialCat = params.get("cat") as Category | null;
  const [selected, setSelected] = useState<Category | "All">(initialCat || "All");

  const filtered = selected === "All" ? tools : tools.filter((t) => t.category === selected);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">AI Tools by Category</h1>
        <p className="text-muted-foreground">Browse our curated collection of AI tools</p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setSelected("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selected === "All" ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelected(c.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selected === c.name ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No tools found in this category yet.</p>
      )}
    </div>
  );
};

export default Categories;
