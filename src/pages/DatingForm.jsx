import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormInput = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block text-white text-sm font-medium mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
    />
  </div>
);

export const DatingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    location: '',
    interests: '',
    gender: '',
    lookingFor: '',
    bio: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80')`
      }}
    >
      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-lg bg-black/30 border border-white/10 shadow-xl">
        <div className="flex items-center justify-center mb-8">
          <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          <h2 className="text-3xl font-bold text-white ml-3">Find Love</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <FormInput
            label="Age"
            name="age"
            type="number"
            placeholder="Your age"
            value={formData.age}
            onChange={handleChange}
            required
            min="18"
          />

          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              required
            >
              <option className = "text-black" value="">Select gender</option>
              <option className = "text-black" value="male">Male</option>
              <option className = "text-black" value="female">Female</option>
              <option className = "text-black" value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Looking For</label>
            <select
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              required
            >
              <option className = "text-black" value="">Select preference</option>
              <option className = "text-black" value="men">Men</option>
              <option className = "text-black" value="women">Women</option>
              <option className = "text-black"  value="everyone">Everyone</option>
            </select>
          </div>
          
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <FormInput
            label="Location"
            name="location"
            type="text"
            placeholder="Your city"
            value={formData.location}
            onChange={handleChange}
            required
          />
          
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition h-24 resize-none"
              required
            />
          </div>

          <FormInput
            label="Password"
            name="password"
            type="text"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <FormInput
            label="Interests"
            name="interests"
            type="text"
            placeholder="What do you love doing?"
            value={formData.interests}
            onChange={handleChange}
            required
          />
          
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Start Your Journey
          </button>
          <p className='text-white ml-12'>Already have an account?<Link to={"/login"} className='text-blue-400 ml-4'>Login</Link></p>
        </form>
      </div>
    </div>
  );
};