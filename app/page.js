import Navbar from "./components/navBar/NavBar";
import HomeBanner from "./components/home/HomeBanner/HomeBanner";
import AboutHome from "./components/home/About/AboutHome";
import OurProducts from "./components/home/OurProducts/OurProducts";
import Categories from "./components/home/Categories/Categories";
import AboutUs from "./components/home/AboutUs/AboutUs";
import Locations from "./components/home/Locations/Locations";
import VIPMember from "./components/home/VIPMember/VIPMember";
import UpcomingReleases from "./components/home/UpcomingReleases/UpcomingReleases";
import FaqAndSubscribe from "./components/home/FaqAndSubscribe/FaqAndSubscribe";
import Footer from "./components/home/Footer/Footer";

import RevealSection from "./components/animations/RevealSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <HomeBanner />

      <RevealSection>
        <AboutHome />
      </RevealSection>

      <RevealSection delay={0.1}>
        <OurProducts />
      </RevealSection>

      <RevealSection delay={0.15}>
        <Categories />
      </RevealSection>

      <RevealSection delay={0.2}>
        <AboutUs />
      </RevealSection>

      <RevealSection delay={0.25}>
        <Locations />
      </RevealSection>

      <RevealSection delay={0.3}>
        <VIPMember />
      </RevealSection>

      <RevealSection delay={0.35}>
        <UpcomingReleases />
      </RevealSection>

      <RevealSection delay={0.4}>
        <FaqAndSubscribe />
      </RevealSection>

      <Footer />
    </>
  );
}
