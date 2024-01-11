import { Document, Schema, models, model } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt?: Date;
  imageurl: string;
  startDateTime?: Date;
  endDateTime?: Date;
  price?: string;
  isFree?: boolean;
  url?: string;
  category: { _id: string; name: string }; // assuming 'category' is another model
  organizer: { _id: string; firstName: string; lastName: string }; // assuming 'User' is another model
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: "date", default: "Date.now" },
  imageurl: { type: String, required: true },
  startDateTime: { type: Date, default: "Date.now" },
  endDateTime: { type: Date, default: "Date.now" },
  price: { type: String },
  isFree: { type: "boolean", default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
