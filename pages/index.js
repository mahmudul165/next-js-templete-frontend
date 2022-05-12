import Image from "next/image";
import styles from "../styles/Home.module.css";
import Meta from "../component/seo/Meta";
import Slider from "../component/home/Slider";
import Showcase from "../component/home/Showcase";
import ExploreMore from "../component/home/ExploreMore";
import Product from "../component/home/Product";
import Footer from "../component/layout/Footer";

function Home() {
  return (
    <>
      <Meta
        title="Arshi-365-ecommerce"
        keywords="ecommerce,product,sewrvices"
        description="Arshi-365-ecommerce cwsgeg gergerg gedgerg degersger egvvesrgeg gwergewgerwghergherh"
        image="test purpose"
      />
      <div className="container">
        <Slider />
        <Showcase />
        <ExploreMore />
        <Product />
        <Footer />
      </div>
    </>
  );
}
export default Home;
