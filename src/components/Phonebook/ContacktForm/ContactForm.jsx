import { ErrorMessage, Field, Form, Formik } from "formik"
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContacts } from "../../../redux/contactsSlice";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required") 
});

// const initialValues = {
//     name: "",
//     number: ""
// };

export const ContactForm = () => { 
    const nameId = nanoid();
    const numberId = nanoid();
    const dispatch = useDispatch();
    
    
    

    const handlerSubmmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        dispatch(addContacts({
            id: {
                nameId,
                numberId
            },
            name: form.elements.name.value,
            number: form.elements.number.value,
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
        form.resetForm();  
        
    }

    return (
        <div>
            <Formik  validationSchema={FeedbackSchema} onSubmit={handlerSubmmit}>
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