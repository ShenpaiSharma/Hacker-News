import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Login form submitted');
    } else {
      alert('Create account form submitted');
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="container">
      <h1>{isLogin ? 'Login' : 'Create Account'}</h1>

      <form onSubmit={handleSubmit} className="login-form">
        {!isLogin && (
          <>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />

        <button type="submit" className="login-button">
          {isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? 'Create one' : 'Login here'}
        </a>
      </p>

      <button onClick={handleBack} className="backButton">
        Back to Home
      </button>
      <style jsx>{`
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .login-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 300px;
        }
        .login-button {
            padding: 10px;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .backButton {
            margin-top: 20px;
            padding: 10px;
            background-color: #888;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        `}</style>
    </div>
  );
}