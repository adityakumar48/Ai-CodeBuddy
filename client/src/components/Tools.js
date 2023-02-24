import React from "react";
import Card from "./Card";

const Tools = () => {
  return (
    <div>
      <div className="text-center text-3xl font-bold my-5">Tools</div>
      <div className="flex flex-wrap">
        <Card
          title="Code Error Finder"
          icon="logo-react"
          description="   It Analysis the code and find the error in the code. It is a very
            useful tool for the developer."
          link="/code-error-finder"
        />
        <Card
          title="Complexity Finder"
          icon="basketball-outline"
          description="It Analysis Code And Find The Complexity Of The Code. "
          link="/check-complexity"
        />
        <Card
          title="Add Comments "
          icon="compass-outline"
          description="   It Analysis the code and add commentws in your code."
          link="/add-comments"
        />
        <Card
          title="Summarize Code"
          icon="cellular-outline"
          description="   It Analysis the code and summarize the code. It is a very useful tool for the developer."
          link="/summarize-code"
        />
        <Card
          title="Article Generator"
          icon="logo-react"
          description="Its a tool that generates article for you. It is a very useful tool for the developer."
          link="/article-generator"
        />
      </div>
    </div>
  );
};

export default Tools;
