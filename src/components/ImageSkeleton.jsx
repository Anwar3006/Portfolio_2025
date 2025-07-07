import React from "react";

const ImageSkeleton = ({ classname }) => {
  return (
    <div className={`animate-pulse bg-gray-400 w-full h-full ${classname}`} />
  );
};

export default ImageSkeleton;
