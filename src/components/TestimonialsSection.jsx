import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/testimonials.json");
        const data = await response.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicated = [...testimonials, ...testimonials];

  // Split into 6 columns, each column has 3 cards
  const cols = Array.from({ length: 6 }, (_, i) =>
    duplicated.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className="py-16 px-4 overflow-hidden bg-gray-50">
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Some of the most asked questions from the world
        </p>
      </div>

      {/* Horizontal marquee with columns */}
      <div className="overflow-hidden">
        <div
          className="flex w-max space-x-4"
          style={{
            animation: `scrollLeft 40s linear infinite`,
          }}
        >
          {[...cols, ...cols].map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-4 w-80">
              {col.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className=" rounded-3xl p-6 border border-gray-100 "
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
