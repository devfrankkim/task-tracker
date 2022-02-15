### **Feature**

- [x] Layout
- [x] No data > "No tasks"
- [x] Double click > change reminder colour.
- [x] Add feature toggle(hide).
- [x] Delete
- [x] Add
- [x] Add with reminder (data)
- [x] No data input > show "alert"
- [x] Install JSON Server
- [x] Delete - JSON server
- [x] ADD - JSON server
- [x] Toggle reminder - JSON server
- [x] Add task template (open/close) -> JSON server
- [x] Routing v5 -> v6

===================

### Front UI

`npm start`  
[localhost:3000](http://localhost:3000/)

===================

### JSON SERVER (db.json)

`npm run server`  
[localhost:5000/tasks](http://localhost:5000/tasks)  
[localhost:5000/openTask](http://localhost:5000/openTask)

```js
{
  "openTask": [
    {
      "open": false,
      "id": 1
    }
  ],
  "tasks": [
    {
      "text": "Finish project",
      "day": "2/8 Tuesday",
      "reminder": true,
      "id": 1
    }
  ]
}
```
