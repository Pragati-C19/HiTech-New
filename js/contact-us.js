$(document).ready(function () {
  let name = (email = phone = msg = "");
  const link = $("a[name='btnSubmit']");
  let wpText = `Hi there my name is ${name} %0a My Message to you is: ${msg} %0a %0a  email:${email}%0a phone:${phone}`;
  $('input[name="txtName"]').on("input", function () {
    // Print entered value in a div box
    console.log($(this).val());
    name = $(this).val();
    wpText = `Hi there my name is ${name} Message: ${msg} , email:${email},phone:${phone}`;

    link.attr("href", `https://wa.me/91${phone}?text=${wpText}`);
  });
  $('input[name="txtEmail"]').on("input", function () {
    // Print entered value in a div box
    console.log($(this).val());
    email = $(this).val();
    wpText = `Hi there my name is ${name} Message: ${msg} , email:${email},phone:${phone}`;
    link.attr("href", `https://wa.me/91${phone}?text=${wpText}`);
  });
  $('input[name="txtPhone"]').on("input", function () {
    // Print entered value in a div box
    console.log($(this).val());
    phone = $(this).val();
    wpText = `Hi there my name is ${name} Message: ${msg} , email:${email},phone:${phone}`;
    link.attr("href", `https://wa.me/91${phone}?text=${wpText}`);
  });
  $('textarea[name="txtMsg"]').on("input", function () {
    // Print entered value in a div box
    console.log($(this).val());
    msg = $(this).val();
    wpText = `Hi there my name is ${name} Message: ${msg} , email:${email},phone:${phone}`;
    link.attr("href", `https://wa.me/91${phone}?text=${wpText}`);
  });
});
