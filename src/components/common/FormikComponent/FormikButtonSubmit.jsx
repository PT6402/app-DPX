/* eslint-disable react/prop-types */
export default function FormikButtonSubmit({ isSubmitting, title = "Submit" }) {
  return (
    <>
      <button type="submit" disabled={isSubmitting}>
        {title}
      </button>
    </>
  );
}
