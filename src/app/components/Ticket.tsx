import { ImageFieldImage, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import React from "react";

const Ticket = ({
  title,
  description,
  image,
  align = "left",
  className,
}: {
  title?: string;
  description?: RichTextField;
  image: ImageFieldImage;
  align?: "left" | "right";
  className?: string;
}) => {
  return (
    <div
      className={`${
        align == "left" ? "text-left flex-row" : "text-right flex-row-reverse"
      } items-center flex gap-2 ${className}`}
    >
      <PrismicNextImage field={image} />
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        {description && <PrismicRichText field={description} />}
      </div>
    </div>
  );
};

export default Ticket;
