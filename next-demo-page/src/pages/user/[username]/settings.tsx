import { useRouter } from "next/router"
export default function UserSettings() {
    const { query } = useRouter();
    return (<>
        <h1>Settings for {query.username}</h1>
    </>);
}