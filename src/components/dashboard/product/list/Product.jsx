import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../sidebar/Sidebar';

const Contact = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Paul', photo: 'https://via.placeholder.com/88x56', email: 'john.paul@example.com', isDeleted: 0 },
    { id: 2, name: 'Jane Marvel', photo: 'https://via.placeholder.com/90x56', email: 'jane.marvel@example.com', isDeleted: 0 },
    { id: 3, name: 'Alice Doe', photo: 'https://via.placeholder.com/90x56', email: 'alice.johnson@example.com', isDeleted: 0 },
    { id: 4, name: 'Bob Brown', photo: 'https://via.placeholder.com/90x56', email: 'bob.brown@example.com', isDeleted: 0 },
    { id: 5, name: 'Charlie Chalson', photo: 'https://via.placeholder.com/90x56', email: 'charlie.chalson@example.com', isDeleted: 0 },
    { id: 6, name: 'James Black', photo: 'https://via.placeholder.com/90x56', email: 'james.black@example.com', isDeleted: 0 },
    { id: 7, name: 'Ella Mary', photo: 'https://via.placeholder.com/90x56', email: 'ella.mary@example.com', isDeleted: 0 },
    { id: 8, name: 'Anne Blue', photo: 'https://via.placeholder.com/90x56', email: 'anne.blue@example.com', isDeleted: 0 }
  ]);

  const handleEdit = (id) => {
    console.log('Edit contact with id:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete contact with id:', id);
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, isDeleted: 1 } : contact
    );
    setContacts(updatedContacts.filter(contact => contact.isDeleted === 0));
    console.log(updatedContacts.filter(contact => contact.isDeleted === 0));
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar becomes a header on mobile */}
      <SideBar className="w-64 bg-gray-200"/>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-100">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-blue-700 text-white p-3 rounded-md">
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase text-center w-full sm:w-auto">Contact Page</h2>
          <Link className="mt-3 sm:mt-0 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded" to={`/dashboard-createform`}>
            Create Contact
          </Link>
        </div>
        
        {/* Contacts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {contacts.map((contact) => (
            <div className="bg-white p-4 rounded-lg shadow-md text-center" key={contact.id}>
              <img src={contact.photo} alt={`${contact.name}'s Profile`} className="w-22 h-14 mx-auto mb-2 border border-gray-300" />
              <p className="text-lg font-semibold">{contact.name}</p>
              <p className="text-gray-600">{contact.email}</p>
              <div className="mt-4 flex flex-col gap-2">
                <Link to={`/dashboard-editform/${contact.id}`} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                  Edit
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
