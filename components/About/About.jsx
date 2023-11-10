import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-40 bg-gray-50">
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src="https://picsum.photos/500/500"
          alt="Smiling front-end developer"
          className="w-64 h-64 rounded-full"
        />
        <h2 className="text-3xl font-bold text-gray-900">
          Front-end development: Where creativity meets innovation
        </h2>
        <p className="text-gray-600">
          Front-end developers are the artists and innovators of the web. They
          bring ideas to life through code, crafting user interfaces that are
          both beautiful and functional.
        </p>
        <p className="text-gray-600">
          We're passionate about creating exceptional user experiences, and
          we're always pushing the boundaries of design and technology.
        </p>
      </div>
      <Link to="education" className="inline-flex py-3 my-4 px-6 text-white font-medium bg-orange-700 rounded-lg hover:opacity-75">
  Education
</Link>
    </div>
  );
}
