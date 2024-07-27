import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrow from "../../../assets/Arrow.png";
import testimonia1 from "../../../assets/testimonia1.png";
import rating from "../../../assets/fullstars.png";

const Testimonial = () => {
  const firstSwiperRef = useRef(null);
  const secondSwiperRef = useRef(null);

  useEffect(() => {
    if (firstSwiperRef.current && secondSwiperRef.current) {
      const firstSwiper = firstSwiperRef.current.swiper;
      const secondSwiper = secondSwiperRef.current.swiper;

      // Ensure the event is only added once
      firstSwiper.on("slideChange", () => {
        secondSwiper.slideTo(firstSwiper.activeIndex);
      });

      // Cleanup event listener on unmount
      return () => {
        firstSwiper.off("slideChange");
      };
    }
  }, [firstSwiperRef, secondSwiperRef]);

  return (
    <section className="container my-12 m-auto py-8 px-4">
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <p className="flex items-center gap-8 w-[50%] font-semibold text-text-color my-6">
            <span className="border-2 border-bg-gray w-[25%] h-1"></span>
            TESTIMONIAL
          </p>
          <h1 className="text-5xl font-bold text-text-blue mb-6">
            What They Say?
          </h1>
          <p className="text-text-color text-xl w-[60%] my-4">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p className="text-text-color text-xl w-[60%] my-4">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="text-text-color text-xl w-[60%] my-4">
            Are you too? Please give your assessment
          </p>
          <div className="border border-primary flex items-center justify-end w-[40%] my-6 rounded-full gap-5">
            <p className="w-[60%]">Write your assessment</p>
            <div className="border border-primary rounded-full flex items-center justify-center w-[25%] h-[60px]">
              <img src={arrow} alt="arrow icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 w-[30%] border h-[500px] relative">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper6"
            ref={secondSwiperRef}
          >
            <SwiperSlide>
              <div>
                <img src={testimonia1} alt="testimonial" className="w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>

          <div className=" absolute  w-[100%] h-[60%] -bottom-[200px] -right-[120px] ">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper p-12 swiper-text-container"
              ref={firstSwiperRef}
            >
              <SwiperSlide>
                <div>
                  <div>
                    <p className="text-text-color text-left">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate quae quisquam enim aliquid amet sunt aspernatur
                      possimus nisi quasi dignissimos ipsa quidem ullam tempora
                      atque, hic vero architecto, tempore at?
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <p className="text-text-color text-left">name </p>
                    <img src={rating} alt="" className="w-[20px]" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
