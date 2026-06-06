"use client";

import type { CSSProperties } from "react";
import type { SpacerState } from "../types";

function box(state: SpacerState): CSSProperties {
  return { width: state.width, minHeight: state.height, padding: state.padding, margin: state.margin, display: "grid", placeItems: "center", borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`, background: state.background, color: state.foreground, fontFamily: state.fontFamily };
}

export default function LivePreview({ state }: { state: SpacerState }) {
  const mobileSize = state.mobileSize ?? Math.max(4, Math.round(state.size * 0.6));
  const desktopSize = state.desktopSize ?? state.size;
  const responsiveSize = `clamp(${mobileSize}px, 8vw, ${desktopSize}px)`;
  const spacerStyle: CSSProperties = {
    width: state.axis === "block" ? "100%" : responsiveSize,
    height: state.axis === "inline" ? 1 : responsiveSize,
    minHeight: state.axis === "both" ? responsiveSize : undefined,
    borderRadius: state.radius,
    outline: state.debugVisible ? `1px dashed ${state.accent}` : undefined,
    background: state.debugVisible ? "rgba(255,255,255,.08)" : "transparent",
  };
  const style = box(state);
  return <div id={state.id} role="presentation" aria-hidden={state.decorative || undefined} style={style}><div style={spacerStyle}>{state.debugVisible && <span style={{ display: "grid", placeItems: "center", height: "100%", color: state.muted, fontSize: state.bodySize, fontFamily: state.fontFamily }}>{state.token}: {mobileSize}-{desktopSize}px</span>}</div></div>;
}
