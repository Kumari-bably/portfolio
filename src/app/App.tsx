import { MagneticCursor } from "./components/MagneticCursor";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroSection } from "./components/HeroSectionNew";
import { AboutSectionNew } from "./components/AboutSectionNew";
import { SkillsSectionNew } from "./components/SkillsSectionNew";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectsSectionNew } from "./components/ProjectsSectionNew";
import { ContactSectionNew } from "./components/ContactSectionNew";
import { FooterNew } from "./components/FooterNew";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 magnetic-cursor overflow-x-hidden">
      {/* Custom Cursor */}
      <MagneticCursor />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSectionNew />
        <SkillsSectionNew />
        <ExperienceTimeline />
        <ProjectsSectionNew />
        <ContactSectionNew />
      </main>
      
      {/* Footer */}
      <FooterNew />
    </div>
  );
}
