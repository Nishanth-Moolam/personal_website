import "./resume.css";

const AppResume = () => {
  return (
    <div className="resume-block">
      {/* <iframe
        src="../../assets/Nishanth_Moolam.pdf"
        title="resume"
        width="100%"
        height="500px"
      /> */}
      <object
        data="/Nishanth_Moolam.pdf"
        type="application/pdf"
        className="resume"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default AppResume;
