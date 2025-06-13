import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});

const initialValues = {
    username: "",
    email: "",
    message: "",
    level: "good"
  };

export const FeedbackForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();
    const levelFieldId = useId();

    const handleSubmit = (value, actions) => {
        console.log(value);
        actions.resetForm()
    };

  

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form className="space-y-4">
                    <div>
                        <label htmlFor={nameFieldId}>Username</label>
                        <Field className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" name="username" id={nameFieldId} />
                        <ErrorMessage name="username" component="span" className="text-red-500 text-sm mt-1 block" />
                    </div>
                    <div>
                        <label htmlFor={emailFieldId}>Email</label>
                        <Field className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="email" name="email" id={emailFieldId} />
                        <ErrorMessage name="email" component="span" className="text-red-500 text-sm mt-1 block"/>
                    </div>
                    <div>
                        <label htmlFor={msgFieldId}>Message</label>
                        <Field id={msgFieldId} as="textarea" rows="5" cols="30" name="message" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        <ErrorMessage name="message" component="span"className="text-red-500 text-sm mt-1 block" />
                    </div>
                    <div>
                        <label htmlFor={levelFieldId}>Service satisfaction</label>
                        <Field as="select" name="level" id={levelFieldId}>
                            <option value="good">Good</option>
                            <option value="neutral">Neutral</option>
                            <option value="bad">Bad</option>
                        </Field>
                    </div>
                    <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>

    );
}