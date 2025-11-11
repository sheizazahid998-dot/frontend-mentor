import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import User1 from "../assets/images/user1.png";
import User2 from "../assets/images/user2.png";
import User3 from "../assets/images/user3.png";
import User4 from "../assets/images/user4.png";
import User5 from "../assets/images/user5.png";
import User6 from "../assets/images/user6.png";
import User7 from "../assets/images/user7.png";
import User8 from "../assets/images/user8.png";

const testimonials = [
  {
    desc: "This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instill accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.",
    img: User1,
    name: "Francesca",
    email: "@frrann",
  },
  {
    desc: "Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.",
    img: User2,
    name: "Alfie",
    email: "@alfiemitchell123",
  },
  {
    desc: "Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
    img: User3,
    name: "Hikmah",
    email: "@Hikmahx",
  },
  {
    desc: "Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.",
    img: User2,
    name: "Alfie",
    email: "@alfiemitchell123",
  },
  {
    desc: "Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
    img: User3,
    name: "Hikmah",
    email: "@Hikmahx",
  },
  {
    desc: "Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.",
    img: User4,
    name: "Nuel",
    email: "@ijklmopffs",
  },
  {
    desc: "Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
    img: User3,
    name: "Hikmah",
    email: "@Hikmahx",
  },
  {
    desc: "Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.",
    img: User4,
    name: "Nuel",
    email: "@ijklmopffs",
  },
  {
    desc: "After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn’t be where I am today without it.",
    img: User5,
    name: "Michelle",
    email: "@maberizk",
  },
  {
    desc: "Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.",
    img: User4,
    name: "Nuel",
    email: "@ijklmopffs",
  },
  {
    desc: "After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn’t be where I am today without it.",
    img: User5,
    name: "Michelle",
    email: "@maberizk",
  },
  {
    desc: "As a backend developer, I sought to improve my frontend skills. Frontend Mentor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can’t be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.",
    img: User6,
    name: "Arturo",
    email: "@artimys",
  },
  {
    desc: "After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn’t be where I am today without it.",
    img: User5,
    name: "Michelle",
    email: "@maberizk",
  },
  {
    desc: "As a backend developer, I sought to improve my frontend skills. Frontend Mentor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can’t be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.",
    img: User6,
    name: "Arturo",
    email: "@artimys",
  },
  {
    desc: "Frontend Mentor offers invaluable real-world web development challenges, sharpening my HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth. It’s both a skill-building platform and a community hub for web developers.",
    img: User7,
    name: "Shashikant",
    email: "@shashikantdev3",
  },
  {
    desc: "As a backend developer, I sought to improve my frontend skills. Frontend Mentor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can’t be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.",
    img: User6,
    name: "Arturo",
    email: "@artimys",
  },
  {
    desc: "Frontend Mentor offers invaluable real-world web development challenges, sharpening my HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth. It’s both a skill-building platform and a community hub for web developers.",
    img: User7,
    name: "Shashikant",
    email: "@shashikantdev3",
  },
  {
    desc: "I began my frontend journey with Frontend Mentor’s newbie challenges and progressed to more complex projects. Some of the complex ones are now even in my portfolio! The supportive community and the dedication of the Frontend Mentor team are unmatched. I highly recommend it for newcomers and those keen on improving their skills.",
    img: User8,
    name: "Marit",
    email: "@Maritxx",
  },
];
const BlogPosts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // ✅ Responsive cards per page
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 320 && width <= 597) {
        setCardsPerPage(1);
      } else if (width >= 598 && width <= 1022) {
        setCardsPerPage(2);
      } else if (width >= 1023 && width <= 1560) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(3); // fallback for very large screens
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <section className="w-full px-6 py-10 bg-gray-100 overflow-hidden">
        {/* Header */}
        <div className="container mx-auto max-w-7xl flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            A little ❤️ from our community
          </h2>

          <div className="flex items-center gap-5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition
                ${
                  currentIndex === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              <FaArrowLeft className="text-white text-3xl" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === totalPages - 1}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition
                ${
                  currentIndex === totalPages - 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              <FaArrowRight className="text-white text-3xl" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="container mx-auto max-w-7xl overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalPages)}%)`,
              width: `${totalPages * 100}%`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`w-full ${
                  cardsPerPage === 1
                    ? "sm:w-full"
                    : cardsPerPage === 2
                    ? "sm:w-1/2"
                    : "md:w-1/3"
                } bg-gray-50 rounded-2xl shadow-md p-10 flex flex-col justify-between`}
              >
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-gray-900 font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPosts;
