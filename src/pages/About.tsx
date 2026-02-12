import { Brain, Target, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">About AI Tools Hub</h1>
        <p className="text-muted-foreground">Helping users navigate the AI landscape</p>
      </div>

      <div className="space-y-8">
        <div className="rounded-xl bg-gradient-card border border-border/50 p-8 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Our Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI Tools Hub was created to solve a growing problem: with hundreds of AI tools launching every month, finding the right one for your needs has become overwhelming. We curate, categorize, and compare the best tools so you can make informed decisions quickly.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-card border border-border/50 p-8 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Why AI Tools Matter</h2>
              <p className="text-muted-foreground leading-relaxed">
                Artificial Intelligence is transforming every industry — from writing and design to coding and business operations. The right AI tool can save hours of work, boost creativity, and unlock capabilities that were previously impossible. Understanding and choosing the right tools is essential for staying competitive in today's digital world.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-card border border-border/50 p-8 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Academic Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is developed as a student academic project focused on analyzing user behavior using web analytics. It demonstrates modern web development practices while providing real value to users exploring the AI tool ecosystem. The project tracks user interactions, navigation patterns, and engagement metrics to study how users discover and evaluate AI tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
