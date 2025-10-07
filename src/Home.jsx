import LayoutConfig from "./components/LayoutConfig";
import Header from "./components/Header";
import Degrade from "./assets/degrade.png";
import Texture from "./assets/texture.png";
import ButtonsGroup from "./components/ButtonsGroup";
import { ArrowDownRight } from "lucide-react";

const Home = () => {
  return (
    <LayoutConfig>
      <div
        className="content-screen relative overflow-hidden w-screen sm:w-[440px] text-white bg-black min-h-[762px] rounded-xl flex flex-col px-5"
        style={{
          backgroundImage: `url(${Texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={Degrade}
          alt="degrade"
          className="h-[350px] w-full absolute top-0 left-0 right-0"
        />
        <Header />
        <div className="flex mt-12 items-center">
          <ArrowDownRight color="#823CFA" width={36} />
          <h2 className="text-sm">Links úteis</h2>
        </div>
        <ButtonsGroup />
      </div>
    </LayoutConfig>
  );
};

export default Home;
