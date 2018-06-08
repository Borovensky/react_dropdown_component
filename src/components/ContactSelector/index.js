import React, { Component } from 'react';
import './styles.sass';
import Dropdown from '../Dropdown';
import contacts from './contacts.json';

class ContactSelector extends Component {
    
    constructor() {
        super();

        this.state = {
            contacts: contacts.contacts
        }

        this.toggleSelectedItem = this.toggleSelectedItem.bind(this);
    }

    toggleSelectedItem(id, key) {
        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
            [key]: temp
        })
    }

    render() {

        const { contacts } = this.state

        return(
            <section className='contactContainer'>
                <div className='innerContainer'>
                    <Dropdown
                        title='Select Contact'
                        toggleItem={this.toggleSelectedItem}
                    >
                        {contacts}
                    </Dropdown>
                </div>
            </section>
        );
    }

}

export default ContactSelector; 