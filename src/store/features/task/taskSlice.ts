import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { initialTaskState, ITask, ITaskState } from './types';


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialTaskState,
    reducers: {
        addTask: (state: ITaskState, action: PayloadAction<ITask>) => {
            return {
                ...state,
                tasks: state?.tasks.length ? [...state?.tasks, action.payload] : [action.payload],
            }
        },
        addTasks: (state: ITaskState, action: PayloadAction<ITask[]>) => {
            return {
                ...state,
                tasks: action.payload,
            }
        },
        removeTasks: (state: ITaskState) => {
            return {
                ...state,
                tasks: []
            }
        },
        removeTaskById: (state: ITaskState, action: PayloadAction<string>) => {
            const tasksFiltered = state.tasks.filter((task) => task?.id !== action.payload);
            return {
                ...state,
                tasks: tasksFiltered,
            }
        },
    },
});

export const {
    addTask,
    removeTasks,
    addTasks,
    removeTaskById
} = taskSlice.actions;


export const removeAllTask = () => async (dispatch: Dispatch): Promise<void> => {
    dispatch(removeTasks());
}

export default taskSlice.reducer;
