import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
{/* Dashboard */ }
import Product from './components/dashboard/product/list/Product';
// import Customer from './components/dashboard/customer/Customer';
import CreateForm from './components/dashboard/product/create/CreateForm';
// import ProductUpdate from './components/dashboard/product/update/ProductUpdate';
import EditForm from './components/dashboard/product/edit/edit';
import Dashboard from './components/dashboard/graph/ChartsMaps';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        {/* <Route path="/dashboard-customer" element={<Customer />} /> */}
        <Route path="/dashboard-createform" element={<CreateForm />} />
        <Route path="/dashboard-editform/:id" element={<EditForm />} />
        <Route path='/dashboard-chart-map' element={<Dashboard />} />
      </Routes>
    </Router>

  )
}

export default App;
