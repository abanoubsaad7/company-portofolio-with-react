import React from 'react';
import SideBar from '../main_and_side_Bar/sideBar';

const CategoriesForm = () => {
    return (
        <div className='row container'>
            <div className='col-3'>
                <SideBar/>
            </div>
            <div className='col-8'>
            <form>
                <label>category name</label>
                <br/><br/>
                <input type='text' name='name' placeholder='enter category name'/>
                <br/><br/>
                <label>category image: </label>
                <input type='file' name='img'/>
                <br/><br/>
                <button>add</button>
            </form>
            </div>
        </div>
    );
}

export default CategoriesForm;
