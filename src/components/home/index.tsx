import Section from "../layout/section";
import Typography from "../layout/typography";
import BlurSection from "./blurSection";
import Header from "./header";
import ChangeTheme from "../../theme";

const HomeComponents = () => {
  return (
    <>
      <BlurSection />
      <Header />
      <ChangeTheme />
    </>
  );
};

export default HomeComponents;
