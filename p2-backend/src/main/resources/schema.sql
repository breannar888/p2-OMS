-- order
CREATE TABLE `Orders` (
  `Order_ID` INT NOT NULL AUTO_INCREMENT,
  `Menu_ID` INT NOT NULL,
  `Status_ID` INT NOT NULL,
  `Ticket_ID` INT NOT NULL,
  `Notes` VARCHAR(200) NULL,
  PRIMARY KEY (`Order_ID`));
  
  -- menu
CREATE TABLE `Menu` (
  `Menu_ID` INT NOT NULL AUTO_INCREMENT,
  `Menu_Name` VARCHAR(100) NOT NULL,
  `Price` DECIMAL(5,2) NOT NULL,
  `Image_Path` VARCHAR(45) NULL,
  PRIMARY KEY (`Menu_ID`));
  
  --ticket
CREATE TABLE `Ticket` (
  `Ticket_ID` INT NOT NULL AUTO_INCREMENT,
  `Ticket_Name` VARCHAR(100) NULL,
  PRIMARY KEY (`Ticket_ID`));
  
  --status
CREATE TABLE `Status` (
  `Status_ID` INT NOT NULL AUTO_INCREMENT,
  `Status_Code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Status_ID`));
  
 -- users
create table users(
	Username varchar(50) not null primary key,
	Password varchar(100) not null,
	Enabled boolean not null
);

-- "authorities"
create table authorities (
	Username varchar(50) not null,
	Authority varchar(50) not null,
	constraint fk_authorities_users foreign key(Username) references users(Username)
);

--add foreign keys
ALTER TABLE `Orders`   
ADD FOREIGN KEY (Menu_ID)
  REFERENCES Menu(Menu_ID);
  
ALTER TABLE `Orders`    
ADD FOREIGN KEY (Ticket_ID)
  REFERENCES Ticket(Ticket_ID);
  
ALTER TABLE `Orders`  
ADD FOREIGN KEY (Status_ID)
  REFERENCES Status(Status_ID);
  