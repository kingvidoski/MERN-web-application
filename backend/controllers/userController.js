import asyncHandler from "express-async-handler"


//@desc         Auth User/set token
//route         POST /api/users/auth
//@access       Public
const authUser = asyncHandler(
    async (req, res) => {
        res.status(200).json({
            message: 'Auth User'
        })
    }
);


//@desc         Register User/set token
//route         POST /api/users/
//@access       Public
const registerUser = asyncHandler(
    async (req, res) => {
        res.status(200).json({
            message: 'register User'
        })
    }
);


//@desc         Logout user
//route         POST /api/users/
//@access       Public
const logoutUser = asyncHandler(
    async (req, res) => {
        res.status(200).json({
            message: 'logout User'
        })
    }
);


//@desc         Get user profile
//route         GET /api/users/profile
//@access       Private
const getUserProfile = asyncHandler(
    async (req, res) => {
        res.status(200).json({
            message: ' User Profile'
        })
    }
);


//@desc         Update user profile
//route         Put /api/users/profile
//@access       Private
const updateUserProfile = asyncHandler(
    async (req, res) => {
        res.status(200).json({
            message: ' Update Profile'
        })
    }
);


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};