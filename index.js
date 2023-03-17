/*function saturdayFun(activity = 'roller-skate') {
    console.log(`'This Saturday, I want to ${activity}!'`);
}
saturdayFun();
saturdayFun('bathe my dog'); */
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(sym = "*") {
    const innerFunction = function (adj = "special") {
        return `You are ${sym}${adj}${sym}!`;
    };
    return innerFunction;
}

