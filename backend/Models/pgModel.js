import mongoose from "mongoose";

const pgSchema = new mongoose.Schema({
  pg_name: String,
  pg_address: String,
  pg_owner_number: Number,
  photo: String,
  room_sharing: [String],
  gender: String,
  ratings: Number,
  pg_amenities: [String],
  pg_price_single: Number,
  pg_price_double: Number,
  pg_price_more_than_2: Number,
}, { collection: "pg" });

export default mongoose.model("Pg", pgSchema);