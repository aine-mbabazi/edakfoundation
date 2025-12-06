"use client";

import React, { useState } from "react";
import {
  Award,
  DollarSign,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  CheckCircle,
  Target,
  Handshake
} from "lucide-react";

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState<number>(0);

  const programsData = [
    {
      title: "Economic Empowerment & Livelihoods",
      icon: <DollarSign size={40} className="text-[#4CAF50]" />,
      color: "text-[#4CAF50]",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      description:
        "Building capabilities for self-sustainability through skills training, income-generating projects, agricultural development, and support for entrepreneurs.",
      details: [
        "Skills Training for Self-Sustainability (paper bags, fiber huts, mats, sandals, shoes, clothes, baskets, beads, tailoring, hairdressing, home-based nursing care, bakery)",
        "Income Generating Projects (schools, hospitals, tourism, agro-value activities like grain milling, apiary, vegetable oil processing, goat farming, dairy farming, irrigation, poultry, cattle rearing, mobile money)",
        "Agricultural Development (modern farming methods, fruit canning, processing, general dealing in agricultural produce)",
        "Support for Entrepreneurs (sewing machines, community-based working units)",
        "Handicrafts and Artistic Materials Production (Karamojong handicrafts, paintings, drawings)",
        "Agro-Tourism (farm tours, showcasing farming techniques, selling local food and crafts)",
        "Safari Packages (to farms, poultry stations, livestock areas in Karamojong region)",
      ],
    },
    {
      title: "Education & Capacity Building",
      icon: <Lightbulb size={40} className="text-[#2196F3]" />,
      color: "text-[#2196F3]",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description:
        "Fostering knowledge and skills through vocational training, formal education support, adult literacy programs, and research.",
      details: [
        "Vocational and Practical Training (tailoring, carpentry, woodworks, commercial farming, construction, electrical, plumbing, driving, mechanics, phone/computer repair, design, art crafting)",
        "Formal Education Support (schools, teaching institutions, educational materials, classrooms, offices, latrines, toilets)",
        "Bursaries and School Fees for needy pupils",
        "Adult Literacy Programs",
        "Child Counseling & Family Life Education",
        "Career Guidance for Orphans and Vulnerable Children (OVCs)",
        "Research & Information Dissemination (education, capacity building, family/marriage issues, early pregnancy, orphans, school dropouts)",
      ],
    },
    {
      title: "Health & Social Welfare",
      icon: <Heart size={40} className="text-[#FFC107]" />,
      color: "text-[#FFC107]",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      description:
        "Promoting well-being through community health initiatives, HIV/AIDS support, orphan care, elderly assistance, and water & sanitation projects.",
      details: [
        "Community Health Promotion (awareness, formal/informal education, literacy campaigns, community-based healthcare, public health systems)",
        "HIV/AIDS Awareness & Support (counseling, ARVs, anti-discrimination)",
        "Orphanage Establishment",
        "Elderly Support (food, water, clothes, medical help, shelter)",
        "Water & Sanitation (access to clean water, water pumps, boreholes, dams, ponds)",
        "Gender-Based Violence Prevention (sensitization, empowerment of women/girls, community forums, family courts)",
        "Equality Across Society (healthcare, environment, education, technology, access for disabled)",
      ],
    },
    {
      title: "Cultural Preservation & Promotion",
      icon: <Globe size={40} className="text-[#4CAF50]" />,
      color: "text-[#4CAF50]",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description:
        "Celebrating and preserving Ugandan heritage through cultural activities, exhibitions, and traditional arts promotion.",
      details: [
        "Karamojong Cultural Activities (traditional arts, cinema, theatre, dance, visual, literary, architecture, performing arts)",
        "Cultural Exchange & Exhibitions",
        "Cultural Information Center",
        "Traditional Entertainment (music shows, funfairs, circuses, exhibitions, games, concerts, weddings)",
        "Printing & Publishing (cultural/traditional literature, seminars, workshops)",
        "Arts and Aesthetics Display (music, dance, poetry, sculpture, painting of African decency)",
      ],
    },
    {
      title: "Environmental Conservation",
      icon: <Leaf size={40} className="text-[#2196F3]" />,
      color: "text-[#2196F3]",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description:
        "Protecting our planet through environmental education, awareness campaigns, and sustainable resource management.",
      details: [
        "Environmental Education (tree planting, seed conservation, nurseries, seminars, conferences)",
        "Awareness Campaigns (radio talk shows, brochures, leaflets)",
        "Integration into Development (environmental considerations into policies/plans)",
        "Research & Monitoring (environmental findings, financial/human resources)",
        "Accident Prevention (safeguards for environmental degradation)",
      ],
    },
    {
      title: "Peace & Leadership Development",
      icon: <Award size={40} className="text-[#FFC107]" />,
      color: "text-[#FFC107]",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      description:
        "Fostering harmony and empowering future leaders through peace initiatives and leadership training.",
      details: [
        "Peace Initiatives (reducing violent tribal, cultural, gender-based conflicts)",
        "Leadership Empowerment (involving women, youth, OVCs in leadership positions, project management training)",
      ],
    },
  ];

  return (
    <section id="programs" className="relative  overflow-hidden bg-white ">
      {/* Background Pattern */}
      <div className="absolute inset-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-2">
        
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Programs
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6 mt-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to empower communities, preserve culture, 
            and foster sustainable development in Karamoja.
          </p>
        </div>

        {/* Program Navigation - Tab Style */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 ">
            {programsData.map((program, index) => (
              <button
                key={index}
                onClick={() => setActiveProgram(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeProgram === index
                    ? `${program.bgColor} ${program.color} border-2 ${program.borderColor} shadow-lg`
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:shadow-md"
                }`}
              >
                <div className={`p-2 rounded-lg ${activeProgram === index ? 'bg-white/80' : 'bg-gray-100'}`}>
                  {program.icon}
                </div>
                <span className="text-lg font-semibold">{program.title}</span>
              </button>
            ))}
          </div>

          {/* Active Program Display */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl ${programsData[activeProgram].bgColor} mr-6`}>
                  <div className={`${programsData[activeProgram].color}`}>
                    {programsData[activeProgram].icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {programsData[activeProgram].title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Transforming communities through dedicated initiatives
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Program Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Overview
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {programsData[activeProgram].description}
                  </p>
                  
                  {/* Dynamic Impact Focus Section */}
                  <div className={`bg-gradient-to-br ${programsData[activeProgram].bgColor} rounded-xl p-6 border ${programsData[activeProgram].borderColor}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Handshake className={`w-6 h-6 ${programsData[activeProgram].color}`} />
                      <h4 className="text-xl font-bold text-gray-900">Impact Focus</h4>
                    </div>
                    <p className="text-gray-700">
                      This program focuses on creating sustainable, long-term impact through 
                      community engagement, skill development, and resource empowerment.
                    </p>
                  </div>
                </div>

                {/* Program Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Key Activities
                  </h3>
                  <div className="space-y-4">
                    {programsData[activeProgram].details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                      >
                        <CheckCircle className={`w-5 h-5 mt-1 flex-shrink-0 ${programsData[activeProgram].color}`} />
                        <span className="text-gray-800 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;