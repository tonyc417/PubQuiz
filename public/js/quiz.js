var time = 30;

startClock = () => {
    time--;
    $("#timeRem").html("Time remaining" + time);
}