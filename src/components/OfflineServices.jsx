import React from "react";
import Switch from "react-switch";

const OfflineServices = () => {
  return (
    <>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-sm pr-6  whitespace-nowrap">Content Production</p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => {}}
          checked={false}
        />
      </div>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-sm pr-6 pt-1 whitespace-nowrap">Event Marketing</p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => {}}
          checked={false}
        />
      </div>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-sm pr-6 pt-1 whitespace-nowrap">Public Relations</p>
        <Switch
          width={40}
          height={20}
          handleDiameter={15}
          onColor="#34D059"
          offColor="#E7E7E7"
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => {}}
          checked={false}
        />
      </div>
      <div className="flex flex-row justify-between border-b-2 py-2 border-gray-100">
        <p className="text-sm pr-14 pt-1 whitespace-nowrap">
          Offline Print Media
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
          checked={false}
        />
      </div>
    </>
  );
};

export default OfflineServices;
