import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import User from '../../data/User';
import SuggestedEmployees from '../Suggestion/SuggestedEmployess';

const Params = () => {
  const { id } = useParams();
  const user = User.find(user => user.id === parseInt(id));
  console.log(user);
  return (
    <>
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
            {/* Left Side: User Info */}
            <div className="rounded-lg bg-white shadow-lg p-8 transition-transform transform hover:scale-105">
              <div className="flex items-center gap-x-6 mb-8">
                <img
                  alt={user.name}
                  src={user.imageUrl} // Valid image URL
                  className="h-32 w-32 rounded-full border-4 border-orange-700 shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{user.name}</h3>
                  <p className="text-lg font-semibold text-orange-700">{user.position}</p>
                  <p className="mt-2 text-sm text-gray-500">{user.location}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">{user.about}</p>
              <NavLink to="/contact" className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 transition duration-300">
                Contact {user.name}
              </NavLink>
            </div>

            {/* Right Side: Skills */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {user.skills && Array.isArray(user.skills) && user.skills.length > 0 && user.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-200 p-4 rounded-lg text-center shadow-md transition-transform transform hover:scale-105">
                    <p className="text-lg font-semibold text-gray-800">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SuggestedEmployees />
    </>




  )
}

export default Params




const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',

  },
  // More people...
]


