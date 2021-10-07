{
    // Enum 상수를 묶어서 관리할 수 있음 but 가능한 쓰지 않는 것이 좋아 => union으로 대체
    // JavaScript
    var MAX_NUM = 6;
    var MAX_STUDENT_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Satarday"] = 6] = "Satarday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Tuesday);
    var day = Days.Satarday;
    console.log(day);
    var dayOfWeek = "Monday";
    dayOfWeek = "Wednesday";
}
