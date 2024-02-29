import HeaderEstudiantes from "@/src/components/manage/headerEstu"
import Footer from "@/src/components/manage/footer"
export default function Page() {
  return (
    <>
      <div className="flex flex-col bg-white h-full shadow-xl rounded-2xl">
      <HeaderEstudiantes />
        <div className="flex-grow">
          
        </div>
        <Footer />
      </div>
    </>

  )
}