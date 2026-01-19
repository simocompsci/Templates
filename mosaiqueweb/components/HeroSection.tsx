import Image from 'next/image';


interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({
  title = "Pot Pourri",
  subtitle = "Guest Artists on the Block",
  imageSrc = "/hero-tiles-bg.jpg",
  imageAlt = "Decorative botanical tile patterns"
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-12 md:pb-16 lg:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-xs md:max-w-sm">
          <p className="text-white/90 text-xs md:text-sm font-light tracking-wide mb-2 md:mb-3">
            {subtitle}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors">
          <svg
            className="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
