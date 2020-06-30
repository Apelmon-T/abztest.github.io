export const requiredField = (value) => {
  if (value) return;
  return "error";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength}`;
  return;
};

export const minLengthCreator = (minLength) => (value) => {
  if (value.length < minLength) return `Min length is ${minLength}`;
  return;
};

export const emailPattern = (values) => {
  if (
    !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
      values
    )
  )
    return "error";
  return;
};

export const phonePattern = (values) => {
  if (!/^[\+]{0,1}380([0-9]{9})$/.test(values)) return "error";
  return;
};

export const validPosition = (value) => {
  if (!value) return "error";
  return;
};

export const photoValidating = (value) => {
  if (!value) return "error";
  const allowedExtensions = ["jpg", "jpeg"];
  const extToValidate = value.type.split("/")[1];
  if (allowedExtensions.indexOf(extToValidate) === -1) return "error";
  const maxSize = 5242880;
  if (value.size > maxSize || value.width < 70 || value.height < 70)
    return "error";

  return;
};
