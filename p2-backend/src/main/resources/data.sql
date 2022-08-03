INSERT INTO Status (Status_ID, Status_Code) VALUES ('1','New Order');
INSERT INTO Status (Status_ID, Status_Code) VALUES ('2','Cooking');
INSERT INTO Status (Status_ID, Status_Code) VALUES ('3','Ready');
INSERT INTO Status (Status_ID, Status_Code) VALUES ('4','Served');
INSERT INTO Menu (Name, Price, Image_Path) VALUES ('Asiago Chicken Pasta','12.99','/chicken_pasta');
INSERT INTO Menu (Name, Price, Image_Path) VALUES ('Argentinean-Style Steak','18.99','/argentinean_steak');
INSERT INTO Menu (Name, Price, Image_Path) VALUES ('All-American Burgers','11.99','/american_burger');
INSERT INTO Menu (Name, Price, Image_Path) VALUES ('Shrimp Scampi','16.99','/shrimp_scampi');
INSERT INTO Menu (Name, Price, Image_Path) VALUES ('Chicken Fajitas','14.99','/chicken_fajita');
INSERT INTO Menu (Name, Price, Image_Path) VALUES ('Grilled Salmon','13.99','/grilled_salmon');
INSERT INTO Ticket (Ticket_ID, Ticket_Name) VALUES ('1','Garcias');
INSERT INTO Ticket (Ticket_ID, Ticket_Name) VALUES ('2','Ransoms');
INSERT INTO Ticket (Ticket_ID, Ticket_Name) VALUES ('3','Owls');
INSERT INTO Ticket (Ticket_ID, Ticket_Name) VALUES ('4','Squirrels');
INSERT INTO Ticket (Ticket_ID, Ticket_Name) VALUES ('5','Lains');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('1','1','1','Well Done');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('2','2','1','test');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('6','1','1','');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('5','1','2','');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('4','2','2','test');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('4','3','3','test');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('4','3','4','Hot!');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('2','1','5','cook it pls');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('3','1','5','Hot!');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('3','1','5','');
INSERT INTO Orders (Menu_ID, Status_ID, Ticket_ID, Notes) VALUES ('5','3','5','Hot!');