const Features = () => {
  return (
    <div className="bg-black py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Feature & Benefits</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Make smarter decisions with powerful analytics and easy tools —
          designed to grow your reach and revenue, whether you’re a fighter,
          promoter, or a fan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Insights at your fingertips (top left) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start text-left">
            {/* Placeholder for the graph image */}
            <div className="w-full h-40 bg-gray-800 rounded-md mb-4 flex items-center justify-center overflow-hidden">
              {/* This is a simplified SVG representation of the graph,
                  you would typically use an actual image or a more complex chart library here. */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 140 C 60 80, 120 120, 170 60 C 220 10, 270 90, 290 50"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M10 120 C 60 60, 120 100, 170 40 C 220 -10, 270 70, 290 30"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Insights at your fingertips
            </h3>
            <p className="text-gray-400 text-sm">
              All your data and finances in one place to providing quick answers
              and make decisions instantly.
            </p>
          </div>

          {/* Card 2: Manage in real time (top middle) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start text-left">
            {/* Placeholder for the hand image with circular interaction */}
            <div className="w-full h-40 bg-gray-800 rounded-md mb-4 flex items-center justify-center overflow-hidden">
              {/* Simplified visual for the hand and interaction, you'd use a background image */}
              <img
                src="path/to/your/manage-in-realtime-image.png"
                alt="Manage in real time"
                className="w-full h-full object-cover opacity-70"
              />
              {/* If you don't have the image, you can use a placeholder like this: */}
              {/* <div className="absolute w-24 h-24 rounded-full border-2 border-white opacity-50 animate-ping"></div>
              <div className="absolute w-20 h-20 rounded-full border-2 border-white opacity-80"></div>
              <p className="text-sm">Image Placeholder</p> */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Manage in real time</h3>
            <p className="text-gray-400 text-sm">
              Have full control of your business finances on the go using our
              iOS/Android mobile apps. Because, you know it’s 2025.
            </p>
          </div>

          {/* Card 3: Important business alerts (top right) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start text-left">
            <div className="w-full h-40 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
              {/* No specific image, just a dark placeholder */}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Important business alerts
            </h3>
            <p className="text-gray-400 text-sm">
              Choose the alerts you need and receive them via email, mobile or
              Slack. Review and take action in real-time.
            </p>
          </div>

          {/* Card 4: Insights at your fingertips (bottom left) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start text-left">
            {/* Placeholder for the graph image (repeated) */}
            <div className="w-full h-40 bg-gray-800 rounded-md mb-4 flex items-center justify-center overflow-hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 140 C 60 80, 120 120, 170 60 C 220 10, 270 90, 290 50"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M10 120 C 60 60, 120 100, 170 40 C 220 -10, 270 70, 290 30"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Insights at your fingertips
            </h3>
            <p className="text-gray-400 text-sm">
              All your data and finances in one place to providing quick answers
              and make decisions instantly.
            </p>
          </div>

          {/* Card 5: Manage in real time (bottom middle) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start text-left">
            {/* Placeholder for the hand image with circular interaction (repeated) */}
            <div className="w-full h-40 bg-gray-800 rounded-md mb-4 flex items-center justify-center overflow-hidden">
              <img
                src="path/to/your/manage-in-realtime-image.png"
                alt="Manage in real time"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Manage in real time</h3>
            <p className="text-gray-400 text-sm">
              Have full control of your business finances on the go using our
              iOS/Android mobile apps. Because, you know it’s 2025.
            </p>
          </div>

          {/* Card 6: Important business alerts (bottom right) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start text-left">
            <div className="w-full h-40 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
              {/* No specific image, just a dark placeholder */}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Important business alerts
            </h3>
            <p className="text-gray-400 text-sm">
              Choose the alerts you need and receive them via email, mobile or
              Slack. Review and take action in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
