import Hero from "./Hero";
import Heritage from "./Heritage";
import BestSeller from "./BestSeller";
import Signature from "./Signature";
import Why from "./Why";

import Marquee from "../../components/ui/Marquee";

const index = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Heritage />
      <BestSeller />
      <Signature />
      <Why />
    </>
  );
};

export default index;
