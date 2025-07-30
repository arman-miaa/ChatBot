import React from "react";

// A reusable TestimonialCard component
const TestimonialCard = ({
  avatar,
  name,
  title,
  testimonial,
  additionalText,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left border border-gray-100">
    <div className="flex items-center mb-4">
      {/* Avatar Placeholder - replace with actual image */}
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-lg mr-4">
          {name.charAt(0)}
        </div>
      )}
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
    <p className="text-gray-700 text-base mb-4">{testimonial}</p>
    {additionalText && (
      <p className="text-gray-500 text-sm mt-auto">{additionalText}</p>
    )}
  </div>
);

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
        <p className="text-lg text-gray-600 mb-12">
          Some of the most asked questions from the world
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard
            avatar="/path/to/avatar-zero-rocha.png" // Replace with actual image path
            name="Zero Rocha"
            title="CEO, Resend"
            testimonial="This is a must-have if you're building any kind of developer tools. We used other options in the past, which feels outdated in terms of look & feel when compared to Mintlify. The team helped us set up two different websites and even migrated all the content for us. I can't recommend it enough."
          />

          {/* Testimonial 2 */}
          <TestimonialCard
            avatar="/path/to/avatar-chaun-jiang.png" // Replace with actual image path
            name="Chaun Jiang"
            title="CEO, Monterey AI"
            testimonial="Absolutely the best. It is thinking easy to setup, and the team has been great to work with!"
          />

          {/* Testimonial 3 */}
          <TestimonialCard
            avatar="/path/to/avatar-guy-kim.png" // Replace with actual image path
            name="Guy Kim"
            title="CEO, Veros"
            testimonial="The Mintlify team absolutely nailed combining docs search and AI/QA in a delightful experience."
          />

          {/* Testimonial 4 */}
          <TestimonialCard
            avatar="/path/to/avatar-adam-corrigan.png" // Replace with actual image path
            name="Adam Corrigan"
            title="Co-Founder, MindsDB"
            testimonial="My team loves Mintlify! Great product and a super supportive team."
          />

          {/* Testimonial 5 */}
          <TestimonialCard
            avatar="/path/to/avatar-charity-pety.png" // Replace with actual image path
            name="Charity Pety"
            title="CEO, Defer"
            testimonial="Why spend a week coding your own documentation just optimizing it for SEO, design, etc.? I use Mintlify! Brings you the best in data documentation in a few minutes! We have our documentation for years, in Unicorns and open source and I'm sold!"
          />

          {/* Testimonial 6 */}
          <TestimonialCard
            avatar="/path/to/avatar-vlad-matsikou.png" // Replace with actual image path
            name="Vlad Matsikou"
            title="Co-Founder, Inbical"
            testimonial="Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!"
          />

          {/* Testimonial 7 (Duplicate of 1 based on image) */}
          <TestimonialCard
            avatar="/path/to/avatar-ashley-mulligan.png" // Replace with actual image path
            name="Ashley Mulligan"
            title="Head of Product Engineering, Hattie"
            testimonial="Mintlify was the only option that checked all the boxes. To get the look, feel, and features we wanted for our documentation, it had to be homegrown or Mintlify."
          />

          {/* Testimonial 8 (Duplicate of 2 based on image) */}
          <TestimonialCard
            avatar="/path/to/avatar-mark-bao.png" // Replace with actual image path
            name="Mark Bao"
            title="Co-Founder, Goody"
            testimonial="The way Mintlify's docs were displayed just felt really user-friendly to us, and more importantly for our developer customers. Heli Lab! I had finally found a tool that could give us the Stripe-level documentation we wanted."
          />

          {/* Testimonial 9 (Duplicate of 3 based on image) */}
          <TestimonialCard
            avatar="/path/to/avatar-malayan-salois.png" // Replace with actual image path
            name="Malayan Salois"
            title="Co-Founder, Elementary"
            testimonial="Mintlify is amazing for set up even a small team and so organized to keep up with the changes and API docs changes. Now all docs are managed as code and part of the web dev process and PR. As an open source project—moving docs to the repo (with zero effort) also enabled our community to help us maintain and fix problems as contributors. Our devs and our users love it."
          />

          {/* Testimonial 10 (Duplicate of 1 based on image) */}
          <TestimonialCard
            avatar="/path/to/avatar-zero-rocha.png" // Replace with actual image path
            name="Zero Rocha"
            title="CEO, Resend"
            testimonial="This is a must-have if you're building any kind of developer tools. We used other options in the past, which feels outdated in terms of look & feel when compared to Mintlify. The team helped us set up two different websites and even migrated all the content for us. I can't recommend it enough."
          />

          {/* Testimonial 11 (Duplicate of 2 based on image) */}
          <TestimonialCard
            avatar="/path/to/avatar-adam-corrigan.png" // Replace with actual image path
            name="Adam Corrigan"
            title="Co-Founder, MindsDB"
            testimonial="My team loves Mintlify! Great product and a super supportive team."
          />

          {/* Testimonial 12 (Duplicate of 3 based on image) */}
          <TestimonialCard
            avatar="/path/to/avatar-ashley-mulligan.png" // Replace with actual image path
            name="Ashley Mulligan"
            title="Head of Product Engineering, Hattie"
            testimonial="Mintlify was the only option that checked all the boxes. To get the look, feel, and features we wanted for our documentation, it had to be homegrown or Mintlify."
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
