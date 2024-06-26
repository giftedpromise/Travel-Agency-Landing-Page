import React from "react";
import PropTypes from "prop-types";

function TripCard({ iconUrl, title, description }) {
  return (
    <div className="flex items-center gap-8">
      <div>
        <img src={iconUrl} alt="step icon" />
      </div>
      <div className="flex flex-col">
        <p className="font-poppins text-[1rem] font-bold text-lightGray">
          {title}
        </p>
        <p className="font-poppins w-3/4 text-[1rem] font-normal text-lightGray">
          {description}
        </p>
      </div>
    </div>
  );
}

TripCard.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TripCard;
