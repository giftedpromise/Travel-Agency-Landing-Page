import React from "react";
import TripCard from "../Cards/TripCard";

function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 2,
      iconUrl: "/images/airport-icon.png",
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
  ];

  return (
    <section className="mt-[-10rem] flex flex-col items-center justify-between md:flex-row">
      <div>
        <p className="font-poppins text-left text-[1.125rem] font-semibold text-lightGray">
          Easy and Fast
        </p>
        <p className="volkhov text-left text-[3.125rem] font-bold text-title">
          Book your next trip <br /> in 3 easy steps
        </p>

        <div className="mt-[1.94rem] flex flex-col gap-[3rem]">
          {steps.map((step) => (
            <TripCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <img src="/images/next-trip.png" alt="card with a girl on a wall" />
      </div>
    </section>
  );
}

export default BookNextTripSection;
