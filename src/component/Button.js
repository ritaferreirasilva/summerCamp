import React from "react";

export default function Button({ el, variant, small, className, ...props }) {
  const Element = el || "button";

  const classes = ["button"];

  if (className) classes.push(className);

  if (variant === "white") classes.push("is-white");

  if (small) classes.push("is-small has-font-size-small");

  return (
    <Element
      className={classes.filter((c) => c).join(" ")}
      {...props}
    ></Element>
  );
}
