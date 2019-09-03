
import React from 'react'

import CustomCard from '../common/CustomCards'

const NewList = (props) => (
    <CustomCard action={props.newList} link="lista/novo" containerClass="new-list-container">
        <div>
            <p className="title">
                Editar lista
            </p>
        </div>  
    </CustomCard>
)        
export default NewList