import React from 'react';
import {Button, Paper, TextField} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import {ProductType} from "../../app/productsReducer";
import {maxLengthCreator, number, required} from "./validators";

/*type PropsTypeForm = {
    handleSubmit: () => void
}*/

const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}: any) => (
    <><TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        variant={"filled"}
        helperText={touched && error}
        {...input}
        {...custom}
        style={{'margin': '20px ', 'width': 'calc(100% - 40px)'}}
    />
        {/*{touched && error? alert(error): ''}*/}
    </>
)
const maxLength10 = maxLengthCreator(10);
const maxLength20 = maxLengthCreator(20);

const Form = React.memo(function (props: any) {
    console.log('render Form')
    const {error, handleSubmit, pristine, reset, submitting, products} = props
    return (
        <form onSubmit={handleSubmit}>
            <div style={{width: '100%', marginTop: '30px',}}>
                <Paper>
                    <Field name="firstName" component={renderTextField} label="First Name"
                           validate={[required, maxLength10]}/>
                    <Field name="lastName" component={renderTextField} label="Last Name"
                           validate={[required, maxLength10]}/>
                    <Field name="address" component={renderTextField} label="Address"
                           validate={[required, maxLength20]}/>
                    <Field name="phoneNumber" component={renderTextField} label="Phone Number"
                           validate={[required, maxLength10, number]}/>
                    <Button variant="contained" color="primary" type="submit"
                            style={{'margin': '20px ', 'width': 'calc(100% - 40px)'}}>
                        Send
                    </Button>
                </Paper>
            </div>
        </form>
    );
});

type PropsType = {
    products: Array<ProductType>
}

type FormDataType = {
    address: string
    firstName: string
    lastName: string
    phoneNumber: string
}

/*export default reduxForm({
    form: 'submitValidation' // a unique identifier for this form
})(Form)*/
const ReduxForm =  reduxForm({form: 'login'})(Form);

export const OrderForm = function (props: PropsType) {
    const onSubmit = (values: any) => {
        if (props.products.length === 0) {
            alert('Cart is empty!')
        }
        // alert([values, props.products]);
        let customer = JSON.stringify(values, null, 2);
        let products = JSON.stringify(props.products, null, 2);
        console.log(customer, products)
    }
    return (
        <ReduxForm onSubmit={onSubmit}/>
    )
};

