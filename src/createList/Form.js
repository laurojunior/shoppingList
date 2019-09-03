import React, { Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FormActions } from '../store/actions/form';

const units = ['Quilos', 'Litros', 'Unidades'];
   
class Form extends Component {

    state = {
        list: '',
        product: '',
        quantity: '',
        unit: '',
        price: '',
        showErrors: false
    };

    componentDidUpdate(prevProps){
        if(this.props.form.action === 'update' && prevProps.form.productToUpdate != this.props.form.productToUpdate){
            const { product, quantity, unit, price } = this.props.form.productToUpdate;
            this.setState({ 
                list: this.props.form.listToUpdate.list,               
                product,
                quantity,
                unit,
                price,
                showErrors: false
            })
        }

        if(this.props.form.action == 'new' && prevProps.form.action != this.props.form.action){
            this.setState({ list: this.props.form.listToUpdate })
        }
    }

    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        const { list, product, quantity, unit, price } = this.state
        if( !list || !product || !quantity || !unit ){
            this.setState({ showErrors: true });
        }else{
            this.props.form.action == 'update' 
            ? this.updateItem(list, product, quantity, unit, price)
            : this.addItem(list, product, quantity, unit, price)  ;
        }
    }

    addItem = (list, product, quantity, unit, price) => {
        this.props.addProduct({product, quantity, unit, price}, list)
        this.clearState()
        this.props.finishAdd()
    }

    updateItem = (list, product, quantity, unit, price) => {
        const { id, checked } = this.props.form.productToUpdate;
        this.props.updateProduct({product, quantity, unit, price, id, checked}, list)
        this.clearState()
        this.props.finishUpdate()
    }

    clearState = () => {
        this.setState({
            product: '',
            quantity: '',
            unit: '',
            price: '',
            showErrors: false
        })
    }

    render(){
        if(!this.props.showForm){
            return <div></div>
        }
        else{
            return(
                <form className="form-container">
                <div className="form-row">
                    <TextField
                        label="Lista"                
                        name="list"
                        value={this.state.list}
                        onChange={this.handleChange}
                        required
                        error={!this.state.list && this.state.showErrors}
                    />
                    <Button variant="outlined" color="primary" onClick={this.handleSubmit} >{ this.props.form.action == 'update' && "Alterar" }{ this.props.form.action != 'update' && "Criar" }</Button>
                </div>
                <div className="form-row">
                    <TextField
                        label="Produto"                
                        name="product"
                        value={this.state.product}
                        onChange={this.handleChange}
                        required
                        error={!this.state.product && this.state.showErrors}
                    />
                    <TextField
                        label="Quantidade"                
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        required
                        error={!this.state.quantity && this.state.showErrors}
                    />
                    <Select
                        select
                        label="Unidade"                
                        name="unit"
                        value={this.state.unit}
                        onChange={this.handleChange}
                        required
                        IconComponent={KeyboardArrowDownIcon}
                        error={!this.state.unit && this.state.showErrors}
                    >
                        {
                            units.map( option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <TextField
                        label="Preço"                
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$ </InputAdornment>
                        }}
                    />
                </div>
            </form>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    form: state.form,
    showForm: state.form.action || ownProps.url === 'novo'
})

const mapDispatchtoProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps,mapDispatchtoProps)(Form)