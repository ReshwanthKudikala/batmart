import { Fragment } from "react";
import Section from "../components/Section";
import { products } from "../utils/products";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  useWindowScrollToTop();
  return (
    <Fragment>
      <Section
        title="EXCITING OFFERS"
        bgColor="#f6f9fc"
        productItems={products}
      />
    </Fragment>
  );
};

export default Home;
