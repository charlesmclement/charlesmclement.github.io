# Live Project Code Summary

### Live Projects
* [DataScrape](#datascrape)
* [The Tech Academy Forum](#the-tech-academy-forum)
* [Erectors Inc](#erectors-inc)
* [TravelScrape](#travelscrape)
---
## DataScrape
In this project, I worked with my peers on a site called DataScrape. It is a Django site that uses APIs to collect information based on the user's location.

* [Create a message app front end](#create-a-message-app-front-end)
* [Add Quote of the Day API](#Add-Quote-of-the-Day-api)
* [Bug in weather page](#Bug-in-weather-page)
* [Revamp the color scheme](#Revamp-the-color-scheme)


### Create a message app front end 
I was tasked with restyling the messaging frontend from its current styling, to a more modern styling akin to iMessage or Facebook. The front end features removable conversations,  
a multiline message editor, and is responsive to multiple screen sizes. All of the colors in this project are stored in variables so that the user can customize their experience  
as well.
<div style="text-align:center">
<img src="https://raw.githubusercontent.com/charlesmclement/charlesmclement.github.io/master/live-project-summary/images/chat.png"></div>
"Desktop view") ![Chat Editor](https://raw.githubusercontent.com/charlesmclement/charlesmclement.github.io/master/live-project-summary/images/chateditor.png "Message editor") ![Mobile View](https://raw.githubusercontent.com/charlesmclement/charlesmclement.github.io/master/live-project-summary/images/mobileview.PNG "Mobile view")

CSS :

        @media only screen and (max-width: 1023px) { 
            .editor-link { 
                display: none;
            }
            .message-conversations { 
                width: 100%;
                height: 97%;
                opacity: .95;
                display: none;
            } 
            .message-entity {
                margin: 20px 5%;
                width: 66%;
                padding-left: 50px;
            }
            .message-entity-self {
                margin: 20px 20% 20px 31%;
                width: 66%;
                overflow-wrap: auto;
            }
            .message-textbox {
                margin-right:20px;
                width: 66%
            }
        }
        @media only screen and (min-width: 1023px) { 
            .inbox-link { 
                display: none;
            }
            .message-textbox {
                margin-right:80px;
                width: 44%
            }
            .message-conversations { 
                width: 40%;
                height: 80%;
                display: true;
            } 
            .message-entity {
                width: 33%;
                margin: 0 45%;
            }
            .message-entity-self {
                width: 33%;
                margin: 10px 5% 10px 66%;
            }
        }

JavaScript: 
    
    var modal = document.getElementById("modal-body");
    var btn = document.getElementById("modal-button");
    var span = document.getElementsByClassName("close-button")[0];

    $(document).ready(function () {
        $('#message-active').scrollTop($('#message-active')[0].scrollHeight);
        $(".inbox-link").click(function () {
            $(".message-conversations").toggle();
        });
    });

    $(window).resize(function () {
        document.getElementById("modal-text").style.height = modal.style.height + 'px';
        if ($(window).width() < 1023) {
            $(".message-conversations").hide();
            modal.style.display = "none";
        }
        else {
            $(".message-conversations").show();
        }
    });

    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

*Jump to: [Page Top](#live-project-code-summary)*


### Add Quote of the Day API

In this task, I modified the homepage to show a quote of the day. It uses an API from theysaidso.com. The API has a limited amount of uses per day, so testing the code involved storing a copy of the json file in a variable.

    class QodScraper:

        def __init__(self):

            try:
                url = 'http://quotes.rest/qod.json
                qoddata = urllib.request.urlopen(url).read()
                qoddata = json.loads(qoddata)
                author = qoddata["contents"]["quotes"][0]['author']
                quote = qoddata["contents"]["quotes"][0]['quote']
                self.quote = ('"{}", {}'.format(quote,author))
            
            except urllib.error.URLError as e:
                self.quote = '"Too many requests on Quote of the Day"'
                print(e)

 
### Bug in weather page
I was tasked with fixing a viewmodel that was preventing that view from loading. A previous developer had broken the view while working on it. The solution was to remove a line that was importing datetime twice.

    import time
    import datetime
    import urllib.request
    import json
    import requests
    • from datetime import datetime
    from django.shortcuts import get_object_or_404 
*Jump to: [Page Top](#live-project-code-summary)*


### Revamp the color scheme

In this task, I restyled the page in CSS to modify the color scheme to use colors that were provided.

    body {
        text-align: center;
        background-color: dimgray;
    }
    #eventList {
        border-style: solid;
        border-color: black;
        border-width: 1px;
        background-color rgb(230, 230, 230);
    }
    .divider {
        background-color: black;
    }
    .navbar-nav > li > .dropdown-menu {
        background-color: darkseagreen;
        border-color: black;
    }
    .navbar-nav > li > .dropdown-toggle {
        background-color: darkseagreen;
        border-color: black;
    }
*Jump to: [Page Top](#live-project-code-summary)*


### Style the traffic page

In this task, I made the Traffic API responsive to screen size using bootstrap.

    <div class="hidden-md hidden-sm hidden-xs">
        <embed src="{{traffic.flow}}" type="" style="width:1140px; height:600px>
    </div>
    <div class="hidden-lg hidden-xl hidden-xs col-sm-offset-2 col-md-offset-3">
        <embed src="{{traffic.flow}}" type="" style="width:500px; height:600px">
    </div>

*Jump to: [Page Top](#live-project-code-summary)*
___



## The Tech Academy Forum
* [Adjust test user avatar](#adjust-test-user-avatar)
* [Create a register page](#create-a-register-page)
* [Create a homepage](#create-a-homepage)

### Adjust test user avatar
In this story I added a line to the migrations file to include a default avatar for each test user.

    UserProfile = apps.get_model('Forum', 'UserProfile')
    for i in range(1, 21):
        user_profile = UserProfile(
            User_id=userData[i]['id'],
            Signature="TestSignature_{}".format(i),
            Avatar='avatar/default-avatar.png',
        )
        user_profile.save()

*Jump to: [Page Top](#live-project-code-summary)*

### Create a register page
In this story, I added a registration page that allows users to create a new account for the forum.

    <form action="{% url "register" %}" method="POST">
        {% csrf_token %}
        <div class="container">
            <div class="row rowpad">
                <label class="col-md-4 col-md-offset-2" for="username">Username</label>
                <input class="col-md-3" type="text" name="username" required>
            </div>
            <div class="row rowpad">
                <label class="col-md-4 col-md-offset-2" for="first_name">First name</label>
                <input class="col-md-3" type="text" name="first_name" required>
            </div>
            <div class="row rowpad">
                <label class="col-md-4 col-md-offset-2" for="last_name">Last name</label>
                <input class="col-md-3" type="text" name="last_name" required>
            </div>
            <div class="row rowpad">
                <label class="col-md-4 col-md-offset-2" for="email">Email</label>
                <input class="col-md-3" type="email" name="email" required>
            </div>
            <div class="row rowpad">
                <label class="col-md-4 col-md-offset-2" for="password">Password</label>
                <input class="col-md-3" type="password" name="password" required>
            </div>
            <div class="center-block rowpad">
                <input class="center-block" type="submit" value="Register"></button>
            </div>
    </form>



### Create a homepage
I was tasked with creating a homepage which shows the ten most recently active threads.  

        {% for thread in threads %}
        <a href="#"><span class="glyphicon glyphicon-file"></span>&nbsp;{{ thread.ThreadTitle }}, active on {{ thread.DateUpdate }}</a>
        {% endfor %}
        {% block content %}
        {% endblock %}
        
![TTAForum](https://raw.githubusercontent.com/charlesmclement/charlesmclement.github.io/master/live-project-summary/images/ttaforum.PNG)
___

## Erectors Inc
* [Scheduling page](#scheduling-page)
* [News and chat seed data](#news-and-chat-seed-data)


### Scheduling page
Here I was tasked with making a page that admins can edit existing schedules on. It features dropdown menus and datepickers.

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin")]
        public ActionResult Edit([Bind(Include = "ScheduleId,StartDate,EndDate")] Schedule schedule, string Person, Guid JobSite)
        {
            ApplicationUser _person = db.Users.Where(u => u.Id == Person).First();
            Job _job = db.Jobs.Where(j => j.JobId == JobSite).First();

            Schedule Schedule = db.Schedules.Where(s => s.ScheduleId == schedule.ScheduleId).First();
            Schedule.Job = _job;
            Schedule.Person = _person;
            Schedule.EndDate = schedule.EndDate;
            Schedule.StartDate = schedule.StartDate;

            if (ModelState.IsValid)
            {
                db.Entry(Schedule).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(schedule);
        }

### News and chat seed data
In this task I populated the database with test messages and news items using Entity Code First.

            var ChatMessages = new List<ChatMessage>
            {
                new ChatMessage
                {
                    ChatMessageId=Guid.Parse("4605fdb7-8c40-40c4-a561-ca417f18d86d"),
                    Sender=applicationUsers.Where(u => u.UserName == "Jill").First(),
                    Date = new DateTime(2019,1,18, 12, 10, 03),
                    Message = "I have made a news post about the upcoming party."
                },
                new ChatMessage
                {
                    ChatMessageId=Guid.Parse("b2425f93-30fa-440e-b5bf-6893cc487d8d"),
                    Sender=applicationUsers.Where(u => u.UserName == "Jack").First(),
                    Date = new DateTime(2019,1,18, 12, 10, 35),
                    Message = "Thank you, Jill can you make a news post for our new hire next?"
                },
                new ChatMessage
                {
                    ChatMessageId=Guid.Parse("7bee5676-5f90-4091-8dd9-c2773169a201"),
                    Sender=applicationUsers.Where(u => u.UserName == "Jill").First(),
                    Date = new DateTime(2019,1,18, 12, 10, 45),
                    Message = "I will do that now."
                },
                new ChatMessage
                {
                    ChatMessageId=Guid.Parse("9a132c64-8aa5-48a7-b04e-9eef9fb4c8a5"),
                    Sender=applicationUsers.Where(u => u.UserName == "Jack").First(),
                    Date = new DateTime(2019,1,18, 12, 11, 03),
                    Message = "Thanks again."
                }
            };
            ChatMessages.ForEach(x => context.ChatMessages.AddOrUpdate(c => c.ChatMessageId, x));
            context.SaveChanges();

            var NewsItems = new List<CompanyNews>
            {
                new CompanyNews
                {
                    DateStamp = "5/7/2019",
                    Title = "Company Party",
                    NewsItem = "Our annual company party is going to be held on 6/20/2019",
                    ExpirationDate = new DateTime(2019, 6, 25, 10, 30, 00)
                },
                new CompanyNews
                {
                    DateStamp = "5/5/2019",
                    Title = "New Hire",
                    NewsItem = "We've hired on a new employee, please welcome Sam to the team.",
                    ExpirationDate = new DateTime(2019, 6, 5, 9, 45, 33)
                },
                new CompanyNews
                {
                    DateStamp = "5/2/2019",
                    Title = "Happy Birthday Joe!!",
                    NewsItem = "Today is Joe's birthday. There will be cake in the break room.",
                    ExpirationDate = new DateTime(2019, 6, 2, 10, 30, 00)
                },
                new CompanyNews
                {
                    DateStamp = "3/1/2019",
                    Title = "Website update",
                    NewsItem = "We are having updates made on our website, there may be a bit of down time.",
                    ExpirationDate = new DateTime(2019, 4, 1, 10, 30, 00)
                }
            };
            NewsItems.ForEach(x => context.CompanyNews.AddOrUpdate(n => n.DateStamp, x));
            context.SaveChanges();

___



    






















## Other Skills Learned
* Working with a group of developers to identify front and back end bugs to the improve usability of an application
* Improving project flow by communicating about who needs to check out which files for their current story
* Learning new efficiencies from other developers by observing their workflow and asking questions  
* Practice with team programming/pair programming when one developer runs into a bug they cannot solve
    * One of the developers on the team was having trouble with the JavaScript function being called to increment and decrement the likes on a page and myself and two others on the team sat with him and had him talk through what he had done so far. I asked questions about different ways to approach it until we found where it was broken and what needed to be fixed.
    * When a user requests a friendship there is supposed to be a pending notification displayed. One of the other developers was hitting a wall while working on this story when he discovered the functionality was working four different ways across the application. I sat with him and we talked through the process of each JavaScript function being called. We discovered there were multiple functions by the same name being loaded, so we simplified the code down to just one function. Clicking the button would now work from the nav drop-down but not on a specific page. I realized that the page was populating two different spans with the same ID and these were what was being targeted by the JavaScript function. So we needed to make that user-specific element identifier a class and target the class instead so that a change in either place would affect both.


*Jump to: [Front End Stories](#front-end-stories), [Back End Stories](#back-end-stories), [Other Skills](#other-skills-learned), [Page Top](#live-project)*
