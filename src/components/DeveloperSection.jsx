import React from "react";
import previewImage from "../assets/images/previewImage.png";
import portfolioImage from "../assets/images/portfolio.png";
import developmentImage from "../assets/images/development.png";
import supportiveImage from "../assets/images/supportive.png";

const DeveloperSection = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 pt-8 lg:pt-12 pb-16 space-y-12">
        <h1 className="text-2xl md:text-3xl text-gray-900 text-center font-bold">
          Why developers choose Frontend Mentor
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 lg:mr-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Move beyond passive learning
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Stop watching and start creating. Build professional-quality
              projects that develop genuine coding skills through hands-on
              practice.
            </p>
          </div>

          <div className="relative max-w-full lg:max-w-lg mx-auto lg:mx-0 lg:ml-12">
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-auto object-cover relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-8 lg:pt-12 pb-16 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative max-w-full lg:max-w-lg mx-auto lg:mx-0 lg:ml-12">
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={portfolioImage}
                  alt="Portfolio"
                  className="w-full h-auto object-cover relative"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 lg:mr-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Create a portfolio that gets you hired
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Build impressive projects with professional designs. Recruiters
              tell us these portfolio pieces consistently "wow" them in
              interviews by demonstrating real-world capabilities.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pt-8 lg:pt-12 pb-16 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 lg:mr-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Master AI-powered development workflows
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Practice with AI tools that 76% of developers use daily. Learn to
              work effectively with Cursor, GitHub Copilot, ChatGPT, and other
              assistants while maintaining code quality and problem-solving
              skills
            </p>
          </div>

          <div className="relative max-w-full lg:max-w-lg mx-auto lg:mx-0 lg:ml-12">
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={developmentImage}
                  alt="Preview"
                  className="w-full h-auto object-cover relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pt-8 lg:pt-12 pb-16 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative max-w-full lg:max-w-lg mx-auto lg:mx-0 lg:ml-12">
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={supportiveImage}
                  alt="Portfolio"
                  className="w-full h-auto object-cover relative"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 lg:mr-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Join a supportive developer community
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Connect with peers for code reviews, career advice, and
              friendship. Beat imposter syndrome alongside developers who
              understand your journey, guided by mentors who've walked this
              path.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeveloperSection;
