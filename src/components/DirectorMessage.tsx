import React from 'react';
import { Target, Star } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src="/director-komal.jpg"
                alt="Director Komal Pareek"
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="font-semibold">Director</p>
              <p className="text-sm opacity-90">Komal Pareek</p>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Director's Message
              </h2>
              <div className="mt-6 text-lg text-gray-600 space-y-6">
                <p>
                  "Welcome to Pareek Education Paradise, where we believe in nurturing not just students, 
                  but future leaders. Our commitment goes beyond academic excellence – we focus on 
                  holistic development that prepares students for life's challenges."
                </p>
                <p>
                  "Our vision is to create an educational ecosystem where every student can thrive, 
                  discover their potential, and achieve their dreams. We combine traditional values 
                  with modern teaching methodologies to ensure comprehensive learning."
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Target className="h-8 w-8 text-indigo-600 mx-auto" />
                  <h3 className="mt-2 font-semibold text-gray-900">Our Mission</h3>
                  <p className="mt-2 text-sm text-gray-600">Empowering students through quality education</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Star className="h-8 w-8 text-indigo-600 mx-auto" />
                  <h3 className="mt-2 font-semibold text-gray-900">Our Vision</h3>
                  <p className="mt-2 text-sm text-gray-600">Creating future leaders and innovators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;