import "styled-components";
import type { ThemeType } from '@/components/themes';
// interface IPalette {
//   [key: string]: string
// }
// we'll use a very simple theme with  palette and colors
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
  // {
  //   name: string,
  //   fontSize: string,
  //   borderRadius: string,
  //   borderWidth: string,
  //   borderStyle: string,
  //   bodyColor: string,
  //   textColor: string,
  //   size: {
  //     sm: string,
  //     md: string,
  //     lg: string,
  //   },
  //   palette: {
  //     common: {
  //       black: string,
  //       white: string,
  //     },
  //     default: {
  //       main: string,
  //       contrastText: string,
  //       shadowColor: string,
  //       outline: {
  //         contrastText: string,
  //         borderColor: string,
  //       },
  //       text: {
  //         contrastText: string,
  //       },
  //       hover: {
  //         main: string,
  //         contrastText: string,
  //         outline: {
  //           main: string,
  //         },
  //         text: {
  //           main: string,
  //         }
  //       },
  //       disabled: {
  //         main: string,
  //         contrastText: string,
  //         borderColor: string,
  //         outline: {
  //           contrastText: string
  //         },
  //         text: {
  //           contrastText: string
  //         }
  //       },
  //       active: {
  //         main: string
  //         contrastText: string
  //       }
  //     },
  //     primary: {
  //       main: string,
  //       contrastText: string,
  //       shadowColor: string,
  //       outline: {
  //         contrastText: string,
  //         borderColor: string,
  //       },
  //       text: {
  //         contrastText: string,
  //       },
  //       hover: {
  //         main: string,
  //         contrastText: string,
  //         outline: {
  //           main: string,
  //           contrastText: string,
  //         },
  //         text: {
  //           main: string,
  //         }
  //       },
  //       disabled: {
  //         main: string,
  //         contrastText: string,
  //         borderColor: string,
  //         outline: {
  //           contrastText: string,
  //           borderColor: string,
  //         },
  //         text: {
  //           contrastText: string
  //         }
  //       },
  //     },
  //     secondary: {
  //       main: string,
  //       contrastText: string,
  //       shadowColor: string,
  //       outline: {
  //         contrastText: string,
  //         borderColor: string,
  //       },
  //       text: {
  //         contrastText: string,
  //       },
  //       hover: {
  //         main: string,
  //         contrastText: string,
  //         outline: {
  //           main: string,
  //         },
  //         text: {
  //           main: string,
  //         }
  //       },
  //       disabled: {
  //         main: string,
  //         contrastText: string,
  //         borderColor:  string,
  //         outline: {
  //           contrastText: string,
  //         },
  //         text: {
  //           contrastText: string
  //         }
  //       },
  //     },
  //     danger: {
  //       main: string,
  //       contrastText: string,
  //       shadowColor: string,
  //       outline: {
  //         contrastText: string,
  //         borderColor: string,
  //       },
  //       text: {
  //         contrastText: string,
  //       },
  //       hover: {
  //         main: string,
  //         contrastText: string,
  //         outline: {
  //           main: string,
  //         },
  //         text: {
  //           main: string,
  //         }
  //       },
  //       disabled: {
  //         main: string,
  //         contrastText: string,
  //         borderColor:string,
  //         outline: {
  //           contrastText: string
  //         },
  //         text: {
  //           contrastText: string
  //         }
  //       },
  //     },
  //   },
  // }
