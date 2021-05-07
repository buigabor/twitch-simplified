import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

interface Props {}

export const StreamCreate: React.FC<InjectedFormProps> = (props) => {
  const { handleSubmit } = props;

  const renderInput = (formProps: any) => {
    return (
      <input
        {...formProps.input}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" component={renderInput} />
      <Field name="description" component={renderInput} />
    </form>
  );
};

const SteamCreateForm = reduxForm<{}, Props>({ form: 'steamCreate' })(
  StreamCreate,
);

export default connect(null)(SteamCreateForm);
