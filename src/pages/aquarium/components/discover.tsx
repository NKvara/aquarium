import {Element} from "react-scroll";

const Discover = () => {
  return (
    <Element
      name="discover"
      className="flex justify-center items-center w-svw h-svh bg-bottom bg-cover text-white"
      style={{backgroundImage: "url(/aquarium/images/bg1.jpg)"}}
    >
      <div className="flex items-center justify-between size-full">
        <div className="flex flex-col justify-between h-full w-1/2">
          <div className="flex flex-col justify-center items-end text-right pr-8 size-full text-[200px] leading-[180px] bg-indigo-600">
            <h1
              className="font-title text-transparent"
              style={{WebkitTextStroke: "2px white"}}
            >
              cult
            </h1>
            <h1 className="font-title mb-4">aquarium</h1>
            <p className="text-lg text-left w-2/3">
              Welcome to the Crushing Wave Aquarium, an awe-inspiring
              destination where the raw power of the sea meets the tranquil
              beauty of marine life. Nestled in the heart of Crushing Wave, this
              state-of-the-art aquarium offers an unforgettable journey beneath
              the surface, inviting visitors of all ages to explore the wonders
              of the deep.
            </p>
          </div>
          <div className="flex w-full bg-transparent h-1/4">
            <img
              className="w-1/2 object-cover"
              src="/aquarium/images/shark.jpg"
            />
            <div className="flex flex-col justify-center w-1/2 p-4">
              <p className="text-xl font-title mb-2">
                Be sure to say hi to Frank!
              </p>
              <p className="text-sm opacity-80">
                Frank the shark came down from the freezing depths of Avalore,
                his sleek body cutting through the icy waters like a shadow from
                the deep. With eyes hardened by the darkness below and a
                presence that sent smaller fish scattering.
              </p>
            </div>
          </div>
        </div>
        <video
          className="h-full w-1/2 object-cover"
          src="/aquarium/images/clowns.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </Element>
  );
};

export default Discover;
