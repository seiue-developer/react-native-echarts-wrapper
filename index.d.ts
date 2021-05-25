import * as React from "react";
import { EChartOption } from "echarts";

export interface ReactNativeEchartsPropsTypes {
  /**
   * the echarts option config
   * @see http://echarts.baidu.com/option.html#title
   */
  option: EChartOption;
}

export class ECharts extends React.Component<
  ReactNativeEchartsPropsTypes,
  any
> {
  setOption: (
    option: EChartOption,
    notMerge?: boolean,
    lazyUpdate?: boolean
  ) => void;

  getOption: (callback: (data: any) => void) => void;
}
