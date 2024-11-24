import React from 'react';

const AboutUsForm = () => {
    return (
        <div>
            <form>
                <label>Company name</label>
                <br/><br/>
                <input type='text' name='companyName'/><br/><br/>
                <label>description</label>
                <br/><br/>
                <textarea name='description'>
                </textarea><br/><br/>
                <button>save</button>
            </form>
        </div>
    );
}

export default AboutUsForm;
