
INSERT INTO Users (username, password, name, createdAt, updatedAt) VALUES
	("batman", "password", "bruce", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("testuser", "password", "testuser", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("testuser3", "password", "testuser", "2019-01-08 03:14:07", "2019-01-08 03:14:07");

INSERT INTO Restaurants (name, about, image, address, createdAt, updatedAt, UserId) VALUES
	("Momma Ayesha's kitchen", "Homemade Soulfood straight from the heart of Momma Ayesha! Enjoy fresh chicken and home made corn bread", "https://img.grouponcdn.com/deal/aWgqiCmpAX7QJHTQxXg8tr/ihs_0-124_0034-2048x1229/v1/c700x420.jpg", "San Francisco", "2019-01-08 03:14:07", "2019-01-08 03:14:07",1),
	("Chang's Delicious Dumplings", "Homemade dumplings made by people who have nothing better to do with their time, Best pork dumplings in town!", "https://omnivorescookbook.com/wp-content/uploads/2016/09/1608_Pork-Dumplings_005.jpg", "San Francisco", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
	("John's Test Kitchen", "I'm an amateur chef trying out new recipes, someone please eat dinner with me. Oh god I'm so lonely", "http://nebula.wsimg.com/39f00aa837127ee5e264acc08f4e9398?AccessKeyId=F05FFAAB3F92DC92F052&disposition=0&alloworigin=1", "New York", "2019-01-08 03:14:07", "2019-01-08 03:14:07",3);

INSERT INTO Food (name, price, ingredient, image, createdAt, updatedAt, RestaurantId) VALUES
("dumplings", "$9.99", "pork, lettuce", "https://omnivorescookbook.com/wp-content/uploads/2016/09/1608_Pork-Dumplings_005.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",1),
("chicken", "$9.99", "chicken, lettuce", "https://img.grouponcdn.com/deal/aWgqiCmpAX7QJHTQxXg8tr/ihs_0-124_0034-2048x1229/v1/c700x420.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("fish", "$9.99", "fish, lettuce", "https://hips.hearstapps.com/del.h-cdn.co/assets/16/09/1457039861-cilantro-chili-lime-glazed-salmon-and-green-beansl1.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",3),
("pizza", "$9.99", "pork, lettuce", "https://food-images.files.bbci.co.uk/food/recipes/quick_pepperoni_pizza_64616_16x9.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("noodles", "$9.99", "pork, lettuce", "https://kirbiecravings.com/wp-content/uploads/2018/02/garlic-noodles-61-700x680.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",3),
("curry", "$9.99", "pork, lettuce", "https://blog.bulletproof.com/wp-content/uploads/2018/10/Red-beef-curry_header.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("sushi", "$9.99", "pork, lettuce", "https://img.grouponcdn.com/deal/hfefAup1zQWBE2K8sWURgS27xax/hf-846x508/v1/c700x420.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("fish katsu", "$9.99", "pork, lettuce", "https://c1.staticflickr.com/2/1478/25765602053_aebe020fc2_b.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",3),
("pork katsu", "$9.99", "pork, lettuce", "https://c1.staticflickr.com/2/1478/25765602053_aebe020fc2_b.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",1),
("pork cutlet", "$9.99", "pork, lettuce", "https://img.grouponcdn.com/deal/aWgqiCmpAX7QJHTQxXg8tr/ihs_0-124_0034-2048x1229/v1/c700x420.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",2),
("buffalo wings", "$9.99", "pork, lettuce", "https://dinnerthendessert.com/wp-content/uploads/2018/08/Buffalo-Wings-4.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07",1);
