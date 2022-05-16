import { combine, createEffect, createEvent, createStore } from "effector";
import { getQueueDetail, DetailTaskDto } from "shared/api/queues";

export const fetchDetailInfoFx = createEffect(getQueueDetail);

export const changePage = createEvent<number>();
export const $page = createStore<number>(1).on(
  changePage,
  (_, payload) => payload
);

export const $pages = createStore<number>(1).on(
  fetchDetailInfoFx.doneData,
  (_, payload) => payload.pages
);

const $tasks = createStore<DetailTaskDto[]>([]).on(
  fetchDetailInfoFx.doneData,
  (_, payload) => payload.tasks
);

export const $queueInfo = combine({
  $page,
  $tasks,
  $pages,
});
