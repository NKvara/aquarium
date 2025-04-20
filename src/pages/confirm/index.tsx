import { bubbles } from "@/ui/particlePresets";
import {useNavigate} from "react-router";
import {MyParticles} from "src/ui/particles";
import {useLocalStorage} from "usehooks-ts";

const Confirm = () => {
  const navigate = useNavigate();
  const [, setAgree] = useLocalStorage("agree", "");

  return (
    <div className="flex justify-center items-center w-svw h-svh">
      <div className="flex flex-col justify-center items-center gap-6 z-20 w-full pc:w-4xl backdrop-blur-2xl bg-blue-950/20 text-white p-8 rounded-2xl">
        <h1 className="font-bold text-4xl text-center">
          We have to make sure that you enjoy fish
        </h1>
        <p className="text-sm opacity-60 text-center">
          It is hereby agreed that the Participant shall engage solely in the
          visual appreciation of fish, as exhibited within a designated aquarium
          environment. Under no circumstances shall the Participant consume,
          handle, or otherwise disturb said fish. All parties shall make
          reasonable efforts to ensure that the Participant derives enjoyment
          exclusively through observation.
        </p>
        <button
          onClick={() => {
            setAgree("true");
            navigate("/");
          }}
          className="bg-white/90 backdrop-blur-sm py-4 px-8 rounded-md text-black font-bold cursor-pointer"
        >
          I Understand
        </button>
      </div>
      <div className="absolute size-full z-10 backdrop-blur-lg contrast-[300]" />
      <MyParticles preset={bubbles} />
    </div>
  );
};

export default Confirm;
