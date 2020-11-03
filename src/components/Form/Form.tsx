import React from 'react';
import {Button, Paper, TextField} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import {ProductType} from "../../app/productsReducer";
import {required, maxLengthCreator, number} from "./validators";

/*type PropsTypeForm = {
    handleSubmit: () => void
}*/

const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}: any) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        variant={"filled"}
        helperText={touched && error}
        {...input}
        {...custom}
        style={{'margin': '20px ', 'width': 'calc(100% - 40px)'}}
    />
)
const maxLength10 = maxLengthCreator(10);
const maxLength20 = maxLengthCreator(20);

const Form = React.memo(function (props: any) {
    console.log('render Form')
    return (
        <form onSubmit={props.handleSubmit}>
            <div style={{width: '100%', marginTop: '30px',}}>
                <Paper>
                    <Field name="firstName" component={renderTextField} label="First Name"
                           validate={[required, maxLength10]}/>
                    <Field name="lastName" component={renderTextField} label="Last Name" validate={[required, maxLength10]}/>
                    <Field name="address" component={renderTextField} label="Address" validate={[required, maxLength20]}/>
                    <Field name="phoneNumber" component={renderTextField} label="Phone Number" validate={[required, maxLength10, number]}/>
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

const OrderReduxForm = reduxForm({form: 'order'})(Form);

export const OrderForm = function (props: PropsType) {
    const onSubmit = (values: any) => {
        console.log(values, props.products);
    }
    return (
        <OrderReduxForm onSubmit={onSubmit}/>
    )
};