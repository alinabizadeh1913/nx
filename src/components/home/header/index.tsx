import Section from "@/components/layout/section";
import Typography from "@/components/layout/typography";

const Header = () => {
  return (
    <>
      <Section className="my-[120px] sm:my-[240px] md:my-[360px] lg:my-[480px]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center flex-wrap justify-center">
              <Typography className="inline-flex font-[500] text-[45px] md:text-[55px] lg:text-6xl bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">
                Smart
              </Typography>
              <Typography className="inline-flex font-[500] text-[45px] md:text-[55px] lg:text-6xl ms-4 dark:text-white">
                Monorepos
              </Typography>
              <span className="inline-flex w-[9px] h-[9px] rounded-full bg-black dark:bg-white mx-6"></span>
              <Typography className="inline font-[500] text-[45px] md:text-[55px] lg:text-6xl bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                Fast
              </Typography>
              <Typography className="inline-flex font-[500] text-[45px] md:text-[55px] lg:text-6xl ms-4 dark:text-white">
                CI
              </Typography>
            </div>
          </div>
          <div className="w-[700px] mx-auto mt-6">
            <Typography
              tagName="h3"
              className="font-bold inline dark:text-white"
            >
              Build system
            </Typography>
            <Typography
              tagName="h3"
              className="text-[#505050] inline dark:text-[#d3d3d3ef]"
            >
              , optimized for monorepos, with
            </Typography>{" "}
            <Typography
              tagName="h3"
              className="font-bold inline dark:text-white"
            >
              AI-powered
            </Typography>{" "}
            <Typography
              tagName="h3"
              className="text-[#505050] inline dark:text-[#d3d3d3ef]"
            >
              architectural awareness and
            </Typography>{" "}
            <Typography
              tagName="h3"
              className="font-bold inline dark:text-white"
            >
              advanced CI
            </Typography>{" "}
            <Typography
              tagName="h3"
              className="text-[#505050] inline dark:text-[#d3d3d3ef]"
            >
              capabilities.
            </Typography>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Header;
