import {useSelector} from 'react-redux';

function ViewAdultsComp() {
    const StoreData = useSelector(state=> state)

    return ( <div>
        <h1>View Adults</h1>
        <hr />
        <table>
            <tbody>
                <tr>
                    <th>id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>age</th>
                </tr>
                {StoreData.users.filter(user=>user.age > 18).map((user, index)=>{
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.age}</td>
                    </tr>
        })}  
        </tbody>
        </table>        
    </div> );
}

export default ViewAdultsComp;