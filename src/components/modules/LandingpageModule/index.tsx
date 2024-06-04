import BenefitSection from "@/components/modules/LandingpageModule/BenefitSection";
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
    </>
  );
}

export default LandingpageModule;
