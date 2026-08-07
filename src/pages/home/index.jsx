import Hero from "./Hero";
import Hirtage from "./Hirtage";
import BestSeller from "./BestSeller";
import Signature from "./Signature";
import Why from "./Why";

import Marquee from "../../components/ui/Marquee";

const index = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Hirtage />
      <BestSeller />
      <Signature />
      <Why />
    </>
  );
};

export default index;
