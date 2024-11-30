import React from 'react';
import SideBar from '../main_and_side_Bar/sideBar';
import CategoriesSelectionTag from '../categoriesSelectionTag';

const ProductsForm = () => {
    return (
        <div className='row container'>
            <div className='col-3'>
                <SideBar/>
            </div>
            <div className='col-8'>
            <form>
                <label>title</label>
                <br/><br/>
                <input type='text' name='title'/>
                <br/><br/>
                <label>describtion</label>
                <br/><br/>
                <textarea name='describtion'></textarea>
                <br/><br/>
                <label>category</label>
                <br/><br/>
                <CategoriesSelectionTag nameOfListBox={'category'}/>
                <br/><br/>
                <label>coverPhoto:</label>
                <input type='file' name='coverPhoto'/>
                <br/><br/> 
                <label>projectPhotos:</label>
                <input type='file' name='projectPhotos'/>
                <br/><br/>
                <button>add</button>
            </form>
            </div>
        </div>
    );
}

export default ProductsForm;
