import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/contacts/operations";

import * as Yup from "yup";


// const FeedbackSchema = Yup.object().shape({
//     name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
//     number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
// });
// validationSchema={FeedbackSchema}

const initialValues = {
  name: "",
  number: "",
};
export const ContactForm = () => {
    const dispatch = useDispatch();  
    
    

    const handlerSubmmit = (value, {resetForm}) => {         
        dispatch(addContact(value))
       resetForm();        
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Add New Contact</h2>
      <Formik
        initialValues={initialValues}
        
        onSubmit={handlerSubmmit}
      >
        <Form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-500 text-sm mt-1 block"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-gray-700 font-medium mb-1">
              Number
            </label>
            <Field
              type="text"
              id="number"
              name="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="number"
              component="span"
              className="text-red-500 text-sm mt-1 block"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
    );
}