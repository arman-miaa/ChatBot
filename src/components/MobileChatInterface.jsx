import { ArrowLeft, Minus, Paperclip, Send } from "lucide-react";

const MobileChatInterface = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* iPhone Frame */}
      <div className="relative w-80 h-[700px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-pink-200 rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar & Header */}
          <div className="bg-pink-200 px-6 pt-4 pb-2">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>

            {/* Header */}
            <div className="flex items-center justify-between mt-8 mb-4">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
              <h1 className="text-xl font-semibold text-red-500">AmanBot</h1>
              <Minus className="w-6 h-6 text-gray-700" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 px-4 pb-20 space-y-4 overflow-y-auto">
            {/* Bot Message 1 */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm">
                  <p className="text-gray-800 text-sm">
                    What is your brand name sir? How do you want your chatbot
                    name to be appear?
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-2">Wed 6:55 AM</p>
              </div>
            </div>

            {/* User Message 1 */}
            <div className="flex items-end justify-end space-x-3">
              <div className="flex-1">
                <div className="bg-gray-200 rounded-2xl rounded-tr-md p-4 shadow-sm ml-12">
                  <p className="text-gray-800 text-sm">
                    My brand name is "AmanBot"
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right mr-2">
                  Wed 6:55 AM
                </p>
              </div>
              <img
                src="/placeholder.svg?height=40&width=40&text=User"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
            </div>

            {/* Bot Message 2 */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm">
                  <p className="text-gray-800 text-sm">
                    Perfect, on top you will see chatbot name changed to
                    "AmanBot"
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-2">Wed 6:55 AM</p>
              </div>
            </div>

            {/* User Message 2 */}
            <div className="flex items-end justify-end space-x-3">
              <div className="flex-1">
                <div className="bg-gray-200 rounded-2xl rounded-tr-md p-4 shadow-sm ml-12">
                  <p className="text-gray-800 text-sm">Thanks</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right mr-2">
                  Wed 6:55 AM
                </p>
              </div>
              <img
                src="/placeholder.svg?height=40&width=40&text=User"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
            </div>

            {/* Bot Message 3 */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm">
                  <p className="text-gray-800 text-sm">
                    What is your brand name sir? How do you want your chatbot
                    name to be appear?
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-2">Wed 6:55 AM</p>
              </div>
            </div>

            {/* User Message 3 */}
            <div className="flex items-end justify-end space-x-3">
              <div className="flex-1">
                <div className="bg-gray-200 rounded-2xl rounded-tr-md p-4 shadow-sm ml-12">
                  <p className="text-gray-800 text-sm">
                    My brand name is "AmanBot"
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right mr-2">
                  Wed 6:55 AM
                </p>
              </div>
              <img
                src="/placeholder.svg?height=40&width=40&text=User"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
            </div>

            {/* Bot Message 4 */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm">
                  <p className="text-gray-800 text-sm">
                    Perfect, on top you will see chatbot name changed to
                    "AmanBot"
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-2">Wed 6:55 AM</p>
              </div>
            </div>

            {/* User Message 4 */}
            <div className="flex items-end justify-end space-x-3">
              <div className="flex-1">
                <div className="bg-gray-200 rounded-2xl rounded-tr-md p-4 shadow-sm ml-12">
                  <p className="text-gray-800 text-sm">Thanks</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right mr-2">
                  Wed 6:55 AM
                </p>
              </div>
              <img
                src="/placeholder.svg?height=40&width=40&text=User"
                alt="User"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
            </div>
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 bg-pink-200 p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex-1 bg-white rounded-full px-4 py-3 flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Ask anything"
                  className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400"
                />
                <Paperclip className="w-5 h-5 text-gray-400" />
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-xs text-gray-600">
                Powered by{" "}
                <span className="text-red-500 font-semibold">
                  ESCAPEROOM PPC
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileChatInterface;
