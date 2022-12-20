import Image from "next/image";

interface LogoType {
  image: string;
  alt: string;
}
const logos: LogoType[] = [
  {
    image: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
    alt: "Tuple",
  },
  {
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    alt: "Mirage",
  },
  {
    image: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
    alt: "StaticKit",
  },
  {
    image: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    alt: "Transistor",
  },
  {
    image: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
    alt: "Workcation",
  },
];

export default function Logocloud() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        {logos.map((item) => (
          <section
            key={item.alt}
            className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <Image
              className="object-contain h-12"
              src={item.image}
              alt={item.alt}
              width={160}
              height={48}
            />
          </section>
        ))}
      </section>
    </section>
  );
}
