import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: "string", required: true, unique: true },
  email: { type: "string", required: true, unique: true },
  username: { type: "string", required: true, unique: true },
  firstName: { type: "string", required: true },
  LastName: { type: "string", required: true },
  photo: { type: "string", required: true },
});

// 既にUserモデルが存在しない場合にのみUserモデルを新しく作成する
// model("User", UserSchema)はUserSchemaに基づいてUserという名前の新しいモデルを作成する。
const User = models.User || model("User", UserSchema);

export default User;
