import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {type ISourceOptions} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";

export const MyParticles = ({preset}: {preset: ISourceOptions}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => preset, [preset]);

  if (init && preset) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};
