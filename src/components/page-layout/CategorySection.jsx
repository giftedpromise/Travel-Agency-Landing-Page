import React from "react";
import CategoryCard from "../Cards/CategoryCard";

function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: "/images/satellite.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/aircraft.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: "/images/mic.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: "/images/cog.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      highlighted: false,
    },
  ];

  console.log("Rendering CategorySection with features:", features);

  return (
    <section>
      <p className="text-center text-[1.125rem] font-[600] text-lightGray">
        Category
      </p>
      <p className="volkhov text-center text-[3.125rem] font-[700] text-title">
        We Offer Best Services
      </p>
      <div className="mt-16 flex w-full flex-col justify-between gap-4 md:flex-row">
        {features.map((feature) => (
          <CategoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
