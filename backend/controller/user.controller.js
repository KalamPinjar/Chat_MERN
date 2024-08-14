import User from "../model/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({  //remove if you want to send messages to yourself
      _id: { $ne: loggedInUserId },
    }).select("-password"); 

    // const AllUsers = await User.find({}).select("-password"); 
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in sidebar controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
