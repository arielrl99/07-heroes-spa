import { Link, NavLink, useNavigate } from 'react-router';

export const NavBar = () => {
  const navigate = useNavigate(); // customhook de react router

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            // className={(args) => {
            //   console.log(args);
            //   return 'nav-item';
            // }}
            //

            to='/dc'
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          {/* <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/login'
          >
            Logout
          </NavLink> */}
          <span className='nav-item nav-link text-primary'>Ariel</span>
          <button onClick={onLogout} className='nav-item nav-link btn'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
