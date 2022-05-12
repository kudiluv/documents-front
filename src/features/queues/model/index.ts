import { createEffect, createStore } from "effector";
import { getQueues, QueueInfoDto } from "shared/api/queues";

export const fetchQueuesFx = createEffect(getQueues);

export const $queues = createStore<QueueInfoDto[]>([]).on(
  fetchQueuesFx.doneData,
  (prev, payload) => payload
);
