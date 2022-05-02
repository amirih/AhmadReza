import Image from "next/image";
import { useState } from "react";
import styles from "../styles/ScrollImage.module.css";
const ScrollImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const image = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
  ];
  const onWheelHandler = (e) => {
    if (e.deltaY < 0) {
      console.log("up");
      currentImage > 1 && setCurrentImage(currentImage - 1);
    } else if (e.deltaY > 0) {
      console.log("down");
      currentImage < image.length - 1 && setCurrentImage(currentImage + 1);
    }
  };
  return (
    <div>
      <div>
        <Image
          onWheel={onWheelHandler}
          className={styles.image}
          width={300}
          height={300}
          src={image[currentImage]}
        ></Image>
      </div>
    </div>
  );
};

export default ScrollImage;
