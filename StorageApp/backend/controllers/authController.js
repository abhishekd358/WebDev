import mongoose, { Types } from "mongoose";
import OTP from "../models/otpModel.js";
import User from "../models/userModel.js";
import Directory from "../models/directoryModel.js";
import { verifyIdToken } from "../services/googleAuthService.js";
import { sendOtpService } from "../services/sendOtpService.js";
import redisClient from "../config/redis.js";
import { otpSchema } from "../validators/authSchema.js";

export const sendOtp = async (req, res, next) => {
  const { email } = req.body;
  const resData = await sendOtpService(email);
  res.status(201).json(resData);
};

export const verifyOtp = async (req, res, next) => {
  const { success, data } = otpSchema.safeParse(req.body);

  console.log(req.body);
  console.log(data);

  if (!success) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  const { email, otp } = data;
  const otpRecord = await OTP.findOne({ email, otp });

  if (!otpRecord) {
    return res.status(400).json({ error: "Invalid or Expired OTP!" });
  }

  return res.json({ message: "OTP Verified!" });
};

export const loginWithGoogle = async (req, res, next) => {
  const { idToken } = req.body;
  const userData = await verifyIdToken(idToken);
  const { name, email, picture } = userData;

  const user = await User.findOne({ email }).select("-__v");

  if (user) {
    if (user.deleted) {
      return res.status(403).json({
        error: "Your account has been deleted.",
      });
    }

    
    const keys = await redisClient.keys("session:*");
    let userSessions = [];

    for (const key of keys) {
      const data = await redisClient.hGetAll(key);

      if (data.userId === user._id.toString()) {
        userSessions.push(key);
      }
    }

    if (userSessions.length >= 2) {
      await redisClient.del(userSessions[0]);
    }

    // Update profile pic if needed
    if (!user.picture.includes("googleusercontent.com")) {
      user.picture = picture;
      await user.save();
    }

 
    const sessionId = crypto.randomUUID();
    const redisKey = `session:${sessionId}`;

    await redisClient.hSet(redisKey, "userId", user._id.toString());
    await redisClient.hSet(redisKey, "rootDirId", user.rootDirId.toString());

    const sessionExpiryTime = 60 * 60 * 24 * 7;
    await redisClient.expire(redisKey, sessionExpiryTime);

    res.cookie("sid", sessionId, {
      httpOnly: true,
      signed: true,
      maxAge: sessionExpiryTime * 1000,
    });

    return res.json({ message: "logged in" });
  }


  const mongooseSession = await mongoose.startSession();

  try {
    const rootDirId = new Types.ObjectId();
    const userId = new Types.ObjectId();

    mongooseSession.startTransaction();

    await Directory.insertOne(
      {
        _id: rootDirId,
        name: `root-${email}`,
        parentDirId: null,
        userId,
      },
      { mongooseSession }
    );

    await User.insertOne(
      {
        _id: userId,
        name,
        email,
        picture,
        rootDirId,
      },
      { mongooseSession }
    );

    
    const sessionId = crypto.randomUUID();
    const redisKey = `session:${sessionId}`;

    await redisClient.hSet(redisKey, "userId", userId.toString());
    await redisClient.hSet(redisKey, "rootDirId", rootDirId.toString());

    const sessionExpiryTime = 60 * 60 * 24 * 7;
    await redisClient.expire(redisKey, sessionExpiryTime);

    res.cookie("sid", sessionId, {
      httpOnly: true,
      signed: true,
      maxAge: sessionExpiryTime * 1000,
    });

    await mongooseSession.commitTransaction();

    res.status(201).json({ message: "account created and logged in" });
  } catch (err) {
    await mongooseSession.abortTransaction();
    next(err);
  }
};
