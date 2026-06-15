"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import Select from "@/components/shared/input/Select";
import type { SpacerState } from "../types";

type Props = { state: SpacerState; update: <K extends keyof SpacerState>(key: K, value: SpacerState[K]) => void };

export default function StructureSection({ state, update }: Props) {
  return (
    <div className="space-y-4">
      <SectionCard title="Axis" subtitle="Spacing axis direction.">
        <Select label="Axis" value={state.axis} options={["block", "inline", "both"]} onChange={(value) => update("axis", value)} />
      </SectionCard>
      <SectionCard title="Token" subtitle="Design token name shown in debug mode.">
        <Input label="Token name" value={state.token} onChange={(value) => update("token", value)} />
      </SectionCard>
    </div>
  );
}
