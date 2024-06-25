import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const MainButton = forwardRef(
  (
    {
      text,
      isLoading = false,
      form,
      action,
      disabled = false,
      isSubmitable,
      width,
      dataLoadingText = "Please wait ...",
      variant = "contained",
      classes,
      iconRoute,
      rightIconRoute,
      rightIconClass = "w-[24px] h-[24px]",
      iconComponent,
      size = "medium",
      isGradient,
    },
    ref,
  ) => {
    return !isLoading ? (
      <Button
        form={form}
        className={classes}
        onClick={!disabled ? action : () => undefined}
        type={isSubmitable ? "submit" : "button"}
        ref={ref}
        disabled={disabled}
        variant={variant}
        size={size}
        style={{ width: width === "full_width" ? "100%" : width }}
        startIcon={
          iconRoute ? (
            <img
              src={iconRoute}
              alt="left button icon"
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
            iconComponent
          )
        }
        endIcon={
          rightIconRoute ? (
            <img
              src={rightIconRoute}
              alt="right button icon"
              className={rightIconClass}
            />
          ) : null
        }
      >
        {text}
      </Button>
    ) : (
      <Button
        className={`${classes} cursor-not-allowed`}
        ref={ref}
        disabled
        variant={variant}
        size={size}
        style={{ width: width === "full_width" ? "100%" : width }}
        startIcon={<CircularProgress size={20} />}
      >
        {dataLoadingText}
      </Button>
    );
  },
);

MainButton.displayName = "MainButton";

export default MainButton;
