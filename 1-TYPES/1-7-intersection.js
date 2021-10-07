{
    function internWork(person) {
        console.log(person.name, person.employeeId, person.work());
    }
    internWork({
        name: "ellie",
        score: 1,
        employeeId: 128,
        work: function () {
            console.log("working");
        },
    });
}
