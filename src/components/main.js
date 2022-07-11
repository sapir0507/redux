import { Route, Routes } from 'react-router-dom';
import UpdateViewsComp from './updateView';

function MainComp() {
    return ( <div>
        <Routes>
            <Route path='/' element={<UpdateViewsComp/>}></Route>
        </Routes>
    </div> );
}

export default MainComp;