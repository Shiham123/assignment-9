const HospitalityPage = () => {
  return (
    <div className="font-inter bg-fontActive min-w-min">
      <div className="hero min-h-screen bg-colorOne">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/hospitalone.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/hospitalThree.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Our beds</h1>
            <p className="py-6">
              <span className="font-bold">Adjustability</span>: Hospital beds
              are highly adjustable, allowing healthcare providers to customize
              the bed's configuration to meet the specific needs of t he
              patient. The head and foot sections can be raised or lowered
              independently, providing a range of positions for patient comfort,
              therapy, and medical procedures. This adaptability is essential
              for patients with different medical conditions, enabling them to
              find the most comfortable and beneficial position.
            </p>
            <p className="py-6">
              <span className="font-bold">Mattress :</span> Hospital beds are
              equipped with specially designed mattresses that distribute
              pressure evenly to prevent bedsores and ensure patient comfort.
              These mattresses come in various types, such as foam, air, or
              alternating pressure mattresses, depending on the patient's needs.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="hero min-h-screen bg-fontActive font-inter text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/hospitalFour.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/hospitalFive.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Our kindness</h1>
            <p className="py-6">
              Hospital hospitality places patients at the center of care. It
              ensures that healthcare providers and staff prioritize patients'
              needs, preferences, and emotional well-being. This approach
              fosters trust, improves communication, and promotes a sense of
              control for patients in their healthcare journey.
              <br />
              <br />
              Emotional support is a fundamental element of hospital
              hospitality. Healthcare professionals and volunteers are trained
              to offer compassionate care, listen to patients' concerns, and
              provide reassurance during difficult times.
              <br />
              <br />
              Hospital hospitality is an evolving field that values patient
              feedback. Continuous assessment and improvement efforts are
              implemented to address patient concerns and enhance the overall
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalityPage;
