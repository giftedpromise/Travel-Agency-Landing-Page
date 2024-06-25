import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme, isGradient }) => ({
  width: "102px", // Width
  height: "40px", // Height
  backgroundColor: "transparent", // Transparent background
  color: "#212832", // Text color
  fontFamily: "Google Sans", // Font family
  borderRadius: "5px", // Border radius
  borderWidth: "1px", // Border width
  borderStyle: "solid", // Border style
  borderColor: "#212832", // Border color
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#DF6951", // Hover background color
    opacity: 0.9, // Hover opacity
    borderColor: "transparent", // No border on hover
    color: "#FFFFFF", // Text color on hover
  },
  "&.red-gradient": {
    background: isGradient
      ? "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 100%)"
      : "",
  },
}));

const MainButton = forwardRef(
  (
    {
      text,
      isLoading = false,
      form,
      action,
      disabled = false,
      isSubmitable,
      dataLoadingText = "Please wait ...",
      classes,
      iconRoute,
      rightIconRoute,
      rightIconClass = "w-[24px] h-[24px]",
      iconComponent,
      isGradient,
    },
    ref,
  ) => {
    return !isLoading ? (
      <CustomButton
        form={form}
        onClick={!disabled ? action : () => undefined}
        type={isSubmitable ? "submit" : "button"}
        ref={ref}
        disabled={disabled}
        className={`${classes} ${isGradient ? "red-gradient" : ""}`}
        sx={{
          textTransform: "capitalize", // Ensures only the first letter is uppercase
        }}
      >
        {iconRoute && (
          <img
            src={iconRoute}
            alt="left button icon"
            className="h-[24px] w-[24px]"
          />
        )}
        {iconRoute && <span>&nbsp;</span>}
        {iconComponent}
        {iconComponent && <span>&nbsp;</span>}
        {text}
        {rightIconRoute && <span>&nbsp;</span>}
        {rightIconRoute && (
          <img
            src={rightIconRoute}
            alt="right button icon"
            className={rightIconClass}
          />
        )}
      </CustomButton>
    ) : (
      <CustomButton ref={ref} disabled className={classes ? classes : ""}>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {dataLoadingText}
      </CustomButton>
    );
  },
);

MainButton.displayName = "MainButton";

export default MainButton;
