"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

function ProductImages({ images }: ProductImagesProps) {
  const [current, setCurrent] = useState<number>(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product-images"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "hover: mr-2 cursor-pointer border-orange-600 hover:border",
              current === index && "border-orange-500",
            )}
          >
            <Image src={image} alt="image-selector" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
