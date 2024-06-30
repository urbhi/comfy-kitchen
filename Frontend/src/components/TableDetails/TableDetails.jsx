import React, { useState } from 'react';
import './TableDetails.css'; // Import your CSS file for styling

const TableDetails = () => {
    // State to store the selected table number
    const [selectedTable, setSelectedTable] = useState(null);

    // Function to handle table selection
    const handleTableSelect = (tableNumber) => {
        setSelectedTable(tableNumber);
        // You can perform additional actions here, such as booking the selected table
    };

    // Sample table data (you can fetch this from an API or define statically)
    const tables = [
        { number: 1, capacity: 4, available: true },
        { number: 2, capacity: 6, available: false },
        { number: 3, capacity: 2, available: true },
        { number: 4, capacity: 6, available: false },
        { number: 5, capacity: 2, available: true }, 
        { number: 6, capacity: 6, available: false },
        { number: 7, capacity: 2, available: true }, 
        { number: 8, capacity: 6, available: false },
        { number: 9, capacity: 2, available: true }, 
        { number: 10, capacity: 6, available: false },
        { number: 11, capacity: 2, available: true },
        { number: 12, capacity: 6, available: false },
        { number: 13, capacity: 2, available: true },
        // Add more tables as needed
    ];

    return (
        <div className="table-selection">
            <h2>Select a Table</h2>
            <div className="table-list">
                {tables.map((table) => (
                    <div
                        key={table.number}
                        className={`table-item ${selectedTable === table.number ? 'selected' : ''}`}
                        onClick={() => handleTableSelect(table.number)}
                        style={{ backgroundColor: table.available ? '#7FBF7F' : '#E57373' }} // Example: Green for available, Red for unavailable
                    >
                        <p>Table {table.number}</p>
                        <p>Capacity: {table.capacity}</p>
                        <p>{table.available ? 'Available' : 'Unavailable'}</p>
                    </div>
                ))}
            </div>
            <p>{selectedTable ? `You have selected Table ${selectedTable}` : 'Please select a table'}</p>
        </div>
    );
};

export default TableDetails;
