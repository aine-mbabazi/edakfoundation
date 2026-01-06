

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0,
    3: 0
  });

  // Team members data
  const teamMembers = [
     {
      name: "Christine Rugasira Athiyo",
      position: "Patron",
      photo: "/media/edak-patron.jpeg"
    },
    {
      name: "Judith Lorika",
      position: "Director - Cultural Tourism and Social impact development",
      photo: "/media/edak-director-culture.jpeg"
    },
    {
      name: "Caroline Athiyo",
      position: "Director-outreach",
      photo: "/media/edak-Director-carol.jpeg"
    },
    {
      name: "Ronald Athiyo",
      position: "Programs Director",
      photo: "/media/edak-programs-director.jpeg"
    },
    {
      name: "Sheila Athiyo",
      position: "Community Project Manager",
      photo: "/media/shiela-edak.jpeg"
    },
    {
      name: "Jordan Longolio Mwaura",
      position: "Partnernsthips Coordinator",
      photo: "/media/jordanloriko.jpeg"
    },
    
    {
      name: "Janelle Lorika Mwaura",
      position: "Youth Programs Coordinator",
      photo: "/media/edak-youth-programs.jpeg"
    },
    
   
  ];

  // Impact categories with multiple images for slideshow
  const impactCategories = [
    {
      images: [
        "/media/communityengagement1.jpeg",
        "/media/community2.jpeg",
        "/media/comunity3.jpeg"
      ],
      alt: "Education Programs",
      title: "Education",
      description: "Empowering through knowledge and learning",
    },
    {
      images: [
        "/media/community2.jpeg",
        "/media/cultural_tourism_2.jpeg",
        "/media/cultural_tourism_3.jpeg"
      ],
      alt: "Cultural Tourism Programs",
      title: "Cultural Tourism",
      description: "Celebrating heritage and connecting communities through authentic cultural experiences",
    },
    {
      images: [
        "/media/comunity3.jpeg",
        "/media/sustainable_farming_2.png",
        "/media/sustainable_agriculture.png"
      ],
      alt: "Agriculture Programs",
      title: "Agriculture",
      description: "Sustainable farming for the future",
    },
    {
      images: [
        "/media/gyw.jpeg",
        "/media/edakbeadmaking.jpeg",
        "/media/beadmaking.jpeg"
      ],
      alt: "Women & Youth Empowerment",
      title: "Empowerment",
      description: "Uplifting women and youth",
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides(prev => {
        const newSlides = { ...prev };
        Object.keys(newSlides).forEach(key => {
          const index = parseInt(key);
          newSlides[index] = (newSlides[index] + 1) % impactCategories[index].images.length;
        });
        return newSlides;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen bg-white relative ">
      <div className="relative z-10">
        {/* Hero Header */}
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat text-gray-900">
              Edward Athiyo Foundation
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-700">
              Empowering Communities, Transforming Lives
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Mission & Vision Side-by-Side Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full">
                  <div className="flex items-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 font-montserrat">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To empower vulnerable communities in Nakale, Karamoja, particularly women, youth, orphans, and the less advantaged, through holistic development initiatives in education, health, sustainable agriculture, cultural preservation, and economic empowerment, fostering self-reliance and a brighter future.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full">
                  <div className="flex items-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 font-montserrat">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A self-reliant, vibrant, and empowered Nakale society where every individual, regardless of their background, has the opportunity to thrive and contribute to sustainable development.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Story Section */}
            <div className="relative bg-gradient-to-r from-yellow-700 to-green-700 rounded-3xl overflow-hidden">
              <div className="relative z-10 p-8 md:p-12">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center mb-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg mr-4">
                      2019
                    </div>
                    <h3 className="text-3xl font-bold text-black font-montserrat">Our Story</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    The Edward Athiyo Foundation was established in 2019 following the passing of Edward Lorika Athiyo, a prominent figure in Karamoja and Ugandan history, in July of that year. The Foundation aims to empower, train, guide, and preserve the Karamojong people in Nakale, improving their living conditions and honouring the legacy of the late Edward Lorika Athiyo.
                  </p>
                </div>
              </div>
              {/* Pattern overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                  backgroundSize: '60px 60px'
                }}
              ></div>
            </div>
          </div>

          {/* Our Team - Card Layout */}
          <div className="mb-6">
            <div className="text-center mb-8">
              <h3 className="text-5xl font-bold text-gray-900 font-montserrat mb-4">Meet Our Team</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative h-full"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="bg-white rounded-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col shadow-lg hover:shadow-2xl">
                    {/* Photo */}
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-orange-200 to-amber-200">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "https://placehold.co/800x800/FED7AA/EA580C?text=Team+Member";
                        }}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
                          hoveredMember === index ? 'opacity-60' : 'opacity-40'
                        }`}
                      ></div>
                    </div>

                    {/* Info */}
                    <div className="p-6 bg-gradient-to-br from-white to-orange-50 flex-grow flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 font-montserrat mb-2">
                          {member.name}
                        </h4>
                        <p className="text-base text-orange-600 font-semibold font-open-sans">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Impact */}
          <div className="w-full bg-white px-8 md:px-16 lg:px-20 py-16">
            <div className="text-center mb-4">
              <h3 className="text-5xl font-bold text-gray-900 font-montserrat mt-4">Our Impact</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-900 font-open-sans max-w-3xl mx-auto">
                Transforming lives through dedicated programs across education, health, agriculture, and community empowerment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20">
              {impactCategories.map((category, index) => {
                const currentSlide = activeSlides[index];
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="relative h-96">
                      {category.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`absolute inset-0 transition-opacity duration-700 ${
                            currentSlide === imgIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${category.alt} ${imgIndex + 1}`}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src =
                                'https://placehold.co/600x600/CCCCCC/333333?text=Image+Not+Found';
                            }}
                          />
                        </div>
                      ))}

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px] text-center">
                          <h4 className="text-2xl font-bold text-white font-montserrat mb-2">
                            {category.title}
                          </h4>
                          <p className="text-white/90 text-base font-open-sans mb-4">
                            {category.description}
                          </p>

                          <div className="flex justify-center gap-2 mt-2">
                            {category.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() =>
                                  setActiveSlides((prev) => ({ ...prev, [index]: imgIndex }))
                                }
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  currentSlide === imgIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;