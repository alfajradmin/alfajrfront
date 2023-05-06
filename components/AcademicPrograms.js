import React from "react";
import PublicationModal from "./PublicationModal";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const AcademicPrograms = ({ Academic_Programs }) => {
  console.log("academic-programs", Academic_Programs);
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
        <div className="row">
          {Academic_Programs &&
            Academic_Programs.data.map((program, index) => {
              return (
                <div
                  className="card-body col m-2"
                  style={{
                    width: "8rem",
                    height: "14rem",
                    backgroundColor: `${program.attributes.BackgroundColor}`,
                    justifyContent: "center",
                  }}
                >
                  <Link
                    className="text-white"
                    href={`academilc-programs/${program.attributes.slug}`}
                    target="_blank"
                    style={{ textAlign: "justify" }}
                  >
                    <div style={{ marginBottom: "20px", paddingTop: "30px" }}>
                      <i
                        className={program.attributes.icon}
                        color="white"
                        style={{
                          color: "white",
                          fontSize: "4rem",
                          marginLeft: "6rem",
                        }}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          color: "white",
                          marginTop: "10px",
                        }}
                      >
                        {program.attributes.title}{" "}
                      </p>
                    </div>
                  </Link>
                </div>
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
            <Link href="/academic-programs">view all</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicPrograms;
