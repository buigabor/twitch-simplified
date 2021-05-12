/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Field, Form } from 'react-final-form';

const formStyles = css`
  input {
    padding: 5px 0;
    width: 100%;
    border-radius: 4px;
    border: 1.5px rgb(156, 156, 156, 0.4) solid;
  }
  .form {
    &__row {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      label {
        font-weight: 600;
      }
    }
    &__submit-btn {
      background-color: #5959f1;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.95em;
      border: none;
      color: #fff;
      margin-top: 1rem;
      cursor: pointer;
    }
  }
`;

interface Props {}

interface FormValues {
  [key: string]: string;
}

export const StreamCreate: React.FC = () => {
  // Redux Form automatically does event.preventDefault()
  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  const renderInput = (formProps: any) => {
    return (
      <div className="form__row">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
      </div>
    );
  };

  return (
    <Form
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <form css={formStyles} onSubmit={handleSubmit}>
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field
            name="description"
            component={renderInput}
            label="Enter Description"
          />
          <button className="form__submit-btn">Submit</button>
        </form>
      )}
    </Form>
  );
};

export default StreamCreate;
