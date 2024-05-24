$(document).ready(function () {
  //deleting whithout code duplicating
  function deleteTask(event) {
    $(event.target).closest(".task").remove();
  }
  // move to complete section
  function completeTask(event) {
    const task = $(event.target).closest(".task");
    task.find(".check").remove();
    $(".comp").append(task);
  }
  // add eventListener
  $(".container").on("click", ".del", deleteTask);
  $(".notcomp").on("click", ".check", completeTask);
  // add new tasks
  $('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
      const taskText = $(this).val();
      if (taskText.trim() !== "") {
        const newTask = $('<div class="task"></div>').text(taskText);
        newTask.append('<i class="fas fa-trash-alt del"></i>');
        newTask.append('<i class="fas fa-check check"></i>');
        $(".notcomp").append(newTask);
        $(this).val("");
      }
    }
  });
});
