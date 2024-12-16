const queryFields = document.querySelectorAll(".query-option");

queryFields.forEach((queryField) => {
  queryField.addEventListener("click", function () {
    const input = queryField.querySelector("input");
    if (input.checked) {
      queryFields.forEach((field) => {
        field.classList.remove("query-option--selected");
      });
      queryField.classList.add("query-option--selected");
    }
  });
});

const Validator = new JustValidate(document.querySelector(".form"), {
  errorFieldCssClass: "error",
});
Validator.addField(document.querySelector("#first-name"), [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
]);
Validator.addField(document.querySelector("#last-name"), [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
]);
Validator.addField(document.querySelector("#email"), [
  {
    rule: "required",
    errorMessage: "Please enter a valid email address",
  },
  {
    rule: "email",
  },
]);

Validator.addRequiredGroup(
  ".query-container",
  "Please select a query type",
  {}
);

Validator.addField(document.querySelector("#message"), [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
]);
Validator.addField(document.querySelector("#consent"), [
  {
    rule: "required",
    errorMessage: "To submit this form, please consent to being contacted",
  },
]);

Validator.onSuccess((event) => {
  event.preventDefault();
  document.querySelector(".success").classList.remove("hidden");
  event.currentTarget.reset();
});
