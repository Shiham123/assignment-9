import { useLoaderData } from 'react-router-dom';
import AboutUs from '../components/about';
import Banner from '../components/banner';
import Faq from '../components/faq';
import Footer from '../components/footer';
import Services from '../components/services';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState([]);
  const loadData = useLoaderData();

  useEffect(() => {
    setData(loadData);
  }, [loadData]);

  return (
    <div className="font-inter">
      <Banner />
      <Services data={data} />
      <AboutUs />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
