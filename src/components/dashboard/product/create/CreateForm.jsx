import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CreateForm = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [stockNo, setStockNo] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState(null);
    const [status, setStatus] = useState('Inactive');

    const navigate = useNavigate();

    const handleAddItem = (event) => {
        event.preventDefault();
        axios.post('/new')
            .then(response => {
                if (response.data) {
                    alert(response.data.message);
                    localStorage.setItem('token', response.data.token);
                }
            })
            .catch(error => alert('Error! ' + error.response.data.error));

        console.log('Item added:', { itemName, price, stockNo, category, photo });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    };

    const toggleStatus = (value) => {
        setStatus(value);
    };

    return (
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-blue-200 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6">Create Contact</h2>
            <form className="w-full flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="font-bold mb-2">Name</label>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold mb-2">Email</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <span className="font-bold">Status:</span>
                    <div className="flex items-center gap-12">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="active"
                                name="status"
                                value="Active"
                                checked={status === 'Active'}
                                onChange={() => toggleStatus('Active')}
                                className="mr-2"
                            />
                            <label htmlFor="active">Active</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="inactive"
                                name="status"
                                value="Inactive"
                                checked={status === 'Inactive'}
                                onChange={() => toggleStatus('Inactive')}
                                className="mr-2"
                            />
                            <label htmlFor="inactive">Inactive</label>
                        </div>
                    </div>
                </div>
                <button
                    className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
                    type="button"
                    onClick={handleAddItem}
                >
                    Save Contact
                </button>
            </form>
            <button
                className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                onClick={() => navigate(-1)}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 mr-2" />
                Back
            </button>
        </div>
    );
}

export default CreateForm;
