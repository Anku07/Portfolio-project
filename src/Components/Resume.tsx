import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-700 mb-6">Resume</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Finding job for web development role because I bring combination of
          technical expertise, creativity, and a strong work ethic to deliver
          high quality, innovitive solutions that meet and exceeds project
          requirment.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Summary
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="border-l-2 border-blue-600 pl-6 pb-6">
                <h3 className="text-xl font-bold text-gray-700">
                  ANKITA SINGH
                </h3>
                <p className="text-gray-600 italic mt-2">
                  Innovative and deadline-driven front-end developer with 3
                  month of experience designing and developing user-centered,
                  user-friendly UI design.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>Pratapgarh, Uttar pradesh</li>
                  <li>(123) 456-7891</li>
                  <li>as19961107@gmail.com</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Education
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="border-l-2 border-blue-600 pl-6 pb-6">
                <h3 className="text-xl font-bold text-gray-700">
                  Graduation in Information Technology
                </h3>
                <p className="text-gray-600 mt-2">2015 - 2019</p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Professional Experience
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="border-l-2 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-700">
                  Intern as a full Stack developer
                </h3>
                <p className="text-gray-600 mt-1">
                  September 2024 - November 2024
                </p>
                <p className="text-gray-600 italic mt-1">Noida</p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>
                    Completed a Flask assignment to develop backend
                    functionality for contact management, focusing on secure
                    REST API creation and user authentication.
                  </li>
                  <li>
                    Enhanced application scalability and performance by
                    implementing backend best practices and collaborating
                    closely with team members.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
