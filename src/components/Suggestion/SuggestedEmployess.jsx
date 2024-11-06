import React from 'react';
import User from '../../data/User'; // Assuming the User data is stored in this path
import { NavLink, useParams } from 'react-router-dom';

const SuggestedEmployees = () => {
    // Get the employee ID from the URL parameters
    const { id } = useParams();
    const currentEmployee = User.find(employee => employee.id === parseInt(id));

    // Filter suggested employees with the same position
    const suggestedEmployees = User.filter(employee => employee.position === currentEmployee.position && employee.id !== currentEmployee.id);

    return (
        <div className="container mx-auto px-4 py-8">
            {suggestedEmployees && suggestedEmployees.length > 0 ?
                <h2 className="text-2xl text-gray-800 mb-4">More {currentEmployee.position}</h2>
                : ""}

            {/* Flex container for horizontal scroll */}
            <div className="flex overflow-x-auto pb-4">
                {suggestedEmployees.length > 0 ? (
                    suggestedEmployees.map(employee => (

                        <NavLink to={`/employee/${employee.position.includes(" ") ?
                            employee.position.replace(/\s+/g, "") : employee.position}/${employee.id}`} key={employee.id}>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 mx-4" style={{ width: '150px', height: '190px' }}> {/* Increased horizontal margin to mx-4 */}
                                <img
                                    src={employee.imageUrl}
                                    alt={employee.name}
                                    className="w-full h-24 object-cover"
                                />
                                <div className="p-2 flex flex-col h-full">
                                    <h3 className="text-sm font-semibold text-gray-800">{employee.name}</h3>
                                    <p className="text-xs text-gray-600 mb-1">Position: {employee.position}</p>
                                    <p className="text-xs text-gray-500">Location: {employee.location}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))
                ) : (
                    <p className="text-gray-500">No more {currentEmployee.position} found.</p>
                )}
            </div>
        </div>
    );
}

export default SuggestedEmployees;




