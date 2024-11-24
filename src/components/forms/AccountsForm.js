// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const AccountsForm = () => {
//     const [accounts , setAccounts] = useState(null)
//     useEffect(()=>{
//         axios.get('http://localhost:6500/display/accounts')
//             .then((response=>{
//                 setAccounts(response.data.accountsObj)
//                 console.log(' response.data.accountsObj:>> ',response.data.accountsObj );
//             }))
//             .catch((error) => {
//                 console.error('Error fetching Accounts data:', error);
//             });
//     },[])
//     return (
//         <div>
//             <form>
//                 <label>Face Book Account</label>
//                 <br/>
//                 <input type='text' name='facebookAcc.name' placeholder='enter face book page name' value={accounts.facebookAcc.name}/>
//                 <br/>
//                 <input type='text' name='facebookAcc.link' placeholder='enter face book page link' value={accounts.facebookAcc.link}/>
//                 <br/><br/>
//                 <label>Instgram Account</label>
//                 <br/>
//                 <input type='text' name='instgramAcc.name' placeholder='enter instgram page name' value={accounts.instgramAcc.name}/>
//                 <br/>
//                 <input type='text' name='instgramAcc.link' placeholder='enter instgram page link' value={accounts.instgramAcc.link}/>
//                 <br/><br/>
//                 <label>twiter Account</label>
//                 <br/>
//                 <input type='text' name='twiterAcc.name' placeholder='enter twiter page name' value={accounts.twiterAcc.name}/>
//                 <br/>
//                 <input type='text' name='twiterAcc.link' placeholder='enter twiter page link' value={accounts.twiterAcc.link}/>
//                 <br/><br/>
//                 <label>WhatsApp</label>
//                 <br/>
//                 <input type='text' name='whatsApp.name' placeholder='enter whatsApp page name' value={accounts.whatsApp.name}/>
//                 <br/>
//                 <input type='text' name='whatsApp.phone' placeholder='enter whatsApp page phone' value={accounts.whatsApp.phone}/>
//                 <br/>
//                 <input type='text' name='whatsApp.link' placeholder='enter whatsApp page link' value={accounts.whatsApp.link}/>
//                 <br/><br/>
//                 <button>save</button>
//             </form>
//         </div>
//     );
// }

// export default AccountsForm;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccountsForm = () => {
    const [accounts, setAccounts] = useState(null); // Set initial state to null to indicate loading

    useEffect(() => {
        axios.get('http://localhost:6500/display/accounts')
            .then((response) => {
                setAccounts(response.data.accountsObj || {}); // Default to an empty object if no data
                console.log('response.data.accountsObj:', response.data.accountsObj);
            })
            .catch((error) => {
                console.error('Error fetching Accounts data:', error);
            });
    }, []);

    if (!accounts) {
        // Display a loading state or message until the data is fetched
        return <div>Loading accounts...</div>;
    }

    return (
        <div>
            <form>
                <label>Facebook Account</label>
                <br />
                <input
                    type='text'
                    name='facebookAcc.name'
                    placeholder='Enter Facebook page name'
                    value={accounts.facebookAcc?.name || ''} // Use optional chaining and fallback to ''
                    readOnly
                />
                <br />
                <input
                    type='text'
                    name='facebookAcc.link'
                    placeholder='Enter Facebook page link'
                    value={accounts.facebookAcc?.link || ''}
                    readOnly
                />
                <br /><br />
                <label>Instagram Account</label>
                <br />
                <input
                    type='text'
                    name='instgramAcc.name'
                    placeholder='Enter Instagram page name'
                    value={accounts.instgramAcc?.name || ''}
                    readOnly
                />
                <br />
                <input
                    type='text'
                    name='instgramAcc.link'
                    placeholder='Enter Instagram page link'
                    value={accounts.instgramAcc?.link || ''}
                    readOnly
                />
                <br /><br />
                <label>Twitter Account</label>
                <br />
                <input
                    type='text'
                    name='twiterAcc.name'
                    placeholder='Enter Twitter page name'
                    value={accounts.twiterAcc?.name || ''}
                    readOnly
                />
                <br />
                <input
                    type='text'
                    name='twiterAcc.link'
                    placeholder='Enter Twitter page link'
                    value={accounts.twiterAcc?.link || ''}
                    readOnly
                />
                <br /><br />
                <label>WhatsApp</label>
                <br />
                <input
                    type='text'
                    name='whatsApp.name'
                    placeholder='Enter WhatsApp page name'
                    value={accounts.whatsApp?.name || ''}
                    readOnly
                />
                <br />
                <input
                    type='text'
                    name='whatsApp.phone'
                    placeholder='Enter WhatsApp phone'
                    value={accounts.whatsApp?.phone || ''}
                    readOnly
                />
                <br />
                <input
                    type='text'
                    name='whatsApp.link'
                    placeholder='Enter WhatsApp page link'
                    value={accounts.whatsApp?.link || ''}
                    readOnly
                />
                <br /><br />
                <button type="button">Save</button>
            </form>
        </div>
    );
};

export default AccountsForm;
