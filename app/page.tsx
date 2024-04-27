import { LoginButton } from "@/components/auth/Login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center bg-slate-600">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔏 Auth
        </h1>
        <p className="text-white text-lg">A Simple Authentication Service</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
