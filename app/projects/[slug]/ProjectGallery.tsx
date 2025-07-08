'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import getimageUrl from '@/utils/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaCircleChevronLeft , FaCircleChevronRight } from 'react-icons/fa6';

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export default function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (img: string) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 1 },
  });

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 keen-slider">
        {images.map((img, index) => (
          <div
            ref={sliderRef}
            key={index}
            aria-label='Project screenshot'
            tabIndex={0}
            className="keen-slider__slide relative w-full h-[250px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleOpen(img)}
          >
            <Image
              src={getimageUrl(img)}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
        >
          <FaCircleChevronLeft className="w-6 h-6" color={"purple"}/>
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
        >
          <FaCircleChevronRight className="w-6 h-6" color='purple'/>
        </button>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={getimageUrl(selectedImage)}
                alt="Project screenshot"
                fill
                className="object-contain rounded-xl"
              />
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm"
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
