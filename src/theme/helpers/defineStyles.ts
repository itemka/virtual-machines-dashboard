import { SxProps, Theme } from '@mui/system';

export type CSSStyles<TKeys extends string = string> = {
  [key in TKeys]:
    | SxProps<Theme>
    | ((theme: Theme) => SxProps<Theme>)
    | ((theme: Theme) => (params: any) => SxProps<Theme>);
};

export function defineStyles<T extends CSSStyles>(styles: T): T {
  return styles;
}
