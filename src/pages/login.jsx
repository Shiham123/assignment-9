import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithubAlt } from 'react-icons/fa';
import swal from 'sweetalert';

import { AppContext } from '../context/context';

const LoginPage = () => {
  const context = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { signEmailPassword, logInGoogle, facebookLogIn, githubLogIn } =
    context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');

    signEmailPassword(emailValue, passwordValue)
      .then((result) => {
        setEmail('');
        setPassword('');
        console.log(result.user.email);
        navigate(location?.state ? location.state : '/');
        swal({
          title: 'Logged in message',
          text: 'email password log in successfully',
          icon: 'success',
        });
      })
      .catch((error) => {
        swal({
          title: 'login error',
          text: 'please use valid email and password',
          icon: 'error',
        });
        setEmail('');
        setPassword('');
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    logInGoogle()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
        swal({
          title: 'Logged in message',
          text: 'Google log in successfully',
          icon: 'success',
        });
      })
      .catch((error) => console.log(error));
  };

  const handleFacebookLogIn = () => {
    facebookLogIn()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
        swal({
          title: 'Logged in message',
          text: 'facebook in successfully',
          icon: 'success',
        });
      })
      .catch((error) => console.log(error));
  };

  const handleGithubLogIn = () => {
    githubLogIn()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
        swal({
          title: 'Logged in message',
          text: 'github log in successfully',
          icon: 'success',
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl m-auto text-center my-10 mx-10 font-inter font-bold bg-fontColor text-white p-8 rounded-lg">
              Login Here
            </h1>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={email}
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
            {/* google facebook github */}
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={handleGoogleLogin}
                className="bg-fontColor text-white px-4 py-2 rounded-lg flex items-center gap-4 my-4"
              >
                <FcGoogle size={32} />
                <span className="font-bold font-inter">Log in with Google</span>
              </button>

              <button
                onClick={handleFacebookLogIn}
                className="bg-fontColor text-white px-4 py-2 rounded-lg flex items-center gap-4 my-4"
              >
                <FaFacebook size={30} />
                <span className="font-bold font-inter">
                  Log In With Facebook
                </span>
              </button>

              <button
                onClick={handleGithubLogIn}
                className="bg-fontColor text-white px-4 py-2 rounded-lg flex items-center gap-4 my-4"
              >
                <FaGithubAlt size={30} />
                <span className="font-bold font-inter">Log In With Github</span>
              </button>
            </div>
            {/*  */}
            <p className="text-center">
              don&apos;t have a account
              <Link to="/register" className="text-">
                <span className="text-fontColor font-bold px-2">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
