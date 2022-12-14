import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import UserForm from './UserForm';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function UserDetailModal(props) {
  const [open, setOpen] = React.useState(props.open);

  useEffect(() => {
    if (props.open) {
      setOpen(true);
    }
  }, [props.userDetail]);

  const handleClose = () => {
    props.closeModel();
    setOpen(false);
  };
  const onEditForm = (data) => {
    props.handleEdit(data, props.userDetail.id.value);
    setOpen(false);
  };
  const onAddNewUser = (data) => {
    props.handleAddUser(data);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <UserForm
            userDetail={props.userDetail}
            handleEdit={onEditForm}
            onAddNewUser={onAddNewUser}
            {...props}
          />
        </Box>
      </Modal>
    </div>
  );
}
