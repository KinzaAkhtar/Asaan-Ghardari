document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    row.addEventListener("click", function() {
      var link = this.dataset.href;
      if (link) {
        window.location.href = "job_Details.html";
      }
    });
  }
});

//create worker modal
$(document).ready(function() {
  $('#submit-btn').click(function() {
    $('#createWorkerModal').modal('show');
  });

  $('#workerForm').submit(function(event) {
    event.preventDefault();
    // Handle form submission logic here
    // Example: Retrieve form input values and perform actions with them
    var workerName = $('#workerName').val();
    var workerEmail = $('#workerEmail').val();
    var workerPhone = $('#workerPhone').val();
    var workerRole = $('#workerRole').val();
    var workerAddress = $('#workerAddress').val();
  });
});

//assign worker modal
 document.addEventListener('DOMContentLoaded', function() {
      var assignBtn = document.querySelector('#assignBtn');
      var modal = new bootstrap.Modal(document.getElementById('workerModal'));

      assignBtn.addEventListener('click', function() {
        modal.show();
      });
    });




