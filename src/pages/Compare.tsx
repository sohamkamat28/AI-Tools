import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { tools } from "@/data/tools";
import { Check, X } from "lucide-react";

const Compare = () => {
  const [params] = useSearchParams();
  const preselected = params.get("tools")?.split(",").filter(Boolean) || [];
  const [selected, setSelected] = useState<string[]>(preselected);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const compared = tools.filter((t) => selected.includes(t.id));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Compare AI Tools</h1>
        <p className="text-muted-foreground">Select 2–3 tools to compare side by side</p>
      </div>

      {/* Tool selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => toggle(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selected.includes(t.id)
                ? "bg-gradient-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.logo} {t.name}
            {selected.includes(t.id) && <X className="h-3.5 w-3.5" />}
          </button>
        ))}
      </div>

      {compared.length < 2 ? (
        <p className="text-center text-muted-foreground py-12">Please select at least 2 tools to compare.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm text-muted-foreground font-medium border-b border-border/50">Feature</th>
                {compared.map((t) => (
                  <th key={t.id} className="p-4 text-center border-b border-border/50">
                    <span className="text-2xl block mb-1">{t.logo}</span>
                    <span className="font-semibold text-sm">{t.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/30">
                <td className="p-4 text-sm text-muted-foreground">Category</td>
                {compared.map((t) => <td key={t.id} className="p-4 text-center text-sm">{t.category}</td>)}
              </tr>
              <tr className="border-b border-border/30">
                <td className="p-4 text-sm text-muted-foreground">Pricing</td>
                {compared.map((t) => (
                  <td key={t.id} className="p-4 text-center">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      t.pricing === "Free" ? "bg-emerald-500/10 text-emerald-400" : t.pricing === "Freemium" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    }`}>{t.pricing}</span>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border/30">
                <td className="p-4 text-sm text-muted-foreground">Features</td>
                {compared.map((t) => (
                  <td key={t.id} className="p-4 text-sm">
                    <ul className="space-y-1">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-xs">
                          <Check className="h-3 w-3 text-primary flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border/30">
                <td className="p-4 text-sm text-muted-foreground">Best For</td>
                {compared.map((t) => (
                  <td key={t.id} className="p-4 text-sm">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {t.useCases.slice(0, 3).map((u) => (
                        <span key={u} className="bg-secondary text-xs px-2 py-0.5 rounded-full">{u}</span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-sm text-muted-foreground">Website</td>
                {compared.map((t) => (
                  <td key={t.id} className="p-4 text-center">
                    <a href={t.website} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">Visit →</a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Compare;
