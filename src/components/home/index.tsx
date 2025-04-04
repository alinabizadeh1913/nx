import Section from "../layout/section";
import Typography from "../layout/typography";
import BlurSection from "./blurSection";
import Header from "./header";
import ChangeTheme from "../../theme";
import Introduction from "./introduction";

const HomeComponents = () => {
  return (
    <>
      <BlurSection />
      <Header />
      <Introduction />
      <ChangeTheme />
    </>
  );
};

export default HomeComponents;
