import Intro from "@/components/intro";
import MySkills from "@/components/myskills";
import RecentProjects from "@/components/recentProjects";
import React from "react";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl overflow-x-hidden">
        <Intro />
        <RecentProjects />
        <MySkills />
      </div>
    </section>
  );
}
