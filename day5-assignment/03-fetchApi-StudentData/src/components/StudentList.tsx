import { useEffect, useState } from "react"
import { type UserData } from "./interface";
import UserCardInfo from "./UserCardInfo";
import Header from "./Header";


const StudentList = () => {
    const [users, setUsers] = useState<UserData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getUserData = async () => {
        try{
            setIsLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        }catch(e){
            console.log("Error Caught"+e);
        }finally{
            setIsLoading(false);
        }
        
    }
    useEffect(()=> {
        getUserData();
    },[])

    if(isLoading){
        return <div> Loading </div>
    }

    if(users.length === 0){
        return <div> No Data Found </div>
    }

  return (
    <div>
        <Header title="User Details"/>
        <div className="flex flex-wrap gap-15 mx-[10rem] w-full">
        {users.map((user) => 
            <div className="w-1/4 bg-slate-800 rounded-2xl p-6"  key={user.id}>
                <UserCardInfo userData = {user}/>
            </div>        
        )}

    </div>
    </div>
  )
}

export default StudentList
