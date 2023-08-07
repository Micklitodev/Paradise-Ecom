import AdminForm from "../AdminForm";

const AdminProdAdd = (props) => {
  const handleSubmitSuccess = () => {
    console.log("Product added successfully!");
    props.displayModal(false);
  };

  return (
    <AdminForm
      action="add"
      displayModal={props.displayModal}
      onSubmitSuccess={handleSubmitSuccess}
    />
  );
};

export default AdminProdAdd;
