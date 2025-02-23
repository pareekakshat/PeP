import React from 'react';
import { BookOpen, Users, Award, Clock, ClipboardCheck as ChalkboardTeacher, Brain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ChalkboardTeacher className="h-6 w-6" />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Small Batch Sizes',
      description: 'Limited students per batch ensuring personalized attention'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Comprehensive Study Material',
      description: 'Well-structured study materials covering complete syllabus'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Flexible Timings',
      description: 'Multiple batch options to suit different schedules'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Regular Assessments',
      description: 'Periodic tests and performance tracking'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Proven Track Record',
      description: 'Consistent results with high success rates'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose PeP?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We provide comprehensive education solutions with a focus on excellence and student success
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {feature.icon}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;