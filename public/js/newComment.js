function newComment() {
  var x = document.getElementById("comment").value;
  return (document.getElementById("new-comment").innerHTML = `<div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <textarea id="textarea1" class="materialize-textarea"></textarea>
        <label for="textarea1">Textarea</label>
      </div>
    </div>
    <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >Submit
          <i class="material-icons right">send</i>
        </button>
  </form>
</div>`);
}
