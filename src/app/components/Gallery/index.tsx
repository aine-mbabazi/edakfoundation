import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  // Edward Athiyo Foundation gallery data - showcasing community impact
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "./media/beadmaking.jpeg",
      alt: "Beads",
      title: "Beaded Crafts",
      description: "A close-up shot of several handmade beaded bracelets and necklaces laid out on a white surface, showcasing colorful and intricate patterns. These are sold to increase income generation in the community",
      location: "Nakale, Karamoja",
      date: "September 2024",
      category: "Empowerment",
    },
    {
      id: 2,
      src: "./media/edakbeadmaking.jpeg",
      alt: "beadmaking process",
      title: "Young Girls and Women Empowerment",
      description: "A group of people, including girls, women and children, learning how to make beads as part of their empowerment process.",
      location: "Nakale, Karamoja",
      date: "August 2024",
      category: "Empowerment",
    },
    {
      id: 3,
      src: "./media/edakculuture.jpeg",
      alt: "Culture",
      title: "Back to the roots",
      description: "An elder in the community showing younger generations how some of the prominent traditional meals are prepared.",
      location: "Nakale, Karamoja",
      date: "October 2024",
      category: "Cultural Conservation",
    },
    {
      id: 4,
      src: "./media/communityengagement1.jpeg",
      alt: "learning business skills",
      title: "Economic Empowerment",
      description: "Inspired by Edward Athiyo's entrepreneurial spirit as a successful businessman, the community members are trained in business skills, saving habits and supporting them to start sustainable enterprises that benefit their families and communities.",
      location: "Nakale, Karamoja",
      date: "July 2024",
      category: "Economic Development",
    },
    {
      id: 5,
      src: "./media/community2.jpeg",
      alt: "Farmers with improved crops",
      title: "Climate-Smart Agriculture",
      description: "Building on Edward Athiyo's agricultural background, our program introduces drought-resistant crops and modern farming techniques to help communities adapt to climate change while maintaining food security.",
      location: "Karamoja Sub-region",
      date: "June 2024",
      category: "Agriculture",
    },
    {
      id: 6,
      src: "./media/comunity3.jpeg",
      alt: "Youth in technical training",
      title: "Youth Skills Development",
      description: "Recognizing Edward Athiyo's belief in education and progress, community engagements to train and equip young people with marketable skills.",
      location: "Nakale, Karamoja",
      date: "November 2024",
      category: "Community Impact",
    }
  ];

  const openModal = (item: GalleryItem, index: number): void => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'next' | 'prev'): void => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryItems.length
      : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  const toggleLike = (id: number): void => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedImages(newLiked);
  };

  const handleShare = async (item: GalleryItem): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Edward Athiyo Foundation</h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Continuing the legacy of Edward Athiyo - pioneering leader, educator, and champion of development in Karamoja. 
            Our foundation works to transform communities through education, healthcare, and sustainable development.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Empowerment</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Cultural Conservation</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Agriculture</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Economic Development</span>
            <span className="px bunch-3 py-1 bg-orange-100 text-orange-800 rounded-full">Community Impact</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => openModal(item, index)}
                  loading="lazy"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      likedImages.has(item.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                    aria-label="Like image"
                  >
                    <Heart className={`w-4 h-4 ${likedImages.has(item.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleShare(item);
                    }}
                    className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white transition-colors"
                    aria-label="Share image"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openModal(item, index)}
                    className="px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-medium hover:bg-white transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    item.category === 'Education' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Healthcare' ? 'bg-red-100 text-red-800' :
                    item.category === 'Water & Sanitation' ? 'bg-cyan-100 text-cyan-800' :
                    item.category === 'Economic Development' ? 'bg-purple-100 text-purple-800' :
                    item.category === 'Agriculture' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl max-h-[90vh] gap-8">
                {/* Image */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>

                {/* Details Panel */}
                <div className="lg:w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:max-h-[70vh] lg:overflow-y-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 text-sm rounded-full font-medium mb-3 ${
                        selectedImage.category === 'Education' ? 'bg-blue-100 text-blue-800' :
                        selectedImage.category === 'Healthcare' ? 'bg-red-100 text-red-800' :
                        selectedImage.category === 'Water & Sanitation' ? 'bg-cyan-100 text-cyan-800' :
                        selectedImage.category === 'Economic Development' ? 'bg-purple-100 text-purple-800' :
                        selectedImage.category === 'Agriculture' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {selectedImage.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium text-gray-900">{selectedImage.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium text-gray-900">{selectedImage.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Impact:</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleLike(selectedImage.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                        likedImages.has(selectedImage.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedImages.has(selectedImage.id) ? 'fill-current' : ''}`} />
                      Like
                    </button>
                    <button
                      onClick={() => handleShare(selectedImage)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {currentIndex + 1} of {galleryItems.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;