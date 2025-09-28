import {
  Header,
  Footer,
  Home,
  About,
  SkillsInfo,
  Services,
  Portfolio,
  Contact,
  ScrollToTop,
  SupportUkraine,
} from "./components";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsInfo />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
      <SupportUkraine />
    </>
  );
}

export default App;
