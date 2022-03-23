import React from "react";
import Switch from "react-switch";

const OnlineServices = () => {
  return (
    <>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-xs sm:text-sm pr-6  whitespace-nowrap">
          Social Media Marketing
        </p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          checked={true}
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-xs sm:text-sm pr-6 pt-1 whitespace-nowrap">
          Digital Design
        </p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          checked={true}
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-xs sm:text-sm pr-6 pt-1 whitespace-nowrap">
          Influencer Activations
        </p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => {}}
          checked={true}
        />
      </div>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-xs sm:text-sm pr-6 pt-1 whitespace-nowrap">
          Performance Marketing
        </p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => {}}
          checked={true}
        />
      </div>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-xs sm:text-sm pr-6 pt-1 whitespace-nowrap">
          Website Development
        </p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => {}}
          checked={true}
        />
      </div>
    </>
  );
};

export default OnlineServices;
