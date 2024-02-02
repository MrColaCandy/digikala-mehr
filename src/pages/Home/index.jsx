import Container from "@components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import PresentationSection from "./components/PresentationSection";
import PartnershipData from "./components/PartnershipData";
import PartnerShipSection from "./components/PartnerShipSection";
import PartnershipProjects from "./components/PartnershipProjects";
import AboutPartnership from "./components/AboutPartnership";
import FAQSection from "./components/FAQSection";
import NavBar from "@components/NavBar";

function Home() {
  return (
    <Container>
      <NavBar />
      <Header />
      <Main>
        <PresentationSection />
        <PartnerShipSection>
          <PartnershipData />
          <PartnershipProjects />
          <AboutPartnership />
        </PartnerShipSection>
        <FAQSection />
      </Main>
    </Container>
  );
}

export default Home;
