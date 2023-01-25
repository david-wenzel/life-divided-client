# LIFE/divided
### Life/divided is a goal management app that helps you organize your goals and divide them into sections to make them more manageable.



![Logo](https://64.media.tumblr.com/b5ab4893d2a8bcb6f2f4e30c8e86b7a6/a298cde9b023e8ae-e5/s500x750/2891c04c3340b0a06114dc20a0792840fb079be0.png)




## Installation


This project is stored in two Repos the link the is located here; 

- front end; https://github.com/david-wenzel/life-divided-client
- back end; https://github.com/david-wenzel/life-divided-backend

Client Installation
```bash
  npm install
  npm start
```

Back-end Installation
```bash
  bundle install
  rake db:migrate
  rake server
```

    
## Features and Use

- Create sections
- Create, edit and delete goals for each section
#### Creating a Section
To create a new section, click on the "New Section" button and enter a name for your section.
#### Creating, Editing and Deleting a Goal
To create a new goal, click on the "New Goal" button and enter a name for your goal. To edit a goal; click on the edit button located bellow the goal you wish to edit, enter edited goal and click submit. To delete a goal click the red X below the goal you wish to delete. 


## Future Releases
We are currently working on these functions;
- Delete section
- Priorities 
- Ordering Sections and Goals by date-added
## Lessons Learned

While building this project the importance of state management was made clear. Having an efficient and smooth interface for the user to interact with is key, and through much planning and some experimenting, I landed on the current implementation, allowing all sorting, nesting, and associating to be done on the server side. On the other hand the server side, we optimized the response objects to include nested JSON, which allowed us to take the load of managing the data off of the front end. On the same hand, we strategically formatted our CRUD response objects to best suit the way state management was handled on the client side. The benefit of building both the back and front end is clear, however, much planning must be done to ensure swift execution and deployment. 


## Support

For support, email dwenzel95@gmail.com


## License

[MIT](https://choosealicense.com/licenses/mit/)

