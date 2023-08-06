import Alerts from "@/component/alerts";
import SubHead from "@/component/subhead";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/api/api";
import { useAuth } from "@/api/userAuth";

function Labs() {
  const router = useRouter();
  // const isAuth = useQuery({
  //   queryKey: ['userAuth'],
  //   queryFn: () => useAuth(),
  // })

  // const iscontainer = useQuery({
  //   queryKey: ['containerdata'],
  //   queryFn: () => API.deploy,
  // })

  const ChangePath = (pathname) => {
    router.push(pathname);
  };
  return (
    <>
      <div className="lab-container">
        <SubHead />
        <Alerts />

        <div className="image">
          <img src="/ubuntu.png" />
          <button onClick={() => ChangePath("labs/ubuntu")}>Dashboard</button>
        </div>
      </div>
    </>
  );
}

export default Labs;
