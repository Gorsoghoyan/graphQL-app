import { ImageDivProps } from "../../types";
                                                        
export default function ImageDiv({
  width,
  height,
  imgURL,
}: ImageDivProps) {
  return (
    <div style={{
      width,
      height,
      background: `url(${imgURL})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} />
  );
}