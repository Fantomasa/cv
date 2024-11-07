import Certifications from "@/components/Certifications";
import Education from "@/components/Education/Education";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import WorkExperience from "@/components/WorkExperience";
import YouTubeChannels from "@/components/YouTubeChannels";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-2 mx-auto">
      <Hero />
      <Education />
      <Certifications />
      <WorkExperience />
      <RecentProjects />
      <YouTubeChannels />
    </div>
  );
}
