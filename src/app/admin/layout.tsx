import { NavMenu, SideMenu } from "@/modules/shared"
import { Toaster } from "sonner";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="admin-layout">
                <Toaster
                    closeButton
                    richColors
                    position="top-center"
                    style={{
                        position: "absolute",
                    }}
                />
                <SideMenu />
                <main className="w-full">
                    <NavMenu />
                    {children}
                </main>
            </div>
        </>
    );
}