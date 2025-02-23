import React from 'react';
import { BookOpen, Award, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      category: 'CBSE',
      classes: ['Class 8th', 'Class 10th', 'Class 12th'],
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      category: 'RBSE',
      classes: ['Class 8th', 'Class 10th', 'Class 12th'],
      icon: <Award className="h-6 w-6" />,
      color: 'bg-green-500'
    },
    {
      category: 'Competitive Exams',
      classes: ['JEE Main', 'NEET', 'NTSE'],
      icon: <Star className="h-6 w-6" />,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Courses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive preparation for board and competitive examinations
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${course.color} p-6 flex items-center justify-center`}>
                <div className="h-12 w-12 text-white">
                  {course.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.category}</h3>
                <ul className="space-y-3">
                  {course.classes.map((className, classIndex) => (
                    <li key={classIndex} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></span>
                      {className}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;