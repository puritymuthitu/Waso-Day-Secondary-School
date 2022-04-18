$(document).ready(function(){
    $("form").submit(function(){
      event.preventDefault();
      var toSubmit = {};
      toSubmit.email = $("#email").val();
      toSubmit.name = $("#name").val();
      toSubmit.message = $("#message").val();
      $.ajaxSetup({
        headers: {
          'Accept': "application/json",
        }
      });
      
      var form_submit = $.post("https://formspree.io/f/mqkwawqv", toSubmit);
      
      form_submit.done(function(){
        $("#form-success").modal('show');
        $("#email").val("");
        $("#name").val("");
        $("#message").val("");
      });
      
      form_submit.fail(function(){
        $("#form-error").modal('show');
      });
      
      
    })
  });