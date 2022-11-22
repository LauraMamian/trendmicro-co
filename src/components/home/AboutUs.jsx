import React from "react";
import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutUs = ({ heading, message, link, imgSize, resume }) => {

  const iconsLaura = [
    {
      image: "fa-github",
      url: "https://github.com/LauraMamian",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lauramamianc",
    },
  ]

  const iconsCarolina = [
    {
      image: "fa-github",
      url: "https://github.com/carolinaMateus",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/carolina-mateus-582a17210/",
    },
  ]

  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);


  return (
    <Jumbotron id="aboutus" className="m-0">
      <div className="flex flex-col">
        <div className="container row mb-5">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-gray-300 rounded-circle"
                src={profilePicUrl[0]}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>
          <div className={`col-lg-${showPic ? "7" : "12"} `}>
            <h2 className="display-4 mb-5 text-center">{heading[0]}</h2>
            <p className="lead text-center">{message[0]}</p>
            <div className="d-flex align-items-center justify-content-center">
              {iconsLaura.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image}  fa-3x socialicons text-black`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container row mb-5">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-gray-300 rounded-circle"
                src={profilePicUrl[1]}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>
          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{heading[1]}</h2>
            <p className="lead text-center">{message[1]}</p>
            <div className="d-flex align-items-center justify-content-center">
              {iconsCarolina.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image}  fa-3x socialicons text-black`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutUs;
