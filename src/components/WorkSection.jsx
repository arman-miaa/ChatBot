const WorkSection = () => {
  return (
    <div id="howto" className="py-16  text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">How it works</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Make smarter decisions with powerful analytics and easy tools —
          designed to grow your reach and revenue, whether you’re a fighter,
          promoter, or a fan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-start text-left">
            <span className="text-red-500 text-5xl font-bold mb-4">01</span>
            <h3 className="text-2xl font-semibold mb-4">
              Install the bot on your website
            </h3>
            <p className="text-gray-400 mb-6">
              Stay updated on your favorite fighters. Track campaigns in
              real-time and make smarter purchase decisions.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Support your favourite fighters directly.</li>
              <li>Buy fight night tickets with ease.</li>
              <li>Unlock exclusive early ticket offers.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-start text-left">
            <span className="text-red-500 text-5xl font-bold mb-4">02</span>
            <h3 className="text-2xl font-semibold mb-4">Choose your plan</h3>
            <p className="text-gray-400 mb-6">
              Reach more fans and boost your ticket sales with real-time
              insights, smart tools, and fighter collaborations.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Track your ticket sales live in real-time.</li>
              <li>Collaborate with fighters instantly.</li>
              <li>Promote events effortlessly online.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-start text-left">
            <span className="text-red-500 text-5xl font-bold mb-4">03</span>
            <h3 className="text-2xl font-semibold mb-4">
              Customize the chatbot
            </h3>
            <p className="text-gray-400 mb-6">
              Increase earnings, gain exposure, and track sales with Combat Tix.
              Connect with fans and promote fights easily.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Promote your events and grow your fanbase.</li>
              <li>Track sales and earnings in real-time.</li>
              <li>Maximize your earnings per fight.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
