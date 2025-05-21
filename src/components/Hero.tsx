'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const carouselImages = [
  {
    src: '/images/hero-soccer.jpg',
    alt: 'Professional football player in action'
  },
  {
    src: '/images/testimonial-1.jpg',
    alt: 'Football training session'
  },
  {
    src: '/images/testimonial-2.jpg',
    alt: 'Team practice'
  }
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, isPlaying]);

  // Pause autoplay on hover
  const handleMouseEnter = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Professional Football{' '}
                <span className="relative">
                  <span className="text-primary">Management</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Empowering athletes to reach their full potential through expert management,
                development programs, and professional opportunities.
              </p>
            </div>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Elite Training</h3>
                <p className="text-gray-600 text-sm leading-relaxed">World-class development programs tailored for excellence</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Pro Quality</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Professional standards and comprehensive support</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Pro Contracts</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Direct pathway to professional opportunities</p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-8 rounded-2xl mt-12 shadow-lg">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-sm font-medium text-white/90 tracking-wide">Players Signed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">92%</div>
                  <div className="text-sm font-medium text-white/90 tracking-wide">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-sm font-medium text-white/90 tracking-wide">Pro Clubs</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="embla overflow-hidden" 
                ref={emblaRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="embla__container flex">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative h-[600px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === selectedIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Carousel Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl inline-block">
                <p className="text-sm font-medium text-gray-800">Join the next generation of professional athletes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 