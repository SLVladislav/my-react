import { ErrorMessage, Field, Form, Formik } from "formik"
import { nanoid } from "nanoid";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required") 
});

const initialValues = {
    name: "",
    number: ""
};

export const ContactForm = ({onAddContact}) => { 
    const nameId = nanoid();
    const numberId = nanoid();
    
    
    

    const handlerSubmmit = (value, actions) => {
        console.log(value);
        onAddContact({
            id: {
                nameId,
                numberId
            },
            name: value.name,
            number: value.number
        })
        actions.resetForm();  
        
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={FeedbackSchema} onSubmit={handlerSubmmit}>
                <Form>
                    <div>
                        <label htmlFor={nameId}>Name</label>
                        <Field type="text" id={nameId} name="name" />
                         <ErrorMessage name="name" component="span" className="text-red-500 text-sm mt-1 block" />
                    </div>
                    <div>
                        <label htmlFor={numberId}>Number</label>
                        <Field type="text" id={numberId} name="number" />
                        <ErrorMessage name="number" component="span" className="text-red-500 text-sm mt-1 block" />
                    </div>
                    <button type="submit" >Add contack</button>
                </Form>
            </Formik>
        </div>
    );
}