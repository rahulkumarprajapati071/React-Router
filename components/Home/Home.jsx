import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ backgroundImage }) => {
    return (
      <div className="max-w-7xl mx-auto py-16 bg-gradient-to-b from-gray-100 to-gray-800">
        <div className="max-w-xl sm:mx-auto">
          <img
            className="w-full"
            src={backgroundImage}
            alt="Hero section background image"
          />
          <div className="text-center text-white font-medium">
            <h2 className="text-4xl sm:text-5xl">Embrace the Freedom of Remote Work</h2>
            <p className="py-8">Experience the flexibility and productivity gains that remote work offers.</p>
            <Link
              className="inline-flex py-3 px-6 text-white font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              Start Your Remote Work Journey Now
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  const FeatureSection = ({ features }) => {
    return (
      <div className="grid justify-items-center mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg p-6 md:p-12"
          >
            <img
              className="w-24 h-24 object-fit-cover rounded-full"
              src={feature.image}
              alt={feature.title}
            />
            <h4 className="text-lg font-medium">{feature.title}</h4>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  const TestimonialSection = ({ testimonials }) => {
    return (
      <div className="flex flex-col mt-20">
        <h2 className="text-center text-3xl font-medium">Testimonials from Satisfied Remote Workers</h2>
        <div className="mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg p-6 md:p-12"
            >
              <div className="quote-container">
                <div className="quote text-xl font-medium">{testimonial.quote}</div>
                <div className="quote-attribution">
                  <p className="text-gray-700">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const CallToActionSection = ({ title, buttonText }) => {
    return (
      <div className="flex justify-center mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-medium">{title}</h2>
          <Link
            className="inline-flex py-3 px-6 text-white font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    );
  };

const testimonials = [
    {
      quote: 'Remote work has given me the flexibility to travel and work from anywhere in the world.',
      name: 'John Doe',
      company: 'Software Engineer at Acme Corp',
    },
    {
      quote: 'I\'m so much more productive when I work remotely. I don\'t have to commute or deal with office distractions.',
      name: 'Jane Doe',
      company: 'Marketing Manager at Beta Corp',
    },
  ];
  
  const features = [
    {
      title: 'Flexibility and Freedom',
      description: 'Work from anywhere in the world, on your own schedule.',
      image: 'https://i.ibb.co/2M7rtLk/Remote1.png',
    },
    {
      title: 'Improved Work-Life Balance',
      description: 'Spend more time with your family and friends, and less time commuting.',
      image: 'https://i.ibb.co/5BCcDYB/Remote2.png',
    },
    {
      title: 'Increased Productivity',
      description: 'Get more done without the distractions of an office environment.',
      image: 'https://i.ibb.co/5BCcDYB/Remote2.png',
    },
  ];
  
  export default function Home() {
    return (
      <div className="mx-auto max-w-7xl py-16 bg-gray-100">
        <HeroSection backgroundImage="https://i.ibb.co/5BCcDYB/Remote2.png" />
        <FeatureSection features={features} />
        <TestimonialSection testimonials={testimonials} />
        <CallToActionSection title="Ready to start your remote work journey?" buttonText="Get Started Now" />
      </div>
    );
  }
