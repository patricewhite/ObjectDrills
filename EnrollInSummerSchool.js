function enrollInSummerSchool(students){
    return students.map(function (student){
        return {
            name: student.name,
               status:'In Summer School',
               grade: student.grade
        };
             
    });
}

