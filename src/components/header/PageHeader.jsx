import DesktopPageHeader from "./DesktopPageHeader";
import MobilePageHeader from "./MobilePageHeader";
import { useEffect } from "react";
import { useState } from "react";

const screenSize = "(min-width: 768px)";

function PageHeader() {
  const [matches, setMatches] = useState(window.matchMedia(screenSize));

  const onChange = (e) => setMatches(e.matches);

  useEffect(() => {
    window.matchMedia(screenSize).addEventListener("change", onChange);
    return () =>
      window.matchMedia(screenSize).removeEventListener("change", onChange);
  }, []);

  return (
    <>
      {matches && <DesktopPageHeader />}
      {!matches && <MobilePageHeader />}
    </>
  );
}

export default PageHeader;
