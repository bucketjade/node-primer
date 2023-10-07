export const conflicts = (class1, class2) => (
    (class1.meets.length === 0 || class2.meets.length === 0)
    ? false
    : sameterm(class1, class2) && sameday(class1, class2) && sametime(class1, class2)
)

const sameterm = (class1, class2) => class1.term === class2.term;

const sameday = (class1, class2) => {
    const days1 = class1.meets.split(' ')[0].match(/(M|Tu|W|Th|F)/g);
    const days2 = class2.meets.split(' ')[0].match(/(M|Tu|W|Th|F)/g);
    return days1.filter((day) => days2.includes(day)).length !== 0
}

const sametime = (class1, class2) => {
    const [start1, end1] = class1.meets.split(' ')[1].split('-'); //[0] is start, [1] is end
    const [start2, end2] = class2.meets.split(' ')[1].split('-');
    return !(before(start1, start2) && before(end1, start2) || before(start2, start1) && before(end2, start1))
}

const before = (time1, time2) => {
    [h1, s1] = time1.split(":");
    [h2, s2] = time2.split(":");
    return h1 < h2 ? true : (h1 === h2 && s1 < s2);
}