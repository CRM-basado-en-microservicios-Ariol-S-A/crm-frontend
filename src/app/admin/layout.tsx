import { NavMenu, SideMenu } from "@/modules/shared"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin-layout">
            <SideMenu/>
            <main className="w-full">
                <NavMenu/>
                { children}
            </main>
        </div>
    );
}