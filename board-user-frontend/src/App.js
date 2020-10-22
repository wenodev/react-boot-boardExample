import React from 'react';
import Header from './Component/Header'
import Navbar from './Component/Navabar'
import Footer from './Component/Footer'
import InquiryTable from './Component/Inquiry/InquiryTable'


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <InquiryTable />
      <Footer />
    </div>
  );
}

export default App;
