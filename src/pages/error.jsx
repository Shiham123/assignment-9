import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="font-inter">
      <div className="hero min-h-screen bg-colorOne">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold font-inter uppercase my-4">
              this is error page
            </h1>
            <Link to="/">
              <button className="btn btn-primary">Back to home page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
