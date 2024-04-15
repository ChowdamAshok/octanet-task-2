body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

h1 {
  color: white;
  text-shadow: 5px 10px 30px white;
  text-align: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  max-height: auto;
  margin-left: 25%;
  max-width: 50%;
  background-color: #d5e5f3; 
  padding: 25px;
  border-radius: 25px;
  box-shadow: 5px 10px 15px;
  transition: box-shadow 0.3s ease;
}

.main-container:hover {
  box-shadow: 0 0 8px rgb(0, 252, 176);
}

.task-entry {
  background-color: #d5e5f3; 
  border-radius: 20px;
  padding: 10px;
  transition: box-shadow 0.3s ease;
  font-size: 30px;
}

.task-entry:hover {
  box-shadow: 5px 10px 15px black;
}

h3 {
  text-align: center;
  margin-left: 100px;
}

.task-container {
  background-color: #ffe4b5;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 5px 6px 8px;
  transition: box-shadow 0.3s ease;
}

.task-container:hover {
  box-shadow: 0 0 15px rgb(9, 9, 241);
}

.savbtn {
  background-color: #90ee90;
  line-height: 30px;
  width: 100px;
  transition: box-shadow 0.3s ease;
  border-radius: 6px;
  margin-left: 15px;
}

.savbtn:hover {
  box-shadow: 0 0 15px green;
  border-radius:10px;
}

input[type=text], input[type=date] {
  border: 2px groove green;
  border-radius: 6px;
  line-height: 30px;
  box-shadow: 1px 2px 2px;
}

.task-number {
  font-weight: bold;
  margin-right: 10px;
}

.edit-button{
  box-shadow: 1px 2px 2px;
  background-color: white;
  margin-left: 20px;
  transition: box-shadow 0.3s ease;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  text-align: center;
}
.edit-button img{
  width: 30px;
  height:auto;
}

.edit-button:hover {
  box-shadow: 0 0 10px rgb(0, 255, 64);
}
.delete-button{
  background-color: white;
  box-shadow: 1px 2px 2px;
  margin-left: 20px;
  transition: box-shadow 0.3s ease;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  text-align: center;
}
.delete-button img{
  width: 30px;
  height: auto;
}
.delete-button:hover {
  box-shadow: 0 0 10px rgb(255, 0, 0);
}
