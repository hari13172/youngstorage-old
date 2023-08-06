import { API } from "@/api/api";
import { useAuth } from "@/api/userAuth";
import { useQuery } from "@tanstack/react-query";


 function index() {
    const Authorization =  useAuth().then(res=>console.log(res));
    console.log(Authorization); // Access the token here

    // const { data, isLoading, isError, error } = useQuery({
    //     queryKey: ['userAuth'],
    //     queryFn: () => useAuth(),
    // })

    // if (isLoading) return (
    //     <div style={{ textAlign: "center" }}>
    //         loading.....
    //     </div>
    // );
    // if (isError) return (
    //     <div style={{ textAlign: "center" }}>
    //         {error}
    //     </div>
    // );
    // return (
    //     <div style={{ textAlign: "center" }}>
    //         {data.message.username}
    //     </div>
    // );
    return (
        <div style={{ textAlign: "center" }}>
            profile
        </div>
    )
}

export default index;
