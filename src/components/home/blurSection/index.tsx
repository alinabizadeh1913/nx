import Section from "@/components/layout/section";

const BlurSection = () => {
  return (
    <>
      <Section className="absolute top-0 left-0 px-[18px] z-[-1]">
        <div className="max-w-7xl mx-auto w-full h-[700px] flex justify-between relative">
          <div className="item w-[45%] h-[450px] bg-[#d5cfffb0] dark:bg-[#111630] rotate-[58deg] rounded-[30px] blur-[150px]"></div>
          <div className="item w-[45%] h-[300px] bg-[#cfd3fcdc] dark:bg-[#3f25778a] rotate-[140deg] translate-x-[-40px] rounded-[30px] blur-[150px]"></div>
          <div className="absolute w-[186px] h-[164px] bg-white dark:bg-[#020617] left-[20%] top-[10%] blur-[72px]"></div>
          <div className="absolute w-[256px] h-[144px] bg-white dark:bg-[#010102c0] right-[15%] top-[22%] blur-[122px]"></div>
          <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-[2]"></div>
        </div>
      </Section>
    </>
  );
};

export default BlurSection;
