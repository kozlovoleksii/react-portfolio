import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, Contact, ScrollToTop} from "./components";
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
    </>
  );
}

export default App;
