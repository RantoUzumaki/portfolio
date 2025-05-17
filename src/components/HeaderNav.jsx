import { useLocation, useNavigate } from 'react-router-dom';

const HeaderNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex w-full border-b border-border h-14 justify-between">
      <div className="flex justify-start items-center">
        <button
          className="w-60 px-5 border-r border-border flex justify-start items-center h-full text-gray"
          onClick={() => navigate('/')}
        >
          ranto-berk
        </button>

        <button
          className={`flex justify-center items-center h-full px-10 border-r border-border text-gray relative hover:!text-white transition-all ease-in-out  before:transition-all before:duration-500 before:ease-in-out before:absolute before:bottom-0 before:left-0 before:h-1 before:bg-orange ${
            location.pathname === '/' ? 'before:w-full text-white' : 'before:w-0'
          }`}
          onClick={() => navigate('/')}
        >
          _hello
        </button>

        <button
          className={`flex justify-center items-center h-full px-10 border-r border-border text-gray relative hover:!text-white transition-all ease-in-out  before:transition-all before:duration-500 before:ease-in-out before:absolute before:bottom-0 before:left-0 before:h-1 before:bg-orange ${
            location.pathname === '/about-me' ? 'before:w-full text-white' : 'before:w-0'
          }`}
          onClick={() => navigate('/about-me')}
        >
          _about-me
        </button>

        <button
          className={`flex justify-center items-center h-full px-10 border-r border-border text-gray relative hover:!text-white transition-all ease-in-out  before:transition-all before:duration-500 before:ease-in-out before:absolute before:bottom-0 before:left-0 before:h-1 before:bg-orange ${
            location.pathname === '/projects' ? 'before:w-full text-white' : 'before:w-0'
          }`}
          onClick={() => navigate('/projects')}
        >
          _projects
        </button>
      </div>

      <button
        className={`flex justify-center items-center h-full px-10 border-l border-border text-gray relative hover:!text-white transition-all ease-in-out  before:transition-all before:duration-500 before:ease-in-out before:absolute before:bottom-0 before:left-0 before:h-1 before:bg-orange ${
          location.pathname === '/contact-me' ? 'before:w-full text-white' : 'before:w-0'
        }`}
        onClick={() => navigate('/contact-me')}
      >
        _contact-me
      </button>
    </div>
  );
};

export default HeaderNav;
