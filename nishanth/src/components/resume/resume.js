import "./resume.css";

const AppResume = () => {
  document.body.classList.add("no-scroll");

  return (
    <div className="resume-block">
      <object
        data="/Nishanth_Moolam.pdf"
        type="application/pdf"
        className="resume"
      >
        <p>
          <a
            href="/Nishanth_Moolam.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-download-button">Download Resume</button>
          </a>
        </p>
      </object>
    </div>
  );
};

export default AppResume;
