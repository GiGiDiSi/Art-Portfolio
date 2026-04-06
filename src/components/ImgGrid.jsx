import React, {useState} from "react";;
import { Row, Col, Container } from "react-bootstrap";
import ImgModal from "./ImgModal";
// import Image from 'react-bootstrap/Image'; // If using React-Bootstrap, consider <Image src={src} fluid />

function ImgGrid({ fol }) {
  const folder = fol;
  const allImages = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,mp4,webm,gif}', { eager: true });

  //get entry from folder
  const filteredMedia = Object.entries(allImages).filter(([path]) => {
    return path.includes(`/src/assets/${folder}/`);
  });

  //get items of folder
  const mediaList = filteredMedia.map(([path, module], index) => {
    const src = module.default;
    const isVideo = path.match(/\.(mp4|webm|ogg)$/i);
    const fileName = path.split('/').pop().replace(/\.[^/.]+$/, "");

    if (isVideo) {
      return (
        <div className="imgcontainer" key={path}>
          <video key={path} src={src} autoPlay muted loop controls
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p>{fileName}</p>
        </div>
      );
    }

    return (
      <div className="imgcontainer" key={path}>
        <a href={src} target="_blank">
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={src}
            alt={`${folder} work ${index + 1}`}
          />
        </a>
        <p>{fileName}</p>
      </div>
    );
  });
 
  return (
    <>
      <main>
        {mediaList.length > 0 ? (
          mediaList
        ) : (
          <p className="text-center">No assets found in {fol}.</p>
        )}
      </main>
      
    </>
  );
}

export default ImgGrid;
