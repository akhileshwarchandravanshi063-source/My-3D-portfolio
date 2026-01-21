import NavBar from "./components/NavBar";
import Contact from "./section/Contact";
import FeaturesCards from "./section/FeaturesCards";
import Hero from "./section/Hero"
import ShowcaseSection from "./section/ShowcaseSection"
import TechStack from "./section/Techstack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeaturesCards />
      <TechStack />
      <Contact />
    </>

  );
};
export default App;
