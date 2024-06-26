import React from "react";

function DestinationCard({ imageUrl, title, amount, duration, isFirstCard }) {
  const cardStyle = isFirstCard
    ? "bg-white w-full mt-[1.69rem] px-[1.62rem] pb-[2rem]"
    : "bg-white w-full mt-[1.69rem] px-[1.62rem] pb-[2rem] shadow-md rounded-lg";

  return (
    <div className="group relative flex flex-col justify-between pb-[2.63rem]">
      <div className="object-fill">
        <img
          src={imageUrl}
          alt="destination image"
          className="h-[20.43rem] w-[314px] rounded-t-lg object-cover"
        />
      </div>
      <div className={cardStyle}>
        <div className="flex justify-between">
          <p
            className="text-[1.125rem] font-bold text-lightGray"
            style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 400 }}
          >
            {title}
          </p>
          <p
            className="text-[1.125rem] font-bold text-lightGray"
            style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 400 }}
          >
            {amount}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <img src="/images/send-icon.png" alt="send icon" />
          </div>
          <p
            className="font-bold text-lightGray"
            style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 400 }}
          >
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
