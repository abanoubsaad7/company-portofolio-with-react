import React from 'react';

const AccountsForm = () => {
    return (
        <div>
            <form>
                <label>Face Book Account</label>
                <br/>
                <input type='text' name='facebookAcc.name' placeholder='enter face book page name'/>
                <br/>
                <input type='text' name='facebookAcc.link' placeholder='enter face book page link'/>
                <br/><br/>
                <label>Instgram Account</label>
                <br/>
                <input type='text' name='instgramAcc.name' placeholder='enter instgram page name'/>
                <br/>
                <input type='text' name='instgramAcc.link' placeholder='enter instgram page link'/>
                <br/><br/>
                <label>twiter Account</label>
                <br/>
                <input type='text' name='twiterAcc.name' placeholder='enter twiter page name'/>
                <br/>
                <input type='text' name='twiterAcc.link' placeholder='enter twiter page link'/>
                <br/><br/>
                <label>WhatsApp</label>
                <br/>
                <input type='text' name='whatsApp.name' placeholder='enter whatsApp page name'/>
                <br/>
                <input type='text' name='whatsApp.phone' placeholder='enter whatsApp page phone'/>
                <br/>
                <input type='text' name='whatsApp.link' placeholder='enter whatsApp page link'/>
                <br/><br/>
                <button>save</button>
            </form>
        </div>
    );
}

export default AccountsForm;
