const PatientReviewsPage = () => {
  return (
    <div className="font-inter lg:px-28 md:px-10 px-8">
      <div className="card card-side my-8 flex md:flex-col lg:flex-row flex-col justify-center items-center">
        <div>
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/pexels-edward-jenner-4031818.jpg"
            width="500px"
            alt="Movie"
            className="w-10/12 rounded-full"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title font-inter font-semibold text-3xl">
            Review by John D.
          </h2>
          <p className="font-inter font-medium text-xl leading-8 opacity-75">
            "I recently had a surgery at
            <span className="font-bold px-2">Health community</span>, and I
            can't say enough good things about the care I received. The staff
            was incredibly attentive and caring throughout my entire stay. The
            doctors and nurses were not only skilled professionals but also
            compassionate individuals who took the time to explain everything to
            me and answer my questions. The facility was clean and
            well-maintained, which added to my overall comfort. I highly
            recommend <span className="font-bold">Health community</span> to
            anyone in need of medical care." <br /> <br />
            Review by Sarah M.
          </p>
          <div className="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-red-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-green-400"
            />
          </div>
        </div>
      </div>
      {/* second */}
      <div className="card card-side my-20 flex md:flex-col lg:flex-row-reverse flex-col justify-center items-center">
        <div>
          <img
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/pexels-edward-jenner-4031818.jpg"
            width="500px"
            alt="Movie"
            className="w-10/12 rounded-full"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title font-inter font-semibold text-3xl">
            Review by John D.
          </h2>
          <p className="font-inter font-medium text-xl leading-8 opacity-75">
            "I recently gave birth to my first child at{' '}
            <span className="font-bold px-2">Health community</span>, and it was
            an incredible experience. The maternity ward staff were so
            supportive and kind. They made sure I was comfortable every step of
            the way and provided valuable guidance for a first-time mom like me.
            The labor and delivery team were exceptional, and I felt safe in
            their hands. I am grateful to{' '}
            <span className="font-bold px-2">Health community</span> for helping
            me welcome my baby into the world with such care and warmth." Review
            by Emily P.
          </p>
          <div className="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-red-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-green-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReviewsPage;
