import { ChartAreaStep } from "@/components/LinearBar";
import { ChartRadarDots } from "@/components/RadarChart";
import { ChartRadialSimple } from "@/components/RadicalChart";
import { ChartTooltipIndicatorLine } from "@/components/TooltiplinearBar";

export default function Insights() {
  return (
    <div>
      <div className="grid  grid-cols-4 gap-10">
        <ChartAreaStep />
        <ChartTooltipIndicatorLine />
      </div>
      <div className="grid mt-12 grid-cols-4 gap-10">
        <ChartRadialSimple />
        <ChartRadarDots />
      </div>
    </div>
  );
}
