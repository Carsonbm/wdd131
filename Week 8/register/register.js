import {successTemplate, participantTemplate} from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    console.log(`Participant Count: ${participantCount}`);
    const addButton = document.getElementById('add');



    function addParticipant() {
        participantCount += 1;
        console.log(`Participant Count: ${participantCount}`);
        const sectionDuplicates = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', sectionDuplicates);
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        console.log(feeElements);
        feeElements = [...feeElements];
        const total = feeElements.reduce((sum, feeElement) => {
            return sum + parseFloat(feeElement.value || 0);
        }, 0);
        return total;
    }

    function submitForm(event) {
        event.preventDefault();
        // do the rest of the stuff
        const adultName = document.getElementById('adult_name').value;
        const totalFeesCount = totalFees();
        const info = {
            adultName: adultName,
            participantCount: participantCount,
            totalFees: totalFeesCount
        };

        const summarySection = document.getElementById('summary');
        summarySection.innerHTML = successTemplate(info);
        summarySection.classList.remove('hide');

        document.querySelector('form').classList.add('hide');
    }

    addButton.addEventListener('click', addParticipant);
    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
});