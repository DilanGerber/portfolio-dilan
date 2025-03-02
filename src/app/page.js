import Experience from "@/components/home/experience/Experience";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/projects/Projects";
import Skills from "@/components/home/Skills";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function Home() {
  return (
    <div className=" ">
      <ThemeSwitcher/>
      <Landing />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );
}
