'use client'; // 🔥 Required to ensure client-side rendering only

import Image from "next/image";
import dynamic from "next/dynamic";

// 👇 Dynamically import Gallery and Item, with SSR disabled
const Gallery = dynamic(() => import("react-photoswipe-gallery").then(mod => mod.Gallery), { ssr: false });
const Item = dynamic(() => import("react-photoswipe-gallery").then(mod => mod.Item), { ssr: false });

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        {images.length === 1 ? (
          <Item
            original={images[0]}
            thumbnail={images[0]}
            width="1000"
            height="600"
          >
            {({ ref, open }) => (
              <Image
                src={images[0]}
                alt=""
                ref={ref} 
                onClick={open}
                className="object-cover h-[400px] mx-auto rounded-xl"
                width={1800}
                height={400}
                priority={true}
              />
            )}
          </Item>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${
                  images.length === 3 && index === 2
                    ? "col-span-2"
                    : "col-span-1"
                }`}
              >
                <Item
                  original={image}
                  thumbnail={image}
                  width="1000"
                  height="600"
                >
                  {({ ref, open }) => (
                    <Image
                      src={image}
                      alt=""
                      ref={ref} 
                      onClick={open}
                      className="object-cover h-[400px] w-full rounded-xl"
                      width={1800}
                      height={400}
                      priority={true}
                    />
                  )}
                </Item>
              </div>
            ))}
          </div>
        )}
      </section>
    </Gallery>
  );
};

export default PropertyImages;
