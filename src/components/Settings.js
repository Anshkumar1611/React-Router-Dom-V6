import React from "react";
import Button from "./Button";

const Settings = () => {
  return (
    <div>
      <p>Settings</p>
      <Button text="Logout" type="logout" url="/login" />
    </div>
  );
};

export default Settings;
