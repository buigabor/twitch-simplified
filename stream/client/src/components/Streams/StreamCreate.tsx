/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Field, Form } from 'react-final-form';

const formStyles = css`
  input {
    font-size: 1em;
    padding: 7px 10px;
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
      border-radius: 5px;
      font-weight: 600;
      font-size: 0.95em;
      border: none;
      color: #fff;
      margin-top: 1rem;
      cursor: pointer;
    }
  }

  .error{
    &__wrapper{
      background-color: rgb(255, 0, 0, 0.11);
      color: red;
      padding: .6rem 1rem;
      border-radius: 4px;
      border: 1px red solid;
    }
  }
`;

interface FormValues {
  [key: string]: string;
}

interface ErrorsFormObject {
  title?: string;
  description?: string;
}

export const StreamCreate: React.FC = () => {
  // Redux Form automatically does event.preventDefault()
  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  const renderError = ({ error, touched }: any) => {
    if (touched && error) {
      return (
        <div className='error__wrapper'>
          <div className='error__text'>{error}</div>
        </div>
      );
    }

    return null;
  };

  const renderInput = (formProps: any) => {
    return (
      <div className="form__row">
        <label>{formProps.label}</label>
        <input autoComplete="off" {...formProps.input} />
        {renderError(formProps.meta)}
      </div>
    );
  };

  return (
    <Form
      onSubmit={(formValues) => {
        console.log(formValues);
      }}
      validate={(formValues) => {
        const errors: ErrorsFormObject = {};
        // If the input is invalid, we need to return an error object with the errors as key:value
        // otherwise an we return an empty error object

        // The errors object need the same key names as the Field names
        if (!formValues.title) {
          errors.title = 'You must enter a title';
        }
        if (!formValues.description) {
          errors.description = 'You must enter a description';
        }
        return errors;
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
