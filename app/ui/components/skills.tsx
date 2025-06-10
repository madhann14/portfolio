export default function Skills({ skills }: { skills: string[] }) {
    return (
        <ul className="flex flex-wrap ">
            {skills.map(skill =>
            <li className="me-1.5 mt-2">
                <div className="flex items-center rounded-full px-3 py-1 text-xs bg-grey">
                    {skill}
                </div>
            </li>
            )}
        </ul>
    )
}