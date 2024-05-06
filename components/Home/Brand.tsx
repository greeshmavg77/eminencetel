import React from 'react';
import Image from 'next/image';

interface Brand {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const brandsData: Brand[] = [
  { src: "/brand/a.png", alt: 'a', width: 100, height: 100 },
  { src: '/brand/alcatel.png', alt: 'alcatel', width: 100, height: 100 },
  { src: '/brand/cisco.png', alt: 'cisco', width: 100, height: 100 },
  { src: '/brand/eric.png', alt: 'eric', width: 100, height: 100 },
  { src: '/brand/huawai.png', alt: 'huawai', width: 105, height: 100 },
  { src: "/brand/hkvision.png", alt: 'hkvision', width: 200, height: 200 },
  { src: "/brand/Nokia.png", alt: 'Nokia', width: 150, height: 100 },
  { src: "/brand/tata.png", alt: 'tata', width:250, height: 200 },
  { src: "/brand/ubique.png", alt: 'ubique', width: 100, height: 100 },
  { src: "/brand/vodofone.png", alt: 'vodofone', width: 100, height: 100 },
];

interface BrandsListProps {
  brands: Brand[];
  ariaHidden?: boolean;
}

const BrandsList: React.FC<BrandsListProps> = ({ brands, ariaHidden = false }) => (
  <ul className="brand_icon flex items-center p-5 flex-row justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden={ariaHidden}>
    {brands.map((brand) => (
      <li
        key={brand.alt}
        className="w-[95px] h-[35px] sm:w-[120px] sm:h-[44px] lg:w-[162px] lg:h-[50px] relative flex justify-center items-center"
      >
        <Image
          src={brand.src}
          alt={brand.alt}
          width={brand.width}
          height={brand.height}
          objectFit="contain"
        />
      </li>
    ))}
  </ul>
);

const Brands: React.FC = () => {
  return (
      <div className="w-full p-[5rem] inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <BrandsList brands={brandsData} />
      <BrandsList brands={brandsData} ariaHidden={true} />
    </div>
  );
};

export default Brands;