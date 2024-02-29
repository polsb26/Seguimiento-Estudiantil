import Footer from "@/src/components/manage/footer"
import HeaderEgresados from "@/src/components/manage/headerEgre"

export default function Page() {
    return (
        <div className="flex flex-col bg-white h-full shadow-xl rounded-3xl">
            <HeaderEgresados />
            <div className="flex-grow">


            </div>
            <Footer />
        </div>
    )
}