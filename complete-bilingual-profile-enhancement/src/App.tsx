import { LanguageProvider } from "./i18n/LanguageContext";
import { Chrome } from "./components/Chrome";
import { Cover } from "./sections/Cover";
import { Opening } from "./sections/Opening";
import { WhoWeAre } from "./sections/WhoWeAre";
import { VisionMissionValues } from "./sections/VisionMissionValues";
import { Glance } from "./sections/Glance";
import { Services } from "./sections/Services";
import { Approach } from "./sections/Approach";
import { Process } from "./sections/Process";
import { Expertise } from "./sections/Expertise";
import { Industries } from "./sections/Industries";
import { SelectedProjects } from "./sections/SelectedProjects";
import { CaseSpotlight } from "./sections/CaseSpotlight";
import { Why } from "./sections/Why";
import { Quality } from "./sections/Quality";
import { Closing } from "./sections/Closing";
import { Contact } from "./sections/Contact";

function Profile() {
  return (
    <div className="relative min-h-screen bg-[#fafaf8] font-sans text-black antialiased">
      <Chrome />
      <main>
        <Cover />
        <Opening />
        <WhoWeAre />
        <VisionMissionValues />
        <Glance />
        <Services />
        <Approach />
        <Process />
        <Expertise />
        <Industries />
        <SelectedProjects />
        <CaseSpotlight />
        <Why />
        <Quality />
        <Closing />
        <Contact />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Profile />
    </LanguageProvider>
  );
}
