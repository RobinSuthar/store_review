import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="flex mt-6 w-full max-w-xlg items-center gap-2">
      <Input type="email" placeholder="Enter Your Promt...." />
      <Button type="submit" variant="outline">
        AI Anlysis
      </Button>
    </div>
  );
}
