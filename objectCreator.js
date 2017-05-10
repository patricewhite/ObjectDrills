function createMyObject(){
    const firstObject = {
        foo:'bar',
        answerToUniverse:42,
        'olly olly':'oxen free',
        sayhello:function(){
            console.log('Hello!');
        }
    };
    return firstObject;
}
createMyObject();