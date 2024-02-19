
import Nav from "@/src/components/manage/nav"
import ProfileContainer from "@/src/components/profile/profile"

export default function Profile() {

    return (
        <>
            <Nav />
            <div className="flex justify-start h-full my-5 mx-5">
            <ProfileContainer />
            <div className="bg-white rounded-xl shadow-lg px-1 w-full ml-5">

            </div>  
            </div>
          
        </>
    )
}