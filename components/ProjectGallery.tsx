'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { GalleryConfig, GalleryImage } from '@/lib/config';

interface ProjectGalleryProps {
  config?: GalleryConfig;
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
  initialDisplayCount?: number;
  id?: string;
}

export default function ProjectGallery({
  config,
  title = "Nos Réalisations",
  subtitle = "Découvrez quelques-uns de nos projets récents",
  images = [],
  initialDisplayCount = 4,
  id
}: ProjectGalleryProps) {
  // Use config values if provided, otherwise fall back to props or defaults
  const galleryTitle = config?.title || title;
  const gallerySubtitle = config?.subtitle || subtitle;
  const galleryImages = config?.images || images;
  const galleryInitialDisplayCount = config?.initialDisplayCount || initialDisplayCount;
  const [displayCount, setDisplayCount] = useState(galleryInitialDisplayCount);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedImages = galleryImages.slice(0, displayCount);
  const hasMoreImages = displayCount < galleryImages.length;
  const showingAll = displayCount >= galleryImages.length;

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    // Set initial slide after carousel is mounted
    setTimeout(() => {
      if (api) {
        api.scrollTo(index);
      }
    }, 50);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const showMoreImages = () => {
    setDisplayCount(galleryImages.length);
    setIsExpanded(true);
  };

  const showLessImages = () => {
    setDisplayCount(galleryInitialDisplayCount);
    setIsExpanded(false);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <section id={id} className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {galleryTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {gallerySubtitle}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20" />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="text-center mt-12 space-y-4">
            {hasMoreImages && (
              <div>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
                  onClick={showMoreImages}
                >
                  Voir plus de réalisations ({galleryImages.length - displayCount} restantes)
                </Button>
              </div>
            )}
            
            {showingAll && isExpanded && (
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 shadow-lg hover:shadow-xl"
                  onClick={showLessImages}
                >
                  Voir moins de photos
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black"
          onClick={closeLightbox}
        >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-30 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-white text-sm bg-black/70 px-4 py-2 rounded-full">
              {current} / {count}
            </div>

            {/* Carousel Container - Centrage vertical absolu */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Carousel 
                setApi={setApi}
                className="w-full h-full max-w-[95vw] max-h-[95vh]"
                opts={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  dragFree: false,
                  startIndex: selectedImageIndex,
                }}
              >
                <CarouselContent className="-ml-1 h-screen flex items-center">
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="h-screen flex items-center justify-center pl-0">
                      <div className="relative w-full h-full flex items-center justify-center p-4">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={800}
                          className="object-contain max-w-full max-h-[90vh] rounded-lg"
                          priority={index === current - 1}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation Arrows - Hidden on mobile */}
                <button
                  className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-200"
                  onClick={() => api?.scrollPrev()}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-200"
                  onClick={() => api?.scrollNext()}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Carousel>

            </div>
        </div>
      )}
    </>
  );
}
