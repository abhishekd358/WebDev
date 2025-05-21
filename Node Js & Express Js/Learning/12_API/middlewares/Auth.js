import { User } from "../models/User.js";
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) => {
    // here we create a Auth for user verification when create new contact.
    // getting token from user in which userId is save which is same as id in the User Collection in my DB

    // taking user Auth token from the header 
    const token = req.header('Auth');
    // console.log('your token', token)

    // if user not pass token in auth then give message
    if (!token) {
        return res.status(401).json({ message: 'Login First !!!', success: false });
    }

    try {
        // we verify means compare the token value with the DB collection
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // token and secret key

        // then get the userId from the decode
        const _id = decoded.userId;

        // now we check the id in DB of UserDB
        const userVerified = await User.findById({ _id });
        console.log(userVerified);

        // if user not found with this id
        if (!userVerified) {
            return res.status(404).json({ message: 'User Not Found!!!!', success: false });
        }

        // we store the verified User in the Global Varibale . SO we Can use for any other use 
        // we use te variable to store the user that create contact in DB of conatact. 

        // when a logged in user create contact we save his userId to Contact DB as a foreign key
        req.verifiedGlobalVar = userVerified;

        // else -> we pass the counter to next function to run
        next();

    } catch (error) {
        // handling all the possible JWT related errors
        console.error("JWT Error:", error.message);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired. Please login again.', success: false });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid Token. Please login again.', success: false });
        } else {
            return res.status(500).json({ message: 'Authentication Failed', error: error.message, success: false });
        }
    }
};
