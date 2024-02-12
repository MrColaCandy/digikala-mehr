import NavBar from "@components/NavBar";
import Header from "./components/Header";
import PresentationSection from "./components/PresentationSection";
import PartnershipData from "./components/PartnershipData";
import PartnerShipSection from "./components/PartnerShipSection";
import PartnershipProjects from "./components/PartnershipProjects";
import AboutPartnership from "./components/AboutPartnership";
import FAQSection from "./components/FAQSection";
import "./style.css"

function Home() {
  return (
    <div className="container-home">
      <NavBar />
      <Header />
      <main className="main-home">
        <PresentationSection />
        <PartnerShipSection>
          <PartnershipData />
          <PartnershipProjects />
          <AboutPartnership />
        </PartnerShipSection>
        <FAQSection />
      </main>
    </div>
  );
}

export default Home;
