import React from 'react';

const FAQItem = ({ question, answer }) => (
  <details className="bg-[#D9D9D9] text-black rounded-md px-4 py-3 cursor-pointer">
    <summary className="font-semibold">{question}</summary>
    <p className="mt-2 text-sm">{answer}</p>
  </details>
);

export default FAQItem;
