const TitlesBlock = ({ title1, title2 }) => {
  return (
    <div className="titles">
      <h1>{title1}</h1>
      <h4 className="mb-4">{title2}</h4>
    </div>
  );
};

export default TitlesBlock;
