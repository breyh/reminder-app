import { ITaskState } from './features/task/types';
import { IUserState } from './features/user/types';

export interface IAppState {
  user: IUserState;
  tasks: ITaskState
}
