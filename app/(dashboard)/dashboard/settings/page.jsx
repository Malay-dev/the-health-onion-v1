import { redirect } from "next/navigation";
import { authOptions } from "@/libs/authOptions";
import { getCurrentUser } from "@/libs/session";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import UserForm from "./components/userForm";
export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/auth");
  }
  return (
    <div className="mt-5">
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="container grid gap-10 ">
        <UserForm user={user}></UserForm>
      </div>
    </div>
  );
}
