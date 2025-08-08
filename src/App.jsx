import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, Contact, ScrollToTop, SupportUkraine} from "./components";
import ThemeToogle from "./components/themeToogle/ThemeToogle";


function App() {
  return (
    <>
    <Header/>
      <main>
        <Home/>
        <About/>
        <SkillsInfo/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollToTop/>
      <ThemeToogle/>
      <SupportUkraine/>
    </>
  );
}

export default App;
