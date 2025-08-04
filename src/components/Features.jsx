import { Shield, MessageSquare, Lock, Zap, Bot } from "lucide-react";

import frameImg2 from "../assets/Frame1.png";
import frameImg4 from "../assets/Frame2.png";

import frameImg3 from "../assets/Frame5.png";
import logo from "../assets/logo.png";
import lockImg from "../assets/lockImg.png";
import ProgressGroup from "../shared/ProgressGroup";

const Features = () => {
  return (
    <div id="features" className="bg-black py-12 md:py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Feature & Benefits
        </h2>
        <p className="text-sm md:text-lg md:max-w-3xl mx-auto px-1 md:px-0 mb-12 text-gray-300">
          Make smarter decisions with powerful analytics and easy tools —
          designed to grow your reach and revenue, whether you're a fighter,
          promoter, or a fan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Free Trained Bot */}
          <div className="border border-gray-800 p-6 pt-24 md:pt-6 rounded-lg shadow-lg flex flex-col justify-between  md:min-h-[420px] text-left">
            <div>
              <ProgressGroup icon={logo} />
            </div>
            <div className="mt-auto pt-16 md:pt-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-2">
                Free Trained Bot
              </h3>
              <p className="text-gray-400 text-sm">
                Get a ready-to-use chatbot trained to handle common queries from
                day one.
              </p>
            </div>
          </div>

          {/* Card 2: Quick Setup */}
          <div className="border border-gray-800 p-6 pt-24 md:pt-6 rounded-lg shadow-lg flex flex-col justify-between  md:min-h-[420px] text-left">
            <div className="w-full h-40 flex items-center justify-center">
              <img
                src={frameImg2}
                alt=""
                className="w-30 h-30 object-contain"
              />
            </div>
            <div className="mt-auto pt-16 md:pt-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-2">
                Free Trained Bot
              </h3>
              <p className="text-gray-400 text-sm">
                Get a ready-to-use chatbot trained to handle common queries from
                day one.
              </p>
            </div>
          </div>

          {/* Card 3: Automatic AI Response */}
          <div className="border border-gray-800 p-2 md:p-6 pt-24 md:pt-6 rounded-lg shadow-lg flex flex-col justify-between  md:min-h-[420px] text-left">
            <div className="w-full bg-black text-white p-4 rounded-lg space-y-3">
              {/* AI Message */}
              <div className="flex items-start space-x-2 ">
                <div className=" rounded-2xl py-3 max-w-[95%]">
                  <span className="text-sm flex items-center gap-4 w-full text-gray-300">
                    <img src={logo} alt="" className="w-6 object-cover" />
                    <p className="text-[11px] md:text-[15px]">
                      {" "}
                      Do you want to change your brand logo icon sir?
                    </p>
                  </span>
                  <p className="text-[10px] text-gray-500 ml-7 md:ml-12">
                    Wed 6:55 AM
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-center justify-between">
                <div className=" rounded-2xl px-3 max-w-[90%]">
                  <span className="text-[11px] md:text-sm text-gray-300">
                    Is AI replying to me?
                  </span>
                </div>
                <div>
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="user"
                    className="w-8 h-8 rounded-full ml-2"
                  />
                </div>
              </div>
              <p className="text-right mr-12 text-[10px] text-gray-500 -mt-2">
                Wed 6:55 AM
              </p>

              {/* AI Response */}
              <div className="flex items-start space-x-2">
                <div className=" rounded-2xl  max-w-[95%]">
                  <span className="text-sm flex items-center gap-4 text-gray-300">
                    <img src={logo} alt="" className="w-6 object-cover" />
                    <p className="text-[11px] md:text-[15px]">
                      {" "}
                      Yes, this is AI replying to you
                    </p>
                  </span>
                  <p className="text-[10px] text-gray-500 ml-7 md:ml-12">
                    Wed 6:55 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-16 md:pt-6 p-4">
              <h3 className="text-xl font-semibold mb-4 md:mb-2">
                Automatic AI Response
              </h3>
              <p className="text-gray-400 text-sm">
                Let the AI handle conversations and respond to users in
                real-time, 24/7.
              </p>
            </div>
          </div>

          {/* Card 4: Advance Data Analytics */}
          <div className="border border-gray-800 p-6 pt-20 md:pt-6 rounded-lg shadow-lg flex flex-col justify-between  md:min-h-[420px] text-left">
            <div className="w-full  flex items-center justify-center overflow-hidden p-">
              <img src={frameImg3} alt="" className="w-full h-46 object-fit" />
            </div>
            <div className="mt-auto pt-8 md:pt-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-2">
                Advance Data Analytics
              </h3>
              <p className="text-gray-400 text-sm">
                Track performance and user behavior with actionable insights and
                reports.
              </p>
            </div>
          </div>

          {/* Card 5: Integration */}
          <div className="border border-gray-800 p-6 pt-24 md:pt-6 rounded-lg shadow-lg flex flex-col justify-between  md:min-h-[420px] text-left">
            <div className="w-full flex items-center justify-center">
              <img
                src={frameImg4}
                alt=""
                className="w-30 h-30 object-contain"
              />
            </div>
            <div className="mt-auto pt-16 md:pt-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-2">
                Integration
              </h3>
              <p className="text-gray-400 text-sm">
                Seamlessly connect with your favorite tools while keeping your
                data protected.
              </p>
            </div>
          </div>

          {/* Card 6: Security & Privacy */}
          <div className="border border-gray-800 p-6 pt-24 md:pt-6 rounded-lg shadow-lg flex flex-col justify-between  md:min-h-[420px] text-left">
            <div>
              <ProgressGroup icon={lockImg} />
            </div>
            <div className="mt-auto pt-16 md:pt-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-2">
                Security & Privacy
              </h3>
              <p className="text-gray-400 text-sm">
                Enterprise-grade security ensures your data stays private and
                compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
