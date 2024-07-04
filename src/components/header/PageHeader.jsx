import DesktopPageHeader from "./DesktopPageHeader";
import MobilePageHeader from "./MobilePageHeader";
import { useEffect } from "react";
import { useState } from "react";

const breakpoint = 768;

function PageHeader() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>{width > breakpoint ? <DesktopPageHeader /> : <MobilePageHeader />}</>
  );
}

export default PageHeader;
