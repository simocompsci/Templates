interface CollectionsSectionProps {
    title?: string;
    subtitle?: string;
}

export default function CollectionsSection({
    title = "Browse Our Collections",
    subtitle = "Explore a selection of our signature ranges below"
}: CollectionsSectionProps) {
    return (
        <section className="w-full bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 font-light">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}
