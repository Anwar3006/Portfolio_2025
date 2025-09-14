import { useState } from "react";

const OptimizedMedia = ({ src, alt, width, height, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const extension = src.split(".").pop().toLowerCase();
  const mediaType = extension === "mp4" ? "video" : "image";
  const cloudinaryUrl = `https://res.cloudinary.com/daffqurhi/${mediaType}/upload/f_auto,q_auto,c_scale/portfolio_2025/${src}`;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
        </div>
      )}

      {/* Actual media - FIXED: Correct conditional rendering */}
      {!hasError &&
        (extension === "mp4" ? (
          <video
            src={cloudinaryUrl}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={handleLoad}
            onError={handleError}
          />
        ) : (
          <img
            src={cloudinaryUrl}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
          />
        ))}

      {/* Error fallback */}
      {hasError && (
        <div
          className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400"
          style={{ width, height }}
        >
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-gray-300 rounded"></div>
            <p className="text-xs">Media not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedMedia;
