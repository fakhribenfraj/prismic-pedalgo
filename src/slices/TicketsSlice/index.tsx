import Ticket from "@/app/components/Ticket";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TicketsSlice`.
 */
export type TicketsSliceProps = SliceComponentProps<Content.TicketsSliceSlice>;

/**
 * Component for "TicketsSlice" Slices.
 */
const TicketsSlice = ({ slice }: TicketsSliceProps): JSX.Element => {
  return (
    <section className="text-center">
      <h1 className="text-3xl">{slice.primary.heading}</h1>
      <div className="tickets-container flex flex-col md:flex-row items-center gap-4 mt-6">
        <div>
          {slice.items.slice(0, 2).map((item, index) => (
            <Ticket
              key={"left" + index}
              title={item.heading?.toString()}
              description={item.description}
              image={item.icon}
              align="right"
              className=""
            />
          ))}
        </div>
        <PrismicNextImage field={slice.primary.image} priority={true} className="hidden md:block"/>
        <div>
          {slice.items.slice(2).map((item, index) => (
            <Ticket
              key={"right" + index}
              title={item.heading?.toString()}
              description={item.description}
              image={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSlice;
