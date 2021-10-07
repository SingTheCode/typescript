{
    // Type Assertions 별로 좋지 않아 피해보는 걸로!!
    function jsStrFunc() {
        return 2;
    }
    var result_1 = jsStrFunc();
    // result.length 사용불가
    console.log(result_1.length);
    console.log(result_1.length);
    var wrong = 5;
    console.log(wrong.push(1));
    // error
    function findNumbers() {
        return undefined;
    }
    var numbers = findNumbers();
    numbers.push(2); // 무조건 배열인 것을 확신할 때 ! 사용 (좋지 않아)
    // 사용할만한 좋은 예
    var button = document.querySelector("class");
}
