import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "app/components/ui/card";
const Post = () => {
  const jobs = [
    {
      title: "UI - Front End Dev",
      desc: "Currently, ManTech is seeking a motivated, career and customer-oriented Software Developer to join our team in Fort Meade, MD.",
      date: "May 17, 2022",
      salary: "98,000 USD",
      type: "Full-time",
      location: "Columbia, MD",
      href: "javascript:void(0)",
    },
    {
      title: "Back End Developer",
      desc: " Help us solve problems and develop great user interface tools for our developers.",
      date: "Nov 11, 2022",
      salary: "$105,000 USD",
      type: "Part-time",
      location: "Remote",
      href: "javascript:void(0)",
    },
    {
      title: "Full-Stack Developer",
      desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
      date: "Jan 2, 2022",
      salary: "163,273 USD",
      type: "Full-time",
      location: "Remote",
      href: "javascript:void(0)",
    },
    {
      title: "Full-Stack Developer",
      desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
      date: "Jan 2, 2022",
      salary: "163,273 USD",
      type: "Full-time",
      location: "Remote",
      href: "javascript:void(0)",
    },
    {
      title: "Full-Stack Developer",
      desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
      date: "Jan 2, 2022",
      salary: "163,273 USD",
      type: "Full-time",
      location: "Remote",
      href: "javascript:void(0)",
    },
  ];
  return (
    <div>
      <section className="max-w-screen-lg mx-auto  md:px-8">
        <ul className="mt-8 md:mt-auto space-y-6">
          {jobs.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>{item.title}</CardHeader>
              <CardContent>{item.desc}</CardContent>
            </Card>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Post;
