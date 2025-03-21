import AboutMe from "@/components/home/AboutMe";
import Experience from "@/components/home/experience/Experience";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/projects/Projects";
import Skills from "@/components/home/Skills";
import StartButton from "@/components/layout/StartButton";
import GitHubActivity from "@/components/ui/GitHubActivity";

export default function Home() {
  return (
    <main>
      <Landing />
      <Experience />
      <Projects />
      <Skills />
      <GitHubActivity />
      <AboutMe />
      <StartButton />
    </main>
  );
}

// performance.getEntriesByType("resource")
//   .filter(r => r.initiatorType === "script")
//   .map(r => ({ name: r.name, duration: r.duration }))