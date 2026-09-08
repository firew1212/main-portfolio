export default function About() {
  return (
    <section
      id="about"
      className="
        max-w-6xl
        mx-auto
        px-4
        md:px-6
        py-7
      "
    >

      {/* Section Header */}

      <div className="mb-10">

        <p className="
          text-blue-600
          mb-3
        ">
          About Me
        </p>



      </div>




      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
        "
      >


        {/* Main Description */}

        <div
          className="
            md:col-span-2
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
          "
        >

          <p
            className="
              text-lg
              leading-relaxed
              text-gray-300
            "
          >

            I am a Full Stack Software Engineer focused on
            <span className="text-yellow-500">
              {" "}solving real problem 
            </span> and developing scalable web app and mobile app.

            <br />
            <br />

            I work across the entire development lifecycle:
            from understanding business requirements,
            designing database architecture, building APIs,
            creating modern user interfaces, and deploying
            reliable software solutions.

          </p>


        </div>


      </div>




      {/* Technology Focus */}

      <div
        className="
          mt-8
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
        "
      >

        <h3 className="
          text-xl
          font-semibold
          mb-6
        ">
          I Mainly Focus
        </h3>


        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {
            [
              "Clean Architecture",
              "REST API Design",
              "Database Modeling",
              "Authentication",
              "Scalable Systems",
              "Performance Optimization",
            ].map((item)=>(
              <span
                key={item}
                className="
                  rounded-full
                  bg-blue-500/10
                  px-4
                  py-2
                  text-sm
                  text-blue-300
                "
              >
                {item}
              </span>
            ))
          }


        </div>


      </div>



    </section>
  );
}