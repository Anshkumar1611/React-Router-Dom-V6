import React from "react";
import Button from "./Button";

const Blog = () => {
  return (
    <div>
      <p>Blog</p>
      <Button text="Logout" type="logout" url="/login"/>
    </div>
  );
};

export default Blog;
