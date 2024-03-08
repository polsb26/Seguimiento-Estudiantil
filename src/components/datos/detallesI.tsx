

export default function DetallesIngreso({alumno}) {
    return (
        <>
            <div className="mx-4">
                <h2 className="manage-bg-color">Detalles de Ingreso</h2>
                <table className="table-fixed ">
                    <tbody className="">
                        <tr>
                            <td className="">Modalidad de Ingreso</td>
                            <td className="">:</td>
                            <td>{alumno.modalidad_ingreso}</td>
                        </tr>
                        <tr>
                            <td className="">Tipo de Ingreso</td>
                            <td className="">:</td>
                            <td>{alumno.tipo_ingreso}</td>
                        </tr>
                        <tr>
                            <td className="">Periodo de Ingreso</td>
                            <td className="">: </td>
                            <td>{alumno.periodo_ingreso}</td>
                        </tr>
                        <tr>
                            <td className="">Periodo de Matricula</td>
                            <td className="">:</td>
                            <td>{alumno.periodo_matricula}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}