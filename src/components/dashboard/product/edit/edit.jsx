import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const EditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook for navigation

    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', photo: 'https://via.placeholder.com/88x56', email: 'john.doe@example.com', isDeleted: 0 },
        { id: 2, name: 'Jane Smith', photo: 'https://via.placeholder.com/90x56', email: 'jane.smith@example.com', isDeleted: 0 },
        { id: 3, name: 'Alice Johnson', photo: 'https://via.placeholder.com/90x56', email: 'alice.johnson@example.com', isDeleted: 0 },
        { id: 4, name: 'Bob Brown', photo: 'https://via.placeholder.com/90x56', email: 'bob.brown@example.com', isDeleted: 0 },
        { id: 5, name: 'Charlie White', photo: 'https://via.placeholder.com/90x56', email: 'charlie.white@example.com', isDeleted: 0 },
        { id: 6, name: 'David Black', photo: 'https://via.placeholder.com/90x56', email: 'david.black@example.com', isDeleted: 0 },
        { id: 7, name: 'Ella Green', photo: 'https://via.placeholder.com/90x56', email: 'ella.green@example.com', isDeleted: 0 },
        { id: 8, name: 'Frank Blue', photo: 'https://via.placeholder.com/90x56', email: 'frank.blue@example.com', isDeleted: 0 }
    ]);

    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('Inactive');
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const contactt = contacts.find(c => c.id == id);
        if (contactt) {
            setContact(contactt);
            setItemName(contactt.name);
            setPrice(contactt.email);
            setStatus(contactt.status || 'Inactive'); // Set status if available
        }
    }, [id, contacts]);

    const handleAddItem = (event) => {
        event.preventDefault();
        console.log('Form submitted with:', { itemName, price, status });
    };

    return (
        <>
            {contact ? (
                <div className="max-w-lg mx-auto my-6 p-6 bg-blue-50 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Edit Contact</h2>
                    <form onSubmit={handleAddItem} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold">Name</label>
                            <input
                                type="text"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold">Email</label>
                            <input
                                type="email"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold">Status</label>
                            <div className="flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="Active"
                                        checked={status === 'Active'}
                                        onChange={() => setStatus('Active')}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">Active</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="Inactive"
                                        checked={status === 'Inactive'}
                                        onChange={() => setStatus('Inactive')}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">Inactive</span>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Save Edited Contact
                        </button>
                    </form>

                    <button
                        className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center mx-auto"
                        onClick={() => navigate(-1)}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 mr-2" /> 
                        Back
                    </button>

                </div>
            ) : (
                <p className="text-center text-lg font-semibold text-red-600">Contact not found.</p>
            )}
        </>
    );
};

export default EditForm;
