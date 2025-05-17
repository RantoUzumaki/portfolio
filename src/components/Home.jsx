import { FiChevronRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="flex w-full h-full justify-between items-center">
      <div className="flex w-1/2 h-full justify-end items-center">
        <div className="flex flex-col h-max">
          <span className="text-normal text-darkWhite w-full text-start">Hi all. I am</span>
          <span className="text-headLine text-darkWhite h-20">Ranto Berk R M</span>
          <span className="text-subHeadLine text-violet flex gap-x-2 justify-start items-center">
            <FiChevronRight /> Full-stack Developer
          </span>

          <span>{'// complete the game to continue'}</span>
          <span>{'// you can also see it on my Github page'}</span>
          <div>
            <span>const githubLink</span>
            <span>{' = '}</span>
            <span>“https://github.com/example/url”</span>
          </div>
        </div>
      </div>
      <div>
        <div className="w-72 h-72 bg-green absolute right-[20%] top-[20%] rotate-45 z-[2] opacity-40 blur-[87px] " />
        <div className="w-72 h-72 bg-violet absolute right-[10%] bottom-[20%] rotate-45" />
      </div>
    </div>
  );
};

export default Home;
