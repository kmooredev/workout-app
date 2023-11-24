import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    console.log(data);
    setError(null);
    setLoading(false);
    navigate('/sign-in');
  };
  return (
    <div className='max-w-lg mx-auto p-3 bg-background min-h-screen'>
      <h1 className='text-4xl text-center text-primary font-heading font-bold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          className='border border-accent bg-background p-3 rounded-lg font-body text-text'
          placeholder='username'
          id='username'
          type='text'
          onChange={handleChange}
        />
        <input
          className='border border-accent bg-background p-3 rounded-lg font-body text-text'
          placeholder='email'
          id='email'
          type='email'
          onChange={handleChange}
        />
        <input
          className='border border-accent bg-background p-3 rounded-lg font-body text-text'
          placeholder='password'
          id='password'
          type='password'
          onChange={handleChange}
        />
        <button
          className='bg-secondary text-text font-heading p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'
          disabled={loading}>
          {loading ? 'Loading...' : 'Sign Up'}
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
      {error && <p className='text-error font-body'>{error}</p>}
    </div>
  );
};

export default SignUp;
