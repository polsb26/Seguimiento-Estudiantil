
import ProfileContainer from "@/src/components/profile/profile";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
            <div className="my-6">
                <ProfileContainer />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 manage-bg-color">{children}</div>
        </div>
    );
}