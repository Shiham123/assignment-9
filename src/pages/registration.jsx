import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import swal from 'sweetalert';

import { AppContext } from '../context/context';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AppContext);
  const { createUserEmailPassword, profileUpdate } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');
    const nameValue = formData.get('name');
    const urlValue = formData.get('url');

    let passwordError = null;

    if (passwordValue.length < 7) {
      toast('password must be 7 characters');
      passwordError = true;
    }

    if (!/[A-Z]/.test(passwordValue)) {
      toast('password must contain at least one capital');
      passwordError = true;
    }

    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(passwordValue)) {
      toast('password must contain special character');
      passwordError = true;
    }

    if (passwordError) {
      console.log(passwordError);
      return;
    }

    createUserEmailPassword(emailValue, passwordValue)
      .then((result) => {
        profileUpdate(nameValue, urlValue)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));

        console.log(result.user);
        navigate('/');
        swal({
          text: 'User created successfully',
          icon: 'success',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center my-20 h-full">
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Registration
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="User name"
              size="lg"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Photo url"
              size="lg"
              name="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Input
              label="Email"
              size="lg"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              size="lg"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit">
              Register
            </Button>

            <Typography variant="small" className="mt-6 flex justify-center">
              have an account?
              <Link to="/login">
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Log In
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default RegistrationPage;
