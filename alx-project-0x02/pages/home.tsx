import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div>
      <h1>
        Welcome
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <Card
            title={"Escape the Ordinary"}
            content={
              "Discover hidden places and unique experiences that turn your journey into an adventure."
            }
          />
          <Card
            title={"Live Where You Love"}
            content={
              "Find cozy apartments, scenic villas, or affordable stays in the places you adore most."
            }
          />
          <Card
            title={"Smart Living Starts Here"}
            content={
              "Browse modern homes with intelligent design, built for comfort and efficiency."
            }
          />
        </div>
      </h1>
    </div>
  );
};

export default Home;
