import React from "react";
import TopDestinationCard from "../Cards/TopDestinationCard";

function SellingSection() {
  const destinations = [
    {
      id: 0,
      imageUrl: "/images/rome.png",
      title: "Rome, Italy",
      amount: "$5.42k",
      duration: "10 Days Trip",
      highlighted: false,
    },
    {
      id: 1,
      imageUrl: "/images/london.jpg",
      title: "London, UK",
      amount: "$4.2k",
      duration: "12 Days Trip",
      highlighted: false,
    },
    {
      id: 2,
      imageUrl: "/images/europe.png",
      title: "Full Europe",
      amount: "$15k",
      duration: "28 Days Trip",
      highlighted: true,
    },
  ];

  return (
    <section style={{ overflow: "hidden" }}>
      <p className="text-center text-[1.125rem] font-[600] text-lightGray">
        Top Selling
      </p>
      <p className="volkhov text-center text-[3.125rem] font-[700] text-title">
        Top Destinations
      </p>
      <div className="mt-16 flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
        {destinations.map((destination) => (
          <TopDestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default SellingSection;
