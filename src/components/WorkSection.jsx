import { BsPatchCheck } from "react-icons/bs";
import workImg1 from "../assets/workImg1.png"
import workImg2 from "../assets/workImg2.png"
import workImg3 from "../assets/workImg3.png"

const WorkSection = () => {
  return (
    <div id="howto" className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-[#333333] max-w-2xl mx-auto text-lg">
            Make smarter decisions with powerful analytics and easy tools —
            designed to grow your reach and revenue, whether you're a fighter,
            promoter, or a fan.
          </p>
        </div>

        {/* Step 1 - Install the bot */}
        <div className="flex flex-col lg:flex-row items-center gap-36 mb-20">
          <div className="flex-1">
            <h3 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4">
              Install the bot on your website
            </h3>
            <p className="text-gray-600 mb-6 text-2xl">
              Get started in minutes—no technical skills needed. Our chatbot can
              be added to your site with just a few clicks. Fast, simple, and
              hassle-free setup.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                No coding required
              </li>
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Works with any website
              </li>
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Set up in under 5 minutes
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-lg  p-6">
              <img
                src={workImg1}
                alt="Chatbot installation interface"
                className="w-full h-auto rounded-lg "
              />
            </div>
          </div>
        </div>

        {/* Step 2 - Choose your plan */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
          <div className="flex-1">
            <h3 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4">
              Choose your plan
            </h3>
            <p className="text-gray-600 mb-6 text-2xl">
              Pick a plan that fits your business goals. Whether you're just
              starting or scaling up, we've got flexible options for every need.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Free and premium plans available
              </li>
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Cancel or upgrade anytime
              </li>
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Transparent, no hidden fees
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-coral-400 to-coral-500 rounded-lg p-8 text-white">
              <img
                src={workImg2}
                alt="Pricing plans interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Step 3 - Customize the chatbot */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4">
              Customize the chatbot
            </h3>
            <p className="text-gray-600 mb-6 text-2xl">
              Make the chatbot your own. Tailor its responses, look, and
              behavior to match your brand and meet your customer needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Personalize chat flow and design
              </li>
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Add FAQs, greetings, and scripts
              </li>
              <li className="flex items-center gap-1 text-gray-700">
                <BsPatchCheck className="text-primaryColor" />
                Advanced training with premium plans
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-lg  p-6">
              <img
                src={workImg3}
                alt="Chatbot customization interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

