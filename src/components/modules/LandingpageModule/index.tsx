import CommunicationSection from "./CommunicationSection";
import BenefitSection from "./BenefitSection";
import HeroSection from "./HeroSection";
import MembershipSection from "./MembershipSection";
import ProductSection from "./ProductSection";

function LandingpageModule() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <BenefitSection/>
      <MembershipSection />
      <CommunicationSection/>
    </>
  );
}

export default LandingpageModule;
