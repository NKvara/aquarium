import {usePhoneMediaQuery} from "@/functions/usePhone";
import AquariumDesktop from "@/pages/aquarium/desktop";
import AquariumPhone from "@/pages/aquarium/phone";
import {stars} from "@/ui/particlePresets";
import {MyParticles} from "@/ui/particles";

const Aquarium = () => {
  const phone = usePhoneMediaQuery();

  return (
    <div>
      <MyParticles preset={stars} />
      {phone ? <AquariumPhone /> : <AquariumDesktop />}
    </div>
  );
};

export default Aquarium;
