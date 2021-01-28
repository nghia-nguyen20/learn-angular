validate = () => {
    let digits = "0123456789";
    let temp;
    if (document.testform.Name.value === "") {
        document.write("No Name !");
        return false;
    }
    if (document.testform.age.value === "") {
        document.write("Invalid Age !");
        return false;
    }
    for (let i = 0; i < document.testform.age.value.length; i++) {
        temp = document.testform.age.value.substring(i, i + 1);
        if (digits.indexOf(temp) === -1) {
            document.write("Invalid Age !");
            return false;
        }

    }
    return true;
}