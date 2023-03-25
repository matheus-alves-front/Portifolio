import { PageContextProvider } from './components/Context/PageContext'

import { CanvaRoot } from "./components/CanvaRoot";
import { ApresentationSection } from "./components/Layout/Sections/ApresentationSection";
import { SkillsSection } from "./components/Layout/Sections/SkillsSection";
import { ScrollImage } from "./components/Layout/ScrollImage";

export default function Home() {
  return (
    <PageContextProvider>
      <main>
        <CanvaRoot />
        <ApresentationSection />
        <SkillsSection />
      </main>
      <ScrollImage />
    </PageContextProvider>
  )
}
