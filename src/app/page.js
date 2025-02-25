import Experience from "@/components/home/experience/Experience";
import Landing from "@/components/home/Landing";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function Home() {
  return (
    <div className=" ">
      <ThemeSwitcher/>
      <Landing />
      <Experience />
    </div>
  );
}
