import { MoveRight } from "lucide-react";
import Whats from '../assets/whats.svg'
import Instagram from '../assets/instagram.svg'
import Folder from '../assets/portfolio.svg'

const ButtonsGroup = () => {
  return (
    <div className=" z-10 flex flex-col w-full px-3 mt-5 gap-5">
      <a
        href="#"
        className="flex justify-between items-center w-full h-[100px] bg-black border border-[#823cfa] rounded-2xl group hover:scale-105 transition-transform duration-300"
      >
        <MoveRight color="#823CFA" className="ml-5 animate-slide-x" />
        <h2>WhatsApp</h2>
        <div className="h-full w-[100px] flex justify-center items-center bg-[#823cfa] rounded-br-xl rounded-tr-xl">
          <img src={Whats} alt="whats-icon" />
        </div>
      </a>
      <a
        href="#"
        className="flex justify-between items-center w-full h-[100px] bg-black border border-[#823cfa] rounded-2xl group hover:scale-105 transition-transform duration-300"
      >
        <MoveRight color="#823CFA" className="ml-5 animate-slide-x" />
        <h2>Instagram</h2>
        <div className="h-full w-[100px] flex justify-center items-center bg-[#823cfa] rounded-br-xl rounded-tr-xl">
          <img src={Instagram} alt="insta-icon" />
        </div>
      </a>
      <a
        href="#"
        className="flex justify-between items-center w-full h-[130px] bg-black border border-[#823cfa] rounded-2xl group hover:scale-105 transition-transform duration-300"
      >
        <MoveRight color="#823CFA" className="ml-5 animate-slide-x" />
        <h2>Portfólio</h2>
        <div className="h-full w-[100px] flex justify-center items-center bg-[#823cfa] rounded-br-xl rounded-tr-xl">
          <img src={Folder} alt="folder-icon" />
        </div>
      </a>
    </div>
  );
};

export default ButtonsGroup;
