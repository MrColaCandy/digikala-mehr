import Banner from "./components/Banner";
import PartnershipData from "./components/PartnershipData";
import PartnershipProjects from "./components/PartnershipProjects";
import AboutPartnership from "./components/AboutPartnership";
import FAQSection from "./components/FAQSection";
import "./style.css"
import Layout from "@components/Layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <section className="partnerships">
        <PartnershipData />
        <PartnershipProjects />
        <AboutPartnership />
      </section>
      <FAQSection />
    </Layout>
  );
}

export default Home;
