import {
  combine,
  createEffect,
  createEvent,
  createStore,
  fromObservable,
  sample,
} from "effector";
import { BehaviorSubject, debounceTime } from "rxjs";

const searchPhraseSubject = new BehaviorSubject("");
const searchPhrase$ = searchPhraseSubject.pipe(debounceTime(800));
const updatedSearchPhrase = fromObservable<string>(searchPhrase$);
searchPhrase$.subscribe();

export const updateSearchPhrase = (value: string) => {
  searchPhraseSubject.next(value);
};

export const $searchPhrase = createStore("").on(
  updatedSearchPhrase,
  (prev, payload) => payload
);

type DateFilterType = {
  dateStart?: number;
  dateEnd?: number;
};

export const changeDateFilter = createEvent<DateFilterType>();
export const $dateFilter = createStore<DateFilterType>({}).on(
  changeDateFilter,
  (prev, payload) => {
    return {
      ...payload,
    };
  }
);

const fetchFilesFx = createEffect(async (value: any) => {
  console.log(value);
});

const $searchParams = combine({ $searchPhrase, $dateFilter }, (value) => {
  return {
    query: value.$searchPhrase,
    ...value.$dateFilter,
  };
});

sample({
  source: $searchParams,
  target: fetchFilesFx,
});
