import { CanvaRoot } from "../components/CanvaRoot";
import { ApresentationSection } from "../components/Layout/Sections/ApresentationSection";
import { ScrollImage } from "../components/ScrollImage";

export default function ThreeJs() {
  return (
    <>
      <CanvaRoot />
      <main>
        <ApresentationSection />
      </main>
      <ScrollImage />
    </>
  )
}