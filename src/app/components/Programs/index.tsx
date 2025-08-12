import { Award, BookOpen, DollarSign, Globe, Heart, Leaf, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Programs = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const programsData = [
    {
      title: 'Economic Empowerment & Livelihoods',
      icon: <DollarSign size={40} className="text-[#4CAF50]" />,
      description: 'Building capabilities for self-sustainability through skills training, income-generating projects, agricultural development, and support for entrepreneurs.',
      details: [
        'Skills Training for Self-Sustainability (paper bags, fiber huts, mats, sandals, shoes, clothes, baskets, beads, tailoring, hairdressing, home-based nursing care, bakery)',
        'Income Generating Projects (schools, hospitals, tourism, agro-value activities like grain milling, apiary, vegetable oil processing, goat farming, dairy farming, irrigation, poultry, cattle rearing, mobile money)',
        'Agricultural Development (modern farming methods, fruit canning, processing, general dealing in agricultural produce)',
        'Support for Entrepreneurs (sewing machines, community-based working units)',
        'Handicrafts and Artistic Materials Production (Karamojong handicrafts, paintings, drawings)',
        'Agro-Tourism (farm tours, showcasing farming techniques, selling local food and crafts)',
        'Safari Packages (to farms, poultry stations, livestock areas in Karamojong region)'
      ]
    },
    {
      title: 'Education & Capacity Building',
      icon: <Lightbulb size={40} className="text-[#2196F3]" />,
      description: 'Fostering knowledge and skills through vocational training, formal education support, adult literacy programs, and research.',
      details: [
        'Vocational and Practical Training (tailoring, carpentry, woodworks, commercial farming, construction, electrical, plumbing, driving, mechanics, phone/computer repair, design, art crafting)',
        'Formal Education Support (schools, teaching institutions, educational materials, classrooms, offices, latrines, toilets)',
        'Bursaries and School Fees for needy pupils',
        'Adult Literacy Programs',
        'Child Counseling & Family Life Education',
        'Career Guidance for Orphans and Vulnerable Children (OVCs)',
        'Research & Information Dissemination (education, capacity building, family/marriage issues, early pregnancy, orphans, school dropouts)'
      ]
    },
    {
      title: 'Health & Social Welfare',
      icon: <Heart size={40} className="text-[#FFC107]" />,
      description: 'Promoting well-being through community health initiatives, HIV/AIDS support, orphan care, elderly assistance, and water & sanitation projects.',
      details: [
        'Community Health Promotion (awareness, formal/informal education, literacy campaigns, community-based healthcare, public health systems)',
        'HIV/AIDS Awareness & Support (counseling, ARVs, anti-discrimination)',
        'Orphanage Establishment',
        'Elderly Support (food, water, clothes, medical help, shelter)',
        'Water & Sanitation (access to clean water, water pumps, boreholes, dams, ponds)',
        'Gender-Based Violence Prevention (sensitization, empowerment of women/girls, community forums, family courts)',
        'Equality Across Society (healthcare, environment, education, technology, access for disabled)'
      ]
    },
    {
      title: 'Cultural Preservation & Promotion',
      icon: <Globe size={40} className="text-[#4CAF50]" />,
      description: 'Celebrating and preserving Ugandan heritage through cultural activities, exhibitions, and traditional arts promotion.',
      details: [
        'Karamojong Cultural Activities (traditional arts, cinema, theatre, dance, visual, literary, architecture, performing arts)',
        'Cultural Exchange & Exhibitions',
        'Cultural Information Center',
        'Traditional Entertainment (music shows, funfairs, circuses, exhibitions, games, concerts, weddings)',
        'Printing & Publishing (cultural/traditional literature, seminars, workshops)',
        'Arts and Aesthetics Display (music, dance, poetry, sculpture, painting of African decency)'
      ]
    },
    {
      title: 'Environmental Conservation',
      icon: <Leaf size={40} className="text-[#2196F3]" />,
      description: 'Protecting our planet through environmental education, awareness campaigns, and sustainable resource management.',
      details: [
        'Environmental Education (tree planting, seed conservation, nurseries, seminars, conferences)',
        'Awareness Campaigns (radio talk shows, brochures, leaflets)',
        'Integration into Development (environmental considerations into policies/plans)',
        'Research & Monitoring (environmental findings, financial/human resources)',
        'Accident Prevention (safeguards for environmental degradation)'
      ]
    },
    {
      title: 'Peace & Leadership Development',
      icon: <Award size={40} className="text-[#FFC107]" />,
      description: 'Fostering harmony and empowering future leaders through peace initiatives and leadership training.',
      details: [
        'Peace Initiatives (reducing violent tribal, cultural, gender-based conflicts)',
        'Leadership Empowerment (involving women, youth, OVCs in leadership positions, project management training)'
      ]
    }
  ];

  return (
    <section id="programs" className="py-16 bg-[#F8F8F8] rounded-xl shadow-inner mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 font-montserrat">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index: number) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:shadow-xl border border-gray-200 ${
                expandedCards[index] ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 font-montserrat">{program.title}</h3>
              <p className="text-gray-600 mb-4 font-open-sans">{program.description}</p>
              
              {/* Learn More Button */}
              <button
                onClick={() => toggleCard(index)}
                className="flex items-center gap-2 text-[#4CAF50] hover:text-[#45a049] font-semibold transition-colors duration-200 mb-4"
              >
                {expandedCards[index] ? 'Show Less' : 'Learn More'}
                {expandedCards[index] ? 
                  <ChevronUp size={16} /> : 
                  <ChevronDown size={16} />
                }
              </button>

              {/* Expandable Details */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-4">
                  <ul className="text-left text-gray-700 text-sm list-disc list-inside space-y-2">
                    {program.details.map((detail: string, i: number) => (
                      <li key={i} className="leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;