import { auth } from "@/lib/auth"
const HelloPage = async () => {
    const session = await auth()
    if (!session) return <div>Not authenticated</div>
    return (
        <div>
            User Login
        </div>
    );
};

export default HelloPage;