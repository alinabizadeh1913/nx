import Link from "next/link";
import { Logo } from "../../../../public/svg";
import Section from "../section";
import Typography from "../typography";

const MainNavBar = () => {
  return (
    <>
      <Section
        className="mt-2 px-[18px] sticky top-[8px] z-30"
        identifier="main-navbar"
      >
        <div className="max-w-7xl mx-auto rounded-lg py-[10px] px-4 bg-[#fafafaec] dark:bg-[#0b1a22ce] backdrop-blur-lg shadow-sm dark:shadow-none dark:border dark:border-[#aaf1ed21]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex text-black dark:text-white">
                <Logo />
              </div>
              <div className="links ms-8 flex items-center">
                <div className="flex items-center gap-x-8 pr-6 border-r border-r-[#d6d6d6] dark:border-r-[#c8deff50] h-[25px]">
                  <Link
                    href="#"
                    className="text-[#3a3c47] hover:text-[#307bdd] dark:text-white dark:hover:text-[#30c3dd] duration-100 text-sm font-[500]"
                  >
                    Docs
                  </Link>
                  <Link
                    href="#"
                    className="text-[#3a3c47] hover:text-[#307bdd] dark:text-white dark:hover:text-[#30c3dd] duration-100 text-sm font-[500]"
                  >
                    Blog
                  </Link>
                  <div>
                    <Link
                      href="#"
                      className="text-[#3a3c47] hover:text-[#307bdd] dark:text-white dark:hover:text-[#30c3dd] duration-100 text-sm font-[500] flex items-center"
                    >
                      Resources
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className="ml-2 h-3 w-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-x-8 px-6 border-r border-r-[#d6d6d6] dark:border-r-[#c8deff50] h-[25px]">
                  <Link
                    href="#"
                    className="text-[#3a3c47] hover:text-[#307bdd] dark:text-white dark:hover:text-[#30c3dd] duration-100 text-sm font-[500]"
                  >
                    Nx Cloud
                  </Link>
                  <Link
                    href="#"
                    className="text-[#3a3c47] hover:text-[#307bdd] dark:text-white dark:hover:text-[#30c3dd] duration-100 text-sm font-[500]"
                  >
                    Pricing
                  </Link>
                </div>
                <div className="flex items-center gap-x-8 px-6 border-r border-r-[#d6d6d6] dark:border-r-[#c8deff50] h-[25px]">
                  <Link
                    href="#"
                    className="text-[#3a3c47] hover:text-[#307bdd] dark:text-white dark:hover:text-[#30c3dd] duration-100 text-sm font-[500]"
                  >
                    Powerpack
                  </Link>
                  <Link
                    href="#"
                    className="text-[#3a3c47] hover:text-[#307bdd] dark:text-white dark:hover:text-[#30c3dd] duration-100 text-sm font-[500]"
                  >
                    Enterprise
                  </Link>
                </div>
                <div className="pl-6 flex items-center">
                  <div
                    title="Control"
                    className="text-[13px] font-[500] border border-[#d8d8d8] hover:border-[#cccccc] text-[#b9b9b9] dark:bg-[#0a1f25] dark:text-[#4c7986] dark:border-[#90e0eb28] dark:hover:border-[#90b8eb50] dark:hover:bg-[#3e87c225] dark:hover:text-[#e7e7e777] py-[1px] px-[5px] rounded-md cursor-pointer hover:text-[#5a5a64] select-none duration-100"
                  >
                    Ctrl K
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-[18px] items-center">
              <Link
                href="/contact"
                className="rounded-md border border-[#cbd5e1] dark:bg-[#1e293b] dark:border-[#c9f4ff27] dark:hover:bg-[#2d3e58] py-[6px] px-2 hover:bg-[#f7f7fa] duration-300"
              >
                <Typography className="text-sm font-[500] text-[#3f4c5f] dark:text-[#dddddd]">
                  Contact
                </Typography>
              </Link>
              <Link
                href="#"
                className="flex text-[#8a8a8a] hover:text-[#555555] dark:hover:text-[#d4effc] duration-100 cursor-pointer"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MainNavBar;
