import { Entrance } from "@/components/scenes/Entrance";
import { Build } from "@/components/scenes/Build";
import { Machine } from "@/components/scenes/Machine";
import { Nexra } from "@/components/scenes/Nexra";
import { OmniVote } from "@/components/scenes/OmniVote";
import { SoftwareHardware } from "@/components/scenes/SoftwareHardware";
import { SmartHome } from "@/components/scenes/SmartHome";
import { Seven } from "@/components/scenes/Seven";
import { DontWaitTransition } from "@/components/scenes/DontWaitTransition";
import { DontWait } from "@/components/scenes/DontWait";
import { Business } from "@/components/scenes/Business";
import { Journey } from "@/components/scenes/Journey";
import { Frank } from "@/components/scenes/Frank";
import { VeroSeven } from "@/components/scenes/VeroSeven";
import { End } from "@/components/scenes/End";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Entrance />
      <Build />
      <Machine />
      <Nexra />
      <OmniVote />
      <SoftwareHardware />
      <SmartHome />
      <Seven />
      <DontWaitTransition />
      <DontWait />
      <Business />
      <Journey />
      <Frank />
      <VeroSeven />
      <End />
    </main>
  );
}
