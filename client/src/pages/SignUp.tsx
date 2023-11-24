import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='max-w-lg mx-auto p-3 bg-background min-h-screen'>
      <h1 className='text-4xl text-center text-primary font-heading font-bold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input
          className='border border-accent bg-background p-3 rounded-lg font-body text-text'
          placeholder='username'
          id='username'
          type='text'
        />
        <input
          className='border border-accent bg-background p-3 rounded-lg font-body text-text'
          placeholder='email'
          id='email'
          type='email'
        />
        <input
          className='border border-accent bg-background p-3 rounded-lg font-body text-text'
          placeholder='password'
          id='password'
          type='password'
        />
        <button className='bg-secondary text-text font-heading p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
          Sign Up
        </button>
      </form>
      <div className='flex gap-2'>
        <p className='font-body text-primary'>Already have an account?</p>
        <Link to='/sign-in'>
          <span className='text-secondary font-body hover:text-primary hover:underline'>
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
