//     heDate.js 1.3.0
//     http://he-date.info/site.html
//     (c) 2004-2014 (ה'תשס"ד -ה'תשע"ה) - Daniel Erez (erezdaniel7@gmail.com)
//     HeDate may be freely distributed under the MIT license.
function HeDate(t, e, a) {
  if (
    ((this.year = 0),
    (this.month = 0),
    (this.date = 0),
    "number" == typeof t && "number" == typeof e && "number" == typeof a)
  )
    this.setYear(t), this.setMonth(e), this.setDate(a);
  else if (
    "number" == typeof t &&
    "undefined" == typeof e &&
    "undefined" == typeof a
  )
    this.setTime(t);
  else if (
    "object" == typeof t &&
    t.constructor == HeDate &&
    "undefined" == typeof e &&
    "undefined" == typeof a
  )
    this.setYear(t.getYear()),
      this.setMonth(t.getMonth()),
      this.setDate(t.getDate());
  else {
    var i;
    (i =
      "object" == typeof t &&
      t.constructor == Date &&
      "undefined" == typeof e &&
      "undefined" == typeof a
        ? new Date(t)
        : new Date()),
      i.setHours(0),
      i.setMinutes(0),
      i.setSeconds(0),
      i.setMilliseconds(0);
    var h = HeDate.getGregorianDateOfRoshHashanah(i.getFullYear() + 3761),
      n = i.getTime() - h.getTime();
    (n /= 864e5),
      (n = Math.round(n)),
      (this.year = i.getFullYear() + 3761),
      (this.month = 1),
      this.setDate(n + 1);
  }
}
(HeDate.Time = function (t, e, a) {
  (this.days = t), (this.hours = e), (this.parts = a);
}),
  (HeDate.prototype.getYear = function () {
    return this.year;
  }),
  (HeDate.prototype.getMonth = function () {
    return this.month;
  }),
  (HeDate.prototype.getDate = function () {
    return this.date;
  }),
  (HeDate.prototype.getDay = function () {
    return HeDate.mod7(this.getTime());
  }),
  (HeDate.prototype.getTime = function () {
    var t = HeDate.getDayOfRoshHshan(this.year),
      e = this.month;
    for (this.month = 1; this.month < e; this.month++)
      t += this.getMonthLength();
    return (t += this.date - 1);
  }),
  (HeDate.intDiv = function (t, e) {
    var t = t / e,
      e = Math.round(t);
    return (t > 0) & (e > t) ? e-- : (0 > t) & (t > e) && e++, e;
  }),
  (HeDate.getNumOfMonthUntilNow = function (t, e) {
    var a = 7 * HeDate.intDiv(t - 1, 19);
    return (
      (t - 1) % 19 >= 17
        ? (a += 6)
        : (t - 1) % 19 >= 14
        ? (a += 5)
        : (t - 1) % 19 >= 11
        ? (a += 4)
        : (t - 1) % 19 >= 8
        ? (a += 3)
        : (t - 1) % 19 >= 6
        ? (a += 2)
        : (t - 1) % 19 >= 3 && a++,
      (a += 12 * (t - 1)),
      (a += e),
      (e >= 6) & !HeDate.IsLeapYear(t) && a--,
      a
    );
  }),
  (HeDate.getTimeOfMoladRoshHshann = function (t) {
    var e = HeDate.getNumOfMonthUntilNow(t, 0);
    return (
      (myTime = new HeDate.Time(29 * e, 12 * e, 793 * e)),
      (myTime.days += 2),
      (myTime.hours += 5),
      (myTime.parts += 204),
      (myTime.hours += HeDate.intDiv(myTime.parts, 1080)),
      (myTime.parts = myTime.parts % 1080),
      (myTime.days += HeDate.intDiv(myTime.hours, 24)),
      (myTime.hours = myTime.hours % 24),
      myTime
    );
  }),
  (HeDate.IsLeapYear = function (t) {
    return (
      (t %= 19),
      3 == t || 6 == t || 8 == t || 11 == t || 14 == t || 17 == t || 0 == t
    );
  }),
  (HeDate.mod7 = function (t) {
    var e = t % 7;
    return 0 == e && (e = 7), e;
  }),
  (HeDate.DayOfRoshHshan = new Array()),
  (HeDate.getDayOfRoshHshan = function (t) {
    return HeDate.DayOfRoshHshan[t] > 0
      ? HeDate.DayOfRoshHshan[t]
      : ((myTime = HeDate.getTimeOfMoladRoshHshann(t)),
        myTime.hours >= 18
          ? myTime.days++
          : 3 == HeDate.mod7(myTime.days) &&
            (9 == myTime.hours && myTime.parts >= 204) | (myTime.hours > 9) &&
            !HeDate.IsLeapYear(t)
          ? myTime.days++
          : 2 == HeDate.mod7(myTime.days) &&
            (15 == myTime.hours && myTime.parts >= 589) | (myTime.hours > 15) &&
            HeDate.IsLeapYear(t - 1) &&
            myTime.days++,
        (1 == HeDate.mod7(myTime.days)) |
          (4 == HeDate.mod7(myTime.days)) |
          (6 == HeDate.mod7(myTime.days)) && myTime.days++,
        (HeDate.DayOfRoshHshan[t] = myTime.days),
        myTime.days);
  }),
  (HeDate.getyeartype = function (t) {
    return (
      (day = HeDate.getDayOfRoshHshan(t) + 354 + 30 * HeDate.IsLeapYear(t)),
      HeDate.getDayOfRoshHshan(t + 1) - day
    );
  }),
  (HeDate.getSeptemberDatOfRoshHashanah = function (t) {
    var e =
      HeDate.intDiv(t - 3761, 4) -
      HeDate.intDiv(t - 3761, 100) +
      HeDate.intDiv(t - 3761, 400);
    (e -=
      HeDate.intDiv(1739, 4) -
      HeDate.intDiv(1739, 100) +
      HeDate.intDiv(1739, 400)),
      (e += 365 * (t - 3761 - 1739));
    var a = HeDate.getDayOfRoshHshan(t) - HeDate.getDayOfRoshHshan(5500);
    return a - e + 33;
  }),
  (HeDate.getGregorianDateOfRoshHashanah = function (t) {
    var e = new Date(
      t - 3761,
      8,
      HeDate.getSeptemberDatOfRoshHashanah(t),
      0,
      0,
      0,
      0
    );
    return e;
  }),
  (HeDate.prototype.getMonthLength = function () {
    if (
      1 == this.month ||
      5 == this.month ||
      8 == this.month ||
      10 == this.month ||
      12 == this.month
    )
      return 30;
    if (6 == this.month) return 30 * HeDate.IsLeapYear(this.year);
    if (2 != this.month && 3 != this.month) return 29;
    var t = HeDate.getyeartype(this.year);
    return 1 == t ? 30 : -1 == t ? 29 : 2 == this.month ? 29 : 30;
  }),
  (HeDate.prototype.getYearLength = function () {
    var t = 354;
    return (
      (t += 30 * HeDate.IsLeapYear(this.year)),
      (t += HeDate.getyeartype(this.year))
    );
  }),
  (HeDate.prototype.setDate = function (t) {
    (this.date = 1),
      Math.abs(t) > 400
        ? this.setTime(this.getTime() - this.date + t)
        : t > 0
        ? ((monthLenngth = this.getMonthLength()),
          monthLenngth >= t
            ? (this.date = t)
            : (this.addMonths(1), this.setDate(t - monthLenngth)))
        : 0 >= t &&
          (this.addMonths(-1), this.setDate(this.getMonthLength() + t));
  }),
  (HeDate.prototype.addMonths = function (t) {
    var e = HeDate.getNumOfMonthUntilNow(this.year, this.month);
    if (
      ((e += t),
      (this.year = 1 + 19 * HeDate.intDiv(e, 235)),
      (e %= 235),
      0 == e)
    )
      (this.month = 13), this.year--;
    else {
      for (; e > 12 + 1 * HeDate.IsLeapYear(this.year); )
        (e -= 12 + 1 * HeDate.IsLeapYear(this.year)), this.year++;
      (this.month = e),
        (this.month >= 6) & !HeDate.IsLeapYear(this.year) && this.month++;
    }
    30 == this.getDate() &&
      29 == this.getMonthLength() &&
      ((this.date = 1), this.addMonths(1));
  }),
  (HeDate.prototype.setMonth = function (t) {
    t > 13
      ? ((this.month = 13), this.addMonths(t - 13))
      : (this.month = (6 == t) & !HeDate.IsLeapYear(this.year) ? 7 : t);
  }),
  (HeDate.prototype.setYear = function (t) {
    (this.year = t), HeDate.IsLeapYear(t) && 6 == this.month && this.month++;
  }),
  (HeDate.prototype.setTime = function (t) {
    (this.date = 1),
      t++,
      (this.year = 19 * HeDate.intDiv(t, 6936)),
      (this.year += HeDate.intDiv(t % 6936, 600));
    for (var e = HeDate.getDayOfRoshHshan(this.year); e >= t; )
      this.year--, (e = HeDate.getDayOfRoshHshan(this.year));
    for (; t > e + this.getYearLength(); )
      this.year++, (e = HeDate.getDayOfRoshHshan(this.year));
    for (this.month = 1; t > e + this.getMonthLength(); )
      (e += this.getMonthLength()), this.addMonths(1);
    this.date = t - e;
  }),
  (HeDate.prototype.ConvertToGregorian = function () {
    var t = HeDate.getGregorianDateOfRoshHashanah(this.year),
      e = new HeDate(this.year, 1, 1),
      a = this.getTime() - e.getTime();
    return t.setDate(a + t.getDate()), t;
  }),
  (HeDate.gimatria = function (t) {
    var e = "",
      a = t % 1e3,
      i = " אבגדהוזחטיכלמנסעפצקרשת";
    if (a >= 100 && 999 >= a) {
      var h = (a - (a % 100)) / 100;
      for (a %= 100; h >= 4; ) (e += i.charAt(22)), (h -= 4);
      h >> 0 && (e += i.charAt(18 + h));
    }
    if (a >= 10 && 99 >= a) {
      var n = (a - (a % 10)) / 10;
      (a %= 10),
        1 != n || (5 != a && 6 != a) || ((n -= 1), (a += 1)),
        (e += i.charAt(9 + n));
    }
    return (
      a >= 1 && 9 >= a && (e += i.charAt(a)),
      e.length >= 2
        ? (e = e.substring(0, e.length - 1) + '"' + e.substring(e.length - 1))
        : 1 == e.length && (e += "'"),
      t >= 1e3 && 9999 >= t && (e = i.charAt((t - (t % 1e3)) / 1e3) + "'" + e),
      e
    );
  }),
  (HeDate.regimatria = function (t) {
    for (var e, a = 0, i = t, h = " אבגדהוזחטיכלמנסעפצקרשת"; i.length >> 0; )
      (e = h.indexOf(i.charAt(0))),
        e > 0 && (a += 9 >= e ? e : 18 >= e ? 10 * (e - 9) : 100 * (e - 18)),
        (i = i.substring(1, i.length));
    return (
      (e = h.indexOf(t.charAt(0))),
      (a > e) & (e > 0) & (9 >= e) & (15 != a) & (16 != a) &&
        (a = a + 1e3 * e - e),
      a
    );
  }),
  (HeDate.prototype.getMonthString = function () {
    var t = [
        "תשרי",
        "חשון",
        "כסלו",
        "טבת",
        "שבט",
        "אדר א'",
        "אדר",
        "ניסן",
        "אייר",
        "סיון",
        "תמוז",
        "אב",
        "אלול",
      ],
      e = t[this.getMonth() - 1];
    return (
      (7 == this.getMonth()) & HeDate.IsLeapYear(this.getYear()) &&
        (e += " ב'"),
      e
    );
  }),
  (HeDate.prototype.toString = function () {
    var t = "",
      e = [
        "יום ראשון",
        "יום שני",
        "יום שלישי",
        "יום רביעי",
        "יום חמישי",
        "יום שישי",
        "שבת",
      ];
    return (
      (t += e[this.getDay() - 1] + ", "),
      (t += HeDate.gimatria(this.getDate()) + " "),
      (t += this.getMonthString() + " "),
      (t += HeDate.gimatria(this.getYear()))
    );
  }),
  (HeDate.prototype.compar = function (t) {
    return (
      this.getDate() == t.getDate() &&
      this.getMonth() == t.getMonth() &&
      this.getYear() == t.getYear()
    );
  });

export const getHebrewDate = () => {
  return new HeDate().toString();
};
