function findById(items, idNum){
  return items.find(function(item) {
      return item.id === idNum;
    });
}
