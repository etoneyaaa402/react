import React from "react"

const StudentInfoHandler = (props) => {
    let studentInfo = props.studentInfo;

    const createStudentInfoTable = () => {

        let studentInfo = props.studentInfo;
        let age = new Date().getFullYear() - studentInfo.birthYear;
        let studyYear = new Date().getFullYear() - studentInfo.enterYear;

        let getEmailOperator = () => {
            let email = studentInfo.email;
            let indexOfAtChar = email.indexOf("@");
            return email.slice(indexOfAtChar + 1)
        }

        let getPhoneOperator = () => {
            let phoneNumber = studentInfo.phoneNumber;

            let velcomMatch = phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*1/) ||
                phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*3/) ||
                phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*6/) ||
                phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*9/) ||
                phoneNumber.match(/\+375(\s)*(\()*44(\))*(\s)*/)
                ;
            let mtsMatch = phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*2/) ||
                phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*5/) ||
                phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*7/) ||
                phoneNumber.match(/\+375(\s)*(\()*29(\))*(\s)*8/) ||
                phoneNumber.match(/\+375(\s)*(\()*33(\))*(\s)*/)
                ;
            let lifeMatch = phoneNumber.match(/\+375(\s)*(\()*25(\))*(\s)*/);
            let beltelecomMatch = phoneNumber.match(/\+375(\s)*(\()*17(\))*(\s)*/);


            if (velcomMatch) return "A1 (Velcom)";
            if (mtsMatch) return "МТС";
            if (lifeMatch) return "life :)";
            if (beltelecomMatch) return "Белтелеком (городской)";

            return "";
        }

        let htmlContent =
            `<table className="studentInfoTable">
                <tbody>
                    <tr>
                        <td>ФИО</td>
                        <td>${studentInfo.surname + " " + studentInfo.name + " " + studentInfo.patronymic}</td>
                    </tr>
                    <tr>
                        <td>Возраст</td>
                        <td>${age}</td>
                    </tr>
                    <tr>
                        <td>Факультет, курс, группа</td>
                        <td>${studentInfo.faculty + ", " + studyYear + ", " + studentInfo.group}</td>
                    </tr>
                    <tr>
                        <td>Специальность</td>
                        <td>${studentInfo.specialization}</td>
                    </tr>
                    <tr>
                        <td>Электронная почта</td>
                        <td>${studentInfo.email}</td>
                    </tr>
                    <tr>
                        <td>Oператор услуг электронной почты</td>
                        <td>${getEmailOperator()}</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td>${studentInfo.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Oператор услуг мобильной связи</td>
                        <td>${getPhoneOperator()}</td>
                    </tr>
                </tbody>
            </table> `
            ;

        let winPrint = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0');
        if (winPrint) winPrint.document.write(htmlContent);

        return (
            <table className="studentInfoTable">
                <tbody>
                    <tr>
                        <td>ФИО</td>
                        <td>{studentInfo.surname + " " + studentInfo.name + " " + studentInfo.patronymic}</td>
                    </tr>
                    <tr>
                        <td>Возраст</td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td>Факультет, курс, группа</td>
                        <td>{studentInfo.faculty + ", " + studyYear + ", " + studentInfo.group}</td>
                    </tr>
                    <tr>
                        <td>Специальность</td>
                        <td>{studentInfo.specialization}</td>
                    </tr>
                    <tr>
                        <td>Электронная почта</td>
                        <td>{studentInfo.email}</td>
                    </tr>
                    <tr>
                        <td>Oператор услуг электронной почты</td>
                        <td>{getEmailOperator()}</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td>{studentInfo.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Oператор услуг мобильной связи</td>
                        <td>{getPhoneOperator()}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        <>
            {studentInfo && createStudentInfoTable()}
        </>
    );
}
export default StudentInfoHandler;
