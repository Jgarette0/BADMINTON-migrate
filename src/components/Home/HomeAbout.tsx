import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import DescriptionTextAnimate from "./DescriptionTextAnimation";
import SignInModal from "../Auth/SigninModal";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

function AboutSection() {
  const about = ` Combining years of competitive badminton experience, sports
 knowledge, and local expertise, our coaches, led by Coach Andrew, aim to provide tailor-made individual and group training
 programs that cater to the needs of young athletes, taking their
 game to the next level.`;

  return (
    <>
      <section className=" body-font md:w-1k">
        <div className="container mx-auto flex px-2 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-3/4 lg:pr-8 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-dahlia text-extrabold text-gold md:tracking-wide">
              AB BADMINTON
              <br />
              Training Camp
            </h1>
            <div className="mb-8 leading-relaxed font-mona md:text-lg ">
              <DescriptionTextAnimate words={about} />
            </div>
            <div className="flex justify-center">
              <SignedOut>
                <SignInModal />
              </SignedOut>
              <SignedIn>
                <Link to="/about">
                  <Button
                    className="font-mona transition-all duration-400 ease-in-out text-sm py-4 px-8 font-semibold md:py-8 hover:bg-primary hover:text-secondary md:px-12 md:text-lg "
                    variant="secondary"
                  >
                    Explore
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full lg:max-h-xl w-5/6  flex-row hidden md:flex place-items-center justify-end rounded-full">
            <img
              className="homeSvg object-cover object-center  select-none  hover:opacity-100 hover:scale-95 p-8 pl-20 pr-12 bg-gold opacity-85 transition-all duration-300 ease-in-out box-border hover:bg-secondary-foreground"
              alt="hero"
              src="img/badminton.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutSection;
