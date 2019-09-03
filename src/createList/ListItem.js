import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import CustomCard from '../common/CustomCards'

import ListItemFooter from './ListItemFooter'

const ListItem = ({item, deleteProduct, toggleProduct, list}) => (
    <CustomCard 
        link="#"
        image={item.img}
        containerClass="list-item"   
        footer={<ListItemFooter deleteProduct={deleteProduct} item={item} list={list}/>}   
        action={() => toggleProduct(item.id)}          
    >
        <div>
            <div className="list-item-header">
                <Typography variant="subtitle1" component="h2">{item.product}</Typography>
                <Checkbox checked={item.checked}/>
            </div>
            <Typography component="p">{item.quantity} {item.unit}</Typography>
            <Typography component="p">R${item.price}</Typography>
        </div>
    </CustomCard>
)
export default ListItem