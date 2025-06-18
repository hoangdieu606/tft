import clsx from "clsx";
import Image from "next/image";

interface HexagonProps {
  iconSize: number;
  imageSrc: string;
  name: string;
  className?: string;
  classNameImage?: string;
  vMin?: string;
}

export default function Hexagon({
  iconSize,
  imageSrc,
  name,
  className,
  classNameImage,
  vMin,
}: HexagonProps) {
  const imageDimension = iconSize * 0.8;
  const vMinDimension = `calc(${vMin} * 0.8)`;

  return (
    <div
      className={clsx(
        "flex justify-center items-center [clip-path:polygon(50%_0%,_95%_25%,_95%_75%,_50%_100%,_5%_75%,_5%_25%)]",
        className
      )}
      style={{
        width: vMin ? vMin : iconSize,
        height: vMin ? vMin : iconSize,
        background: "var(--border-color-cost, var(--color-green-900))",
      }}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={imageDimension}
        height={imageDimension}
        style={
          vMin
            ? { width: vMinDimension, height: vMinDimension }
            : { width: imageDimension, height: imageDimension }
        }
        className={clsx(
          "[clip-path:polygon(50%_0%,_95%_25%,_95%_75%,_50%_100%,_5%_75%,_5%_25%)]",
          classNameImage
        )}
      />
    </div>
  );
}
