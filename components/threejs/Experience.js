import { Canvas } from "@react-three/fiber";
import React from "react";
import ModalComponent from "./ModalComponent";
import CarModel from "./CarModel";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Leva, useControls } from "leva";

const Experience = () => {
  const { cameraPosition, cameraRotation } = useControls({
    cameraPosition: {
      value: {
        x: 0,
        y: 0.3,
        z: 4,
      },
      step: 0.1,
    },
    cameraRotation: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      step: 0.1,
    },
  });
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
        }}
      >
        <Environment preset="apartment" />
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
          makeDefault
          rotation={[cameraRotation.x, cameraRotation.y, cameraRotation.z]}
        />
        <ModalComponent />
      </Canvas>

      <Leva hidden />
    </>
  );
};

export default Experience;
