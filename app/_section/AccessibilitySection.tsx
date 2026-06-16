"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import Select from "@/components/shared/input/Select";
import Switch from "@/components/shared/input/Switch";
import type { SpacerState } from "../types";

type Props = { state: SpacerState; update: <K extends keyof SpacerState>(key: K, value: SpacerState[K]) => void };

export default function AccessibilitySection({ state, update }: Props) {
  return <SectionCard title="Accessibility" subtitle="Accessibility controls for native layout/page-structure generation.">
      <div className="space-y-4"><Input label="Landmark label" value={state.landmarkLabel} onChange={(value) => update("landmarkLabel", value)} />
<Select label="Semantic role" value={state.role} options={[
  "presentation"
]} onChange={(value) => update("role", value)} />
<Switch label="Decorative spacer" checked={state.decorative} onChange={(value) => update("decorative", value)} /></div>
    </SectionCard>;
}
