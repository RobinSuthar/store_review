import Loginbutton from "@/components/login-btn";
import ServerSiderenderdComponent from "@/lib/actions/ServerSiderenderdComponent";

export default function Page() {
  return (
    <div>
      SERVER SIDE RENDERED :{" "}
      <ServerSiderenderdComponent></ServerSiderenderdComponent>
      CLIENT SIDE RENDERED : <Loginbutton></Loginbutton>
    </div>
  );
}
