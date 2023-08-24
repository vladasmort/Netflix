import TitlesBlock from "./Titles-block";
import "../reusableComponents/Section.css";

const Section = ({ title1, title2, id, img, video, top, left, width }) => {
  return (
    <div className="section">
      <div className="container d-flex h-100">
        {id % 2 === 0 && (
          <div className="col-6 align-self-center mx-auto">
            <img src={img} alt="" />
          </div>
        )}
        <div className=" col-6 align-self-center mx-auto">
          <TitlesBlock title1={title1} title2={title2} />
        </div>
        {id % 2 === 1 && (
          <div className="pic-video col-6 align-self-center mx-auto">
            <img src={img} alt="" />
            <div
              className="video embed-responsive embed-responsive-16by9"
              style={{ top: `${top}%`, left: `${left}%`, width: `${width}%` }}
            >
              <video
                className="embed-responsive-item"
                src={video}
                autoPlay
                playsinline
                muted
                loop
              ></video>
            </div>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Section;
