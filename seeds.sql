
INSERT INTO Users (username, password, name, createdAt, updatedAt) VALUES
	("batman", "password", "bruce", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("testuser", "password", "testuser", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("testuser3", "password", "testuser", "2019-01-08 03:14:07", "2019-01-08 03:14:07");

INSERT INTO Restaurants (name, about, image, address, createdAt, updatedAt, UserId) VALUES
	("Momma Ayesha's kitchen", "Homemade Soulfood straight from the heart of Momma Ayesha! Enjoy fresh chicken and home made corn bread", "https://img.grouponcdn.com/deal/aWgqiCmpAX7QJHTQxXg8tr/ihs_0-124_0034-2048x1229/v1/c700x420.jpg", "San Francisco", "2019-01-08 03:14:07", "2019-01-08 03:14:07",1),
	("Chang's Delicious Dumplings", "Homemade dumplings made by people who have nothing better to do with their time, Best pork dumplings in town!", "https://omnivorescookbook.com/wp-content/uploads/2016/09/1608_Pork-Dumplings_005.jpg", "San Francisco", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
	("John's Test Kitchen", "I'm an amateur chef trying out new recipes, someone please eat dinner with me. Oh god I'm so lonely", "http://nebula.wsimg.com/39f00aa837127ee5e264acc08f4e9398?AccessKeyId=F05FFAAB3F92DC92F052&disposition=0&alloworigin=1", "New York", "2019-01-08 03:14:07", "2019-01-08 03:14:07",3);

INSERT INTO Food (name, price, ingredient, image, createdAt, updatedAt, RestaurantId) VALUES
("dumplings", "$4.99", "pork, lettuce", "https://images-gmi-pmc.edge-generalmills.com/6059b986-4800-4508-8546-40cb56e3d815.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",1),
("chicken", "$4.99", "chicken, garlic, sesame", "https://diethood.com/wp-content/uploads/2018/11/Oven-Baked-Chicken-24.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("fish", "$14.99", "fish, sesame oil, salt", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/9/15/0/Healthy_Salmon-003_s4x3.jpg.rend.hgtvcom.966.725.suffix/1379610487273.jpeg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",3),
("pizza", "$19.99", "cheese, flour, peperonni", "https://i.kinja-img.com/gawker-media/image/upload/s--gf7NfpMG--/c_scale,f_auto,fl_progressive,q_80,w_800/ox6m5b5fev1yoifdlnda.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("noodles", "$7.99", "wheat, garlic", "https://rasamalaysia.com/wp-content/uploads/2012/02/garlic_noodles_thumb-500x375.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",3),
("curry", "$4.99", "milk, cheese, curry", "https://runningonrealfood.com/wp-content/uploads/2018/05/healthy-vegan-panang-curry-4-of-14.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("sushi", "$20.99", "seaweed, fish", "https://www.julieslifestyle.com/src/Frontend/Files/blog/images/968x560/mushroom-avocado-sushi-rolls-vegan-gluten-free-inspiration-anett-velsberg-en-662.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2)