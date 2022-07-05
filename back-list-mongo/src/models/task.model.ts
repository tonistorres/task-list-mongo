import { model as createModelMongoose, Types } from 'mongoose';
import taskSchema from './schemas/task.schema';
import ITask from './schemas/interfaces/ITask';

export default class TaskModel {
  constructor(private model = createModelMongoose('tasks', taskSchema)) {}

  // criar
  public async create(task:ITask):Promise<ITask & { _id:Types.ObjectId }> {
    const created = await this.model.create(task);
    return created;
  }

  // buscar todos
  public async getAll():Promise<ITask[]> {
    return this.model.find();
  }

  public async getById(id: string):Promise<ITask[]> {
    const task = this.model.find({ _id: id });
    return task;
  }

  // atualizar 
  public async update(id: string, taskData:Partial<ITask>):Promise<void> {
    await this.model.updateOne({ _id: id }, { ...taskData });
  }

  // deletar
  public async delete(id: string):Promise<void> {
    await this.model.deleteOne({ _id: id });
  }
}