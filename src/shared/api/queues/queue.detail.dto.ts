import { DetailTaskDto } from "./detail.task.dto";

export type QueueDetailDto = {
  tasks: DetailTaskDto[];
  countTasks: number;
  currentPage: number;
  pages: number;
};
