import LoginButton from "@/components/login/login-btn";
import ServerComponent from "@/components/login/server-component";
import { LoginForm } from "@/components/ui/login-form";

export default function Page() {
  return (
    <div>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
