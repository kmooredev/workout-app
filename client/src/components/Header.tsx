import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='bg-secondary shadow-md shadow-secondary mb-2'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap gap-2'>
              <span className='text-text font-heading text-2xl'>Talaria</span>
              <span className='text-primary font-heading text-2xl'>Fitness</span>
            </h1>
          </Link>

          <ul className='flex gap-4'>
            <Link to='/'>
              <li className='hidden sm:inline text-text  font-body text-xl hover:underline'>
                Home
              </li>
            </Link>
            <Link to='/about'>
              <li className='hidden sm:inline text-text  font-body text-xl hover:underline'>
                About
              </li>
            </Link>
            <Link to='/sign-in'>
              <li className='hidden sm:inline text-text  font-body text-xl hover:underline'>
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
