import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrMsg, Label, StyledField, StyledForm } from './ContactForm.styled';

const contactFormSchema = Yup.object().shape({
    name:   Yup.string().min(2, "Too short!").required("This field is required!"),
    number: Yup.number().min(4, "Min 4 numbers").required("This field is required!"),
})

export const ContactForm = ({onAdd}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={contactFormSchema}
                onSubmit={(values, action) => {
                 onAdd(values)   
                    action.resetForm()
                
            }}
            >
            <StyledForm>
                <Label>
                    Name
                        <StyledField type="text" name="name" placeholder="Rosie Simpson" />
                        <ErrMsg name="name" component="div"/>
                </Label>

                <Label>
                    Number
                        <StyledField type='tel' name="number" required placeholder="459-12-56" />
                        <ErrMsg name="number" component="div"/>
                </Label>

                <button type="submit">Add Contact</button>
            </StyledForm>
            </Formik>
        </div>
    );
}