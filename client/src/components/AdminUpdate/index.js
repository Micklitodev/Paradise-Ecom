import AdminForm from "../AdminForm";

const AdminUpdateForm = (props) => {
  const handleSubmitSuccess = () => {
    console.log("Product updated successfully!");
    props.displayModal(false);
  };

  return (
    <AdminForm
      action="update"
      productData={props}
      displayModal={props.displayModal}
      onSubmitSuccess={handleSubmitSuccess}
    />
  );
};

export default AdminUpdateForm;
