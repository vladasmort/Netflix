import Section from "./reusableComponents/Section";
import image1 from "../assets/images/section1.png";
import image2 from "../assets/images/section2.jpg";
import image3 from "../assets/images/section3.png";
import image4 from "../assets/images/section4.png";
const Sections = () => {
  const data = [
    {
      id: 1,
      title1: "Enjoy on your TV",
      title2:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: image1,
      video:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
      top: 20,
      left: 13,
      width: 80,
    },
    {
      id: 2,
      title1: "Download your shows to watch offline",
      title2: "Save your favorites easily and always have something to watch.",
      image: image2,
    },
    {
      id: 3,
      title1: "Watch everywhere",
      title2:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: image3,
      video:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
      top: 8,
      left: 17,
      width: 64,
    },
    {
      id: 4,
      title1: "Create profiles for kids",
      title2:
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: image4,
    },
  ];

  return (
    <>
      {data.map((el) => {
        return (
          <Section
            id={el.id}
            title1={el.title1}
            title2={el.title2}
            img={el.image}
            video={el.video}
            top={el.top}
            left={el.left}
            width={el.width}
          />
        );
      })}
    </>
  );
};

export default Sections;
