import {useSelector} from 'react-redux';
import ViewAdultsComp from './viewAdults';
function ViewAllComp() {
    const users = useSelector(state=> state)
    return ( <div>
        <h1>View All</h1>
       <hr />
        
        <table>
            <tbody>
                <tr>
                    <th>id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>age</th>
                </tr>
            {users.users.map((user, index)=>{
                    // return <div key={index}>{user.fname}</div>;
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.age}</td>
                    </tr>
        })}       
            </tbody>
        </table>

        <ViewAdultsComp></ViewAdultsComp>
    </div> );
}

export default ViewAllComp;