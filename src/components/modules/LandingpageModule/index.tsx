import InforTeamSection from "./InforTeamSection";
import CommunicationSection from "./CommunicationSection";
import BenefitSection from "./BenefitSection";
import HeroSection from "./HeroSection";
import MembershipSection from "./MembershipSection";
import ProductSection from "./ProductSection";
import FeedbackSection from "./FeedbackSection";
import RoadScroller from "./RoadScroller";

function LandingpageModule() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <BenefitSection />
      <RoadScroller />
      <MembershipSection />
      <InforTeamSection />
      <FeedbackSection />
      <CommunicationSection />
    </>
  );
}

export default LandingpageModule;
