//"use strict"

var phonebook = phonebook || {};

(function () {

    document.getElementById('btnCreatePoll').addEventListener("click", function () {
        var title = document.getElementById('textTitle');
        var locations = document.getElementsByName('textLocation');
        var notes = document.getElementById('textNotes');

        locations = phonebook.app.getLocations(locations);
        phonebook.app.addPoll(title.value, locations, notes.value);

        phonebook.app.updateDisplayPanel('createPollStep2Wrp')

        title.value = '';
        notes.value = '';

    });

    document.getElementById('btnContinuePoll').addEventListener("click", function () {
        phonebook.app.updateDates();

        phonebook.app.updateDisplayPanel('createPollStep3Wrp')
    });

    document.getElementById('btnFinishPoll').addEventListener("click", function () {
        var name = document.getElementById('textName');
        var email = document.getElementById('textEmail');

        phonebook.app.updateDetails(name.value, email.value);

        phonebook.app.updateDisplayPanel('contactsWrp')
    });

    document.getElementById('btnAddLocations').addEventListener("click", function () {
        var locationsWrp = document.getElementById('locationsWrp');
        var input = document.createElement("input");
        input.type = 'text';
        input.name = 'textLocation';
        input.className = 'inputText';
        input.setAttribute('placeholder', 'Enter location');
        locationsWrp.appendChild(input);
    });

    document.getElementById('btnShowDiffrentHours').addEventListener("click", function () {
        document.getElementById('showDifferentHours').className = 'hide';
        document.getElementById('sameHour').className = 'hide';
        document.getElementById('differentHours').className = 'show';
        document.getElementById('specificHour').className = 'show';
    });

    document.getElementById('btnAddHours').addEventListener("click", function () {
        document.getElementById('addHoursPnl').className = 'hide';

        document.getElementById('hoursWrp').className = '';

    });


})();




