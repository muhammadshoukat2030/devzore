import React, { useEffect, useState } from 'react';
import SectionTag from '../components/SectionTag';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Sohail Afridi",
      role: "Product Manager, Gulf Dunes 🇶🇦",
      content: "Devzore delivered a high-performance tourism platform that exceeded our expectations. Their attention to detail, UI/UX quality, and backend integration significantly improved our booking experience and customer satisfaction.",
      avatar: "SA",
      rating: 5
    },
    {
      name: "Hamza Khan",
      role: "Founder, HK Solutions 🇵🇰",
      content: "We needed a complete retail solution, and Devzore delivered perfectly. The POS system with billing automation and inventory tracking made our operations faster and more reliable.",
      avatar: "HK",
      rating: 5
    },
    {
      name: "Omar Al-Sayedi",
      role: " CEO, TechFlow QATAR 🇶🇦",
      content: "Professional team with strong React expertise. The platform was delivered on time with excellent performance and modern design. Highly recommended for serious businesses.",
      avatar: "OA",
      rating: 5
    },
    {
      name: "Zainab Malik",
      role: "Owner, Aroma Brew 🇵🇰",
      content: "Our coffee shop is now fully automated thanks to Devzore. Billing, stock management, and reporting are all smooth and efficient. Great experience overall.",
      avatar: "ZM",
      rating: 5
    },
    {
      name: "Ahmed Raza",
      role: "Food Delivery Business Owner UAE 🇦🇪",
      content: "Devzore developed a powerful and user-friendly food delivery website for our business. The platform is fast, easy to manage, and has significantly improved our order handling and customer experience.",
      avatar: "AR",
      rating: 5
    }
  ];

  // ✅ Screen detect
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerView = isDesktop ? 3 : 1;

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev >= reviews.length - cardsPerView ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <section id="testimonials" className="py-24 px-4 md:px-6 max-w-6xl mx-auto bg-[#050505]">

      {/* Heading */}
      <div className="text-center mb-16">
        {/* <SectionTag text="TESTIMONIALS" /> */}
         <h2 className='inline-block px-3 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-4'>Client Results & Testimonials</h2>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
          What Our Clients Say About Devzore
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We help businesses grow with powerful web applications, modern UI/UX,
          and smart automation systems. Here’s what our clients say about working with us.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${(current * 100) / cardsPerView}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="px-4 flex-shrink-0 w-full md:w-1/3"
            >
              <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-lg text-center h-full">

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>

                <p className="text-gray-300 italic mb-6 text-sm md:text-base leading-relaxed">
                  "{review.content}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 font-bold">
                    {review.avatar}
                  </div>
                  <h4 className="text-white font-bold mt-3 text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: reviews.length - cardsPerView + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-purple-500" : "bg-gray-500"
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Testimonials;