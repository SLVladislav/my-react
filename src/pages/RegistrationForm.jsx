import { Field, Formik, Form } from "formik";

const RegistrationForm = () => {
    return (
        <Formik>
            <Form> 
                <label htmlFor="">Name</label>
                <Field />
                  <label htmlFor="">Password</label>
                <Field />
                  <label htmlFor="">Email</label>
                <Field/>
            </Form>
        </Formik>
    )
}
export default RegistrationForm;