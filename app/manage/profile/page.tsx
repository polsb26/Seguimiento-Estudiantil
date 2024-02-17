import Navbar from "@/src/components/manage/nav"
import ProfileContainer from "@/src/components/profile/profile"
import Container from "@/src/components/container/container"


export default function Profile() {

    return (
        <>
            <Navbar />
            <div className="flex justify-start ml-9 h-full my-5">
                <div className="w-96 ">
                    <ProfileContainer />
                   
                </div>
                <div className="mx-10 w-full">
                    <Container/>
                </div>
            </div>

        </>
    )
}