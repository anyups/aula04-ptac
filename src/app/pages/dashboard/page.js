import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    let pessoas = getUsers();
    return (
        <div>
            <Suspense fallback={<p>carregando...</p>}>
                <ListUsers users={users}/>
            </Suspense>
        </div>
    );
};