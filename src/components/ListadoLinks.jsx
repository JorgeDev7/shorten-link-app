import Link from "./Link"

export default function ListadoLinks({ listado }) {

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    return (
        <>
            {listado?.map(link => (
                <Link
                    key={generarId()}
                    linkData={link}
                />
            ))}
        </>
    )
}
