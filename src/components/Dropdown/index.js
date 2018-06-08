import React, { Component } from 'react';
import './styles.sass';
import FontAwesome from 'react-fontawesome';

class Dropdown extends Component {

    constructor() {
        super();

        this.state = {
            contactsOpen: false,
            title: ''
        }
    }

    static getDerivedStateFromProps(nextProps) {
        const count = nextProps.children.filter((a) => { return a.selected; }).length;
        
        if(count === 0) {
            return {title: nextProps.title}
        } else if(count === 1) {
            return {title: `${count} ${'contact selected'}`}
        } else if(count > 1) {
            return {title: `${count} ${'contacts selected'}`}
        }
    }

    toggleContacts() {
        this.setState(prevState => ({
            contactsOpen: !prevState.contactsOpen
        }))
    }

    render() {

        const { children, toggleItem } = this.props;
        const { title, contactsOpen } = this.state;

        return(
            <div className='container'>
                
                <div className='button' onClick={() => this.toggleContacts()}> 
                    <div className='title'>{title}</div>
                    {contactsOpen
                        ? <FontAwesome className='icon' name="angle-up"/>
                        : <FontAwesome className='icon' name="angle-down"/>
                    }
                </div>
                
                {contactsOpen && <ul className='contactsList'>
                    {children.map((item) => (
                        <li className={`item ${ item.selected ? 'selectedItem' : ''}`} 
                            key={item.id}
                            onClick={() => toggleItem(item.id, item.key)}
                        >
                            <div className='contactInfo'>
                                <img className='image' src={item.image} alt='true'/>
                                <h5 className='name'>{item.name}</h5>
                            </div>
                            <div className='email'>{item.email}</div>
                        </li>
                    ))}
                </ul>}
               
            </div>
        );

    }

}

export default Dropdown;