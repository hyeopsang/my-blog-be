import mongoose from "mongoose";
import app from "./app";

const PORT = 3000;
const MONGO_URI = "mongodb://127.0.0.1:27017/express_board";

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
    });
  } catch (error) {
    console.error("서버 시작 실패:", error);
    process.exit(1);
  }
}

startServer();
