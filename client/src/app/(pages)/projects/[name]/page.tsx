export default function ProjectDetail({params,}: {
    params: { name: string };
}) {
    return (
        <div>
            <h1>Project Detail Page</h1>
            <p>Project Name: {params.name}</p>
        </div>
    )
}