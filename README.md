How to launch app:
1. Clone repository into gitpod workspace using URL and select VS Code via browser.
2. Create file named ".env" in backend folder.
3. Paste the following lines into .env file and fill strings with your correct data:
URL = 'url'
LOGIN = 'login'
PASSWORD = 'password'
PHONE = 'phone'
4. Open new terminal and use this commands: "cd backend", "npm install", "node index.js". (Navigate to backend folder, install dependencies, start backend server).
5. Open new terminal and use this commands: "cd front", "gp env -u VUE_APP_SERVER_URL", "gp env VUE_APP_SERVER_URL=$(gp url 
3000)", "eval $(gp env -e)", "npm install", "npm run serve". (Navigate to front folder, install dependencies, start development server).
6. Now you should have development server running via localhost.
