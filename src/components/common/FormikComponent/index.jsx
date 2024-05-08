import { Formik } from "formik";

export default function FormikComponent({
  children,
  initialValue,
  validationSchema,
  onSubmit,
}) {
  return (
    <Formik>
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
        <>
          <form onSubmit={handleSubmit}>{children}</form>
        </>
      )}
    </Formik>
  );
}
