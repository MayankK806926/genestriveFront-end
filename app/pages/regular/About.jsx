import React from "react";
import Image from "next/image";
import AboutIcon from "./assets/about.png";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Navbar2/>
    <div className="bg-[#F4F8FB]">
      <main className="px-6 md:px-20 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <Image
            src={AboutIcon}
            alt="About Us"
            className="w-72 h-72 md:w-[720px] md:h-[720px]"
          />
          <div className="md:ml-auto max-w-2xl text-center">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#2F2F68] mb-4">
              About Us
            </h1>
            <p className="text-[20px] md:text-[24px] text-gray-800 leading-relaxed text-left">
              Testwale.ai is a cutting-edge, AI-powered exam preparation
              platform designed specifically for students from Grade 1 to Grade
              12. <br />
              Founded in the United States by Indian entrepreneur Anuj Mishra,
              our mission is to make personalized, intelligent, and accessible
              education a reality for every learner, regardless of geography or
              background.
            </p>
          </div>
        </div>

        {/* WHY US Section */}
        <h2 className="text-[36px] md:text-[48px] font-bold text-center text-[#2F2F68] mb-12">
          WHY US?
        </h2>

        <div className="bg-[#001E32] text-white rounded-xl px-6 md:px-16 py-12 text-[18px] md:text-[24px] leading-relaxed max-w-6xl mx-auto">
          <p className="mb-6">
            At Testwale.ai, we believe that every student learns differently.
            Our platform leverages the power of artificial intelligence to
            provide an adaptive learning experience that evolves based on a
            student's performance, learning style, and goals.
          </p>
          <p className="mb-6">Key features of Testwale.ai include:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Curriculum-aligned practice resources for all major subjects
            </li>
            <li>
              Smart mock tests dynamically tailored to the learner’s strengths
              and weaknesses
            </li>
            <li>
              Detailed performance insights and progress tracking — actionable
              feedback and personalized study recommendations
            </li>
            <li>
              A simple and intuitive user interface that makes learning
              enjoyable and efficient
            </li>
          </ul>
          <p className="mb-6">
            Our team of educators, engineers, and data scientists is committed
            to redefining how students prepare for school exams and competitive
            assessments. We are passionate about bridging learning gaps with
            technology and giving students the tools they need to succeed — both
            inside and outside the classroom.
          </p>
          <p>
            Testwale.ai is more than a learning tool; it's a trusted study
            companion. By making high-quality, AI-enabled education accessible,
            we aim to empower the next generation of thinkers, leaders, and
            innovators. Join us as we transform the future of K–12 learning —
            one smart student at a time.
          </p>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default About;