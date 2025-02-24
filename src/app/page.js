import Landing from "@/components/home/Landing";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function Home() {
  return (
    <div className=" ">
      <ThemeSwitcher/>
      <Landing />
    </div>
  );
}
