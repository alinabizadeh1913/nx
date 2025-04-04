import Section from "@/components/layout/section";
import Typography from "@/components/layout/typography";
import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <Section
        container
        className="my-[50px] sm:my-[100px] md:my-[150px] lg:my-[200px]"
      >
        <div className="flex flex-col items-center justify-center">
          <Typography
            tagName="h2"
            className="dark:text-[#f9f9fa] font-[600] text-center"
          >
            Trusted by leading OSS projects and Fortune 500 companies.
          </Typography>
          <Typography className="dark:text-[#738094] text-center mt-2">
            We developed Nx to be modular and incrementally adoptable to meet
            you where you’re at.
          </Typography>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="w-[45%]">
            {/* <video src="">
              <source src="" />
            </video> */}
          </div>
          <div className="w-[45%]">
            <div className="flex items-center relative">
              <div className="absolute flex z-[-1] top-0">
                <svg
                  className="absolute start-0 top-0 size-12 -translate-x-8 -translate-y-4 transform text-slate-200 dark:text-slate-800"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <Typography className="dark:text-[#eaeaeb] uppercase text-sm">
                Featured Client
              </Typography>
            </div>
            <div className="mt-3">
              <Typography className="italic dark:text-white text-lg">
                Nx is speed and scalability. Before we only had a few features
                and CI was slow and now it’s fast with way more features. That’s
                a huge win for us.
              </Typography>
            </div>
            <div className="my-5 flex justify-between items-center">
              <div className="flex items-center gap-x-4">
                <Image
                  src={"/images/pavlo.jpg"}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <Typography className="dark:text-[#94a3b8]">
                    Pavlo Grosse
                  </Typography>
                  <Typography className="dark:text-[#3e495f] text-sm">
                    Senior Software Engineer, Hetzner Cloud
                  </Typography>
                </div>
              </div>
              <div className="flex">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  className="mx-auto size-10 flex-none bg-white text-[#D50C2D]"
                >
                  <title>Hetzner Cloud</title>
                  <path d="M0 0v24h24V0H0zm4.602 4.025h2.244c.509 0 .716.215.716.717v5.64h8.883v-5.64c0-.509.215-.717.717-.717h2.229c.5 0 .71.23.724.717v14.516c0 .509-.215.717-.717.717h-2.23c-.51 0-.717-.215-.717-.717v-5.735H7.562v5.735c0 .516-.215.717-.716.717H4.602c-.51 0-.717-.208-.717-.717V4.742c0-.509.207-.717.717-.717z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Introduction;
