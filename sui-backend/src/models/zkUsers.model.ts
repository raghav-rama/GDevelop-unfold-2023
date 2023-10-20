import { model, Schema, Document } from 'mongoose';
import { zkUser } from '@interfaces/zkUsers.interface';

const userSchema: Schema = new Schema({
  suiAddress: {
    type: String,
    required: true,
    unique: true,
  },
  salt: {
    type: String,
    required: true,
  },
});

const zkUserModel = model<zkUser & Document>('zkUsers', userSchema);

export default zkUserModel;
