
// "use client";


// const About = () => {
//     return (
//       <section id="about" className="py-16 bg-white rounded-xl shadow-inner mt-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 font-montserrat">
//             About Edward Athiyo Foundation Limited
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="lg:pr-8">
//               <h3 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Our Mission</h3>
//               <p className="text-gray-700 leading-relaxed text-lg mb-8 font-open-sans">
//                 To empower vulnerable communities in Uganda, particularly women, youth, orphans, and the less advantaged, through holistic development initiatives in education, health, sustainable agriculture, cultural preservation, and economic empowerment, fostering self-reliance and a brighter future.
//               </p>
//               <h3 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Our Vision</h3>
//               <p className="text-gray-700 leading-relaxed text-lg font-open-sans">
//                 A self-reliant, vibrant, and empowered Ugandan society where every individual, regardless of their background, has the opportunity to thrive and contribute to sustainable development.
//               </p>
//             </div>
//             <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
//               <img
//                 src="https://placehold.co/800x600/2196F3/FFFFFF?text=Our+Impact+in+Uganda"
//                 alt="Our Impact in Uganda"
//                 className="w-full h-auto object-cover rounded-xl"
//                 onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
//                   const target = e.target as HTMLImageElement;
//                   target.onerror = null; 
//                   target.src = "https://placehold.co/800x600/CCCCCC/333333?text=Image+Not+Found"; 
//                 }}
//               />
//                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-xl"></div>
//                <div className="absolute bottom-4 left-4 text-white text-xl font-bold font-montserrat">Making a Difference</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

// export default About;


// "use client";

// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const About = () => {
//   //  images for slide show
//   const impactImages = [
//     {
//       src: "/media/communityengagement1.jpeg",
//       alt: "Education Programs in Nakale, Karamoja",
//       caption: "Empowering Through Education"
//     },
//     {
//       src: "/media/community2.jpeg",
//       alt: "Community Initiatives",
//       caption: "Improving Community "
//     },
//     {
//       src: "/media/comunity3.jpeg",
//       alt: "Sustainable Agriculture Training",
//       caption: "Sustainable Agriculture Programs"
//     },
//     {
//       src: "/media/gyw.jpeg",
//       alt: "Women Empowerment Programs",
//       caption: "Empowering Women & Youth"
//     },
//     // {
//     //   src: "https://placehold.co/800x600/F44336/FFFFFF?text=Community+Development",
//     //   alt: "Community Development Projects",
//     //   caption: "Building Stronger Communities"
//     // }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   // Auto-advance slides
//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % impactImages.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, impactImages.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % impactImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + impactImages.length) % impactImages.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="about" className="py-16 bg-white rounded-xl shadow-inner mt-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 font-montserrat">
//           About Edward Athiyo Foundation Limited
//         </h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="lg:pr-8">
//             <h3 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Our Mission</h3>
//             <p className="text-gray-700 leading-relaxed text-lg mb-8 font-open-sans">
//               To empower vulnerable communities in Uganda, particularly women, youth, orphans, and the less advantaged, through holistic development initiatives in education, health, sustainable agriculture, cultural preservation, and economic empowerment, fostering self-reliance and a brighter future.
//             </p>
//             <h3 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Our Vision</h3>
//             <p className="text-gray-700 leading-relaxed text-lg font-open-sans">
//               A self-reliant, vibrant, and empowered Ugandan society where every individual, regardless of their background, has the opportunity to thrive and contribute to sustainable development.
//             </p>
//           </div>
          
//           {/* Slideshow Section */}
//           <div className="relative rounded-xl overflow-hidden shadow-xl">
//             <div 
//               className="relative w-full h-96 group"
//               onMouseEnter={() => setIsAutoPlaying(false)}
//               onMouseLeave={() => setIsAutoPlaying(true)}
//             >
//               {/* Main Image */}
//               <div className="relative w-full h-full overflow-hidden rounded-xl">
//                 <img
//                   src={impactImages[currentSlide].src}
//                   alt={impactImages[currentSlide].alt}
//                   className="w-full h-full object-cover transition-all duration-500 ease-in-out"
//                   onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
//                     const target = e.target as HTMLImageElement;
//                     target.onerror = null; 
//                     target.src = "https://placehold.co/800x600/CCCCCC/333333?text=Image+Not+Found"; 
//                   }}
//                 />
                
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-xl"></div>
                
//                 {/* Caption */}
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <h4 className="text-xl font-bold font-montserrat">{impactImages[currentSlide].caption}</h4>
//                 </div>
//               </div>

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft size={24} />
//               </button>
              
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
//                 aria-label="Next image"
//               >
//                 <ChevronRight size={24} />
//               </button>

//               {/* Slide Indicators */}
//               <div className="absolute bottom-4 right-4 flex space-x-2">
//                 {impactImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                       index === currentSlide 
//                         ? 'bg-white' 
//                         : 'bg-white bg-opacity-50 hover:bg-opacity-75'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               {/* Slide Counter */}
//               <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-montserrat">
//                 {currentSlide + 1} / {impactImages.length}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  //  images for slide show
  const impactImages = [
    {
      src: "/media/communityengagement1.jpeg",
      alt: "Education Programs in Nakale, Karamoja",
      caption: "Empowering Through Education"
    },
    {
      src: "/media/community2.jpeg",
      alt: "Community Initiatives",
      caption: "Improving Community Health"
    },
    {
      src: "/media/comunity3.jpeg",
      alt: "Sustainable Agriculture Training",
      caption: "Sustainable Agriculture Programs"
    },
    {
      src: "/media/gyw.jpeg",
      alt: "Women Empowerment Programs",
      caption: "Empowering Women & Youth"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % impactImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, impactImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % impactImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + impactImages.length) % impactImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16 font-montserrat">
          About Edward Athiyo Foundation Limited
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pr-12 space-y-10">
            {/* Mission Section */}
            <div className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-400">
              <h3 className="text-4xl font-bold text-gray-800 font-montserrat mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-xl font-open-sans">
                To empower vulnerable communities in Uganda, particularly women, youth, orphans, and the less advantaged, through holistic development initiatives in education, health, sustainable agriculture, cultural preservation, and economic empowerment, fostering self-reliance and a brighter future.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-gradient-to-br from-teal-100 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
              <h3 className="text-4xl font-bold text-gray-800 font-montserrat mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-xl font-open-sans">
                A self-reliant, vibrant, and empowered Ugandan society where every individual, regardless of their background, has the opportunity to thrive and contribute to sustainable development.
              </p>
            </div>
          </div>
          
          
          {/* Slideshow Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="relative w-full h-[500px] group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Main Image */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <img
                  src={impactImages[currentSlide].src}
                  alt={impactImages[currentSlide].alt}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = "https://placehold.co/800x600/CCCCCC/333333?text=Image+Not+Found"; 
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-2xl"></div>
                
                {/* Caption */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold font-montserrat">{impactImages[currentSlide].caption}</h4>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {impactImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="absolute top-6 right-6 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                {currentSlide + 1} / {impactImages.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;