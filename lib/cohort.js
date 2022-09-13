// Declare an object cohort that has the following properties:

// a string name (e.g 'May2022')s
// a number id (e.g 1234)
// an array of student names
// Declare a function that accepts that object as argument and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

const cohort = {
    name: 'May2022',
    numberId: 1234,
    studentNames: ["David", "Chinelo"]
};

function studentCohort(cohort) {
    console.log(`<${cohort.numberId}> - <${cohort.name}> - <${cohort.studentNames.length}> students in this cohort`)
};

studentCohort(cohort);