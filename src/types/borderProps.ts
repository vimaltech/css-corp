type FirstProp = {
  isFirst?: boolean;
  isLast?: never;
};

type LastProp = {
  isFirst?: never;
  isLast?: boolean;
};

export type BorderProps = FirstProp | LastProp;
