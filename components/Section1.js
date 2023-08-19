import React from "react";

const Section1 = () => {
  return (
    <div id="section1">
      <h1 className="text-center text-2xl mt-4">Jiotto Caspita</h1>
      <div className="flex flex-col  overflow-hidden justify-between h-[94vh]">
        <div className="mt-16">
          <h1 className="text-center text-4xl font-bold ">
            OPS: <span className="text-red-500">LIGHTNING</span>
          </h1>
          <p className="text-center">
            An experience so beautiful that even the god envy
          </p>
        </div>

        <div className="flex justify-between mb-32">
          <div>
            <h1>Speed</h1>
            <p>210 KM/S</p>
          </div>
          <div>
            <h1>Type</h1>
            <p>Sports</p>
          </div>
          <div>
            <h1>MRPS* Starting at</h1>
            <p>$28,995</p>
          </div>
          <div>
            <h1>Fuel</h1>
            <p>Gasoline</p>
          </div>
          <div>
            <h1>Capacity</h1>
            <p>500 HACK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
