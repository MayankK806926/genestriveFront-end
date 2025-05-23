import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { SimpleStepsSection } from "./sections/SimpleStepsSection";
import Link from 'next/link';

export const LandingPage = () => {
  // Testimonial data for mapping
  const testimonials = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Navigation Bar */}
        <NavigationBarSection />

        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Simple Steps Section */}
        <SimpleStepsSection />

        {/* Testimonials Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-[#2f2f68] text-center mb-4">
            Words from our Students
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[259px] h-[343px] rounded-[20px] border border-[#5e2f7c] flex flex-col items-center p-4"
              >
                <div className="w-[90px] h-[90px] bg-[#d9d9d9] rounded-full mt-6" />
                {/* Content for testimonial would go here */}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full mt-8 mb-8">
          <img
            src="https://c.animaapp.com/mayyh5h2tfkjUe/img/footer.png"
            alt="Footer"
            className="w-full h-auto object-cover"
          />
        </footer>

        <div className="flex gap-4 justify-center mb-8">
          <Link href="/login" className="no-underline">
            <button className="bg-[#5e2f7c] text-white px-6 py-2 rounded-full hover:bg-[#4a2563] transition-colors">
              Login
            </button>
          </Link>

          <Link href="/signup" className="no-underline">
            <button className="bg-[#5e2f7c] text-white px-6 py-2 rounded-full hover:bg-[#4a2563] transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
