"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import type { SpacerState } from "../types";

type Props = { state: SpacerState; update: <K extends keyof SpacerState>(key: K, value: SpacerState[K]) => void };

export default function StructureSection({ state, update }: Props) {
  return <SectionCard title="Structure" subtitle="Structure controls for native layout/page-structure generation."><Select label="Axis" value={state.axis} options={[
  "block",
  "inline",
  "both"
]} onChange={(value) => update("axis", value)} /></SectionCard>;
}
