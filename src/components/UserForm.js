import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

export default function UserForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { onAddNewUser, handleEdit, userDetail, isNewUser } = props;
  const onSubmit = (data) => {
    if (isNewUser) {
      onAddNewUser(data);
    } else {
      handleEdit(data, userDetail.id.value);
    }
  };

  const {
    email,
    phone,
    name: { first } = {},
    location: { city } = {},
  } = props.userDetail;

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="outlined-error"
            label="First Name"
            defaultValue={first}
            {...register('name')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error
            id="outlined-error"
            label="Email"
            defaultValue={email}
            {...register('email', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
        </Grid>
        <Grid item xs={6}>
          <TextField
            error
            id="outlined-error"
            label="phone"
            defaultValue={phone}
            {...register('phone', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.phone && <span>This field is required</span>}
        </Grid>
        <Grid item xs={6}>
          <TextField
            error
            id="outlined-error"
            label="City"
            defaultValue={city}
            {...register('city', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.phone && <span>This field is required</span>}
        </Grid>
      </Grid>

      <input type="submit" />
    </form>
  );
}
