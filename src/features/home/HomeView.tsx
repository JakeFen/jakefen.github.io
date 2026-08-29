import HomeHero from "./HomeHero";
import HomeProjects from "./HomeProjects";

function HomeView() {
  return (
    <>
      <HomeHero />
      <hr className="mx-8 border-t border-neutral-200" />
      <HomeProjects />
    </>
  );
}

export default HomeView;
