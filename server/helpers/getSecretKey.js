import dotenv from "dotenv";

dotenv.config();

export default function () {
  return process.env.SECRET_KEY;
}
