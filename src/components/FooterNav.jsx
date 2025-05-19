import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterNav = () => {
  return (
    <div className="w-full h-[50px] flex justify-between items-center border-t border-border">
      <div className="flex">
        <span className="px-5 h-[50px] flex justify-start items-center border-r border-border">find me in:</span>
        <button
          className="border-r border-border w-[50px] h-[50px] flex justify-center items-center transition-all duration-200 ease-in-out text-gray hover:text-white"
          onClick={() => window.open('https://www.linkedin.com/in/ranto-berk', '_blank')}
        >
          <FaLinkedin />
        </button>
      </div>
      <button
        className="border-l border-border h-[50px] px-5 flex gap-x-3 justify-center items-center transition-all duration-200 ease-in-out text-gray hover:text-white"
        onClick={() => window.open('https://github.com/RantoUzumaki', '_blank')}
      >
        @RantoUzumaki <FaGithub />
      </button>
    </div>
  );
};

export default FooterNav;
