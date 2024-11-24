import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUsForm = () => {
    const [aboutUs, setAboutUs] = useState({
        companyName: '',
        description: ''
    });

    // Fetch data from API when the component mounts
    useEffect(() => {
        axios.get('http://localhost:6500/display/aboutUs')
            .then((response) => {
                const { aboutUsContentObj } = response.data;
                if (aboutUsContentObj) {
                    setAboutUs({
                        companyName: aboutUsContentObj.companyName || '',
                        description: aboutUsContentObj.description || ''
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching About Us data:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAboutUs((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save updated data logic (optional)
        console.log('Saved About Us data:', aboutUs);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Company name</label>
                <br/><br/>
                <input 
                    type="text" 
                    name="companyName" 
                    value={aboutUs.companyName} 
                    onChange={handleInputChange}
                />
                <br/><br/>
                <label>Description</label>
                <br/><br/>
                <textarea 
                    name="description" 
                    value={aboutUs.description} 
                    onChange={handleInputChange}
                />
                <br/><br/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AboutUsForm;
