function newComment() {
  var x = document.getElementById("comment").value;
  return (document.getElementById("new-comment").innerHTML = `<div class="row">
      <div class="row">
      <div class="input-field col s12">
        <textarea id="comment" name="comment" class="materialize-textarea"></textarea>
        <label for="comment">Textarea</label>
      </div>
    </div>
    <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >Submit
          <i class="material-icons right">send</i>
        </button>
</div>`);
}
