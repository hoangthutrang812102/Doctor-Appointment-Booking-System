import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Thử kết nối tới MongoDB
        // await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
        await mongoose.connect(process.env.MONGODB_URI);

        // Nếu kết nối thành công, log ra thông báo
        console.log("✅ MongoDB connected successfully!");

    } catch (error) {
        // Nếu có lỗi xảy ra trong quá trình kết nối, log ra lỗi
        console.error("❌ MongoDB connection FAILED.");
        console.error(error); // Log toàn bộ object lỗi để biết chi tiết

        // Dừng toàn bộ ứng dụng nếu không thể kết nối tới DB
        process.exit(1);
    }
};

export default connectDB;