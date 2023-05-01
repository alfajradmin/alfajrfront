import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
const PressReleases = ({ data }) => {
  //  console.log(data.PressRelease.data[0].attributes.title)
  //return false
  return (
    <div className="wrapper ">
      {/* main content */}
      <main id="content">
        <div className="container">
          <div className="d-flex flex-row mt-3 p-3  mb-3">
            <div className=" h-auto col-md-12">
              <div className="block-title-6 text-center">
                <h4 className="h5 border-primary ">
                  <span className="bg-primary text-white">
                    Press Release details
                  </span>
                </h4>
              </div>

              <div className="">
                <div className="card border-0  p-3">
                  <h3 className="card-title">
                    {data.PressRelease.data[0].attributes.title}
                  </h3>
                  <div className="card-body">
                    <p style={{ textAlign: "justify" }}>
                      <ReactMarkdown>
                        {data.PressRelease.data[0].attributes.description}
                      </ReactMarkdown>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  //fetching Press Releases
  const pressR = await fetch(
    `${API_URL}/api/notifications?filters[slug][$eq]=${slug}`
  );
  const PressRelease = await pressR.json();
  //fetching profiles
  //console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        PressRelease,
      },
    },
  };
}

export default PressReleases;
