/* eslint-disable react/prop-types */

export default function FormikField({
  handleChange,
  handleBlur,
  value,
  type = "text",
  name,
  touched,
  error,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {error && touched && error}
    </>
  );
}
