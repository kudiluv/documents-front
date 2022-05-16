import axiosInstance from "../axios.instance";
import { QueueDetailDto } from "./queue.detail.dto";

type ParamsType = {
  name: string;
};

export const getQueueDetail = async (params: ParamsType) => {
  const result = await axiosInstance.get<QueueDetailDto>(
    `queues/${params.name}`
  );
  return result.data;
};
