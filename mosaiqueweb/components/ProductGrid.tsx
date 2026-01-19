import Image from 'next/image';

interface Product {
    id: string;
    name: string;
    imageSrc: string;
    imageAlt: string;
}

interface ProductGridProps {
    products?: Product[];
}

const defaultProducts: Product[] = [
    {
        id: '1',
        name: 'Terracotta Mosaic',
        imageSrc: '/product-terracotta.jpg',
        imageAlt: 'Terracotta colored mosaic tile pattern'
    },
    {
        id: '2',
        name: 'Natural Stone Mosaic',
        imageSrc: '/product-natural-stone.jpg',
        imageAlt: 'Natural stone colored mosaic tile pattern'
    },
    {
        id: '3',
        name: 'Teal Mosaic',
        imageSrc: '/product-teal.jpg',
        imageAlt: 'Teal colored mosaic tile pattern'
    }
];

export default function ProductGrid({ products = defaultProducts }: ProductGridProps) {
    return (
        <section className="w-full bg-neutral-100 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer"
                        >
                            {/* Product Image Container */}
                            <div className="relative w-full aspect-square bg-white mb-4 overflow-hidden">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    fill
                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Product Name - Optional, can be removed if not needed */}
                            {/* <p className="text-sm md:text-base text-gray-700 font-light text-center">
                {product.name}
              </p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
