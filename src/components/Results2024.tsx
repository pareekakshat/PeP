import React from 'react';
import { Trophy, Star, Award, TrendingUp } from 'lucide-react';

const Results2024 = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Outstanding Results 2024
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our students continue to excel and make us proud
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4">
                <div className="flex space-x-3 items-center">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <span className="text-2xl font-bold text-gray-900">Board Toppers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10"></div>
              <img
                src="/results-2024.jpg"
                alt="PeP Results 2024"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <Star className="h-6 w-6" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">12th Board</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">99%</p>
                <p className="mt-1 text-sm text-gray-500">Highest Score</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <Award className="h-6 w-6" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">10th Board</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">98%</p>
                <p className="mt-1 text-sm text-gray-500">Highest Score</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">8th Board</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">97%</p>
                <p className="mt-1 text-sm text-gray-500">Highest Score</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">Success Rate</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">100%</p>
                <p className="mt-1 text-sm text-gray-500">Overall Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results2024;