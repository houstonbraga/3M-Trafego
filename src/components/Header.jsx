import Logo from "/logo.svg";
import Verification from "../assets/verification.png";

const Header = () => {
  return (
    <div className="flex flex-col ml-8 z-10 mt-16 gap-2">
      <div className="content-center">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="flex gap-1 items-end">
        <div className="flex flex-col justify-start">
          <h1 className="font-bold text-xl">3M Gestão</h1>
          <h1 className="font-bold text-xl">de tráfego</h1>
        </div>
        <img
          src={Verification}
          width={24}
          alt="verification-icon"
          className="mb-1"
        />
      </div>
      <p className="text-xs text-gray-500">Especialista em tráfego pago |</p>
      <p className="text-xs text-gray-500">Estrategista digital |</p>
    </div>
  );
};

export default Header;
