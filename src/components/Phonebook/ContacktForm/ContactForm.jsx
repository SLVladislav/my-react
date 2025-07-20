import { ErrorMessage, Field, Form, Formik } from "formik"
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/contactsSlice";
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
    // const nameId = nanoid();
    // const numberId = nanoid();
    const dispatch = useDispatch();
    
    
    

    const handlerSubmmit = (values, { resetForm }) => {
        
        dispatch(addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
            // initialValues
        }));

        // console.log(value);
        // onAddContact({
        //     id: {
        //         nameId,
        //         numberId
        //     },
        //     name: value.name,
        //     number: value.number
        // })
        resetForm();
        
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