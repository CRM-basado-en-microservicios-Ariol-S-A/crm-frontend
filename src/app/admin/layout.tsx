import { SideMenu } from "@/modules/shared"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin-layout">
            <SideMenu/>
            <h1>Hello Root Layout Admin</h1>
        </div>
    );
}