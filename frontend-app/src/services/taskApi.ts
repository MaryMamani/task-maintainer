import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TaskRequest, TaskResponse, TaskUpdate } from '../models/task';
import { APPLICATION_JSON, DELETE, POST, PUT } from '../utilities/constants/fetchQuery';

export const taskApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/api/v1/' }),
    endpoints: (builder) => ({
      getTasks: builder.query<TaskResponse[], void>({
        query: () => 'tasks',
      }),
      createTask: builder.mutation<TaskResponse, Partial<TaskRequest>>({
        query: (data) => ({
          url: 'tasks',
          method: POST,
          headers: {
            'Content-Type': APPLICATION_JSON
          },
          body: JSON.stringify(data),
        }),
      }),
      updateTask: builder.mutation<TaskResponse, TaskUpdate>({
        query: ({id, data}) => ({
          url: `tasks/${id}`,
          method: PUT,
          headers: {
            'Content-Type': APPLICATION_JSON
          },
          body: JSON.stringify(data),
        }),
      }),
      deleteTask: builder.mutation<void, number>({
        query: (id) => ({
          url: `tasks/${id}`,
          method: DELETE,
        }),
      }),
    }),
  });
  
  export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = taskApi;