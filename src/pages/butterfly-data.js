const names = { 
    girls:['Amy', 'Ana', 'Ari', 'Ava', 'Aya', 'Eve', 'Ivy', 'Joy', 'Kit', 'Lea', 'Lia', 'Liv', 'Mae', 'Mia', 'Nia', 'Pez', 'Sky', 'Abby', 'Aila', 'Andi', 'Anna', 'Anne', 'Anya', 'Aria', 'Arya', 'Ayla', 'Beso', 'Bria', 'Cali', 'Cara', 'Chai', 'Cleo', 'Cora', 'Cora', 'Dana', 'Dani', 'Drew', 'Eden', 'Ella', 'Elsa', 'Emmy', 'Erin', 'Esme', 'Etta', 'Evie', 'Ezra', 'Faye', 'Gwen', 'Iris', 'Isla', 'Iyla', 'Jane', 'Kaia', 'Kali', 'Kara', 'Kate', 'Kyla', 'Lana', 'Lara', 'Leia', 'Lena', 'Lexi', 'Lila', 'Lily', 'Lina', 'Lola', 'Lucy', 'Lulu', 'Lyla', 'Lyra', 'Macy', 'Mara', 'Maya', 'Mila', 'Mina', 'Mira', 'Myra', 'Nala', 'Naya', 'Nina', 'Noah', 'Nola', 'Noor', 'Nora', 'Nova', 'Opal', 'Raya', 'Remy', 'Reya', 'Rhea', 'Rory', 'Rosa', 'Ruby', 'Ruth', 'Ryan', 'Sara', 'Shay', 'Thea', 'Tori', 'Vada', 'Veda', 'Vera', 'Wren', 'Yara', 'Yuki', 'Yuzu', 'Zara', 'Zoey', 'Zola', 'Zora', 'Zoya', 'Zuma', 'Zuri', 'Aarya', 'Adele', 'Adley', 'Aisha', 'Alana', 'Alani', 'Aleah', 'Alena', 'Alina', 'Aliya', 'Aliya', 'Aliza', 'Allie', 'Alora', 'Amaia', 'Amani', 'Amara', 'Amari', 'Amaya', 'Amber', 'Amina', 'Amira', 'Amora', 'Anahi', 'Anais', 'Anaya', 'Angel', 'Angie', 'Anika', 'Annie', 'Ariel', 'Aspen', 'Averi', 'Avery', 'Belen', 'Bella', 'Belle', 'Bindi', 'Blair', 'Blake', 'Blink', 'Briar', 'Brynn', 'Capri', 'Carly', 'Celia', 'Chana', 'Chaya', 'Chloe', 'Clara', 'Daisy', 'Della', 'Diana', 'Dulce', 'Dylan', 'Elena', 'Elisa', 'Elise', 'Eliza', 'Ellie', 'Ellis', 'Elsie', 'Emery', 'Emory', 'Faith', 'Fiona', 'Flora', 'Freya', 'Frida', 'Gemma', 'Grace', 'Greta', 'Haley', 'Haven', 'Hazel', 'Heidi', 'Holly', 'Indie', 'Irene', 'Itzel', 'Ivory', 'Jamie', 'Jayda', 'Jemma', 'Jenna', 'Josie', 'Jovie', 'Joyce', 'Julie', 'Katie', 'Kayla', 'Kiana', 'Kylie', 'Lacey', 'Laney', 'Layla', 'Leila', 'Leona', 'Liana', 'Linda', 'Logan', 'Lolli', 'Lucia', 'Luisa', 'Lydia', 'Lyric', 'Mabel', 'Maeve', 'Malia', 'Maria', 'Marie', 'Maui*', 'Mavis', 'Mazie', 'Mercy', 'Midge', 'Miley', 'Molly', 'moxie', 'Nadia', 'Noemi', 'Nylah', 'Paige', 'Paola', 'Pearl', 'Penny', 'Piper', 'Piper', 'Poppy', 'Quinn', 'Raina', 'Raven', 'Rayne', 'Reina', 'Reyna', 'Riley', 'River', 'Rivka', 'Robin', 'Rosie', 'Rowan', 'Sadie', 'Salem', 'Sasha', 'Scout', 'Selah', 'Sloan', 'Sunny', 'Talia', 'Tatum', 'Terri', 'Tessa', 'Tiana', 'Willa', 'Zahra', 'Adalyn', 'Ailani', 'Aileen', 'Ainhoa', 'Aitana', 'Alaina', 'Alayna', 'Aleena', 'Alexia', 'Alexis', 'Alicia', 'Alison', 'Alissa', 'Amalia', 'Amanda', 'Amaris', 'Amelia', 'Amelie', 'Amiyah', 'Amoura', 'Analia', 'Andrea', 'Angela', 'Aniyah', 'Ariyah', 'Armani', 'Ashley', 'Ashlyn', 'Astrid', 'Aubrey', 'August', 'Aurora', 'Autumn', 'Avayah', 'Azalea', 'Bailey', 'Bexley', 'Bianca', 'Bonnie', 'Brooke', 'Camryn', 'Carmen', 'Carter', 'Celine', 'Chanel', 'Claire', 'Dahlia', 'Dakota', 'Daphne', 'Davina', 'Dayana', 'Denver', 'Doodle', 'Elaina', 'Eloise', 'Emelia', 'Esther', 'Fallon', 'Fatima', 'Fondue', 'Gianna', 'Gracie', 'Hadley', 'Hailey', 'Hannah', 'Harley', 'Harper', 'Hattie', 'Hayden', 'Hayley', 'Helena', 'Henley', 'Hunter', 'Iliana', 'Isabel', 'Ivanna', 'Jaycee', 'Jigsaw', 'Jimena', 'Joanna', 'Joelle', 'Jolene', 'Juliet', 'Kailey', 'Kalani', 'Kallie', 'Kamari', 'Karina', 'Kaylie', 'Kelsey', 'Kendra', 'Kenzie', 'Kimber', 'Kimora', 'Landry', 'Laurel', 'Lauren', 'Lennon', 'Leslie', 'Lilith', 'London', 'Luella', 'Maggie', 'Maisie', 'Margot', 'Marina', 'Marley', 'Martha', 'Maxine', 'Meghan', 'Melody', 'Millie', 'Miriam', 'Monica', 'Monroe', 'Morgan', 'Murphy', 'Nayeli', 'Nellie', 'Nicole', 'Noelle', "O'ahu*", 'Olivia', 'Palmer', 'Parker', 'Payton', 'Peyton', 'Phoebe', 'Puzzle', 'Rachel', 'Ramona', 'Raquel', 'Regina', 'Renata', 'Romina', 'Samara', 'Samira', 'Sawyer', 'Selena', 'Selene', 'Serena', 'Shelby', 'Shiloh', 'Sienna', 'Sierra', 'Simone', 'Skyler', 'Sophia', 'Stella', 'Summer', 'Sutton', 'Sydney', 'Sylvie', 'Taylor', 'Teagan', 'Teresa', 'Valery', 'Vienna', 'Vivian', 'Whimsy', 'Willow', 'Winnie', 'Wynter', 'Ximena', 'Yareli', 'Zainab', 'Zaylee', 'Abigail', 'Adaline', 'Addison', 'Adelina', 'Ainsley', 'Aislinn', 'Alessia', 'Alianna', 'Allison', 'Alondra', 'Araceli', 'Arianna', 'Aurelia', 'Avalynn', 'Azariah', 'Barbara', 'Bellamy', 'Berkley', 'Blakely', 'Braelyn', 'Brianna', 'Briella', 'Brinley', 'Bristol', 'Cadence', 'Cameron', 'Camille', 'Cannoli', 'Carolyn', 'Cassidy', 'Cecelia', 'Celeste', 'Chelsea', 'Colette', 'Collins', 'Corinne', 'Crystal', 'Cynthia', 'Deborah', 'Delilah', 'Destiny', 'Eleanor', 'Elliana', 'Elliott', 'Emberly', 'Emerald', 'Emerson', 'Estelle', 'Everlee', 'Frances', 'Frankie', 'Genesis', 'Georgia', 'Giselle', 'Harmony', 'Hawaii*', 'Holland', 'Jaelynn', 'Janelle', 'Jasmine', 'Jessica', 'Jocelyn', 'Johanna', 'Juliana', 'Juniper', 'Justice', 'Kailani', 'Kaisley', 'Kaitlyn', 'Kaliyah', 'Katelyn', "Kaua'i*", 'Kaylani', 'Keilani', 'Kendall', 'Kennedy', 'Kinsley', 'Lānaʻi*', 'Leilani', 'Liberty', 'Lillian', 'Lorelei', 'Loretta', 'Lucille', 'Mallory', 'Mariana', 'Marilyn', 'Marisol', 'Marlowe', 'Matilda', 'Melanie', 'Melissa', 'Miranda', 'Natalia', 'Natalie', 'Oaklynn', 'Octavia', 'Ophelia', 'Paisley', 'Paulina', 'Phoenix', 'Presley', 'Promise', 'Raelynn', 'Rebekah', 'Rosalie', 'Roselyn', 'Sabrina', 'Saoirse', 'Sariyah', 'Spumoni', 'Violeta', 'Waffles', 'Waverly', 'Whitley', 'Whitney', 'Xiomara', 'Yaretzi', 'Zaniyah', 'Zariyah', 'Zendaya', 'Adelaide', 'Adrianna', 'Angelica', 'Angelina', 'Annalise', 'Arabella', 'Beatrice', 'Brittany', 'Brooklyn', 'Calliope', 'Carolina', 'Cataleya', 'Catalina', 'Chandler', 'Cheyenne', 'Clarissa', 'Coraline', 'Daniella', 'Delancey', 'ea (air)', 'Estrella', 'Felicity', 'Florence', 'Giuliana', 'Hadassah', 'Itzayana', 'Izabella', 'Jennifer', 'Kataleya', 'Kaydence', 'Leighton', 'Madeline', 'Magnolia', 'Makenzie', 'Malarkey', 'Margaret', 'Mariposa', 'Meredith', 'Michaela', 'Michelle', "Ni'ihau*", 'oe (art)', 'Savannah', 'Scarlett', 'Serenity', 'Treasure', 'Veronica', 'Victoria', 'Virginia', 'Yamileth', 'Alexandra', 'Anastasia', 'Annabelle', 'Antonella', 'Aubrielle', 'Brynleigh', 'Cassandra', 'Catherine', 'Charlotte', 'Christina', 'Elisabeth', 'Esmeralda', 'Esperanza', 'Everleigh', 'Francesca', 'Gabriella', 'Genevieve', 'Guadalupe', 'ike (see)', 'Jellybean', 'Josephine', 'Kai (sea)', 'Katherine', 'Mackenzie', 'Madeleine', 'Magdalena', "Moloka'i*", 'Priscilla', 'Remington', 'Stephanie', 'Ae (agree)', 'Ae la (up)', 'aʻe (next)', 'ala (path)', 'Alessandra', 'anu (cool)', 'Clementine', 'Evangeline', 'iho (self)', 'Jacqueline', 'lani (sky)', 'lele (fly)', 'ola (life)', 'Persephone', 'Aina (land)', 'holo (sail)', 'ʻumi* (ten)', 'iwi (shell)', "Kaho'olawe*", 'moe (dream)', 'pela (thus)', 'puu (share)', 'wahi (tiny)', '’ēheu (wing)', 'haawi (give)', 'hana (build)', 'hihiu (wild)', 'hope* (last)', 'hula (dance)', 'ʻehā* (four)', 'ʻelua* (two)', 'ʻeono* (six)', 'iki (little)', 'ka mea (who)', 'ka ua (rain)', 'kahi (where)', 'koke (early)', 'lā (day/sun)', 'maka (sight)', 'mana (power)', 'olelo (word)', 'olioli (joy)', 'paani (play)', 'pua (flower)', '’īniha (inch)', 'alohi (shine)', 'Eleu (lively)', 'hawewe (wave)', 'hele (travel)', 'honua (earth)', 'hooho (shout)', 'hoouna (sent)', 'huakai (trip)', 'huli (search)', 'ʻeiwa* (nine)', 'ʻekahi* (one)', 'ke ahi (fire)', 'keiki (child)', 'koho *choose)', 'laila (there)', 'loli (change)', 'maanei (here)', 'maikai (fair)', 'Makani (wind)', 'mālama (care)', 'moana (ocean)', 'mua (forward)', 'nani (beauty)', 'paa (certain)', 'pane (answer)', '’aoʻao (party)', 'akaaka (laugh)', 'alakai (guide)', 'aniani (glass)', 'ao alohilohi i', 'hookeai (fast)', 'ʻelima* (five)', 'ikehu (energy)', 'ka hale (home)', 'lanakila (win)', 'leʻaleʻa (fun)', 'Malie (serene)', 'maluhia (safe)', 'maoli (nature)', 'paha (perhaps)', "'Olina (joyful)", 'akahai (gentle)', 'hauʻoli (happy)', 'hiki (possible)', 'hoomaka (begin)', 'ʻehiku* (seven)', 'ʻekolu* (three)', 'ʻewalu* (eight)', 'ikaika (strong)', 'ka noi (motion)', 'Kaipo (darling)', 'Kala (princess)', 'Keao (daylight)', 'kiʻekiʻe (high)', 'makemake (wish)', 'wahine* (woman)', 'ahiahi (evening)', 'ao (world/teach)', 'hoku (full moon)', 'hoohuoi (wonder)', 'ka hema* (south)', 'Kahula (dancing)', 'ke akau* (north)', 'Kiele (gardenia)', 'kīhāpai (garden)', 'komohana* (west)', 'Luana (pleasure)', 'makaikai (visit)', 'makaukau (ready)', 'manaolana (hope)', 'minoʻaka (smile)', 'moʻolelo (story)', 'ninau (question)', 'panee (interest)', 'Pikake (jasmine)', '’ōlelo (language)', 'Anuenue (rainbow)', 'hana hou (repeat)', 'haohao (surprise)', 'hoaaloha (friend)', 'holomua (success)', 'hoonui (multiply)', 'houluulu (gather)', 'ka hikina* (east)', 'ka naita (excite)', 'kaiapili (circle)', 'kūikawā (special)', 'manaoio (believe)', 'mokupuni (island)', 'Nohea (beautiful)', 'noonoo (consider)', 'haneri* (hundred) ', 'Kekoa (courageous)', 'maikaʻi loa (good)', 'Makamae (precious)', 'malamalama (light)', 'malihini (strange)', 'hoalauna (neighbor)', 'holoholona (animal)', 'hooholo (determine)', 'ʻiwakālua* (twenty)', 'Kaliko (flower bud)', 'Lokelani (red rose)', 'Nalani (calm skies)', 'e hoʻonui i (melody)', 'Iolana (soaring bird)', "mana'o wale (imagine)", 'ao alohilohi i (bright)', 'ka hoao ana (experience)', 'ka wiwo ole (confidence)', 'Leinani (gorgeous child)'],
	boys: ['Ace', 'Ali', 'Ari', 'Asa', 'Avi', 'Cal', 'Dax', 'Eli', 'Fox', 'Ian', 'Ira', 'Jax', 'Jay', 'Joe', 'Koa', 'Kye', 'Lee', 'Leo', 'Pez', 'Ray', 'Rex', 'Rey', 'Rio', 'Roy', 'Tru', 'Van', 'Wes', 'Zev', 'Abel', 'Adan', 'Aden', 'Alan', 'Aldo', 'Alec', 'Alex', 'Amir', 'Amos', 'Arlo', 'Aron', 'Axel', 'Bear', 'Beau', 'Beso', 'Cade', 'Cain', 'Carl', 'Case', 'Cash', 'Chai', 'Clay', 'Cody', 'Coen', 'Cole', 'Colt', 'Cruz', 'Dane', 'Dean', 'Dion', 'Drew', 'Duke', 'Eden', 'Emir', 'Enzo', 'Evan', 'Ezra', 'Finn', 'Ford', 'Gage', 'Gary', 'Hank', 'Hugh', 'Hugo', 'Ivan', 'Jace', 'Jake', 'Jase', 'Jaxx', 'Jett', 'Joel', 'Joey', 'John', 'Jose', 'Juan', 'Jude', 'Kace', 'Kian', 'King', 'Knox', 'Kobe', 'Koda', 'Lane', 'Leif', 'Leon', 'Levi', 'Liam', 'Luis', 'Luke', 'Mack', 'Mark', 'Milo', 'Nash', 'Neil', 'Niko', 'Noah', 'Nova', 'Odin', 'Omar', 'Onyx', 'Otis', 'Otto', 'Owen', 'Paul', 'Raul', 'Reed', 'Reid', 'Remy', 'Rene', 'Rhys', 'Rory', 'Ryan', 'Saul', 'Sean', 'Seth', 'Tate', 'Toby', 'Tony', 'Trey', 'Troy', 'Wade', 'Yuzu', 'Zane', 'Zayd', 'Zeke', 'Zion', 'Aarav', 'Abner', 'Abram', 'Adler', 'Ahmad', 'Ahmir', 'Aidan', 'Alden', 'Alvin', 'Amari', 'Ameer', 'Amias', 'Andre', 'Angel', 'Arian', 'Ariel', 'Aries', 'Arjun', 'Asher', 'Atlas', 'Avery', 'Axton', 'Ayaan', 'Aydin', 'Baker', 'Blake', 'Blaze', 'Blink', 'Boden', 'Bodhi', 'Bodie', 'Boone', 'Bosch', 'Bowen', 'Brady', 'Brett', 'Briar', 'Brock', 'Brody', 'Bruce', 'Bruno', 'Bryan', 'Bryce', 'Byron', 'Cairo', 'Caleb', 'Casen', 'Casey', 'Cesar', 'Chaim', 'Chase', 'Clyde', 'Cohen', 'Colby', 'Colin', 'Corey', 'Creed', 'Cyrus', 'Damir', 'Damon', 'Dante', 'David', 'Davis', 'Derek', 'Devon', 'Diego', 'Drake', 'Dylan', 'Eddie', 'Edgar', 'Edwin', 'Elias', 'Ellis', 'Emery', 'Emory', 'Enoch', 'Ethan', 'Flynn', 'Gavin', 'Grant', 'Hamza', 'Hayes', 'Heath', 'Henry', 'Idris', 'Isaac', 'Issac', 'Jacob', 'Jaden', 'Jaime', 'Jalen', 'Jamal', 'James', 'Jamie', 'Jared', 'Jason', 'Jerry', 'Jesse', 'Jimmy', 'Johan', 'Jonah', 'Jones', 'Jorge', 'Judah', 'Julio', 'Kaden', 'Keanu', 'Kenji', 'Kyrie', 'Lance', 'Lewis', 'Logan', 'Lucas', 'Lucca', 'Lupin', 'Lyric', 'Malik', 'Marco', 'Mario', 'Mason', 'Mateo', 'Maui*', 'Micah', 'Miles', 'Moshe', 'Nasir', 'Nolan', 'Omari', 'Orion', 'Pablo', 'Pedro', 'Quinn', 'Randy', 'Reece', 'Ricky', 'Ridge', 'Riggs', 'Riley', 'River', 'Robin', 'Rocco', 'Rocky', 'Roger', 'Rohan', 'Ronan', 'Rowan', 'Ryder', 'Salem', 'Samir', 'Scott', 'Seuss', 'Shane', 'Silas', 'Sonny', 'Soren', 'Swoop', 'Tadeo', 'Tatum', 'Titus', 'Tomas', 'Tyler', 'Uriah', 'Uriel', 'Vance', 'Wayne', 'Wyatt', 'Yahir', 'Zahir', 'Zakai', 'Abdiel', 'Adonis', 'Adrian', 'Alaric', 'Albert', 'Alexis', 'Alfred', 'Alonzo', 'Alvaro', 'Anders', 'Andres', 'Angelo', 'Apollo', 'Archer', 'Armani', 'Arthur', 'Arturo', 'Ashton', 'Atreus', 'August', 'Austin', 'Azrael', 'Baylor', 'Benson', 'Bishop', 'Blaine', 'Blaise', 'Boston', 'Briggs', 'Brodie', 'Brooks', 'Bryant', 'Brycen', 'Bryson', 'Caiden', 'Callan', 'Callum', 'Calvin', 'Camden', 'Canaan', 'Carlos', 'Carson', 'Carter', 'Cayden', 'Cedric', 'Chance', 'Colson', 'Colter', 'Colton', 'Connor', 'Conrad', 'Cooper', 'Corbin', 'Crosby', 'Cullen', 'Curtis', 'Dakari', 'Dakota', 'Dalton', 'Damien', 'Daniel', 'Darius', 'Darren', 'Darwin', 'Davion', 'Dawson', 'Dayton', 'Declan', 'Dennis', 'Denver', 'Dexter', 'Dillon', 'Donald', 'Doodle', 'Dougal', 'Duncan', 'Dustin', 'Easton', 'Edison', 'Edward', 'Elijah', 'Elisha', 'Emilio', 'Emmett', 'Emmitt', 'Eugene', 'Fabian', 'Felipe', 'Fisher', 'Fondue', 'Foster', 'Gerald', 'Gianni', 'Gideon', 'Graham', 'Gunnar', 'Hakeem', 'Harlan', 'Harlem', 'Harley', 'Harold', 'Harris', 'Harvey', 'Hassan', 'Hayden', 'Hector', 'Henrik', 'Holden', 'Hudson', 'Hunter', 'Huxley', 'Isaiah', 'Ishaan', 'Ismael', 'Jabari', 'Jacoby', 'Jagger', 'Jakari', 'Jamari', 'Jasper', 'Jaziel', 'Jensen', 'Jeremy', 'Jigsaw', 'Joseph', 'Joshua', 'Josiah', 'Judson', 'Julian', 'Julius', 'Justin', 'Kaiden', 'Kamari', 'Kareem', 'Kayden', 'Keaton', 'Keegan', 'Kellan', 'Kelvin', 'Khalid', 'Khalil', 'Kieran', 'Landon', 'Landry', 'Lawson', 'Layton', 'Ledger', 'Leland', 'Lennon', 'Lionel', 'London', 'Madden', 'Maddox', 'Magnus', 'Makai*', 'Manuel', 'Marcel', 'Marcus', 'Marley', 'Marlon', 'Martin', 'Mauka*', 'Maxton', 'Melvin', 'Miguel', 'Miller', 'Morgan', 'Murphy', 'Nathan', 'Nelson', "O'ahu*", 'Oliver', 'Osiris', 'Parker', 'Paxton', 'Peyton', 'Philip', 'Pierce', 'Porter', 'Puzzle', 'Quincy', 'Rafael', 'Rayden', 'Reuben', 'Rodney', 'Roland', 'Ronald', 'Ryland', 'Samson', 'Santos', 'Sawyer', 'Sergio', 'Shiloh', 'Skyler', 'Stefan', 'Sutton', 'Sydney', 'Tanner', 'Taylor', 'Thomas', 'Travis', 'Trevor', 'Tucker', 'Turner', 'Victor', 'Vihaan', 'Walker', 'Walter', 'Warren', 'Waylon', 'Westin', 'Weston', 'Wilder', 'Willie', 'Wilson', 'Xander', 'Yehuda', 'Yousef', 'Zaiden', 'Zander', 'Zayden', 'Zyaire', 'Abraham', 'Alberto', 'Ambrose', 'Anthony', 'Antonio', 'Armando', 'Atticus', 'Azariah', 'Barrett', 'Beckett', 'Beckham', 'Bellamy', 'Benicio', 'Bennett', 'Bentley', 'Bradley', 'Brandon', 'Branson', 'Braxton', 'Brayden', 'Brendan', 'Brennan', 'Bridger', 'Brixton', 'Bronson', 'Cameron', 'Caspian', 'Cassius', 'Castiel', 'Charles', 'Clayton', 'Deandre', 'Desmond', 'Dominic', 'Donovan', 'Douglas', 'Eduardo', 'Elliott', 'Emanuel', 'Emberly', 'Emerson', 'Enrique', 'Ephraim', 'Ernesto', 'Esteban', 'Everett', 'Ezekiel', 'Forrest', 'Frankie', 'Gabriel', 'Garrett', 'Genesis', 'Gregory', 'Greyson', 'Griffin', 'Griffin', 'Gustavo', 'Hawaii*', 'Hendrix', 'Houston', 'Ibrahim', 'Jackson', 'Jamison', 'Jeffrey', 'Jericho', 'Joaquin', 'Justice', "Kaua'i*", 'Kenneth', 'Killian', 'Lachlan', 'Lānaʻi*', 'Leandro', 'Leonard', 'Lincoln', 'Lochlan', 'Lorenzo', 'Luciano', 'Malachi', 'Malcolm', 'Maurice', 'Maxwell', 'Nikolai', 'Orlando', 'Phoenix', 'Preston', 'Quentin', 'Quinton', 'Raphael', 'Raymond', 'Ricardo', 'Richard', 'Roberto', 'Rodrigo', 'Russell', 'Santana', 'Santino', 'Shepard', 'Sincere', 'Solomon', 'Spencer', 'Spumoni', 'Stanley', 'Stetson', 'Timothy', 'Trenton', 'Tristan', 'Ulysses', 'Waffles', 'Wallace', 'William', 'Winston', 'Zachary', 'Abdullah', 'Alistair', 'Benjamin', 'Brantley', 'Callahan', 'Chandler', 'ea (air)', 'Emmanuel', 'Fernando', 'Finnegan', 'Franklin', 'Giovanni', 'Hamilton', 'Harrison', 'Hezekiah', 'Jeremiah', 'Jonathan', 'Kendrick', 'Kingsley', 'Kingston', 'Langston', 'Lawrence', 'Leighton', 'Malarkey', 'Marshall', 'Maverick', 'Mitchell', 'Mordecai', 'Muhammad', "Ni'ihau*", 'Nicholas', 'oe (art)', 'Santiago', 'Sterling', 'Sullivan', 'Thaddeus', 'Valentin', 'Vincenzo', 'Alejandro', 'Alexander', 'Augustine', 'Christian', 'Demetrius', 'Francisco', 'Frederick', 'Guillermo', 'ike (see)', 'Jefferson', 'Jellybean', 'Kai (sea)', "Moloka'i*", 'Nathanael', 'Princeton', 'Remington', 'Salvatore', 'Sebastian', 'Zachariah', 'Ae (agree)', 'Ae la (up)', 'aʻe (next)', 'ala (path)', 'anu (cool)', 'iho (self)', 'lani (sky)', 'lele (fly)', 'ola (life)', 'Aina (land)', 'Christopher', 'holo (sail)', 'ʻumi* (ten)', 'iwi (shell)', "Kaho'olawe*", 'kane* (man)', 'moe (dream)', 'pela (thus)', 'puu (share)', 'wahi (tiny)', '’ēheu (wing)', 'haawi (give)', 'hana (build)', 'hihiu (wild)', 'hope* (last)', 'hula (dance)', 'ʻehā* (four)', 'ʻelua* (two)', 'ʻeono* (six)', 'iki (little)', 'ka mea (who)', 'ka ua (rain)', 'kahi (where)', 'koke (early)', 'lā (day/sun)', 'maka (sight)', 'mana (power)', 'olelo (word)', 'olioli (joy)', 'paani (play)', 'pua (flower)', '’īniha (inch)', 'alohi (shine)', 'Eleu (lively)', 'hawewe (wave)', 'hele (travel)', 'honua (earth)', 'hooho (shout)', 'hoouna (sent)', 'huakai (trip)', 'huli (search)', 'ʻeiwa* (nine)', 'ʻekahi* (one)', 'Kahikū (star)', 'Kahoni (kiss)', 'ke ahi (fire)', 'keiki (child)', 'koho *choose)', 'loli (change)', 'maanei (here)', 'maikai (fair)', 'Makani (wind)', 'mālama (care)', 'moana (ocean)', 'mua (forward)', 'Noelani (dew)', 'paa (certain)', 'pane (answer)', '’aoʻao (party)', 'akaaka (laugh)', 'alakai (guide)', 'aniani (glass)', 'ao alohilohi i', 'Honi (amiable)', 'hookeai (fast)', 'ʻelima* (five)', 'ikehu (energy)', 'ka hale (home)', 'kahuna 9chief)', 'lanakila (win)', 'leʻaleʻa (fun)', 'maluhia (safe)', 'maoli (nature)', 'paha (perhaps)', "'Olina (joyful)", 'akahai (gentle)', 'akamai (clever)', 'hauʻoli (happy)', 'hiki (possible)', 'hoomaka (begin)', 'ʻehiku* (seven)', 'ʻekolu* (three)', 'ʻewalu* (eight)', 'ikaika (strong)', 'ka noi (motion)', 'Kaholo (nimble)', 'Kaipo (darling)', 'Keao (daylight)', 'kiʻekiʻe (high)', 'makemake (wish)', 'ahiahi (evening)', 'ao (world/teach)', 'hoku (full moon)', 'Holokai (sailor)', 'hoohuoi (wonder)', 'ka hema* (south)', 'Kahula (dancing)', 'ke akau* (north)', 'kīhāpai (garden)', 'komohana* (west)', 'makaikai (visit)', 'makaukau (ready)', 'manaolana (hope)', 'minoʻaka (smile)', 'moʻolelo (story)', 'ninau (question)', 'panee (interest)', '’ōlelo (language)', 'hana hou (repeat)', 'haohao (surprise)', 'hoaaloha (friend)', 'holomua (success)', 'hoonui (multiply)', 'houluulu (gather)', 'ka hikina* (east)', 'ka naita (excite)', 'kaiapili (circle)', 'Kalei (happiness)', 'Kanani (handsome)', 'kūikawā (special)', 'manaoio (believe)', 'mokupuni (island)', 'Nohea (beautiful)', 'noonoo (consider)', 'haneri* (hundred) ', 'Kekoa (courageous)', 'maikaʻi loa (good)', 'Makamae (precious)', 'malamalama (light)', 'malihini (strange)', 'Hani (move lightly)', 'hoalauna (neighbor)', 'holoholona (animal)', 'hooholo (determine)', 'ʻiwakālua* (twenty)', 'Kaliko (flower bud)', 'Kealani (clear sky)', 'e hoʻonui i (melody)', 'Kawikani (strong one)', "mana'o wale (imagine)", 'Aheahe (gentle breeze)', 'Kahikina (the arrival)', 'ao alohilohi i (bright)', "Lahahana (sun's warmth)", 'ka hoao ana (experience)', 'ka wiwo ole (confidence)', 'Kepano (crown/transliteration of Steven)']
	};
    
export function randomName(s="") {
    var nameList = (s[0] === "F") ? names.girls : (s[0] === "M") ? names.boys : names.boys.concat(names.girls);
    var n=Math.floor(Math.random() * nameList.length);
    return nameList[n];
}

export function getDate() {
  const today=new Date();
  return today.toISOString().split('T')[0];
}

export function getSex(s) {
    return s[0]==='F' ? "Female" : s[0]==='M' ? "Male" : "Undefined";
  }
 