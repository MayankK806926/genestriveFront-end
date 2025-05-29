import React from 'react';
import SupportIcon from '../assets/supp.png';
import ContactIcon from '../assets/image.png'; 
import FAQAccordion from '../components/support/FAQItem';
import CommunityCard from '../components/support/CommunityCard';

const Support = () => {
  return (
    <div className="bg-[#001E32] text-white min-h-screen">
      <main className="px-6 md:px-20 pt-6 md:pt-8 pb-12">

       
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-12">
          
          <div className="flex-1">
            <h1 className="text-[38px] md:text-[52px] font-regular mb-2">
              TESTWALE.AI SUPPORT
            </h1>
            <p className="text-[16px] md:text-[18px] max-w-2xl font-light leading-relaxed mb-8">
              This is the official page of Testwale.ai, where you can share all your queries,
              feedback, complaints, or any concern you may have about our courses and programs.
            </p>

            <div className="flex items-start gap-4">
              <img
                src={ContactIcon}
                alt="Contact Icon"
                className="w-28 h-24 md:w-[120px] md:h-[100px]"
              />
              <div>
                <p className="text-lg md:text-4xl font-regular mb-3">Contact Us</p>
                <p className="text-sm md:text-2xl font-light mb-2">+91 xxxxxxxxxx</p>
                <p className="text-sm md:text-2xl font-light">somethingsomething@email.com</p>
              </div>
            </div>
          </div>

          {/* Right Icon */}
          <div className="flex-shrink-0">
            <img
              src={SupportIcon}
              alt="Support Icon"
              className="w-72 h-72 md:w-[720px] md:h-[720px]"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <hr className="border-white-1000 mb-20" />
        <h2 className="text-7xl font-semibold  mb-20 text-center">FAQ’s</h2>
        <div className="space-y-4 mb-16">
          <FAQAccordion question="How do I reset my password?" answer="Click on ‘Forgot Password’ and follow the steps." />
          <FAQAccordion question="Can I access Testwale.ai on mobile?" answer="Yes, our platform is fully responsive and works on all devices." />
          <FAQAccordion question="What grade levels are supported?" answer="We support students from Grade 1 to 12." />
          <FAQAccordion question="Is personalized content available?" answer="Yes! Our AI adapts the experience to your learning style." />
        </div>

        {/* Community Section */}
        <h2 className="text-7xl font-semibold mb-20 text-center">Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <CommunityCard key={n}>
              <p>Card {n}</p>
            </CommunityCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Support;
