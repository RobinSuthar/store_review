import { DropdownMenuCheckboxes } from "@/components/DropdownMenuRadio";
import { ChartLineInteractive } from "@/components/interactove";
import { SelectionCheckBox } from "@/components/Selection";

export default function Page() {
  return (
    <div>
      Comparison
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 m-11 gap-10">
          <DropdownMenuCheckboxes />
          <SelectionCheckBox />
        </div>
        <div className="bg-card ml-12 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          sadadam asdasd asdasd zdds sadadam asd asd s
        </div>
      </div>
      <div className="grid grid-cols-2 ml-7">
        <div>
          <ChartLineInteractive />
        </div>
      </div>
    </div>
  );
}
