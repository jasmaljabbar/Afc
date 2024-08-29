import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shahina",
    image: "https://cdn-icons-png.freepik.com/256/16321/16321686.png",
    description:
      "Good morning! When I joined the 15-day weight loss program, my weight had been stuck for quite some time. But with Ashmi's motivation and by changing my diet, I finally broke through that plateau and lost 2kg. I'm so thankful to Ashmi for helping me get past that stuck point. Out of the 15 days, I was able to work out and walk correctly for about 10 days despite being busy, and I'm thrilled with the results I've achieved. Now, I've become a bit fitter, and I've seen changes in my body measurements as well. I can't thank Ashmi enough! I plan to rejoin and continue until I reach my ideal weight. Thank you, thank you, thank you, Ashmi, and Alhamdulillah!",
  },
  {
    id: 2,
    name: "Neethu",
    image: "https://cdn-icons-png.freepik.com/256/16321/16321686.png",
    description:
      "Hey, good morning! It's been 15 days since I joined the weight loss program, and I've lost almost 3kg! It's really a great thing because I honestly didn't expect to lose even 1kg. I used to think that losing weight wasn't possible for me, but now I've lost 3kg, and I've seen significant changes in my body. Clothes that were tight are now loose. Things are getting much better. Anyway, a huge thank you to Ashmitha! It's because of your motivation and monitoring that I've been able to take my diet, workout, and walking so seriously. If I had to do this alone, I would never have put in this much effort. Joining this program has brought about such a big change in my body, and I'm happy and more than satisfied. Inshallah, I'm expecting great results in the next 15 days as well.",
  },
  {
    id: 3,
    name: "Amana",
    image: "https://cdn-icons-png.freepik.com/256/16321/16321686.png",
    description:
      "Hi... When I started this weight loss journey, my weight was 79.600 kg, and after 15 days, it's now 76.400 kg, Mashallah. All the credit goes to Ashmi; she is truly someone we'll always remember in our lives. I've also lost 2-3 inches. Inshaallah, I've rejoined the program, and my next goal is to reach my ideal weight. Alhamdulillah, I'm happy—both physically and mentally, I've experienced a lot of positive changes since joining. When sending a voice message, it's easy to say things quickly, but it's not always easy to convey everything properly.",
  }
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id='testimonial'
      className="max-w-full min-h-[75vh] flex items-center px-[10%] bg-white mx-auto  py-8 relative "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="w-16 h-16 rounded-full mr-4 border-4 border-blue-600"
            />
            <h3 className="text-xl font-semibold text-blue-600">
              {testimonials[currentSlide].name}
            </h3>
          </div>
          <p className={`text-gray-700 ${isExpanded ? "" : "line-clamp-4"}`}>
            {testimonials[currentSlide].description}
          </p>
          {testimonials[currentSlide].description.length > 250 && (
            <button
              onClick={toggleExpand}
              className="text-blue-600 hover:underline mt-2 focus:outline-none"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-20 md:block  hidden transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-20  md:block  hidden transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default TestimonialSlider;
