import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-4 bg-[#ffece5] max-w-full px-20 py-2 mt-24">
          <div
            className="col-span-2"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h1 className="lg:text-[98px] md:text-[40px] text-[20px] text-fontColor font-extrabold leading-[-3px] font-inter">
              Health wise: Your Trusted Source for Wellness
            </h1>
            <p className="text-fontColor lg:text-[20px] md:text-[15px] text-[10px] leading-[30px] font-inter font-normal opacity-[0.8] my-8">
              Welcome to <span>Creative health website</span>, <br /> your
              comprehensive resource for all things health and wellness. <br />{' '}
              We are here to inspire, inform, <br /> and empower you on your
              journey to a healthier, <br /> happier life. <br />
            </p>
            <Link to="/contact">
              <button
                className="py-6 px-10 mb-[10rem] text-white text-[24px] leading-[16px] font-medium rounded-lg capitalize"
                style={{
                  background:
                    'linear-gradient(97deg, #FF9A63 0%, #FE804B 100%)',
                }}
              >
                About us
              </button>
            </Link>
          </div>
          <div
            className="flex justify-center items-center col-span-2"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/d4b50ab27064b93cd2e73a48c381d4724c56a23e/DrawKit%20Vector%20Illustration%20Health%20%26%20Medical%20(6).svg"
              className="lg:w-8/12"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      {/* slider two */}
      <SwiperSlide>
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-4 bg-[#ffece5] max-w-full  px-20 py-2 mt-10">
          <div
            className="col-span-2"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h1 className="lg:text-[98px] md:text-[40px] text-[20px] text-fontColor font-extrabold leading-[-3px] font-inter">
              Your Reliable Resource for Health and Well-Being
            </h1>
            <p className="text-fontColor lg:text-[20px] md:text-[15px] text-[10px] leading-[30px] font-inter font-normal opacity-[0.8] my-8">
              WellnessWatch is your go-to destination for trusted health and
              wellness information. <br />
              <br /> We provide expert insights, tips, and resources to help you
              make informed decisions and prioritize your well-being. <br />
              <br /> Stay up-to-date with the latest in health trends and
              guidance on your journey to a healthier you.
            </p>
            <Link to="/contact">
              <button
                className="py-6 px-10 mb-[10rem] text-white text-[24px] leading-[16px] font-medium rounded-lg capitalize"
                style={{
                  background:
                    'linear-gradient(97deg, #FF9A63 0%, #FE804B 100%)',
                }}
              >
                About us
              </button>
            </Link>
          </div>
          <div
            className="flex justify-center items-center col-span-2"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/4008cd9554001ea7acd4478ee3521b2ff92f6ede/SVG/DrawKit%20Vector%20Illustration%20Health%20%26%20Medical%20(1).svg"
              className="lg:w-8/12"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide three */}
      <SwiperSlide>
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-4 bg-[#ffece5] max-w-full  px-20 py-2 mt-32">
          <div
            className="col-span-2"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h1 className="lg:text-[98px] md:text-[40px] text-[20px] text-fontColor font-extrabold leading-[-3px] font-inter">
              Your Premier Wellness Partner
            </h1>
            <p className="text-fontColor lg:text-[20px] md:text-[15px] text-[10px] leading-[30px] font-inter font-normal opacity-[0.8] my-8">
              We offer expert advice, the latest health insights, and a wide
              range of resources to support your journey toward a healthier and
              happier life.
              <br />
              <br /> Whether you're looking for tips on nutrition, fitness,
              mental health, or preventive care, HealthLink is here to guide you
              every step of the way.
              <br />
            </p>
            <Link to="/contact">
              <button
                className="py-6 px-10 mb-[10rem] text-white text-[24px] leading-[16px] font-medium rounded-lg capitalize"
                style={{
                  background:
                    'linear-gradient(97deg, #FF9A63 0%, #FE804B 100%)',
                }}
              >
                About us
              </button>
            </Link>
          </div>
          <div
            className="flex justify-center items-center col-span-2"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              src="https://raw.githubusercontent.com/Shiham123/img-for-creative/4008cd9554001ea7acd4478ee3521b2ff92f6ede/SVG/DrawKit%20Vector%20Illustration%20Health%20%26%20Medical%20(5).svg"
              className="lg:w-8/12"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
