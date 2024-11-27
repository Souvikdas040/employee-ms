// import Employee from '../models/Employee.js';
// import Leave from '../models/Leave.js';

// const addLeave = async (req, res) => {
//     try {
//         const {
//             userId,
//             leaveType,
//             startDate,
//             endDate,
//             reason
//         } = req.body;

//         // Check if employee exists
//         const employee = await Employee.findOne({ userId });

//         // Create a new leave request
//         const newLeave = new Leave({
//             employeeId: employee._id,
//             leaveType,
//             startDate,
//             endDate,
//             reason
//         });

//         // Save the leave request
//         await newLeave.save();
//         return res.status(200).json({ success: true });
//     } catch (error) {
//         console.error(error); // Log error details for debugging
//         return res.status(500).json({ success: false, error: "Failed to apply leave" });
//     }
// };

// const getLeave = async (req, res) => {
//     try{
//         const {id, role} = req.params;
//         if (!id) {
//             return res.status(400).json({ success: false, error: "Employee ID is required" });
//         }
//         if (!role) {
//             return res.status(400).json({ success: false, error: "Role is required" });
//         }
        
//         let leaves
//         if(role === 'admin') {
//             leaves = await Leave.find({employeeId: id});
//         }

//         else {
//             const employee = await Employee.findOne({userId: id})
//             leaves = await Leave.find({employeeId: employee._id})
//         }

//         return res.status(200).json({ success: true, leaves });
//     }

//     catch (error) {
//         console.error(error); // Log error details for debugging
//         return res.status(500).json({ success: false, error: "Failed to get leaves" });
//     }
// }

// const getLeaves = async (req, res) => {
//     try {
//         // const {id} = req.params;
//         // const employee = await Employee.findOne({userId: id});

//         const leaves = await Leave.find({employeeId: employee._id})
//         return res.status(200).json({ success: true, leaves });
//     }

//     catch (error) {
//         console.error(error); // Log error details for debugging
//         return res.status(500).json({ success: false, error: "Failed to apply leave" });
//     }
// }

// export { addLeave, getLeaves,  getLeave};


import Employee from '../models/Employee.js';
import Leave from '../models/Leave.js';
import User from '../models/User.js';

// const addLeave = async (req, res) => {
//     try {
//         const {
//             userId,
//             leaveType,
//             startDate,
//             endDate,
//             reason
//         } = req.body;

//         const usid = req.user._id;

//         // Check if employee exists
//         const employee = await Employee.findOne({ userId });
//         if (!employee) {
//             return res.status(404).json({ success: false, error: "Employee not found" });
//         }

//         // Create a new leave request
//         const newLeave = new Leave({
//             employeeId: employee._id,
//             leaveType,
//             startDate,
//             endDate,
//             reason
//         });

//         // Save the leave request
//         await newLeave.save();
//         return res.status(200).json({ success: true });
//     } catch (error) {
//         console.error(error); // Log error details for debugging
//         return res.status(500).json({ success: false, error: "Failed to apply leave" });
//     }
// };
const addLeave = async (req, res) => {
    try {
        const { userId, leaveType, startDate, endDate, reason } = req.body;

        // Find employee by userId
        const employee = await Employee.findOne({ userId });
        if (!employee) {
            return res.status(404).json({ success: false, error: "Employee not found" });
        }

        // Fetch the employee's name using the employee ID
        const employeeId = employee._id;
        const theuser =await User.findById(userId);
        const userName = theuser.name

        // Create a new leave request
        const newLeave = new Leave({
            employeeId,
            employeeName:userName,
            leaveType,
            startDate,
            endDate,
            reason,
            status: "pending", // Optional: Set the default status
            appliedAt: new Date()
        });

        // Save the leave request
        const savedLeave = await newLeave.save();
       
        console.log(userName)


        // Add the employee's name dynamically by fetching it
        const savedLeaveWithName = {
            ...savedLeave.toObject(),
            employeeName: userName // Add the name after the save
        };

        return res.status(200).json({ success: true, data: savedLeaveWithName });
    } catch (error) {
        console.error(error); // Log error details for debugging
        return res.status(500).json({ success: false, error: "Failed to apply leave" });
    }
};



const getLeave = async (req, res) => {
    try {
        const {id, role} = req.params;
        let leaves
        if(role === "admin") {
            leaves = await Leave.find({employeeId: id})
        }
        if(!leaves || leaves.length === 0) {
            const employee = await Employee.findOne({userId: id})
            leaves = await Leave.find({employeeId: employee._id})
        }
        return res.status(200).json({ success: true, leaves });
    } catch(error) {
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Failed to get leave"})
    }
}


const getAllLeavesadmin = async (req, res) => {
    try {
        const leaves = await Leave.find(); // Fetch all leave records from the database
        return res.status(200).json({ success: true, leaves });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ success: false, error: "Failed to fetch leave records" });
    }
};


export { addLeave, getLeave ,getAllLeavesadmin };
