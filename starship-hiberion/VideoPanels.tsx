import React from "react";

import { HDKComponent, HNode } from "@hiber3d/hdk-react";
import { VideoPanel } from "@hiber3d/hdk-react-components";

export const VideoPanels: HDKComponent = (props) => {
  return (
    <HNode {...props}>
      <VideoPanel
        x={44}
        rotX={-40}
        rotY={90}
        ratio={833 / 1480}
        scale={8}
        emissiveStrength={1.5}
        src="./static/gurl.mp4"
      ></VideoPanel>
      <VideoPanel
        x={44}
        z={10}
        rotX={-40}
        rotY={90}
        ratio={833 / 1480}
        scale={8}
        emissiveStrength={1.5}
        src="./static/boi.mp4"
      ></VideoPanel>
      <VideoPanel
        x={44}
        z={20}
        rotX={-40}
        rotY={90}
        ratio={833 / 1480}
        scale={8}
        emissiveStrength={1.5}
        src="./static/fayle.mp4"
      ></VideoPanel>
      <VideoPanel
        x={-44}
        rotX={40}
        rotY={90}
        ratio={498 / 211}
        scale={8}
        emissiveStrength={1.5}
        src="./static/messug.mp4"
      ></VideoPanel>
    </HNode>
  );
};
