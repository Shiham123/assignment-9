import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const PerService = (props) => {
  const { item } = props;
  const { id, name, image, price, description } = item;

  const sliceDescription = description.slice(0, 100);

  return (
    <div className="hover:scale-110 duration-500">
      <Card className="lg:w-96 md:w-64 bg-colorOne text-fontColor m-auto text-center">
        <CardHeader className="relative h-56">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 font-inter">
            {name}
          </Typography>
          <Typography variant="h5" className="mb-2 font-inter">
            Price: ${price}
          </Typography>
          <Typography className="font-inter">{sliceDescription}...</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/details/${id}`}>
            <button
              className="py-6 px-10 text-white text-[24px] leading-[26px] font-medium rounded-lg capitalize"
              style={{
                background: 'linear-gradient(97deg, #FF9A63 0%, #FE804B 100%)',
              }}
            >
              Show more details
            </button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PerService;
