
let IS_PROD = false;
const server = IS_PROD ?
    "https://workflow-approval-task.onrender.com" :
    "http://localhost:5000"


export default server;