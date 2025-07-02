import { ChartAreaStep } from "@/components/LinearBar";
import { ChartRadarDots } from "@/components/RadarChart";
import { ChartRadialSimple } from "@/components/RadicalChart";
import { ChartTooltipIndicatorLine } from "@/components/TooltiplinearBar";

export default function Insights() {
  return (
    <div className="grid grid-cols-2 p-12">
      <div>
        <div className="grid  grid-cols-2 gap-10">
          <ChartAreaStep />
          <ChartTooltipIndicatorLine />
        </div>
        <div className="grid mt-12 grid-cols-2 gap-10 ">
          <ChartRadialSimple />
          <ChartRadarDots />
        </div>
      </div>
      <div>
        <div className="bg-card ml-12 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          sadadam asdasd asdasd
        </div>
      </div>
    </div>
  );
}
