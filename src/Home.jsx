import LayoutConfig from "./components/LayoutConfig";
import Header from "./components/Header";
import Degrade from "./assets/degrade.png";
import Texture from "./assets/texture.png";

const Home = () => {
  return (
    <LayoutConfig>
      <div className="content-screen relative overflow-hidden w-screen sm:w-[440px] bg-black min-h-[762px] rounded-xl flex px-5">
        <img
          src={Texture}
          alt="Texture"
          className="absolute top-0 bottom-0 left-0 right-0 opacity-60"
        />
        <img
          src={Degrade}
          alt="degrade"
          className="h-[350px] w-full absolute top-0 left-0 right-0"
        />
        <Header />
      </div>
    </LayoutConfig>
  );
};

export default Home;
