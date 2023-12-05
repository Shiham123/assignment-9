import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const loadData = useLoaderData();

  const findData = loadData.find((item) => item.id == id);
  const { name, price, image, description } = findData;

  return (
    <div>
      {findData && (
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-inter text-5xl px-20 font-extrabold leading-[50px] text-fontColor mt-10">
            {name}
          </h1>
          <div className="w-full p-20 rounded-lg">
            <img src={image} alt="" className="w-full object-contain" />
          </div>
          <p className="p-20 text-3xl font-inter text-fontColor leading-10 font-bold">
            Price : ${price}
          </p>
          <p className="px-20 text-3xl font-inter text-fontColor leading-10 opacity-70">
            {description}
          </p>
          <Link to="/" className="my-20">
            <button
              className="py-6 px-10 mb-[10rem] text-white text-[24px] leading-[16px] font-medium rounded-lg capitalize hover:scale-110 duration-500"
              style={{
                background: 'linear-gradient(97deg, #FF9A63 0%, #FE804B 100%)',
              }}
            >
              Back to homePage
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Details;
