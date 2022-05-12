export type OptionType = {
  name: string;
  value: boolean;
  dependsOn?: string;
};

export type OptionsType = {
  [key: string]: OptionType;
};
