import Section from "@/components/layout/section";

const BlurSection = () => {
  return (
    <>
      <Section identifier="blur-section" className="absolute top-0 left-0 px-[18px] z-[-1]">
        <div className="max-w-7xl mx-auto w-full h-[700px] flex justify-between relative">
          <div className="blur-item-1 w-[45%] h-[450px] bg-[#d1caffb0] dark:bg-[#111630] rotate-[58deg] rounded-[30px]"></div>
          <div className="blur-item-2 w-[55%] h-[300px] bg-[#c6cbfddc] dark:bg-[#3f25778a] rotate-[140deg] translate-x-[-60px] rounded-[30px]"></div>
          <div className="absolute w-[386px] h-[74px] bg-white dark:bg-[#020617b2] left-[20%] top-[24%] blur-[62px] rotate-45"></div>
          <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-[2]"></div>
        </div>
      </Section>
    </>
  );
};

export default BlurSection;
