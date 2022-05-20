import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { debounce, reset } from "patronum";
import {
  getFilesByQuery,
  SearchParamsType,
  SearchResponse,
  TypeOfSearchFiles,
} from "shared/api/search";

export const changeSearchString = createEvent<string>();

export const $searchString = createStore("").on(
  changeSearchString,
  (_, payload) => payload
);

export const changeSearchStringFilter = createEvent<string>();
export const $searchStringFilter = createStore<string>("")
  .on(changeSearchString, (_, payload) => payload)
  .on(changeSearchStringFilter, (_, payload) => payload);

export const changeTypes = createEvent<TypeOfSearchFiles[]>();
export const $types = createStore<TypeOfSearchFiles[]>([]).on(
  changeTypes,
  (_, payload) => payload
);

export const changeStartDate = createEvent<string>();
export const $startDate = createStore<string | null>(null).on(
  changeStartDate,
  (_, payload) => payload
);

export const changeEndDate = createEvent<string>();
export const $endDate = createStore<string | null>(null).on(
  changeEndDate,
  (_, payload) => payload
);

export const changeFileName = createEvent<string>();
export const $fileName = createStore<string>("").on(
  changeFileName,
  (_, payload) => payload
);

export const $searchQueryFilter = combine<SearchParamsType>({
  fileNameQuery: $fileName,
  type: $types,
  startDate: $startDate,
  endDate: $endDate,
  textQuery: $searchStringFilter,
});

const debounceSearchQuery = debounce({
  source: $searchString,
  timeout: 1000,
});

export const $searchQuery = createStore<SearchParamsType>({
  fileNameQuery: "",
  type: [],
  startDate: null,
  endDate: null,
  textQuery: "",
}).on(debounceSearchQuery, (prev, value) => ({ ...prev, textQuery: value }));

export const searchFx = createEffect(getFilesByQuery);
export const $files = createStore<SearchResponse>({
  pages: -1,
  items: [],
}).on(searchFx.doneData, (_, payload) => ({ ...payload }));

export const applyFilter = createEvent();

export const resetFilters = createEvent();

reset({
  clock: resetFilters,
  target: [
    $searchString,
    $searchStringFilter,
    $endDate,
    $startDate,
    $fileName,
    $types,
    $searchQuery,
    $searchQueryFilter,
  ],
});

sample({
  clock: applyFilter,
  source: $searchQueryFilter,
  target: $searchQuery,
});

sample({
  clock: applyFilter,
  source: $searchQueryFilter,
  fn: (source) => source.textQuery,
  target: $searchString,
});

sample({
  source: $searchQuery,
  target: searchFx,
});
