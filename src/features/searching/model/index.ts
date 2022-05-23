import { createEffect, createEvent, createStore, sample } from "effector";
import { debounce, reset } from "patronum";
import { deleteFx } from "entities/removing-file";
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

const debounceSearchQuery = debounce({
  source: $searchString,
  timeout: 600,
});

export const changePage = createEvent<number>();
export const $queryParams = createStore<SearchParamsType>({
  fileNameQuery: "",
  type: [],
  startDate: null,
  endDate: null,
  textQuery: "",
  page: 1,
})
  .on(changePage, (prev, payload) => ({ ...prev, page: payload }))
  .on(debounceSearchQuery, (prev, payload) => {
    if (prev.textQuery === payload) {
      return prev;
    }
    return {
      ...prev,
      textQuery: payload,
      page: 1,
    };
  });

export const changeTypes = createEvent<TypeOfSearchFiles[]>();
export const changeStartDate = createEvent<string>();
export const changeEndDate = createEvent<string>();
export const changeFileName = createEvent<string>();
export const changeSearchStringFilter = createEvent<string>();
export const $filter = createStore<SearchParamsType>({
  fileNameQuery: "",
  type: [],
  startDate: null,
  endDate: null,
  textQuery: "",
  page: 1,
})
  .on(changeSearchString, (prev, textQuery) => ({ ...prev, textQuery }))
  .on(changeSearchStringFilter, (prev, textQuery) => ({ ...prev, textQuery }))
  .on(changeTypes, (prev, type) => ({
    ...prev,
    type,
  }))
  .on(changeStartDate, (prev, startDate) => ({
    ...prev,
    startDate,
  }))
  .on(changeEndDate, (prev, endDate) => ({
    ...prev,
    endDate,
  }))
  .on(changeFileName, (prev, fileNameQuery) => ({
    ...prev,
    fileNameQuery,
  }));

export const applyFilter = createEvent();

sample({
  clock: applyFilter,
  source: $filter,
  target: $queryParams,
});

sample({
  clock: applyFilter,
  source: $filter,
  fn: (source) => source.textQuery,
  target: $searchString,
});

export const searchFx = createEffect(getFilesByQuery);
export const $files = createStore<SearchResponse>({
  countItems: 0,
  pages: -1,
  items: [],
}).on(searchFx.doneData, (_, payload) => ({ ...payload }));

sample({
  clock: [$queryParams, deleteFx.done],
  source: $queryParams,
  target: searchFx,
});

export const resetFilters = createEvent();

reset({
  clock: resetFilters,
  target: [$searchString, $filter, $queryParams],
});
