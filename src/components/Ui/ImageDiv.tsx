import { ImageDivProps } from "../../types";
import defaultBg from "../../assets/images/default-bg.png";
                                                        
export default function ImageDiv({
  width,
  height,
  imgURL,
  className
}: ImageDivProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        backgroundImage: `url(${imgURL}), url(${defaultBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }} 
    />
  );
}