import React from "react";

function CategoryCard({ iconUrl, title, description, highlighted }) {
  return (
    <div
      className={`relative flex w-full flex-col items-center gap-4 p-[1.2rem] ${
        highlighted ? "rounded-[2.5rem] bg-white shadow-md" : ""
      }`}
    >
      <div>
        <img src={iconUrl} alt="category card icon" className="h-[80px]" />
      </div>
      <p className="font-open-sans text-[1.1rem] font-[600] text-subtitle">
        {title}
      </p>
      <p className="font-poppins text-[1rem] font-normal text-lightGray">
        {description}
      </p>
      {highlighted && (
        <div className="absolute -bottom-8 -left-10 -z-10">
          <img src="/images/rectangle-shape.png" alt="rectangle shape" />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
