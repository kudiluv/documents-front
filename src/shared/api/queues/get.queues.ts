import axiosInstance from "../axios.instance";
import { QueueInfoDto } from "./queue.info.dto";

export const getQueues = async () => {
  const result = await axiosInstance.get<QueueInfoDto[]>("queues");
  return result.data;
};
