// components/FAQSection.tsx
const faqData = [
  {
    question: "How easy is it to set up the chatbot on my website?",
    answer:
      "There are a few states that require a registration fee however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
  },
  {
    question: "Can I train the chatbot to suit my business needs?",
    answer:
      "There are a few states that require a registration fee however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
  },
  {
    question: "How do I integrate the bot with other platforms?",
    answer:
      "There are a few states that require a registration fee however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
  },
  {
    question: "How do I integrate the bot with other platforms?",
    answer:
      "There are a few states that require a registration fee however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
  },
  {
    question: "How do I integrate the bot with other platforms?",
    answer:
      "There are a few states that require a registration fee however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-2">FAQ</h2>
      <p className="text-center text-gray-500 mb-8">
        Some of the most asked questions from the world
      </p>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 p-4 rounded-md bg-white shadow-sm"
          >
            <h3 className="font-semibold mb-2 text-black">{item.question}</h3>
            <p className="text-gray-600 text-sm">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
