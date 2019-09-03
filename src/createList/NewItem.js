import React from 'react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CustomCard from '../common/CustomCards'
import {Creators as FormActions } from '../store/actions/form'
import { dispatch } from '../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range';


const NewItem = (props) => (
    <CustomCard link="#" action={ () => props.startAdd(props.list)} containerClass="list-item">
        <div className="new-item">
            <p className="title">Novo Produto</p>
            <FontAwesomeIcon icon={faPlusCircle} color="#E4E4E4" size="8x" />
        </div>
    </CustomCard>
)

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null,mapDispatchToProps)(NewItem)