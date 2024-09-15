var totalMarks = prompt('enter total marks');
var obtainedMarks = prompt('enter obtained marks');
var percentage = obtainedMarks / totalMarks * 100;
// alert(percentage+ "%")
if (percentage>= 80) {
    document.write(
        "Total marks :"+ " "+ totalMarks+
        "<br> Obatained marks :" + " " +obtainedMarks 
        + "<br> Percentage :" + " " + percentage+ "%" +
        "<br> Grade : A-one"
        + "<br> Remarks : Excellent"
    )
}
else if (percentage>= 70) {
    document.write(
        "Total marks :"+ " "+ totalMarks+
        "<br> Obatained marks :" + " " +obtainedMarks 
        + "<br> Percentage :" + " " + percentage+ "%" +
        "<br> Grade : A"
        + "<br> Remarks : Good"
    )
}
else if (percentage>= 60) {
    document.write(
        "Total marks :"+ " "+ totalMarks+
        "<br> Obatained marks :" + " " +obtainedMarks 
        + "<br> Percentage :" + " " + percentage+ "%" +
        "<br> Grade : B"
        + "<br> Remarks : You need to improve"
    )
}
else if (percentage < 60) {
    document.write(
        "Total marks :"+ " "+ totalMarks+
        "<br> Obatained marks :" + " " +obtainedMarks 
        + "<br> Percentage :" + " " + percentage+ "%" +
        "<br> Grade : Fail"
        + "<br> Remarks : Sorry"
    )
}
