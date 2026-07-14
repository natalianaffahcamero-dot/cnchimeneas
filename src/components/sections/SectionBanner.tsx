import { useEffect, useRef, useState } from "react";

interface SectionBannerProps {
  image: string;
  phrase: string;
  subphrase?: string;
}

const SectionBanner = ({ image, phrase, subphrase }: SectionBannerProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-[38vh] min-h-[240px] max-h-[400px] overflow-hidden"
      role="img"
      aria-label={phrase}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1200}
        height={608}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight drop-shadow-lg">
          {phrase}
        </h2>
        {subphrase && (
          <p className="mt-4 text-base md:text-lg lg:text-xl text-white/90 max-w-2xl drop-shadow-md">
            {subphrase}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionBanner;
