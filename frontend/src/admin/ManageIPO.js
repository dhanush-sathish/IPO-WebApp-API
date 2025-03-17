import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Menu from "../components/Menu";
import Topbar from "../components/Topbar";
import { FaTrash, FaEye } from "react-icons/fa";
import "../styles/ManageIPO.css";

Modal.setAppElement("#root");

const ManageIPO = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ipos, setIpos] = useState([]);
  const [selectedIPO, setSelectedIPO] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/ipos")
      .then((response) => response.json())
      .then((data) => setIpos(data))
      .catch((error) => console.error("Error fetching IPO data:", error));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date) ? "Invalid Date" : date.toISOString().split("T")[0];
  };

  //  Open Modal for View
  const handleView = (ipo) => {
    setSelectedIPO(ipo);
    setIsUpdateMode(false);
    setModalIsOpen(true);
  };

  //  Open Modal for Update
  const handleUpdate = (ipo) => {
    setSelectedIPO({ ...ipo });
    setIsUpdateMode(true);
    setModalIsOpen(true);
  };

  //  Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedIPO((prev) => ({ ...prev, [name]: value }));
  };

  //  Submit Updated Data
  const handleSave = () => {
    const { company, price, open, close, size, type, listing, status } = selectedIPO;
    const openDate = new Date(open);
    const closeDate = new Date(close);
    const today = new Date();
  
    //  Required Field Validation
    if (!company || !price || !open || !close || !size || !type || !listing || !status) {
      alert("All fields are required! ❌");
      return;
    }
  
    //  Date Validity Checks
    if (openDate < today) {
      alert("Opening date must be in the future for upcoming IPOs! ❌");
      return;
    }
  
    if (closeDate <= openDate) {
      alert("Closing date must be after the opening date! ❌");
      return;
    }
  
    //  Prevent Invalid Status Updates (Closed → Open restriction)
    const existingIPO = ipos.find((ipo) => ipo.id === selectedIPO.id);
    if (existingIPO && existingIPO.status === "Closed" && status !== "Closed") {
      alert("A closed IPO cannot be reopened or changed to another status! ❌");
      return;
    }
  
    fetch(`http://localhost:5000/api/ipos/${selectedIPO.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedIPO),
    })
      .then((res) => res.json())
      .then(() => {
        setIpos(ipos.map((ipo) => (ipo.id === selectedIPO.id ? selectedIPO : ipo)));
        setModalIsOpen(false);
        alert("IPO information updated successfully! ✅");
      })
      .catch((error) => {
        console.error("Error updating IPO:", error);
        alert("Failed to update IPO. Please try again. ❌");
      });
  };
  
  
  

  //  Delete IPO with Confirmation Alert
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this IPO?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/api/ipos/${id}`, { method: "DELETE" })
        .then(() => setIpos(ipos.filter((ipo) => ipo.id !== id)))
        .catch((error) => console.error("Error deleting IPO:", error));
    }
  };

  // Search Function: Filters IPOs by Company Name or Status
  const handleSearch = (query) => {
    setSearchTerm(query); //  Updates search term
  };

  // Filter IPOs based on the search term
  const filteredIPOs = ipos.filter(
    (ipo) =>
      ipo.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ipo.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <div className={`menubar ${menuOpen ? "open" : ""}`}><Menu /></div>
      <div className="main-content">
        {/* Corrected: Pass handleSearch as onSearch prop */}
        <Topbar onSearch={handleSearch} />

        <section className="dashboard">
          <h2 className="title">Upcoming IPO | Dashboard</h2>
          <table className="striped-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Price Band</th>
                <th>Open</th>
                <th>Close</th>
                <th>Issue Size</th>
                <th>Issue Type</th>
                <th>Listing Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Delete/ View</th>
              </tr>
            </thead> 
            <tbody>
              {filteredIPOs.length > 0 ? (
                filteredIPOs.map((ipo) => (
                  <tr key={ipo.id}>
                    <td>{ipo.company}</td>
                    <td>₹ {ipo.price}</td>
                    <td>{formatDate(ipo.open)}</td>
                    <td>{formatDate(ipo.close)}</td>
                    <td>{ipo.size}</td>
                    <td>{ipo.type}</td>
                    <td>{formatDate(ipo.listing)}</td>
                    <td className={`status ${ipo.status.toLowerCase()}`}>{ipo.status}</td>
                    <td>
                      <button className="update-btn" onClick={() => handleUpdate(ipo)}>Update</button>
                    </td>
                    <td className="icons">
                      <FaTrash className="delete-icon" title="Delete" onClick={() => handleDelete(ipo.id)} />
                      <FaEye className="view-icon" title="View" onClick={() => handleView(ipo)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="10" className="no-data">No IPOs Available</td></tr>
              )}
            </tbody>
          </table>
        </section>
      </div>

      {/* 🚀 IPO DETAILS MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            width: "50%",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            maxHeight: "80vh",
            overflowY: "auto",
          },
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          {isUpdateMode ? "Update IPO" : "IPO Details"}
        </h2>

        <form>
  <label>Company:</label>
  <input type="text" name="company" value={selectedIPO?.company} readOnly={!isUpdateMode} onChange={handleChange} />

  <label>Price Band:</label>
  <input type="text" name="price" value={selectedIPO?.price} readOnly={!isUpdateMode} onChange={handleChange} />

  <label>Open Date:</label>
  <input type="date" name="open" value={formatDate(selectedIPO?.open)} readOnly={!isUpdateMode} onChange={handleChange} />

  <label>Close Date:</label>
  <input type="date" name="close" value={formatDate(selectedIPO?.close)} readOnly={!isUpdateMode} onChange={handleChange} />

  <label>Issue Size:</label>
  <input type="text" name="size" value={selectedIPO?.size} readOnly={!isUpdateMode} onChange={handleChange} />

  <label>Issue Type:</label>
  <input type="text" name="type" value={selectedIPO?.type} readOnly={!isUpdateMode} onChange={handleChange} />

  <label>Listing Date:</label>
  <input type="date" name="listing" value={formatDate(selectedIPO?.listing)} readOnly={!isUpdateMode} onChange={handleChange} />

  <label>Status:</label>
  <select name="status" value={selectedIPO?.status} onChange={handleChange} disabled={!isUpdateMode}>
    <option value="Ongoing">Ongoing</option>
    <option value="Coming">Coming</option>
    <option value="New Listed">New Listed</option>
    <option value="Closed">Closed</option>
  </select>

  {/* Buttons */}
  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    <button type="button" onClick={() => setModalIsOpen(false)} style={{ backgroundColor: "red", color: "white" }}>
      Close
    </button>

    {isUpdateMode && (
      <button type="button" onClick={handleSave} style={{ backgroundColor: "green", color: "white" }}>
        Save Changes
      </button>
    )}
  </div>
</form>

      </Modal>
    </div>
  );
};

export default ManageIPO;
