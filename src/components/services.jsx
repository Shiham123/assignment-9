import PerService from './perService';

const Services = (props) => {
  const { data } = props;

  return (
    <div
      className="bg-[#183282] text-white max-w-full rounded-t-[100px] rounded-b-[100px] py-32"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div className="flex justify-center items-center py-20">
        <h1 className="text-[40px] md:text-[50px] lg:text-[58px] leading-[68px] font-semibold font-inter border-b-[1px] border-white py-4">
          Our services
        </h1>
      </div>

      {/* ------------------ */}

      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-20 md:gap-14 lg:gap-28 lg:grid lg:grid-cols-3 px-4 md:px-4 lg:px-20">
        {data.map((item, index) => {
          return <PerService key={index} item={item}></PerService>;
        })}
      </div>
    </div>
  );
};

export default Services;
