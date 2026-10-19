import React from "react";
import { Composition } from "remotion";
import { Tip, TipProps, resolveTiming } from "./Tip";

// Neutrale Standardwerte: inputProps werden von Remotion mit den defaultProps gemischt, deshalb duerfen hier
// keine Beispieltexte (kicker, note, loop, blocked ...) stehen. Beispiel: tip.json, Vorschau mit --props=tip.json.
const defaults: TipProps = {
  title: "",
  subtitle: "",
  steps: [{ product: "generic", icon: "check", title: "", actions: [] }],
  endUrl: "",
  endLine: "",
};

const FPS = 30;
const calc = ({ props }: { props: TipProps }) => ({
  durationInFrames: Math.round((resolveTiming(props).end + (props.endCardSeconds ?? 4)) * FPS),
});

export const Root: React.FC = () => (
  <>
    <Composition id="Tip16x9" component={Tip} width={1920} height={1080} fps={FPS}
      durationInFrames={450} defaultProps={defaults} calculateMetadata={calc} />
    <Composition id="Tip9x16" component={Tip} width={1080} height={1920} fps={FPS}
      durationInFrames={450} defaultProps={defaults} calculateMetadata={calc} />
    <Composition id="Tip4x5" component={Tip} width={1080} height={1350} fps={FPS}
      durationInFrames={450} defaultProps={defaults} calculateMetadata={calc} />
  </>
);
