import AboutMe from "@/components/home/AboutMe";
import Experience from "@/components/home/experience/Experience";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/projects/Projects";
import Skills from "@/components/home/Skills";
import Navbar from "@/components/layout/NavBar";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import GitHubActivity from "@/components/ui/GitHubActivity";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      {/* <ThemeSwitcher/> */}
      <Landing />
      <Experience />
      <Projects />
      <Skills />
      <GitHubActivity />
      <AboutMe />
    </div>
  );
}
