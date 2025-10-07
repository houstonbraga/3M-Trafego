import LayoutConfig from "./components/LayoutConfig";
import Header from "./components/Header";
import Degrade from "./assets/degrade.png";
import Texture from "./assets/texture.png";
import ButtonsGroup from "./components/ButtonsGroup";
import { ArrowDownRight } from "lucide-react";
import Marca from './assets/marca.png'

const Home = () => {
  return (
    <LayoutConfig>
      <div
        className="content-screen relative overflow-hidden w-screen sm:w-[440px] text-white bg-black min-h-[762px] rounded-xl flex flex-col pb-8 px-5"
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

        {/* Footer */}
        <footer className="pt-16 text-center">
          <p className="text-[10px] text-gray-700">
            3M© | Todos os direitos reservados
          </p>
        </footer>
      <img src={Marca} alt="marca de agua" className="w-full absolute bottom-0 right-0 left-0"/>
      </div>
    </LayoutConfig>
  );
};

export default Home;
