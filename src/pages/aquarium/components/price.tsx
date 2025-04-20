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
      className="flex justify-center items-center w-svw h-svh bg-gradient-to-b from-indigo-950 to-neutral-950 px-8 py-32"
    >
      <div className="flex flex-col gap-16 justify-center items-center max-w-pc size-full text-white">
        <div>
          <h1 className="font-title text-6xl text-center mb-2">Pricing</h1>
          <p className="text-center opacity-80 w-2xl">
            All three ticket options include full access to every section of the
            aquarium. No matter which one you pick, the entire underwater world
            is yours to explore!
          </p>
        </div>
        <div className="flex items-center gap-4">
          {prices.map((o) => (
            <div
              className={`flex flex-col h-min gap-8 justify-between items-center text-center p-8 w-80 ${
                o.dark
                  ? "bg-indigo-600 text-white"
                  : "bg-neutral-100 text-black"
              }`}
            >
              <div>
                <h1 className="font-title text-4xl">{o.title}s</h1>
                <p className="">{o.desc}</p>
              </div>

              <div>
                <h2 className="text-2xl">
                  ¤<span className="text-4xl">{o.price}</span>
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
        <div className="flex flex-col gap-2 items-center justify-center p-2 bg-indigo-600/20 shadow-lg shadow-indigo-700/50">
          <img src="/aquarium/images/news.gif" className="h-32" />
          <p className="text-lg opacity-90">Buying any tier ticket gives you FREE access to the Sand Museum!</p>
        </div>
      </div>
    </Element>
  );
};

export default Price;
