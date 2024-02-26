import Footer from "@/src/components/manage/footer"
import HeaderEgresados from "@/src/components/manage/headerEgre"
export default function Page() {
    return (
        <div className="bg-white h-full shadow-xl rounded-lg">
            <div className="flex flex-col bg-white h-full shadow-xl rounded-lg">
                <div className="flex-grow">
                    <HeaderEgresados />
                    <table className="border-collapse border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">Número de Ciudad</th>
                                <th className="border border-slate-600">Ciudad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-700">1</td>
                                <td className="border border-slate-700">Indianapolis, Indiana</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700">2</td>
                                <td className="border border-slate-700">Columbus, Ohio</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700">3</td>
                                <td className="border border-slate-700">Detroit, Michigan</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700">4</td>
                                <td className="border border-slate-700">Columbus, Ohio</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700">4</td>
                                <td className="border border-slate-700">Columbus, Ohio</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </div>
    )
}