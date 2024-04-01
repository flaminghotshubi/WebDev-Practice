import { useRouter } from "next/router"

export default function User() {
    const router = useRouter();
    return (
        <>
            <h1>Welcome {router.query.username}</h1>
            <br />
            {/* <button style={{ backgroundColor: "gray" }} onClick={() => router.push(`/user/${router.query.username}/settings`)}>
                Open Settings
            </button> */}
            <button style={{ backgroundColor: "gray" }} onClick={() => router.push({
                pathname: "/user/[username]/settings",
                query: { username: router.query.username }
            })}>
                Open Settings
            </button>
            <br />
            <button style={{ backgroundColor: "gray" }} onClick={() => router.push(`/`)}>
                Home
            </button>
            <br />
            <button style={{ backgroundColor: "gray" }} onClick={() => router.replace("/user")}>
                User Home
            </button>
            {/* <button style={{ backgroundColor: "gray" }} onClick={() => router.reload()}>
                User Home
            </button> */}
        </>
    )
}