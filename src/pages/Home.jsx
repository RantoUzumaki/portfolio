const Home = () => {
  return (
    <div className="flex w-full h-full justify-between items-center px-60">
      <div className="flex w-1/2 h-full justify-between items-center">
        <div className="flex flex-col h-max">
          <span className="text-normal text-darkWhite w-full text-start">Hi all. I am</span>
          <span className="text-headLine -ml-1   text-darkWhite h-fit leading-headLine">Ranto Berk R M</span>
          <span className="text-subHeadLine text-violet flex gap-x-2 justify-start items-center">
            {'> Full-stack Developer'}
          </span>

          <span>{'// complete the game to continue'}</span>
          <span>{'// you can also see it on my Github page'}</span>
          <div>
            <span>const github Link</span>
            <span>{' = '}</span>
            <button
              className="w-max h-max"
              onClick={() => window.open('https://github.com/RantoUzumaki/portfolio', '_blank')}
            >
              {'"Click Here"'}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[550px] h-[550px] bg-green absolute left-[45%] top-[10%] rotate-45 z-[2] opacity-40 blur-[87px] " />
        <div className="w-[550px] h-[550px] bg-violet absolute right-[5%] bottom-[5%] rotate-[80deg] z-[2] opacity-40 blur-[87px]" />
      </div>
    </div>
  );
};

export default Home;
