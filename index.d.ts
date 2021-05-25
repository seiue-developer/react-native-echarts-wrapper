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
> {}
