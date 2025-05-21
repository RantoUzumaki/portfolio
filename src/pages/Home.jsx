const Home = () => {
  return (
    <div className="flex w-full h-full justify-between items-center">
      <div className="flex w-1/2 h-full justify-end items-center">
        <div className="flex flex-col h-max">
          <span className="text-normal text-darkWhite w-full text-start">
            Hi all. I am
          </span>
          <span className="text-headLine -ml-1   text-darkWhite h-fit leading-headLine">
            Ranto Berk R M
          </span>
          <span className="text-subHeadLine text-violet flex gap-x-2 justify-start items-center">
            {"> Full-stack Developer"}
          </span>

          <span>{"// complete the game to continue"}</span>
          <span>{"// you can also see it on my Github page"}</span>
          <div>
            <span>const github Link</span>
            <span>{" = "}</span>
            <button
              className="w-max h-max"
              onClick={() =>
                window.open(
                  "https://github.com/RantoUzumaki/portfolio",
                  "_blank"
                )
              }
            >
              {'"Click Here"'}
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative h-full">
        <div className="w-[300px] h-[300px] bg-green absolute left-[0%] top-[0%] rotate-45 z-[2] opacity-40 blur-[87px] " />
        <div className="w-[400px] h-[400px] bg-green absolute left-[5%] top-[25%] rotate-60 z-[2] opacity-40 blur-[87px] " />
        <div className="w-[500px] h-[500px] bg-green absolute left-[40%] top-[10%] rotate-75 z-[2] opacity-40 blur-[87px] " />
        <div className="w-[300px] h-[300px] bg-violet absolute right-[0%] bottom-[0%] rotate-45 z-[2] opacity-40 blur-[87px]" />
        <div className="w-[400px] h-[400px] bg-violet absolute right-[5%] bottom-[25%] rotate-60 z-[2] opacity-40 blur-[87px]" />
        <div className="w-[500px] h-[500px] bg-violet absolute right-[40%] bottom-[10%] rotate-75 z-[2] opacity-40 blur-[87px]" />
      </div>
    </div>
  );
};

export default Home;
