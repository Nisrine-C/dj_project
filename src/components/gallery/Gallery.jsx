import { useState, useEffect } from "react";
import motion from "framer-motion";
import images from "../../images";
import "./Gallery.css";

const Gallery = () => {
  let data = images;
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  //console.log(mousePosition);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="gallery">
      {data.map((item, index) => {
        return (
          <div className="image" key={index}>
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
