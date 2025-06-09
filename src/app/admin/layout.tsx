import { cookies } from "next/headers";
import AdminSidebar from "./AdminSidebar";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifyTokenForPage } from "@/utils/verifyToken";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "This is Admin Dashboard",
};

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  const token = cookies().get("jwtToken")?.value;
  if (!token) redirect("/");

  const payload = verifyTokenForPage(token);
  if (payload?.isAdmin === false) redirect("/");

  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
      <div className="overflow-height w-l5 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5">
        <AdminSidebar />
      </div>
      <div className="overflow-height w-full lg:w4/5 overflow-y-scroll ">
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
