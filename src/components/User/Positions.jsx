import React, { useEffect, useState } from "react";
import User from "../../data/User"; // Assuming the User data is stored in this path
import { NavLink, useParams } from "react-router-dom";

const Positions = () => {




    const { position } = useParams()
    const employee = User.filter(employee => employee.position === position);

    console.log(position);
    console.log(employee);

    const [isOpen, setIsOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        position,
        about: "",
        skills: [],
        location: "",
        imageUrl: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "skills") {
            const arr = value.split(",");
            console.log(arr);
            setNewEmployee({
                ...newEmployee,
                [name]: arr,
                id: User.length + 1,
            })
        }
        else if (name === "imageUrl") {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    // You can set the image URL or base64 string in your state
                    setNewEmployee({
                        ...newEmployee,
                        [name]: reader.result,
                        id: User.length + 1,
                    });
                };
                reader.readAsDataURL(file);
            }
        }

        else {
            setNewEmployee({
                ...newEmployee,
                [name]: value,
                id: User.length + 1,
            })
        }
    };

    const togglePopup = () => {
        if (isOpen) {
            User.push(newEmployee)
            setNewEmployee({
                name: "",
                position,
                about: "",
                skills: [],
                location: "",
                imageUrl: "",
            })
        }
        setIsOpen(!isOpen);
        setNewEmployee({
            name: "",
            position,
            about: "",
            skills: [],
            location: "",
            imageUrl: "",
        })
    };



    return (
        <>
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-5xl font-bold text-orange-700 py-4 rounded-md">
                    {position}s
                </h1>
                <button
                    onClick={togglePopup}
                    className="bg-orange-700 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition"
                >
                    Add {position}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {employee.map((employee) => (
                    <NavLink to={`/employee/${employee.id}`} key={employee.id}>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src={employee.imageUrl}
                                alt={employee.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col h-full">
                                <h2 className="text-xl font-semibold bg-orange-700 text-white p-2 rounded-md text-left">
                                    {employee.name}
                                </h2>
                                <p className="text-gray-600 font-bold mt-2 text-left">Position:</p>
                                <p className="text-gray-600 mb-2 text-left">{employee.position}</p>
                                <p className="text-gray-600 font-bold mt-2 text-left">About:</p>
                                <p className="text-gray-500 flex-grow text-left">{employee.about}</p>
                                <h3 className="text-sm font-bold text-gray-700 mt-4 text-left">Skills:</h3>
                                <div className="flex flex-wrap mt-1 mb-2">
                                    {employee.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-orange-700 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-600 font-bold mt-2 text-left">Location:</p>
                                <p className="text-gray-500 text-left">{employee.location}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>

            {/* Popup Form */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-4/5 md:w-1/2 lg:w-1/3 h-auto max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Add New {position}</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newEmployee.name}
                                    onChange={handleChange}
                                    placeholder="Enter employee name"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={newEmployee.age}
                                    onChange={handleChange}
                                    placeholder="Enter employee age"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Position</label>
                                <input
                                    type="text"
                                    name="position"
                                    value={position}
                                    onChange={handleChange}
                                    placeholder="Enter position"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">About</label>
                                <textarea
                                    name="about"
                                    value={newEmployee.about}
                                    onChange={handleChange}
                                    placeholder="Tell us about the employee"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Skills (comma-separated)</label>
                                <input
                                    type="text"
                                    name="skills"
                                    value={newEmployee.skills}
                                    onChange={handleChange}
                                    placeholder="Enter skills"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={newEmployee.location}
                                    onChange={handleChange}
                                    placeholder="Enter location"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Image</label>
                                <input
                                    type="file"
                                    name="imageUrl"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={togglePopup} className="bg-orange-700 text-white py-2 px-4 rounded-md hover:bg-orange-600 mr-2">
                                    Add Employee
                                </button>
                                <button type="button" onClick={togglePopup} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">
                                    Cancel
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
        </>
        
    );
};

export default Positions;


