import CommunicationSection from "./CommunicationSection";
import HeroSection from "./HeroSection";
import MembershipSection from "./MembershipSection";
import ProductSection from "./ProductSection";

function LandingpageModule() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <MembershipSection />
      <CommunicationSection/>
    </>
  );
}

export default LandingpageModule;
