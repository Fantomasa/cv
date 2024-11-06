import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="max-w-7xl w-full">
      <Hero />
      <WorkExperience />
      <RecentProjects />
    </div>
  );
}
