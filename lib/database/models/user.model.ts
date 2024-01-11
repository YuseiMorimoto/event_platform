import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  LastName: { type: String, required: true },
  photo: { type: String, required: true },
});

// 既にUserモデルが存在しない場合にのみUserモデルを新しく作成する
// model("User", UserSchema)はUserSchemaに基づいてUserという名前の新しいモデルを作成する。
const User = models.User || model("User", UserSchema);

export default User;
