import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
    const [leaves, setLeaves] = useState([]);
    const [filterStatus, setFilterStatus] = useState("Pending");
    const [searchQuery, setSearchQuery] = useState("");

    const fetchLeaves = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/leave/all-list", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.data.success) {
                setLeaves(response.data.leaves);
            } else {
                alert("Failed to fetch leave records.");
            }
        } catch (error) {
            console.error("Error fetching leaves:", error);
            alert(error.message || "An error occurred while fetching leaves.");
        }
    };

    useEffect(() => {
        fetchLeaves();
    }, []);

    const filteredLeaves = leaves.filter(
        (leave) =>
            leave.status === filterStatus &&
            (leave.employeeId?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                leave.department?.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="p-6">
            <div className="text-center">
                <h3 className="text-2xl font-bold">Manage Leaves</h3>
            </div>

            {/* Search and Filters */}
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search by name or department"
                    className="px-4 py-1 border"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex gap-2">
                    {["Pending", "Approved", "Rejected"].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-4 py-1 rounded ${
                                filterStatus === status ? "bg-teal-600 text-white" : "bg-gray-200"
                            }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <table className="w-full text-sm text-left text-gray-500 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
                    <tr>
                        <th className="px-6 py-3">S No</th>
                        <th className="px-6 py-3">Employee ID</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Leave Type</th>
                        <th className="px-6 py-3">Department</th>
                        <th className="px-6 py-3">Days</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLeaves.length > 0 ? (
                        filteredLeaves.map((leave, index) => (
                            <tr
                                key={leave._id || index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-3">{index + 1}</td>
                                <td className="px-6 py-3">{leave.employeeId?.id || "N/A"}</td>
                                <td className="px-6 py-3">{leave.employeeId?.name || "N/A"}</td>
                                <td className="px-6 py-3">{leave.leaveType}</td>
                                <td className="px-6 py-3">{leave.department || "N/A"}</td>
                                <td className="px-6 py-3">
                                    {leave.days || (
                                        Math.ceil(
                                            (new Date(leave.endDate) -
                                                new Date(leave.startDate)) /
                                                (1000 * 60 * 60 * 24)
                                        ) + 1
                                    )}
                                </td>
                                <td className="px-6 py-3">{leave.status || "Pending"}</td>
                                <td className="px-6 py-3">
                                    <button className="px-4 py-1 bg-teal-600 text-white rounded">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="px-6 py-3 text-center" colSpan="8">
                                No leave records found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
