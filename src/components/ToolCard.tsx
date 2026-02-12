import { Link } from "react-router-dom";
import { type Tool } from "@/data/tools";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <div className="group rounded-xl bg-gradient-card border border-border/50 p-6 shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{tool.logo}</span>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            tool.pricing === "Free"
              ? "bg-emerald-500/10 text-emerald-400"
              : tool.pricing === "Freemium"
              ? "bg-primary/10 text-primary"
              : "bg-accent/10 text-accent"
          }`}
        >
          {tool.pricing}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">{tool.category}</span>
        <Link
          to={`/tool/${tool.id}`}
          className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          View Details <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
