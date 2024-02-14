import Banner from "./components/Banner";
import PresentationSection from "./components/PresentationSection";
import PartnershipData from "./components/PartnershipData";
import PartnerShipSection from "./components/PartnerShipSection";
import PartnershipProjects from "./components/PartnershipProjects";
import AboutPartnership from "./components/AboutPartnership";
import FAQSection from "./components/FAQSection";
import "./style.css"
import Layout from "@components/Layout";

function Home() {
  return (
   <Layout>
      <Banner />
        <PresentationSection />
        <PartnerShipSection>
          <PartnershipData />
          <PartnershipProjects />
          <AboutPartnership />
        </PartnerShipSection>
        <FAQSection />
   </Layout>
  );
}

export default Home;
