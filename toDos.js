function makeToDos(owner, toDos){
  return {
    owner : owner,
    toDos :toDos,
    generateHtml : function(){
      let html =  "<ul>";
      this.toDos.forEach(function(todo) {
      html +=  "<li>" + todos + "</li>";
      });
      return html +  "</ul>";
    }
  }
}
