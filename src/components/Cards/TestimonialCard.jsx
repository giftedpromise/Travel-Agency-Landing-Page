import React from "react";

const TestimonialCard = ({
  imageUrl,
  review,
  reviewerName,
  position,
  isBackdrop = false,
}) => {
  return (
    <div
      className={`rounded-slight max-w-[31.5rem] bg-white p-8 ${
        isBackdrop ? "border-2 border-[#F7F7F7] shadow-none" : "mr-8 shadow-lg"
      }`}
    >
      <div className="relative">
        <p className="text-1rem font-semibold leading-8 text-lightGray">
          &apos;&apos; {review} &apos;&apos;
        </p>
        <p className="mt-[2.12rem] text-[1.125rem] font-semibold text-lightGray">
          {reviewerName}
        </p>
        <p className="text-[0.875rem] font-medium text-lightGray">{position}</p>
        <div className="absolute top-[-4rem] md:left-[-4rem]">
          {!isBackdrop && (
            <img
              src={imageUrl}
              alt="reviewer photo"
              className="h-[4.25rem] w-[4.25rem] rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
