import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './home.css';
import NewList from './NewList'
import List from './List'
import { getListTotal, getOpenedItems, getClosedItems } from '../store/reducers/list'
import { Creators as ListActions } from '../store/actions/list'

const Home = (props) => (
    <div className="page-container home-image">
        <NewList newList={props.newList}/>
        {
            props.list.items.length > 0 && 
            <List 
                list={props.list.list} 
                total={props.total} 
                openedItems={props.openedItems}
                closedItems={props.closedItems}
                date={props.date}
            />
        }
    </div>
)

const MapStateToProps = state =>({
    list: state.list,    
    total: getListTotal(state),
    date:  state.list.date,
    openedItems: getOpenedItems(state),
    closedItems: getClosedItems(state),
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(MapStateToProps,mapDispatchToProps)(Home)