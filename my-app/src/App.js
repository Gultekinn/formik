import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./App.css";
import "./formik.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Please provide a valid password"),
});

function App() {
  return (
    <div className="App">

      <div className="formss">
       
      <div className="formm">
            <h1>Sign up</h1>  

      
      <Formik
       initialValues={{ firstName:'',lastName:'', email: '', password: '' }}
       validationSchema={SignupSchema}
       onSubmit={(values) => {
        console.log(values);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
          <label id="textt" htmlFor="text">Firstname</label> <br/>
 <input
           id="text"
           type="text"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           /> <br/>
           {errors.firstName && touched.firstName && errors.firstName}
          <label id="textt" htmlFor="text">Lastname</label> <br/>
           <input
           id="text"
             type="text"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
           /> <br/>
           {errors.lastName && touched.lastName && errors.lastName}
<label id="textt" htmlFor="text">Email addres</label> <br/>
           <input
           id="text"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /> <br/>
           {errors.email && touched.email && errors.email}
          <label id="textt" htmlFor="text">Password</label> <br/>
           <input
           id="text"
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /> <br/>
           {errors.password && touched.password && errors.password}
           <button id="btn" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
    </div>
    </div>
  );
}

export default App;
