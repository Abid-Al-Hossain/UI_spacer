"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { SpacerState } from "../types";

type Props = { state: SpacerState; update: <K extends keyof SpacerState>(key: K, value: SpacerState[K]) => void };

export default function SizingSection({ state, update }: Props) {
  return <SectionCard title="Sizing" subtitle="Sizing controls for native layout/page-structure generation."><Slider label="Width" value={state.width} min={120} max={1200} step={1} onChange={(value) => update("width", value)} />
<Slider label="Height" value={state.height} min={40} max={720} step={1} onChange={(value) => update("height", value)} />
<Slider label="Size" value={state.size} min={8} max={180} step={1} onChange={(value) => update("size", value)} /></SectionCard>;
}
