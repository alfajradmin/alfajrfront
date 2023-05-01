import React from "react";
import PublicationModal from "./PublicationModal";
import { useState } from "react";
import { API_URL } from "./../config/index";
import Image from "next/image";
import Link from "next/link";

const PublicationsSlider = ({ Academic_Programs }) => {
  // console.log("Publications in slider",Publications)
  // const [modalShow, setmodalShow] = useState(false);

  return (
    <div className="col-12 mb-4  ">
      <div className="block-area p-4 border bg-light-black">
        <div className="block-title-13">
          <h4 className="h5 title-box-dot">
            <span>
              <strong>Academic Programs</strong>
            </span>
          </h4>
          <div className="dot-line"></div>
        </div>

        {Academic_Programs &&
          Academic_Programs.data.map((program, index) => {
            //console.log("My publication",publication);
            return (
              <Link
                key={index}
                href={program.attributes.File.data.attributes.url}
                target="_blank"
              >
                <Image
                  width={300}
                  height={350}
                  src={program && program.attributes.cover.data.attributes.url}
                  data-src="../../assets/img/400x340/img1.jpg"
                  alt="Image description"
                />
              </Link>
            );
          })}

        <p
          style={{
            textAlign: "right",
            color: "blue",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          <Link href="/academic-programs">view more</Link>
        </p>
      </div>
    </div>
  );
};

export default PublicationsSlider;
