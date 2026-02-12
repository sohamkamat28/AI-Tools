import { useParams, Link } from "react-router-dom";
import { getToolById, tools } from "@/data/tools";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import ToolCard from "@/components/ToolCard";

const ToolDetails = () => {
  const { id } = useParams();
  const tool = getToolById(id || "");

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
        <Link to="/categories" className="text-primary hover:underline">← Back to categories</Link>
      </div>
    );
  }

  const related = tools.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/categories" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to all tools
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{tool.logo}</span>
            <div>
              <h1 className="text-3xl font-bold">{tool.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-muted-foreground">{tool.category}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  tool.pricing === "Free" ? "bg-emerald-500/10 text-emerald-400" : tool.pricing === "Freemium" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}>{tool.pricing}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">About</h2>
            <p className="text-muted-foreground leading-relaxed">{tool.longDescription}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tool.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Use Cases</h2>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((u) => (
                <span key={u} className="bg-secondary text-sm px-3 py-1.5 rounded-full text-muted-foreground">{u}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-card border border-border/50 p-6">
            <h3 className="font-semibold mb-4">Quick Info</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Category</dt><dd>{tool.category}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Pricing</dt><dd>{tool.pricing}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Features</dt><dd>{tool.features.length}</dd></div>
            </dl>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-medium rounded-lg px-4 py-3 text-sm hover:opacity-90 transition-opacity"
            >
              Visit Website <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <Link
            to={`/compare?tools=${tool.id}`}
            className="block w-full text-center rounded-lg border border-primary/30 text-primary px-4 py-3 text-sm font-medium hover:bg-primary/10 transition-colors"
          >
            Compare with other tools
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-6">Related Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((t) => <ToolCard key={t.id} tool={t} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolDetails;
