import React from "react";
import { Composition } from "remotion";
import { Week, WeekProps } from "./Week";

const FPS = 30;
const defaults: WeekProps = {
  audio: "", durationSec: 10, accent: "#0B7F85", siteName: "", domain: "", qrUrl: "https://example.com",
  labels: { kicker: "", week: "", range: "", aiNotice: "", outroLine: "", source: "", footer: "" },
  introEnd: 2, outroStart: 8, items: [], words: [],
};
const calc = ({ props }: { props: WeekProps }) => ({ durationInFrames: Math.round(props.durationSec * FPS) });

export const Root: React.FC = () => (
  <>
    <Composition id="Week16x9" component={Week} width={1920} height={1080} fps={FPS} durationInFrames={300} defaultProps={defaults} calculateMetadata={calc} />
    <Composition id="Week4x5" component={Week} width={1080} height={1350} fps={FPS} durationInFrames={300} defaultProps={defaults} calculateMetadata={calc} />
  </>
);
