import HomeBanner from "./components/HomeBanner";
import HomeAbout from "./components/HomeAbout";
import Layout from "@components/Layout";
import HomeVideo from "./components/HomeVideo";
import HomeInfo from "./components/HomeInfo";
import HomeProjects from "./components/HomeProjects";
import HomeFAQ from "./components/HomeFAQ";
import "./style.css"

function Home() {
  return (
    <Layout>
      <HomeBanner />
      <HomeVideo/>
      <section className="home__backgroundGreen">
        <HomeInfo />
        <HomeProjects />
        <HomeAbout />
      </section>
      <HomeFAQ />
    </Layout>
  );
}

export default Home;
