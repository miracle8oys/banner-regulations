import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <nav className="px-6 bg-white border-gray-200 shadow-lg py-7 font-medium text-grey">
      <div className="mx-auto">
        <p className="flex">
          Design & Develop with{" "}
          <AiFillHeart className="text-primary mt-1.5 mx-1" /> by CV. MAIHARTA
        </p>
        <p>2022 @Kabupaten Buleleng</p>
      </div>
    </nav>
  );
};

export default Footer;
