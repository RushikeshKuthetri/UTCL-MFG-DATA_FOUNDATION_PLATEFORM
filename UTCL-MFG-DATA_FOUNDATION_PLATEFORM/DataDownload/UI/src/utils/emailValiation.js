export function emailValidation(email) {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email) {
    return "Please Enter User Email";
  } else if (!regex.test(email)) {
    return "Please Enter Valid User Email";
  }
  return "";
}
