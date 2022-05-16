import {
  combine,
  createEffect,
  createEvent,
  createStore,
  forward,
} from "effector";
import { debounce } from "patronum";
import {
  getFilesByQuery,
  SearchParamsType,
  TypeOfSearchFiles,
} from "shared/api/search";

export const changeSearchString = createEvent<string>();

export const $searchString = createStore("").on(
  changeSearchString,
  (_, payload) => payload
);

export const changeTypes = createEvent<TypeOfSearchFiles[]>();
export const $types = createStore<TypeOfSearchFiles[]>([]).on(
  changeTypes,
  (_, payload) => payload
);

export const changeStartDate = createEvent<string>();
export const $startDate = createStore<string>("").on(
  changeStartDate,
  (_, payload) => payload
);

export const changeEndDate = createEvent<string>();
export const $endDate = createStore<string>("").on(
  changeEndDate,
  (_, payload) => payload
);

export const $searchQuery = combine<SearchParamsType>({
  type: $types,
  startDate: $startDate,
  endDate: $endDate,
  queryString: $searchString,
});

export const searchFx = createEffect(getFilesByQuery);
export const $files = createStore<string[]>([]).on(
  searchFx.doneData,
  (_, payload) => payload
);

const debounceSearchQuery = debounce({
  source: $searchQuery,
  timeout: 1000,
});

forward({
  from: debounceSearchQuery,
  to: searchFx,
});
