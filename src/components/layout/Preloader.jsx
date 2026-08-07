import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader">
      <img id="preloaderLogo" src={logo} alt="أبو السعود" />
    </div>
  );
};

export default Preloader;
