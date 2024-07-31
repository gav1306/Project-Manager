import React from "react";
import NoProjectImg from "./../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImg}
        alt=""
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={onStartAddProject}>Create New Project</Button>
    </div>
  );
};

export default NoProjectSelected;
