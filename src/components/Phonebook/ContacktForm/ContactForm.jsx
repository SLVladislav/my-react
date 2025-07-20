import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContacts } from "../../../redux/operations";

import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required") 
});

const initialValues = {
    name: "",
    number: ""
};

export const ContactForm = () => {     
    const dispatch = useDispatch();   
    

    const handlerSubmmit = (event) => {       
        event.preventDefault();
        const form = event.target;
        dispatch(addContacts(form.target.elements.text.value))
        form.reset();        
    };

    return (
        <div>
            <Formik  validationSchema={FeedbackSchema} onSubmit={handlerSubmmit} initialValues={initialValues}>
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                         <ErrorMessage name="name" component="span" className="text-red-500 text-sm mt-1 block" />
                    </div>
                    <div>
                        <label htmlFor="number">Number</label>
                        <Field type="text" id="number" name="number" />
                        <ErrorMessage name="number" component="span" className="text-red-500 text-sm mt-1 block" />
                    </div>
                    <button type="submit" >Add contack</button>
                </Form>
            </Formik>
        </div>
    );
}