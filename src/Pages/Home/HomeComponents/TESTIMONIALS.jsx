import React, { useEffect, useState } from "react";
import ShareTitle from "../../Shared/ShareTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = () => {
  const [testimonial, settestimoial] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settestimoial(data);
      });
  }, []);
  return (
    <div className="my-10">
      <section>
        <ShareTitle
          title={"TESTIMONIALS"}
          subtitle={"---What Our Clients Say---"}
        />
      </section>
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonial.map((review) => (
            <SwiperSlide>
              <div className="text-center flex flex-col justify-center gap-4 items-center">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaQuoteLeft className="text-4xl" />
                <p className="w-10/12 mx-auto">{review.details}</p>
                <h2 className=" text-yellow-600 font-bold">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default TESTIMONIALS;
