import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://pallakangoding:muhammadfaiz25@cluster0.bkf9ov4.mongodb.net/culinary-heirlooms"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
