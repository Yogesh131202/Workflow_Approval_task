
let IS_PROD = true;
const server = IS_PROD ?
    "https://workflow-approval-task.onrender.com" :
    "http://localhost:5000"


export default server;