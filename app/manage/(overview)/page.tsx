import Footer from "@/src/components/manage/footer"
import HeaderTodos from "@/src/components/manage/headerTodos"
export default function Page() {
    return (
        <div className="flex flex-col bg-white h-full shadow-xl rounded-3xl">
            <HeaderTodos/>
            <div className="flex-grow">


            </div>
            <Footer />
        </div>
    )
}