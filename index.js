function person(exam, project) {




    if (90 <= exam || project >= 12) {
        return 100;
    }
    else if (75 <= exam && project >= 5) {
        return 90;
    }
    else if (50 <= exam && project <= 2) {
        return 75;
    }

    else {
        console.log(0);
    }
    console.log(exam, project);

}
const exam = prompt("Olgan balingizni kiriting")
const project = prompt("Olgan balingizni kiriting")

console.log(person(exam, project));
