"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Emmanuel",
    avatar: "E",
    title: "Full Stack Developer",
    description: "This is the best application I've used.",
  },
  {
    name: "Maca",
    avatar: "MA",
    title: "Backend Developer",
    description: "User-centric and easy to use.",
  },
  {
    name: "Micheal",
    avatar: "MI",
    title: "ML Engineer",
    description: "Wonderful experience using this application.",
  },
  {
    name: "Samuel",
    avatar: "S",
    title: "Software Engineer",
    description: "IDAN!!!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-6">
              {testimonial.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
