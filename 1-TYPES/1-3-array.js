{
    // Array
    var fruits = ["tomato", "banana"];
    var scroes = [1, 3, 4];
    function printArray(fruits) {
        // fruits.push readonly를 사용하면 변경이 불가능
        // fruits: readonly Array<number>는 허용되지 않음
    }
    // Tuple -> interface, type alias, class 대체해서 사용 권장
    var student = void 0;
    student = ["name", 123];
    student[0]; // name
    student[1]; // 123
    // 인덱스로 접근하는 것은 가독성이 떨어진다.
    var name_1 = student[0], age = student[1];
}
