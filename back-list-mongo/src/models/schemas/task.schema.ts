import { Schema } from 'mongoose';
import ITask from './interfaces/ITask';

const taskSchema = new Schema<ITask>({
  _id: { type: String },
  task: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },   
});

export default taskSchema;
