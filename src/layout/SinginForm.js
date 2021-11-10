import React from 'react';
import Modal from '../components/ui/Modal';


const SinginForm = () => {
    return (
        <Modal>
            <div>
                <form id="singin-form">
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" required />
                    <label htmlFor="password">Password</label>
                    <input name="password" autoComplete="false" placeholder="Enter password..." type="password" required />
                    <button> Sing in</button>
                </form>
                <button>Close</button>
            </div>
        </Modal>
    )
}

export default SinginForm
