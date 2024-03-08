export default function PerfilAcademico({alumno}) {
    return (
        <>
            <div className="mx-4">
                <h2 className="manage-bg-color">Perfi Academico</h2>
                <table className="table-fixed">
                    <tbody className="">
                        <tr>
                            <td className="">Codigo Universitario</td>
                            <td className="">:</td>
                            <td>{alumno.codigo_universitario} </td>
                        </tr>
                        <tr>
                            <td className="">Semestre</td>
                            <td className="">:</td>
                            <td>{alumno.semestre_ciclo}</td>
                        </tr>
                        <tr>
                            <td className="">Ciclo</td>
                            <td className="">:</td>
                            <td>{alumno.semestre_ciclo}</td>
                        </tr>
                        <tr>
                            <td className="">Nivel</td>
                            <td className="">:</td>
                            <td>{alumno.nivel}</td>
                        </tr>
                        <tr>
                            <td className="">Tipo de Estudiante</td>
                            <td className="">:</td>
                            <td>{alumno.nombre_estado}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}