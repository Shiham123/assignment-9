import { Typography } from '@material-tailwind/react';

const Footer = () => {
  return (
    <div className="bg-fontColor px-20 py-20">
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between border-none hover:bg-colorOne px-4 rounded-lg duration-200">
        <Typography className="font-normal text-white flex flex-row-reverse justify-center items-center gap-4">
          <span className="font-inter font-bold leading-10 hover:text-fontActive duration-200">
            Humanity health community
          </span>
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/ogg.jpg"
            className="border rounded-full"
            width="100px"
            alt=""
          />
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography className="text-white hover:text-fontActive duration-200">
              About Us
            </Typography>
          </li>
          <li>
            <Typography className="text-white hover:text-fontActive duration-200">
              License
            </Typography>
          </li>
          <li>
            <Typography className="text-white hover:text-fontActive duration-200">
              Contribute
            </Typography>
          </li>
          <li>
            <Typography className="text-white hover:text-fontActive duration-200">
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
