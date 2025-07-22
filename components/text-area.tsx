import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithText() {
  return (
    <div className="grid min-w-80 min-h-32 gap-3">
      <Textarea placeholder="Type your message here." id="message-2" />
    </div>
  );
}
