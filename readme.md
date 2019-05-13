**Thoughts & Instructions**

**Overall**

"We're building a tool to help protect electricians from experiencing or creating fire hazards during their work in San Francisco. You can help by building an API to provide some of the data we need to display in our mobile app. You don't need to build any UI but please give curl commands or some example our mobile app developers can use to try using your API."

You are building an API. User needs to be able to pull data and see it in command (or if there's time in UI) via interaction with app. If you create tests, instruct on how to test them. No Bonus Features Are Added Here. 

**Contractor's report**

"We want to show contracts a list of the properties they have worked on which have had fire violations so that they can look out for these or similar hazards on their jobs. "

Endpoint accepts a business name. Make two queries: (1) properties worked (returning addresses) and (2) fire violations. 

The query results should return together in the same json for the user to view.

**City report**

"When a city inspector finds a new fire violation they want to know which contractors are working nearby and need to be warned about a potential danger."

Endpoint accepts a (1) Block identifier and (2) a Date.

The results should return a json with businesses that have permits on the searched block. Note to self: Need to identify what type of query is happening here (simple sql command, look in notes)

**Tech Proposed**
Node.js, Express.js & PostgreSQL

For help setting up you can use this [article](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8) as a guide.

* Make sure postgreSQL is working and follow instructions to create database.
* Create a package.json using `npm init`.
* Install express and node-postgress using `npm i express pg`.
* In your index.js require `express`, `bodyParser`, and set `app` and `port` variables.
* Test connection by setting get route to show test message json to page.
* Create a `pool` node-postgres module inside of a new queries.js file for the connections, so they don't have to be opened and closed per use. 
* Create a get all query to retrieve all data from one table.
* Export for query route access in index.js.

Leave Off: 
[Search for two queries merging into one json](https://www.google.com/search?q=js+turn+two+queries+into+one+json&rlz=1C5CHFA_enUS819US819&oq=js+turn+two+queries+into+one+json+&aqs=chrome..69i57j69i64l2.8372j0j4&sourceid=chrome&ie=UTF-8)
