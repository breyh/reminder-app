export const initialTaskState: ITaskState = {
    tasks: []
};

export type ITaskState = {
    tasks: ITask[];
}

export type ITask = {
    date: string;
    hour: string;
    description: string;
    important?: boolean;
    id: string;
}