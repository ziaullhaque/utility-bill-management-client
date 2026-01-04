import React from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import RecentBills from "../RecentBills/RecentBills";
import ExtraSection from "../ExtraSection/ExtraSection";
import Help from "../Help/Help";
import Testimonials from "../Testimonials/Testimonials";
import TestimonialsSlider from "../Testimonials/TestimonialsSlider";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <RecentBills></RecentBills>
      <ExtraSection></ExtraSection>
      {/* <Testimonials></Testimonials> */}
      <TestimonialsSlider></TestimonialsSlider>
      <Help></Help>
    </div>
  );
};

export default Home;
