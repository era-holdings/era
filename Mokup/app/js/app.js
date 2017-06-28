//"use strict"

var eventManager = eventManager || {};

eventManager.app = (function () {

    //var LOCAL_STORAGE = 'Polls';
    //var objString;
    //var readFileIndex = 0;
    //var nextId = 0;
    //var currentParticipant = null;
    //var deletedGroupID;
    //var allPolls = [];
    //var index = -1;
    //
    //init();
    //
    //return {
    //    addGroup: addGroup,
    //    deleteGroup: deleteGroup,
    //    addPoll: addPoll,
    //    updateDates: updateDates,
    //    updateDetails: updateDetails,
    //    getLocations: getLocations,
    //    deleteContact: deleteContact,
    //    findElem: findElem,
    //    getContactsList: getContactsList,
    //    updateDisplayPanel: updateDisplayPanel,
    //    showPoll: showPoll,
    //};
    //
    ///**
    // * Initialize phonebook.
    // */
    //function init() {
    //    getPolls();
    //    //getDirectoryList();
    //    //getContactsList(root.id);
    //
    //    //updateContactsPanel();
    //}
    //
    ///**
    // * Get phonebook from local storage.
    // */
    //function getPolls() {
    //    if (typeof(Storage) !== 'undefined') {
    //        getLocalStorage();
    //    }
    //}
    //
    ///**
    // * Display the selected panel.
    // * @param panelID
    // */
    //function updateDisplayPanel(panelID) {
    //    var elems = document.getElementsByName('displayPanel');
    //    var tabs = document.getElementsByName(panelID);
    //
    //    if (document.querySelector('div.selected')) {
    //        document.querySelector('div.selected').className = '';
    //    }
    //
    //    for (var i = 0; i < elems.length; i++) {
    //        elems[i].className = 'hide'
    //    }
    //    document.getElementById(panelID).className = 'show';
    //
    //    if (tabs.length) {
    //        tabs[0].className = 'selected';
    //    }
    //}
    //
    ///**
    // * Update selected group in view
    // * @param groupID
    // */
    //function updateSelectedGroup(groupID) {
    //    if (document.querySelector('li.selected')) {
    //        document.querySelector('li.selected').className = '';
    //    }
    //
    //    document.getElementById(groupID).className = 'selected';
    //}
    //
    ///**
    // * Get contacts by groupID
    // * @param groupID
    // */
    //function getContactsList(groupID) {
    //    updateDisplayPanel('contactsWrp');
    //
    //    if (groupID == -1) {
    //        currentGroup = root;
    //    }
    //    else {
    //        changeCurrentGroup(root, groupID)
    //    }
    //
    //    if (deletedGroupID != groupID) {
    //        updateSelectedGroup(groupID);
    //    }
    //
    //    updateContactsPanel();
    //}
    //
    ///**
    // * Update contacts list in view
    // */
    //function updateContactsPanel() {
    //    var htmlString = '';
    //
    //    htmlString = '<tr></tr>';
    //    document.getElementById('contactsTbody').innerHTML = htmlString;
    //
    //    htmlString = '';
    //    for (var i = 0; i < allPolls.length; i++) {
    //
    //        htmlString += '<tr>';
    //        htmlString += '<td><span style="text-decoration: underline;cursor: pointer" onclick="phonebook.app.showPoll(' + i + ')">' + allPolls[i].title + '</span></td>';
    //        htmlString += '<td>' + JSON.stringify(allPolls[i]) + '</td>';
    //        htmlString += '</tr>';
    //
    //        document.getElementById('contactsTbody').innerHTML = htmlString;
    //    }
    //}
    //
    ///**
    // * Update groups list in view
    // */
    //function getDirectoryList() {
    //    var htmlString = '';
    //    htmlString += '<ul class="tree"><li name="groups" id="' + root.id + '" class="selected" onclick="phonebook.app.getContactsList(' + root.id + ')" >' + root.name + '</li>';
    //    getAllGroups(root);
    //    htmlString += '</ul>';
    //    document.getElementById('directoryTree').innerHTML = htmlString;
    //
    //    function getAllGroups(cGroup) {
    //        htmlString += '<ul class="tree">';
    //        for (var i = 0; i < cGroup.childrenCount; i++) {
    //            if (cGroup.items[i].type == 'Group') {
    //                htmlString += '<li name="groups" id="' + cGroup.items[i].id + '" onclick="phonebook.app.getContactsList(' + cGroup.items[i].id + ')">' + cGroup.items[i].name + '<span id="cGroup.items[i].id" onclick="phonebook.app.deleteGroup(' + cGroup.items[i].id + ' )">X</span></li>';
    //                getAllGroups(cGroup.items[i], htmlString);
    //            }
    //        }
    //
    //        htmlString += '</ul>';
    //    }
    //}
    //
    ///**
    // * Delete contact and update view
    // * @param contactID
    // */
    //function deleteContact(contactID) {
    //    var tmpCurrentGroup = currentGroup;
    //    findItemAndDelete(currentGroup, contactID);
    //    updateLocalStorage();
    //    currentGroup = tmpCurrentGroup;
    //    getContactsList(currentGroup.id);
    //
    //}
    //
    ///**
    // * Delete group and update view
    // * @param groupID
    // */
    //function deleteGroup(groupID) {
    //    deletedGroupID = groupID;
    //    findItemAndDelete(root, groupID);
    //    updateLocalStorage();
    //    getDirectoryList();
    //    getContactsList(currentGroup.id);
    //}
    //
    ///**
    // * Add contact from local storage
    // * @param currentObj
    // */
    //function addContactToPhoneBook(currentObj) {
    //    var phoneNumbers = currentObj.phoneNumbers.split(',');
    //    var contact = readContact(currentObj.id, currentObj.firstName, currentObj.lastName, phoneNumbers);
    //    pushItem(currentGroup, contact);
    //}
    //
    ///**
    // * Create contact
    // * @param firstName
    // * @param lastName
    // * @param phoneNumbers
    // * @returns {{id: *, type: string, firstName: *, lastName: *, phoneNumbers: *}}
    // */
    //function createPoll() {
    //    return {
    //        id: generateNextId(),
    //        active: true,
    //        type: 'Poll',
    //        title: null,
    //        locations: null,
    //        dates: [],
    //        name: null,
    //        email: null,
    //        participants: []
    //    };
    //}
    //
    //function createParticipant() {
    //    return {
    //        id: generateNextId(),
    //        locations: [],
    //        dates: [],
    //        name: null,
    //        email: null,
    //    };
    //}
    //
    ///**
    // * Add contact from local storage
    // * @param id
    // * @param firstName
    // * @param lastName
    // * @param phoneNumbers
    // * @returns {{id: *, type: string, firstName: *, lastName: *, phoneNumbers: *}}
    // */
    //function readContact(id, firstName, lastName, phoneNumbers) {
    //    var contact = {
    //        id: id,
    //        type: 'Contact',
    //        firstName: firstName,
    //        lastName: lastName,
    //        phoneNumbers: phoneNumbers,
    //    };
    //
    //    return contact;
    //}
    //
    ///**
    // * Add group
    // * @param name
    // */
    //function addGroup(name) {
    //    var group = createGroup(name);
    //
    //    addItem(currentGroup, group);
    //    updateLocalStorage();
    //    getDirectoryList();
    //    getContactsList(group.id);
    //}
    //
    //
    ///**
    // * Add contact
    // * @param firstName
    // * @param lastName
    // * @param phoneNumbers
    // */
    //function addPoll(title, locations, notes) {
    //    var poll = createPoll();
    //
    //    addItem(allPolls, poll);
    //    index++;
    //
    //    allPolls[index].title = title;
    //    allPolls[index].locations = locations;
    //    allPolls[index].notes = notes;
    //
    //}
    //
    //function updateDetails(name, email) {
    //    allPolls[index].name = name;
    //    allPolls[index].email = email;
    //
    //    updateLocalStorage();
    //    updateContactsPanel();
    //}
    //
    //function updateDates(){
    //    allPolls[index].dates.push({
    //        date: '08-08-2017',
    //        times: [
    //            {
    //                startHour: '0800',
    //                endHour: '1000',
    //            },
    //            {
    //                startHour: '1300',
    //                endHour: '1500',
    //            },
    //        ]
    //    });
    //
    //    allPolls[index].dates.push({
    //        date: '10-08-2017',
    //        times: [
    //            {
    //                startHour: '2100',
    //                endHour: '2200',
    //            },
    //
    //        ]
    //    });
    //
    //}
    //
    //function showPoll(i){
    //    currentParticipant = i;
    //    var participant = createParticipant();
    //
    //    addItem(allPolls[currentParticipant].participants, participant);
    //
    //    updateDisplayPanel('showPollStep1Wrp');
    //}
    //
    ///**
    // * Update current group
    // * @param cGroup
    // * @param groupID
    // */
    //function changeCurrentGroup(cGroup, groupID) {
    //    cGroup.items.forEach(function (item) {
    //        if (item.id == groupID) {
    //            currentGroup = item;
    //            return;
    //        }
    //        else if (item.type == 'Group') {
    //            changeCurrentGroup(item, groupID)
    //        }
    //    });
    //}
    //
    ///**
    // * Create group
    // * @param name
    // * @returns {{id: *, type: string, name: *, items: Array, childrenCount: number}}
    // */
    //function createGroup(name) {
    //    var group = {
    //        id: generateNextId(),
    //        type: 'Group',
    //        name: name,
    //        items: [],
    //        childrenCount: 0
    //    };
    //
    //    return group;
    //}
    //
    ///**
    // * Add group from local storage
    // * @param id
    // * @param name
    // * @param childrenCount
    // * @returns {{id: *, type: string, name: *, items: Array, childrenCount: *}}
    // */
    //function readGroup(id, name, childrenCount) {
    //    var group = {
    //        id: id,
    //        type: 'Group',
    //        name: name,
    //        items: [],
    //        childrenCount: childrenCount
    //    };
    //
    //    return group;
    //}
    //
    ///**
    // * Update root children count
    // * @param childrenCount
    // */
    //function updateRoot(childrenCount) {
    //    root.childrenCount = childrenCount;
    //}
    //
    ///**
    // * Add contacts and groups from local storage
    // * @param currentObj
    // * @param dataArr
    // */
    //function addGroupsAndContactsToPhoneBook(currentObj, dataArr) {
    //    if (currentObj.type == 'Group') {
    //        var group = readGroup(currentObj.id, currentObj.name, currentObj.items);
    //        pushItem(currentGroup, group);
    //        currentGroup = group;
    //
    //        for (var i = 0; i < currentGroup.childrenCount; i++) {
    //            var obj = JSON.parse(dataArr[readFileIndex]);
    //            readFileIndex++;
    //            addGroupsAndContactsToPhoneBook(obj, dataArr);
    //        }
    //        currentGroup = currentGroup.parent;
    //    }
    //    else {
    //        addContactToPhoneBook(currentObj);
    //    }
    //}
    //
    ///**
    // * Add item to current group from local storage
    // * @param obj
    // * @param item
    // */
    //function pushItem(obj, item) {
    //    obj.items.push(item);
    //    item.parent = obj;
    //}
    //
    ///**
    // * Add item tp current group
    // * @param obj
    // * @param item
    // */
    //function addItem(obj, item) {
    //    obj.push(item);
    //    //obj.childrenCount = +obj.childrenCount + 1;
    //}
    //
    ///**
    // * Find item and delete
    // * @param cGroup
    // * @param itemID
    // */
    //function findItemAndDelete(cGroup, itemID) {
    //    cGroup.items.forEach(function (item, index) {
    //        if (item.id == itemID) {
    //            cGroup.items.splice(index, 1);
    //            cGroup.childrenCount--;
    //            currentGroup = cGroup;
    //            return;
    //        }
    //        else if (item.type == 'Group') {
    //            findItemAndDelete(item, itemID)
    //        }
    //    });
    //}
    //
    ///**
    // * Generate next ID
    // * @returns {number}
    // */
    //function generateNextId() {
    //    return nextId++;
    //}
    //
    ///**
    // * Update local storage with phonebook changes
    // */
    //function updateLocalStorage() {
    //    objString = JSON.stringify(allPolls);
    //
    //    localStorage.setItem(LOCAL_STORAGE, objString);
    //}
    //
    ///**
    // * Convert object to string
    // * @param currentGroup
    // */
    //function convertObjectToString(currentGroup) {
    //    convertGroupToString(currentGroup);
    //    currentGroup.items.forEach(function (item) {
    //        if (item.type == 'Contact') {
    //            convertContactToString(item);
    //        }
    //    });
    //
    //    currentGroup.items.forEach(function (item) {
    //        if (item.type == 'Group') {
    //            convertObjectToString(item);
    //        }
    //    });
    //}
    //
    ///**
    // * Convert single group to string
    // * @param item
    // */
    //function convertGroupToString(item) {
    //    objString += '|{';
    //    objString += '"type": "' + item.type + '",';
    //    objString += '"id": "' + item.id + '",';
    //    objString += '"name": "' + item.name + '",';
    //    objString += '"items": "' + item.childrenCount + '"';
    //    objString += '}';
    //}
    //
    ///**
    // * Convert single contact to string
    // * @param item
    // */
    //function convertContactToString(item) {
    //    objString += '|{';
    //    objString += '"type": "' + item.type + '",';
    //    objString += '"id": "' + item.id + '",';
    //    objString += '"firstName": "' + item.firstName + '",';
    //    objString += '"lastName": "' + item.lastName + '",';
    //    objString += '"phoneNumbers": "' + item.phoneNumbers + '"';
    //    objString += '}';
    //}
    //
    ///**
    // * Get phonebook from local storage
    // */
    //function getLocalStorage() {
    //    if (localStorage.getItem(LOCAL_STORAGE)) {
    //        allPolls = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    //
    //        index = allPolls.length;
    //    }
    //}
    //
    ///**
    // * Get all phone numbers from view
    // * @param phoneNumbers
    // * @returns {Array}
    // */
    //function getLocations(locationsVals) {
    //    locations = [];
    //    for (var i = 0; i < locationsVals.length; i++) {
    //        locations[i] = locationsVals[i].value;
    //    }
    //
    //    return locations;
    //}
    //
    ///**
    // * Find search results
    // * @param textSearch
    // */
    //function findElem(textSearch) {
    //    updateDisplayPanel('foundWrp');
    //    document.getElementById("alertWrp").className = '';
    //    document.getElementById("searchElem").innerHTML = textSearch;
    //    document.getElementById("foundContactsTbody").innerHTML = '';
    //    document.getElementById("foundGroupsTbody").innerHTML = '';
    //    document.getElementById('contactsWrp').className = 'hide';
    //    var elem = searchByText(root, textSearch.toUpperCase());
    //}
    //
    ///**
    // * Run search on phonebook
    // * @param cGroup
    // * @param textSearch
    // */
    //function searchByText(cGroup, textSearch) {
    //    cGroup.items.forEach(function (item, index) {
    //        switch (item.type) {
    //            case "Contact":
    //                if (item.firstName.toUpperCase() == textSearch ||
    //                    item.lastName.toUpperCase() == textSearch ||
    //                    (item.phoneNumbers.indexOf(textSearch) > -1)) {
    //                    var htmlString = '<tr>';
    //                    htmlString += '<td>' + item.firstName + '</td>';
    //                    htmlString += '<td>' + item.lastName + '</td>';
    //                    htmlString += '<td>' + item.phoneNumbers + '</td>';
    //                    htmlString += '</tr>';
    //                    document.getElementById('foundContactsTbody').innerHTML += htmlString;
    //                    document.getElementById('alertWrp').className = 'hide';
    //                }
    //                break;
    //            case "Group":
    //                if (item.name.toUpperCase() == textSearch) {
    //                    var htmlString = '<tr>';
    //                    htmlString += '<td>' + item.name + '</td>';
    //                    htmlString += '</tr>';
    //                    document.getElementById('foundGroupsTbody').innerHTML += htmlString;
    //                    document.getElementById('alertWrp').className = 'hide';
    //                }
    //                else {
    //                    searchByText(item, textSearch);
    //                }
    //                break;
    //        }
    //    });
    //}
})();
