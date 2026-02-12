export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: Category;
  pricing: "Free" | "Paid" | "Freemium";
  features: string[];
  useCases: string[];
  website: string;
  logo: string;
  featured?: boolean;
}

export type Category =
  | "Writing AI"
  | "Image Generation AI"
  | "Video AI"
  | "Coding AI"
  | "Productivity AI"
  | "Chatbots";

export const categories: { name: Category; icon: string; description: string }[] = [
  { name: "Writing AI", icon: "✍️", description: "AI-powered writing assistants and content generators" },
  { name: "Image Generation AI", icon: "🎨", description: "Create stunning visuals with AI image generators" },
  { name: "Video AI", icon: "🎬", description: "AI tools for video creation and editing" },
  { name: "Coding AI", icon: "💻", description: "AI-powered coding assistants and code generators" },
  { name: "Productivity AI", icon: "⚡", description: "Boost your productivity with AI automation" },
  { name: "Chatbots", icon: "🤖", description: "Conversational AI and chatbot platforms" },
];

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Advanced conversational AI by OpenAI for text generation, coding, and more.",
    longDescription: "ChatGPT is an AI chatbot developed by OpenAI that uses large language models to understand and generate human-like text. It can assist with writing, coding, analysis, math, and creative tasks. With its latest models, it offers improved reasoning and can process images and files.",
    category: "Chatbots",
    pricing: "Freemium",
    features: ["Natural language understanding", "Code generation", "Image analysis", "File processing", "Plugin ecosystem", "Custom GPTs"],
    useCases: ["Content writing", "Code debugging", "Research assistance", "Language translation", "Brainstorming"],
    website: "https://chat.openai.com",
    logo: "🤖",
    featured: true,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI art generator that creates stunning images from text prompts.",
    longDescription: "Midjourney is an independent research lab that produces an AI program that creates images from textual descriptions. Known for its artistic quality and unique aesthetic, Midjourney has become one of the most popular AI image generation tools available.",
    category: "Image Generation AI",
    pricing: "Paid",
    features: ["Text-to-image generation", "Style customization", "High resolution output", "Variation generation", "Image remixing", "Pan & zoom"],
    useCases: ["Digital art creation", "Concept design", "Marketing visuals", "Book illustrations", "Game asset design"],
    website: "https://midjourney.com",
    logo: "🎨",
    featured: true,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster.",
    longDescription: "GitHub Copilot is an AI coding assistant that helps developers write code faster and with less effort. It draws context from comments and code to suggest individual lines and whole functions instantly, supporting dozens of programming languages.",
    category: "Coding AI",
    pricing: "Paid",
    features: ["Code completion", "Multi-language support", "Context-aware suggestions", "Chat interface", "CLI integration", "Pull request summaries"],
    useCases: ["Code writing", "Bug fixing", "Test generation", "Code refactoring", "Learning new languages"],
    website: "https://github.com/features/copilot",
    logo: "💻",
    featured: true,
  },
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI writing assistant for marketing teams and content creators.",
    longDescription: "Jasper is an AI content platform that helps marketing teams create high-quality content at scale. It offers templates for various content types, brand voice customization, and integrations with popular marketing tools.",
    category: "Writing AI",
    pricing: "Paid",
    features: ["Brand voice customization", "50+ templates", "SEO integration", "Team collaboration", "Chrome extension", "API access"],
    useCases: ["Blog posts", "Social media content", "Ad copy", "Email marketing", "Product descriptions"],
    website: "https://jasper.ai",
    logo: "✍️",
    featured: true,
  },
  {
    id: "runway",
    name: "Runway ML",
    description: "AI-powered creative suite for video generation and editing.",
    longDescription: "Runway is an applied AI research company building the next generation of creative tools. Their platform offers AI-powered video generation, editing, and visual effects capabilities that were previously impossible without large production teams.",
    category: "Video AI",
    pricing: "Freemium",
    features: ["Text-to-video", "Video-to-video", "Image generation", "Background removal", "Motion tracking", "Color grading"],
    useCases: ["Video production", "Film editing", "Social media content", "Motion graphics", "Visual effects"],
    website: "https://runwayml.com",
    logo: "🎬",
    featured: true,
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI assistant integrated into Notion for smarter note-taking and project management.",
    longDescription: "Notion AI is an integrated AI assistant within Notion that helps users write, brainstorm, summarize, and organize information. It works seamlessly within your existing Notion workspace to boost productivity.",
    category: "Productivity AI",
    pricing: "Freemium",
    features: ["Writing assistance", "Summarization", "Translation", "Action items extraction", "Database autofill", "Q&A over docs"],
    useCases: ["Meeting notes", "Project planning", "Knowledge management", "Content drafting", "Data organization"],
    website: "https://notion.so/product/ai",
    logo: "⚡",
    featured: true,
  },
  {
    id: "dall-e",
    name: "DALL·E 3",
    description: "OpenAI's image generation model creating images from text descriptions.",
    longDescription: "DALL·E 3 is OpenAI's most capable image generation model. It can create realistic images and art from natural language descriptions, with improved accuracy in following detailed prompts and better text rendering.",
    category: "Image Generation AI",
    pricing: "Freemium",
    features: ["Text-to-image", "High fidelity output", "Text rendering", "Style control", "Safety filters", "API access"],
    useCases: ["Marketing materials", "Social media graphics", "Presentations", "Creative projects", "Prototyping"],
    website: "https://openai.com/dall-e-3",
    logo: "🎨",
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's helpful, harmless, and honest AI assistant.",
    longDescription: "Claude is an AI assistant created by Anthropic that excels at thoughtful, nuanced conversations and complex analysis. It can handle long documents, write code, and help with research while prioritizing safety and accuracy.",
    category: "Chatbots",
    pricing: "Freemium",
    features: ["Long context window", "Document analysis", "Code generation", "Research assistance", "Artifacts", "Project memory"],
    useCases: ["Research", "Document review", "Writing assistance", "Code development", "Data analysis"],
    website: "https://claude.ai",
    logo: "🤖",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI-powered writing assistant for grammar, clarity, and tone.",
    longDescription: "Grammarly is an AI-powered writing assistant that helps users communicate more effectively. It offers real-time grammar and spelling corrections, tone detection, and style suggestions across various platforms.",
    category: "Writing AI",
    pricing: "Freemium",
    features: ["Grammar checking", "Tone detection", "Plagiarism detection", "Style suggestions", "Browser extension", "Desktop app"],
    useCases: ["Academic writing", "Professional emails", "Blog posts", "Social media", "Reports"],
    website: "https://grammarly.com",
    logo: "✍️",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "AI video generation platform with realistic avatars.",
    longDescription: "Synthesia is an AI video creation platform that allows users to create professional-looking videos with AI avatars. It supports 120+ languages and is used by thousands of companies for training, marketing, and communication videos.",
    category: "Video AI",
    pricing: "Paid",
    features: ["AI avatars", "120+ languages", "Custom avatars", "Screen recording", "Templates", "Brand kit"],
    useCases: ["Training videos", "Marketing content", "Product demos", "Internal comms", "How-to videos"],
    website: "https://synthesia.io",
    logo: "🎬",
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor built for pair programming with AI.",
    longDescription: "Cursor is an AI-first code editor designed to make software development faster and more intuitive. Built on top of VS Code, it offers deep AI integration for code generation, editing, and understanding.",
    category: "Coding AI",
    pricing: "Freemium",
    features: ["AI code editing", "Codebase understanding", "Multi-file editing", "Terminal integration", "Chat with codebase", "Auto-debug"],
    useCases: ["Full-stack development", "Code refactoring", "Bug fixing", "Rapid prototyping", "Learning to code"],
    website: "https://cursor.com",
    logo: "💻",
  },
  {
    id: "zapier",
    name: "Zapier AI",
    description: "AI-powered automation platform connecting your apps and workflows.",
    longDescription: "Zapier's AI features help automate repetitive tasks by connecting different web applications. With AI-powered suggestions and natural language automation building, it makes workflow automation accessible to everyone.",
    category: "Productivity AI",
    pricing: "Freemium",
    features: ["Natural language automation", "5000+ app integrations", "AI suggestions", "Conditional logic", "Scheduled triggers", "Data formatting"],
    useCases: ["Email automation", "Data syncing", "Lead management", "Social media posting", "Report generation"],
    website: "https://zapier.com",
    logo: "⚡",
  },
];

export function getToolsByCategory(category: Category): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function getToolById(id: string): Tool | undefined {
  return tools.find((t) => t.id === id);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
  );
}
