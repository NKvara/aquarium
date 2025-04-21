import {Element} from "react-scroll";

const prices = [
  {
    title: "Adult",
    desc: "Ages from 16 to 500",
    price: 20
  },
  {
    title: "Crushing Wave Citizen",
    desc: "Become a citizen to come here for free!",
    price: 0,
    dark: true
  },
  {
    title: "Kid",
    desc: "Ages from 0 to 16",
    price: 10
  }
];

const Price = () => {
  return (
    <Element
      name="fish"
      className="flex justify-center items-center pc:w-svw pc:h-svh bg-gradient-to-b from-indigo-950 to-neutral-950 px-4 pc:px-8 py-8 pc:py-32"
    >
      <div className="flex flex-col gap-12 pc:gap-16 justify-center items-center pc:max-w-pc size-full text-white">
        <div>
          <h1 className="font-title text-5xl pc:text-6xl text-center mb-2">
            Pricing
          </h1>
          <p className="text-center opacity-80 pc:w-2xl">
            All three ticket options include full access to every section of the
            aquarium. No matter which one you pick, the entire underwater world
            is yours to explore!
          </p>
        </div>
        <div className="flex flex-col pc:flex-row items-center gap-4">
          {prices.map((o) => (
            <div
              className={`flex flex-col gap-6 pc:gap-8 justify-between items-center text-center p-6 pc:p-8 w-full pc:w-80 ${
                o.dark
                  ? "bg-indigo-600 text-white"
                  : "bg-neutral-100 text-black"
              }`}
            >
              <div>
                <h1 className="font-title text-3xl pc:text-4xl">{o.title}s</h1>
                <p className="">{o.desc}</p>
              </div>

              <div>
                <h2 className="pc:text-2xl">
                  ¤<span className="text-3xl pc:text-4xl">{o.price}</span>
                </h2>
                <p className="">per {o.title}</p>
              </div>

              <button
                className={`cursor-pointer py-2 px-20 rounded-sm ${
                  !o.dark
                    ? "bg-indigo-600 text-white"
                    : "bg-neutral-100 text-black"
                }`}
              >
                Get Ticket
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-center justify-center p-2">
          <img src="/aquarium/images/news.gif" className="h-32" />
          <p className="text-lg opacity-90 text-center">
            Buying any tier ticket gives you FREE access to the Sand Museum!
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Price;
