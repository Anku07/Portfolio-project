import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-700 mb-6">Resume</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          {/* Summary Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Summary</h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="border-l-2 border-blue-600 pl-6 pb-6">
                <h3 className="text-xl font-bold text-gray-700">BRANDON JOHNSON</h3>
                <p className="text-gray-600 italic mt-2">
                  Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Education</h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="border-l-2 border-blue-600 pl-6 pb-6">
                <h3 className="text-xl font-bold text-gray-700">MASTER OF FINE ARTS & GRAPHIC DESIGN</h3>
                <p className="text-gray-600 mt-2">2015 - 2016</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div>
          {/* Professional Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Professional Experience</h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="border-l-2 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-700">SENIOR GRAPHIC DESIGN SPECIALIST</h3>
                <p className="text-gray-600 mt-1">2019 - Present</p>
                <p className="text-gray-600 italic mt-1">Experion, New York, NY</p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
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