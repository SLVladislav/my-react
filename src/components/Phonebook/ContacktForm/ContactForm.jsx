import { Field, Form, Formik } from "formik"

export const ContactForm = () => {
    
    return (
        <div>
            <Formik>
                <Form>
                    <div>
                        <label htmlFor="">Name</label>
                        <Field/>
                    
                    </div>
                    <div>
                        <label htmlFor="">Number</label>
                        <Field/>
                    </div>
                    <button type="submit">Add contack</button>
                </Form>
            </Formik>
        </div>
    );
}