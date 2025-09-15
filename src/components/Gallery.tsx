import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeModal = () => {
    setIsFullViewOpen(false);
  };

  const openFullView = (index: number) => {
    setSelectedImageIndex(index);
    setIsFullViewOpen(true);
  };

  // Add keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isFullViewOpen) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullViewOpen]);

  return (
    <>
      {/* Responsive grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {images.slice(0, 12).map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3] group"
            onClick={() => openFullView(index)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover group-hover:opacity-70 transition-opacity"
            />
            {/* Hover text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                Click to preview
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full view modal */}
      {isFullViewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 w-full h-full overflow-hidden"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white p-2 hover:bg-white/20 rounded-full z-10"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>

          <div
            className="h-full w-full flex items-center justify-center px-2 sm:px-4 md:px-12 lg:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous button - outside image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="text-white p-1 sm:p-2 md:p-3 hover:bg-white/20 rounded-full mr-1 sm:mr-2 md:mr-4 lg:mr-8 z-10 flex-shrink-0"
            >
              <ChevronLeft size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>

            <div className="flex-1 max-w-[80vw] sm:max-w-[75vw] md:max-w-3xl lg:max-w-5xl max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] lg:max-h-[90vh] flex items-center justify-center overflow-hidden">
              <img
                src={images[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="text-white p-1 sm:p-2 md:p-3 hover:bg-white/20 rounded-full ml-1 sm:ml-2 md:ml-4 lg:ml-8 z-10 flex-shrink-0"
            >
              <ChevronRight size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white bg-black/50 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;