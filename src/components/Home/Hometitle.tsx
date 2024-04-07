import { Button } from "../ui/button";
import TextAnimation from "../ui/text-animation";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `AB BADMINTON TRAINING CAMP`;
const description = ` Discover the passion and skill that drive our players.`;
export function HomeTitle() {
  return (
    <>
      <div className=" text-3xl md:w-1k md:h-auto flex flex-col text-left place-items-center h-auto justify-center opacity-80 hover:opacity-100 select-none md:text-center md:pt-16 md:pb-0 ">
        <TextGenerateEffect words={words} />
      </div>
      <div className="md:h-16 flex flex-col place-items-center justify-center w-full text-xl md:text-3xl z-20 text-center  px-8  h-20">
        <TextAnimation words={description} />
      </div>
      <div className="h-32 md:h-40 flex flex-col place-items-center justify-center w-full">
        <Button className=" rounded-full px-8 py-8  text-lg md:text-xl tracking-tighter font-semibold font-mona">
          Get started
        </Button>
      </div>
    </>
  );
}
export default HomeTitle;