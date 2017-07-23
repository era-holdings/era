# ERA REST API

**Get Events**
----
  Returns events data for a user

* **URL**

  /users/:id/events

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Query Params**

	**Optional:** 
    
  `status=[EVENT_STATUS]`
  
  ***EVENT_STATUS:***
  "PENDING", "COMPLETED", "ALL"

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:**

    ```javascript
    {"events": [
        {
        "id": "4234",
        "event_status": "PENDING",
        "event_type": "GROUP_MEETING_WITH_LIST_ITEMS",
        "one_on_one": "false",
        "public": "true",
        "one_vote_per_list_item": "true",
        "event_title": "Go To Movies",
        "event_notes": "wonder woman",
        "user": {
            "id": "323232",
            "first_name": "John",
            "last_name": "Doe"
        },
        "event_creation_date": "2017-07-09T18:56:25.093Z",
        "event_date_time": [
            {
            "from_date": "2017-07-17",
            "end_date": "2017-07-17",
            "start_hour": "13:00",
            "end_hour": "15:00",
            "selected": [
                {
                "email": "JimMorisson@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                },
                {
                "email": "JerryGarcia@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                },
                {
                "email": "eliyahu@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            }
        ],
        "event_messages": [
            {
            "name": "racheli@gmail.com",
            "creation_date": "2017-07-09T18:56:25.093Z",
            "message": "Lets meet"
            },
            {
            "name": "ronitLevi@gmail.com",
            "creation_date": "2017-07-09T18:56:25.093Z",
            "message": "I would love to meet"
            },
            {
            "name": "anatIsraeli@gmail.com",
            "creation_date": "2017-07-09T18:56:25.093Z",
            "message": "Great !!!"
            }
        ],
        "event_places": [
            {
            "formatted_address": "Cinema City Rishon Letzion, Yaldei Teheran Street, Rishon LeTsiyon",
            "geometry": {
                "bounds": {
                "northeast": {
                    "lat": 34.0730609,
                    "lng": -118.3743483
                },
                "southwest": {
                    "lat": 34.0727389,
                    "lng": -118.3747841
                }
                },
                "location": {
                "lat": 34.0728999,
                "lng": -118.3745662
                }
            },
            "selected": [
                {
                "email": "JimMorisson@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            },
            {
            "formatted_address": "Yes Planet Rishon Lezion, HaMea VeEsrim Street, Rishon LeTsiyon",
            "geometry": {
                "bounds": {
                "northeast": {
                    "lat": 34.0730609,
                    "lng": -118.3743483
                },
                "southwest": {
                    "lat": 34.0727389,
                    "lng": -118.3747841
                }
                },
                "location": {
                "lat": 34.0728999,
                "lng": -118.3745662
                }
            },
            "selected": []
            }
        ],
        "event_list": [
            {
            "title": "Popcorn",
            "notes": "No butter",
            "selected": []
            },
            {
            "title": "Drinks",
            "notes": "No alcohol",
            "selected": [
                {
                "email": "JimMorisson@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                },
                {
                "email": "JerryGarcia@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                },
                {
                "email": "eliyahu@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            },
            {
            "title": "Snacks",
            "notes": "No butter",
            "selected": [
                {
                "email": "eliyahu@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            }
        ],
        "event_invitees": [
            {
            "status": "CONFIRMED",
            "email": "JimMorisson@gmail.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "DavidGilmour@outlook.com",
            "priority": null
            },
            {
            "status": "PENDING",
            "email": "JerryGarcia@gmail.com",
            "priority": null
            },
            {
            "status": "DECLINED",
            "email": "moisheUfnik@yahoo.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "johnoko@012.co.il",
            "priority": null
            }
        ]
        },
        {
        "id": "5342",
        "event_status": "PENDING",
        "event_type": "GROUP_MEETING",
        "one_on_one": "true",
        "public": "false",
        "one_vote_per_list_item": "false",
        "event_title": "Lunch with David",
        "event_notes": "",
        "created_by": {
            "id": "323232",
            "first_name": "John",
            "last_name": "Doe"
        },
        "creation_date": "2017-07-11T18:56:25.093Z",
        "event_date_time": [
            {
            "from_date": "2017-07-17",
            "end_date": "2017-07-17",
            "start_hour": "13:00",
            "end_hour": "15:00",
            "selected": [
                {
                "email": "JimMorisson@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            },
            {
            "from_date": "2017-07-22",
            "end_date": "2017-07-22",
            "start_hour": "20:00",
            "end_hour": "22:00",
            "selected": [
                {
                "email": "JimMorisson@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            }
        ],
        "event_messages": [],
        "places": [],
        "event_list": [],
        "invitees": [
            {
            "status": "CONFIRMED",
            "email": "JimMorisson@gmail.com",
            "priority": 2
            },
            {
            "status": "PENDING",
            "email": "DavidGilmour@outlook.com",
            "priority": 3
            },
            {
            "status": "PENDING",
            "email": "JerryGarcia@gmail.com",
            "priority": 5
            },
            {
            "status": "DECLINED",
            "email": "moisheUfnik@yahoo.com",
            "priority": 1
            },
            {
            "status": "PENDING",
            "email": "johnoko@012.co.il",
            "priority": 4
            }
        ]
        },
        {
        "id": "5342",
        "event_status": "PENDING",
        "event_type": "SUGGEST",
        "one_on_one": "false",
        "public": "true",
        "one_vote_per_list_item": "false",
        "event_title": "What sould i buy?",
        "event_notes": "Which console is recommended?",
        "created_by": {
            "id": "323232",
            "first_name": "John",
            "last_name": "Doe"
        },
        "creation_date": "2017-07-11T18:56:25.093Z",
        "event_date_time": [],
        "event_messages": [],
        "places": [],
        "event_list": [
            {
            "title": "Xbox One",
            "notes": "with 1TB HD",
            "selected": [
                {
                "email": "JimMorisson@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                },
                {
                "email": "JerryGarcia@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            },
            {
            "title": "Playstation 4",
            "notes": "with 500GB HD",
            "selected": [
                {
                "email": "JerryGarcia@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            },
            {
            "title": "Nitendo DS",
            "notes": "",
            "selected": []
            }
        ],
        "invitees": [
            {
            "status": "CONFIRMED",
            "email": "JimMorisson@gmail.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "DavidGilmour@outlook.com",
            "priority": null
            },
            {
            "status": "PENDING",
            "email": "JerryGarcia@gmail.com",
            "priority": null
            },
            {
            "status": "DECLINED",
            "email": "moisheUfnik@yahoo.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "johnoko@012.co.il",
            "priority": null
            }
        ]
        },
        {
        "id": "5342",
        "event_status": "PENDING",
        "event_type": "SUGGEST",
        "one_on_one": "false",
        "public": "true",
        "one_vote_per_list_item": "false",
        "event_title": "What sould i buy?",
        "event_notes": "Which console is recommended?",
        "created_by": {
            "id": "323232",
            "first_name": "John",
            "last_name": "Doe"
        },
        "creation_date": "2017-07-11T18:56:25.093Z",
        "event_date_time": [],
        "event_messages": [],
        "places": [
            {
            "formatted_address": "Rome, Italy",
            "geometry": {
                "bounds": {
                "northeast": {
                    "lat": 34.0730609,
                    "lng": -118.3743483
                },
                "southwest": {
                    "lat": 34.0727389,
                    "lng": -118.3747841
                }
                },
                "location": {
                "lat": 34.0728999,
                "lng": -118.3745662
                }
            },
            "selected": [
                {
                "email": "JimMorisson@gmail.com",
                "timestamp": "2017-07-09T18:56:25.093Z"
                }
            ]
            },
            {
            "formatted_address": "New York, USA",
            "geometry": {
                "bounds": {
                "northeast": {
                    "lat": 34.0730609,
                    "lng": -118.3743483
                },
                "southwest": {
                    "lat": 34.0727389,
                    "lng": -118.3747841
                }
                },
                "location": {
                "lat": 34.0728999,
                "lng": -118.3745662
                }
            },
            "selected": []
            }
        ],
        "event_list": [],
        "invitees": [
            {
            "status": "CONFIRMED",
            "email": "JimMorisson@gmail.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "DavidGilmour@outlook.com",
            "priority": null
            },
            {
            "status": "PENDING",
            "email": "JerryGarcia@gmail.com",
            "priority": null
            },
            {
            "status": "DECLINED",
            "email": "moisheUfnik@yahoo.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "johnoko@012.co.il",
            "priority": null
            }
        ]
        },
        {
        "id": "5342",
        "event_status": "PENDING",
        "event_type": "CONFIRMATION",
        "one_on_one": "false",
        "public": "false",
        "one_vote_per_list_item": "false",
        "event_title": "A trip to Greece",
        "event_notes": "Please arrive at Ben Gurion airport two hours before the flight!",
        "created_by": {
            "id": "323232",
            "first_name": "John",
            "last_name": "Doe"
        },
        "creation_date": "2017-07-11T18:56:25.093Z",
        "event_date_time": [],
        "event_messages": [],
        "places": [],
        "event_list": [],
        "invitees": [
            {
            "status": "CONFIRMED",
            "email": "JimMorisson@gmail.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "DavidGilmour@outlook.com",
            "priority": null
            },
            {
            "status": "PENDING",
            "email": "JerryGarcia@gmail.com",
            "priority": null
            },
            {
            "status": "DECLINED",
            "email": "moisheUfnik@yahoo.com",
            "priority": null
            },
            {
            "status": "CONFIRMED",
            "email": "johnoko@012.co.il",
            "priority": null
            }
        ]
        }
    ]
    }
 

**Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1/events",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Create Event**
----
  Create new event for user

* **URL**

  /users/:id/events/add

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Query Params**

	None
  
* **Payload**
```javascript
 {
     {
      "event_type": "GROUP_MEETING_WITH_LIST_ITEMS",
      "one_on_one": "false",
      "public": "true",
      "one_vote_per_list_item": "true",
      "event_title": "Go To Movies",
      "event_notes": "wonder woman",
      "event_date_time": [
        {
          "from_date": "2017-07-17",
          "end_date": "2017-07-17",
          "start_hour": "13:00",
          "end_hour": "15:00"
        }
      ]
      "event_places": [
        {
          "geometry": {
            "bounds": {
              "northeast": {
                "lat": 34.0730609,
                "lng": -118.3743483
              },
              "southwest": {
                "lat": 34.0727389,
                "lng": -118.3747841
              }
            },
            "location": {
              "lat": 34.0728999,
              "lng": -118.3745662
            }
          }
        },
        {
          "geometry": {
            "bounds": {
              "northeast": {
                "lat": 34.0730609,
                "lng": -118.3743483
              },
              "southwest": {
                "lat": 34.0727389,
                "lng": -118.3747841
              }
            },
            "location": {
              "lat": 34.0728999,
              "lng": -118.3745662
            }
          }
        }
      ],
      "event_list": [
        {
          "title": "Popcorn",
          "notes": "No butter"
        },
        {
          "title": "Drinks",
          "notes": "No alcohol"
        },
        {
          "title": "Snacks",
          "notes": "No butter"
        }
      ],
      "event_invitees": [
        {
          "email": "JimMorisson@gmail.com",
          "priority": null
        },
        {
          "email": "DavidGilmour@outlook.com",
          "priority": null
        },
        {
          "email": "JerryGarcia@gmail.com",
          "priority": null
        },
        {
          "email": "moisheUfnik@yahoo.com",
          "priority": null
        },
        {
          "email": "johnoko@012.co.il",
          "priority": null
        }
      ]
    }
 }   
```

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:**
    Event Object
**Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

  OR
  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "wrong payload" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1/events/add",
      dataType: "json",
      contentType: "application/json"
      type : "POST",
      data: {}, // payload goes here
      success : function(r) {
        console.log(r);
      }
    });
  ```
  