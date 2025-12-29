import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, trim: true },
    budget: { type: String, trim: true },
    service: { type: String, trim: true },
    message: { type: String, required: true, trim: true, minlength: 10 }
  },
  { timestamps: true }
);

export default mongoose.model("Lead", LeadSchema);
