import { FormControl, Input, InputLabel } from "./forminput.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormControl>
      <Input {...otherProps} />
      <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
    </FormControl>
  );
};

export default FormInput;
