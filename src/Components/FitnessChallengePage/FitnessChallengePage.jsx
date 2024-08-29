import React from 'react';

const FitnessChallengePage = () => {
  return (
    
    <div id='details' className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-6">
          15-Day Fitness Challenge for Women
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Transform Your Body in Just Two Weeks!</h2>
          <p className="text-gray-600">
            Join our transformative 15-Day Fitness Challenge designed specifically for women. 
            This program combines personalized fitness and nutrition plans to help you achieve your health goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FeatureCard 
            icon="💪"
            title="Personalized Fitness Plans"
            description="Tailored exercise routines based on your fitness level and goals."
          />
          <FeatureCard 
            icon="✅"
            title="Daily Workouts"
            description="Structured workouts to keep you motivated and on track."
          />
          <FeatureCard 
            icon="🥗"
            title="Nutritional Guidance"
            description="Expert nutrition advice and meal plans to support your fitness journey."
          />
          <FeatureCard 
            icon="💬"
            title="Ongoing Support"
            description="Access to a dedicated WhatsApp group for real-time guidance and motivation from professional nutritionists."
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg font-semibold mb-4">Price: 1000 INR for 15 days</p>
          <a href='https://wa.me/+919526622809' target='_black' className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Join the Challenge
          </a>
          <p className="text-sm text-gray-600 mt-4">
            Limited spots available. Start your transformation today!
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center space-x-4 mb-4">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FitnessChallengePage;