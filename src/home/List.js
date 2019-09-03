
import React from 'react'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import CustomCard from '../common/CustomCards'
import ListFooter from './ListFooter.js'
import ListItem from './ListItem.js'

import './List.css'

const List = (props) => (
    <CustomCard 
        containerClass="list-container"
        link="/lista/edicao"
        footer={<ListFooter total={props.total}/>}
        cardClass={props.openedItems < 1 ? 'closed-list' : 'opened-list' }
    >
        <div>
            <p className="title">{props.list}</p>
            <div className="list-card-body">
                <ListItem icon={faShoppingBasket} text={`${props.openedItems} item(s) restantes`} />
                <ListItem icon={faCheck} text={`${props.closedItems} item(s) comprados`}/>
            </div>
        </div> 
    </CustomCard>    
)        

ListItem.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
}
export default List