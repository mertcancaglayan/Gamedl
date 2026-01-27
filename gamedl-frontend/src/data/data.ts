export type WORDTYPE = {
	word: string;
	contexts: string[];
	hint: string;
};

export const WORD_DATABASE: WORDTYPE[] = [
	{
		word: "DATE",
		contexts: [
			"We should go out for a romantic dinner and movie tonight.",
			"The sweet fruit from the palm tree is delicious in desserts.",
			"Please write the day, month, and year at the top of the paper.",
			"This particular artifact seems to belong to the 15th century.",
		],
		hint: "4 letters, Social / Botany / Time / History",
	},
	{
		word: "BANK",
		contexts: [
			"I need to deposit this check into my savings account.",
			"We sat by the river and watched the water flow by.",
			"The plane made a sharp turn to the left.",
			"A large pile of snow had accumulated against the door.",
		],
		hint: "4 letters, Finance / Nature / Aviation / General",
	},
	{
		word: "BAT",
		contexts: [
			"The baseball player swung hard and hit a home run.",
			"This nocturnal flying mammal uses echolocation.",
			"She blinked her eyelashes innocently at him.",
			"It is your turn to strike the ball in this inning.",
		],
		hint: "3 letters, Sports / Nature / Expression / Sports",
	},
	{
		word: "ROW",
		contexts: [
			"Please sit in the third line of seats from the front.",
			"You need to use the oars to propel the boat forward.",
			"They had a loud argument about whose turn it was to wash dishes.",
			"The spreadsheet has a problem in the fifth horizontal line.",
		],
		hint: "3 letters, Order / Sports / Conflict / Data",
	},
	{
		word: "BOW",
		contexts: [
			"He tied the ribbon into a pretty knot on the gift.",
			"The archer pulled back the string to shoot the arrow.",
			"The actors bent forward to acknowledge the applause.",
			"The front part of the ship cut through the waves.",
		],
		hint: "3 letters, Decoration / Weaponry / Gesture / Nautical",
	},
	{
		word: "TIE",
		contexts: [
			"He wore a silk accessory around his neck with his suit.",
			"Please fasten your shoelaces so you don't trip.",
			" The game ended with both teams having the same score.",
			"There is a strong connection between the two families.",
		],
		hint: "3 letters, Fashion / Action / Sports / Relationships",
	},
	{
		word: "SAW",
		contexts: [
			"I used a sharp tool to cut the wood plank in half.",
			"She looked at the beautiful sunset yesterday.",
			"An old proverb says that haste makes waste.",
			"The magician performed a trick with a large blade.",
		],
		hint: "3 letters, Tools / Perception / Literature / Entertainment",
	},
	{
		word: "FIT",
		contexts: [
			"Does this shirt match your size comfortably?",
			"She goes to the gym daily to stay in good shape.",
			"He threw a tantrum when he didn't get his way.",
			"We need to install the new part into the machine.",
		],
		hint: "3 letters, Clothing / Health / Emotion / Mechanics",
	},
	{
		word: "RING",
		contexts: [
			"She wears a diamond band on her finger.",
			"Did you hear the phone sound just now?",
			" The boxers stepped into the square arena.",
			"A circular mark was left on the table by the wet glass.",
		],
		hint: "4 letters, Jewelry / Sound / Sports / Shape",
	},
	{
		word: "ROCK",
		contexts: [
			"The climber scaled the steep stone cliff.",
			"She likes to listen to loud electric guitar music.",
			"Please helping me sway the baby to sleep.",
			"He is a solid support for his friends in tough times.",
		],
		hint: "4 letters, Geology / Music / Action / Metaphor",
	},
	{
		word: "PARK",
		contexts: [
			"Let's have a picnic on the grass under the trees.",
			"Please leave your car in the designated space.",
			"The baseball stadium is a beautiful place for a game.",
			"She decided to put her money in a safe investment for now.",
		],
		hint: "4 letters, Nature / Automotive / Sports / Finance",
	},
	{
		word: "WAVE",
		contexts: [
			"The surfer rode the crest of the ocean swell.",
			"She moved her hand back and forth to say hello.",
			"A sudden surge of nausea came over him.",
			"Her hair has a natural curl to it.",
		],
		hint: "4 letters, Nature / Gesture / Sensation / Appearance",
	},
	{
		word: "FILE",
		contexts: [
			"Please put these documents in the correct folder.",
			"She used a metal tool to smooth her fingernails.",
			"A line of soldiers marched down the road.",
			"I need to submit a formal complaint about this issue.",
		],
		hint: "4 letters, Administration / Grooming / Formation / Action",
	},
	{
		word: "NOTE",
		contexts: [
			"He wrote a short message on a sticky piece of paper.",
			"The singer hit a very high musical tone.",
			"Please pay attention to the warning signs.",
			"This is a specific denomination of paper currency.",
		],
		hint: "4 letters, Communication / Music / Awareness / Finance",
	},
	{
		word: "FACE",
		contexts: [
			"She has a beautiful smile on her front profile.",
			"We must confront the problem directly.",
			"The clock has Roman numerals on its surface.",
			"The cliff has a sheer vertical rock wall.",
		],
		hint: "4 letters, Anatomy / Action / Objects / Geology",
	},
	{
		word: "BOOK",
		contexts: [
			"I am reading a fascinating novel right now.",
			"We need to reserve a table at the restaurant.",
			"The referee decided to penalize the player.",
			"The police brought him in to process the charges.",
		],
		hint: "4 letters, Literature / Travel / Sports / Law",
	},
	{
		word: "CASE",
		contexts: [
			"The detective is investigating a mysterious crime.",
			"Please pack your clothes in this suitcase.",
			"In the event of fire, break the glass.",
			"The lawyer presented a strong argument in court.",
		],
		hint: "4 letters, Investigation / Travel / Grammar / Law",
	},
	{
		word: "FAIR",
		contexts: [
			"The judge made a just and impartial decision.",
			"We went to the carnival to ride the roller coaster.",
			"She has very light complexion and blonde hair.",
			"The weather is predicted to be pleasant and clear.",
		],
		hint: "4 letters, Justice / Entertainment / Appearance / Meteorology",
	},
	{
		word: "MINE",
		contexts: [
			"That book belongs to me, not you.",
			"They dig for coal deep underground.",
			"The soldier carefully stepped around the explosive device.",
			"Wait, I need to dig deep for that information in my memory.",
		],
		hint: "4 letters, Possession / Industry / Military / Metaphor",
	},
	{
		word: "POOL",
		contexts: [
			"Let's go for a swim to cool off.",
			"We should combine our resources to buy a gift.",
			"He played a game of billiards at the bar.",
			"A small puddle of water formed after the rain.",
		],
		hint: "4 letters, Recreation / Finance / Sports / Nature",
	},
	{
		word: "TRIP",
		contexts: [
			"We are going on a vacation to Europe next week.",
			"Be careful not to stumble over that loose cord.",
			"The circuit breaker will activate if overload occurs.",
			"It was a psychedelic experience induced by substances.",
		],
		hint: "4 letters, Travel / Action / Mechanics / Slang",
	},
	{
		word: "YARD",
		contexts: [
			"The kids are playing in the grassy area behind the house.",
			"Cloth is sold by a unit of three feet.",
			"The train is parked in the large depot.",
			"The sailors worked on the horizontal spar on the mast.",
		],
		hint: "4 letters, Domestic / Measurement / Transport / Nautical",
	},
	{
		word: "FAST",
		contexts: [
			"The cheetah is a very quick runner.",
			"He decided to abstain from food for religious reasons.",
			"The color in this fabric will not fade when washed.",
			"She fell into a deep and secure sleep.",
		],
		hint: "4 letters, Speed / Diet / Quality / State",
	},
	{
		word: "LAST",
		contexts: [
			"This is the final episode of the series.",
			"How long will the batteries endure before dying?",
			"The shoemaker used a wooden form to shape the boot.",
			"We met for coffee the previous week.",
		],
		hint: "4 letters, Sequence / Duration / Tools / Time",
	},
	{
		word: "WELL",
		contexts: [
			"He drew water from a deep hole in the ground.",
			"I hope you feel healthy and recovered soon.",
			"She performed the task very skillfully.",
			"Use this interjection when you pause to think.",
		],
		hint: "4 letters, Water / Health / Quality / Speech",
	},
	{
		word: "LEFT",
		contexts: [
			"Turn to the direction that is opposite of right.",
			"We departed from the party early.",
			"There is no cake remaining on the plate.",
			"His political views are on the liberal side.",
		],
		hint: "4 letters, Direction / Action / Quantity / Politics",
	},
	{
		word: "BACK",
		contexts: [
			"My spine hurts from lifting heavy boxes.",
			"She returned to her hometown after many years.",
			"The team needs to support their captain's decision.",
			"The house is located behind the main street.",
		],
		hint: "4 letters, Anatomy / Direction / Support / Location",
	},
	{
		word: "OVER",
		contexts: [
			"The plane flew above the clouds.",
			"The game is finished and the score is final.",
			"We discussed the matter again and again.",
			"In cricket, it consists of six legal deliveries.",
		],
		hint: "4 letters, Location / State / Repetition / Sports",
	},
	{
		word: "EVEN",
		contexts: [
			"The floor surface needs to be perfectly flat.",
			"The numbers 2, 4, and 6 belong to this category.",
			"She was angry but she got revenge in the end.",
			"Surprisingly, the child didn't cry.",
		],
		hint: "4 letters, Quality / Math / Justice / Emphasis",
	},
	{
		word: "HARD",
		contexts: [
			"This diamond is a very solid substance.",
			"The exam was very difficult to pass.",
			"He worked with great effort to finish the project.",
			"The water has high mineral content.",
		],
		hint: "4 letters, Texture / Difficulty / Intensity / Chemistry",
	},
	{
		word: "BEAR",
		contexts: [
			"A large furry mammal was spotted in the woods.",
			"He cannot tolerate the loud noise any longer.",
			"She will carry the burden of responsibility.",
			"The tree will produce fruit in the autumn.",
		],
		hint: "4 letters, Animal / Tolerance / Action / Nature",
	},
	{
		word: "MEAN",
		contexts: [
			"What does this complicated word signify?",
			"Why are you being so unkind to your sister?",
			"The average of the numbers is calculated easily.",
			"He has a reputation for being Stingy with money.",
		],
		hint: "4 letters, Definition / Behavior / Math / Finance",
	},
	{
		word: "FLAT",
		contexts: [
			"The tire has no air and needs changing.",
			"She lives in a small apartment in London.",
			"The soda lost its fizz and tastes stale.",
			"The music note was slightly lower in pitch.",
		],
		hint: "4 letters, Object / Housing / Taste / Music",
	},
	{
		word: "PLAY",
		contexts: [
			"The children like to have fun in the park.",
			"We went to the theater to see a drama.",
			"He pressed the button to start the music.",
			"There is too much looseness in the steering wheel.",
		],
		hint: "4 letters, Activity / Arts / Technology / Mechanics",
	},
	{
		word: "ROLL",
		contexts: [
			"Please toss the dice on the board.",
			"She ate a warm bread bun with dinner.",
			"The teacher called the list of names for attendance.",
			"The dog likes to turn over in the grass.",
		],
		hint: "4 letters, Gaming / Food / School / Action",
	},
	{
		word: "BILL",
		contexts: [
			"The duck has a broad, flat beak.",
			"Please ask the waiter for the receipt.",
			"Congress passed a new proposed law yesterday.",
			"He paid with a twenty dollar note.",
		],
		hint: "4 letters, Animal / Transaction / Politics / Currency",
	},
	{
		word: "MARK",
		contexts: [
			"Put a check on the paper next to the correct answer.",
			"He left a stain on the clean carpet.",
			"The runner got set on the starting line.",
			"This event will significant a turning point in history.",
		],
		hint: "4 letters, Writing / Cleanliness / Sports / Significance",
	},
	{
		word: "MIND",
		contexts: [
			"Use your brain and intellect to solve the puzzle.",
			"Do you object if I open the window?",
			"Please watch your step and be careful.",
			"He feels like he is losing his sanity sometimes.",
		],
		hint: "4 letters, Intellect / Permission / Caution / Psychology",
	},
	{
		word: "POST",
		contexts: [
			"He hammered a wooden stake into the ground.",
			"I need to mail this letter at the office.",
			"She published a new update on social media.",
			"He was assigned to a new station abroad.",
		],
		hint: "4 letters, Construction / Mail / Digital / Job",
	},
	{
		word: "SIGN",
		contexts: [
			"Please write your signature on the dotted line.",
			"Look at the road notice for the speed limit.",
			"He gave me a hand gesture to come closer.",
			"It is a bad omen for the future.",
		],
		hint: "4 letters, Legal / Traffic / Communication / Superstition",
	},
	{
		word: "SPOT",
		contexts: [
			"I see a small stain on your shirt.",
			"This is a nice place for a picnic.",
			"Can you see and identify the bird in the tree?",
			"He was in a difficult situation with no money.",
		],
		hint: "4 letters, Dirt / Location / Action / Predicament",
	},
	{
		word: "TURN",
		contexts: [
			"Please rotate the knob to the right.",
			"It is now your opportunity to play.",
			"The caterpillar will transform into a butterfly.",
			"We took a walk around the bend in the road.",
		],
		hint: "4 letters, Action / Sequence / Change / Direction",
	},
	{
		word: "CAST",
		contexts: [
			"The actors in the movie were very talented.",
			"Please throw your fishing line into the water.",
			"The doctor put a plaster mold on his broken arm.",
			"The witch put a spell on the prince.",
		],
		hint: "4 letters, Entertainment / Sports / Medical / Magic",
	},
	{
		word: "DRAW",
		contexts: [
			"Use a pencil to sketch a picture.",
			"The game ended in a tie score.",
			"He will pull a gun from his holster.",
			"Let's pick a name from the hat for the winner.",
		],
		hint: "4 letters, Art / Sports / Action / Chance",
	},
	{
		word: "DROP",
		contexts: [
			"Be careful not to let the glass fall.",
			"Just a small bead of water fell from the tap.",
			"I need to cancel this class from my schedule.",
			"The soldiers were sent via skydiving into the zone.",
		],
		hint: "4 letters, Action / Liquid / Academics / Military",
	},
	{
		word: "FALL",
		contexts: [
			"Be careful not to stumble and hit the ground.",
			"The leaves change color in the autumn season.",
			"The city was captured after a long siege.",
			"The water level will decrease when the tide goes out.",
		],
		hint: "4 letters, Action / Season / History / Nature",
	},
	{
		word: "HOLD",
		contexts: [
			"Please keep this package in your hands.",
			"The ship's cargo area is full of goods.",
			"Can you reserve this item for me until tomorrow?",
			"He used a wrestling grip to pin his opponent.",
		],
		hint: "4 letters, Action / Storage / Commerce / Sports",
	},
	{
		word: "KEEP",
		contexts: [
			"You can retain the change from the purchase.",
			"Please continue walking down this path.",
			"The castle's main tower was very fortified.",
			"I need to maintain the freshness of the vegetables.",
		],
		hint: "4 letters, Possession / Action / Architecture / Preservation",
	},
	{
		word: "CARD",
		contexts: [
			"He sent a birthday greeting in the mail.",
			"The referee showed the player a yellow warning.",
			"She paid for the groceries with plastic.",
			"Pick a suit from the deck to play the game.",
		],
		hint: "4 letters, Social / Sports / Finance / Gaming",
	},
	{
		word: "COAT",
		contexts: [
			"Put on your warm jacket before going outside.",
			"Apply a fresh layer of paint to the wall.",
			"The dog has very shiny fur.",
			"Cover the chicken in breadcrumbs before frying.",
		],
		hint: "4 letters, Clothing / Construction / Animal / Cooking",
	},
	{
		word: "FILM",
		contexts: [
			"We watched a classic movie at the cinema.",
			"A thin layer of oil covered the water surface.",
			"He needs to reload the camera with a new roll.",
			"The director wants to shoot the scene in Paris.",
		],
		hint: "4 letters, Entertainment / Substance / Photography / Action",
	},
	{
		word: "CLUB",
		contexts: [
			"He used a heavy stick to hit the ball.",
			"She is a member of the local tennis group.",
			"We went dancing at a popular night spot.",
			"Using the card suit that looks like a clover.",
		],
		hint: "4 letters, Sports / Social / Nightlife / Gaming",
	},
	{
		word: "FORM",
		contexts: [
			"Please fill out this application document.",
			"Clouds began to take shape in the sky.",
			"The athlete is in excellent physical condition.",
			"This is a particular type of poetry.",
		],
		hint: "4 letters, Admin / Appearance / Sports / Category",
	},
	{
		word: "PASS",
		contexts: [
			"You need a ticket to enter the backstage area.",
			"The quarterback threw the ball to the receiver.",
			"We drove through a narrow route in the mountains.",
			"I hope I succeed in the exam tomorrow.",
		],
		hint: "4 letters, Access / Sports / Geography / Academics",
	},
	{
		word: "STEP",
		contexts: [
			"Please watch your foot placement on the stairs.",
			"He took a measure to solve the problem.",
			"This is the first stage in the process.",
			"She did a complicated dance move.",
		],
		hint: "4 letters, Action / Solution / Sequence / Dance",
	},
	{
		word: "HEAD",
		contexts: [
			"He wore a hat on the top part of his body.",
			"She is the leader of the department.",
			"The river begins at this source.",
			"Let's go towards the exit.",
		],
		hint: "4 letters, Anatomy / Management / Geography / Direction",
	},
	{
		word: "HAND",
		contexts: [
			"She waved her fingers to say goodbye.",
			"Please give me a help with this heavy box.",
			"The clock points to twelve.",
			"He played a good set of cards.",
		],
		hint: "4 letters, Anatomy / Assistance / Time / Gaming",
	},
	{
		word: "FOOT",
		contexts: [
			"He put his shoe on his lower limb.",
			"The ruler is twelve inches long.",
			"They met at the bottom of the mountain.",
			"He had to pay the bill for the dinner.",
		],
		hint: "4 letters, Anatomy / Measurement / Geography / Idiom",
	},
	{
		word: "ARM",
		contexts: [
			"He flexed his bicep muscle.",
			"The country began to equip itself with weapons.",
			"This is a branch of the government.",
			"The sofa has a comfortable rest for your elbow.",
		],
		hint: "3 letters, Anatomy / Military / Organization / Furniture",
	},
	{
		word: "LEAD",
		contexts: [
			"The pencil contains a core of graphite.",
			"He will guide the team to victory.",
			"The detective followed a promising clue.",
			"He has the first position in the race.",
		],
		hint: "4 letters, Material / Leadership / Investigation / Sports",
	},
	{
		word: "IRON",
		contexts: [
			"This metal is very strong and magnetic.",
			"Please smooth the wrinkles from my shirt.",
			"She has a strong will and determination.",
			"The golfer used a specific club for the shot.",
		],
		hint: "4 letters, Metal / Chores / Character / Sports",
	},
	{
		word: "GOLD",
		contexts: [
			"She wore a necklace made of precious yellow metal.",
			"The sunset painted the sky in a rich color.",
			"He won the first place medal.",
			"She has a heart of kindness.",
		],
		hint: "4 letters, Jewelry / Color / Sports / Metaphor",
	},
	{
		word: "WOOD",
		contexts: [
			"The table is made of oak timber.",
			"He hit the golf ball with a driver.",
			"We went for a walk in the small forest.",
			"The fire needs more fuel to burn.",
		],
		hint: "4 letters, Material / Sports / Nature / Energy",
	},
	{
		word: "PAPER",
		contexts: [
			"He wrote a letter on a stationary sheet.",
			"I read the daily news in the morning.",
			"The student submitted a term essay.",
			"We need to cover the wall with decoration.",
		],
		hint: "5 letters, Stationery / Media / Academics / Decor",
	},
	{
		word: "GLASS",
		contexts: [
			"The window is made of transparent material.",
			"I would like a drink of water.",
			"Careful, the mirror might break.",
			"He needs spectacles to see clearly.",
		],
		hint: "5 letters, Material / Container / Object / Vision",
	},
	{
		word: "SPRING",
		contexts: [
			"Flowers bloom in this warm season.",
			"The metal coil bounced back.",
			"Water flowed from a natural underground source.",
			"The cat decided to leap onto the table.",
		],
		hint: "6 letters, Season / Mechanics / Nature / Action",
	},
	{
		word: "BLOCK",
		contexts: [
			"The child played with a wooden toy cube.",
			"He lives one street over from here.",
			"Please prevent the ball from entering the net.",
			"The writer suffered from a lack of ideas.",
		],
		hint: "5 letters, Toy / Location / Sports / Creativity",
	},
	{
		word: "BOARD",
		contexts: [
			"Write the answer on the classroom surface.",
			"The committee of directors met today.",
			"We need to get on the plane now.",
			"He pays for his room and meals.",
		],
		hint: "5 letters, Education / Management / Travel / Living",
	},
	{
		word: "TABLE",
		contexts: [
			"We ate dinner at the kitchen furniture.",
			"The data is organized in a grid format.",
			"Let's postpone the discussion for now.",
			"The periodic chart lists all elements.",
		],
		hint: "5 letters, Furniture / Data / Parliament / Science",
	},
	{
		word: "BED",
		contexts: [
			"I am tired and want to sleep on the mattress.",
			"The river flows over the rocky bottom.",
			"She planted roses in the garden plot.",
			"He lay on a layer of nails.",
		],
		hint: "3 letters, Furniture / Nature / Gardening / Object",
	},
	{
		word: "SHEET",
		contexts: [
			"Put a clean linen cover on the mattress.",
			"Take a fresh piece of paper.",
			"A thin layer of ice covered the road.",
			"The rain came down in a solid wall.",
		],
		hint: "5 letters, Bedding / Stationery / Weather / Shape",
	},
	{
		word: "PLATE",
		contexts: [
			"Serve the food on a ceramic dish.",
			"The car has a customized license tag.",
			"The earth's crust is made of tectonic sections.",
			"The knight wore armor made of metal.",
		],
		hint: "5 letters, Dining / Automotive / Geology / History",
	},
	{
		word: "DISH",
		contexts: [
			"This casserole is a delicious meal.",
			"Please wash the dirty plate.",
			"The satellite receiver is on the roof.",
			"She likes to gossip about celebrities.",
		],
		hint: "4 letters, Food / Kitchen / Technology / Slang",
	},
	{
		word: "SPACE",
		contexts: [
			"The astronauts traveled to the moon.",
			"Please leave a blank gap between words.",
			"There is enough room for everyone to sit.",
			"He stared blankly into the distance.",
		],
		hint: "5 letters, Astronomy / Writing / Volume / State",
	},
	{
		word: "LINE",
		contexts: [
			"Wait in the queue for your turn.",
			"Draw a straight mark with a ruler.",
			"The actor forgot his words on stage.",
			"He fished with a rod and string.",
		],
		hint: "4 letters, Social / Geometry / Theater / Sports",
	},
	{
		word: "POINT",
		contexts: [
			"The pencil has a very sharp tip.",
			"What is the main idea of your argument?",
			"Please gesture with your finger towards the door.",
			"We scored a run in the game.",
		],
		hint: "5 letters, Object / Rhetoric / Action / Sports",
	},
	{
		word: "SIDE",
		contexts: [
			"He has a pain in his left flank.",
			"Which team are you supporting?",
			"Please serve the sauce as an extra dish.",
			"This shape has four edges.",
		],
		hint: "4 letters, Anatomy / Allegiance / Food / Geometry",
	},
	{
		word: "WAY",
		contexts: [
			"Which path should we take to the city?",
			"I like the method you used to solve this.",
			"Please move aside to make room.",
			"He has a peculiar manner of speaking.",
		],
		hint: "3 letters, Direction / Method / Space / Behavior",
	},
	{
		word: "PART",
		contexts: [
			"He played a role in the movie.",
			"Please separate your hair on the left.",
			"This is just a fraction of the whole story.",
			"Currently, the two friends must say goodbye.",
		],
		hint: "4 letters, Theater / Groming / Math / Action",
	},
	{
		word: "PLACE",
		contexts: [
			"This is a beautiful location for a house.",
			"He finished in second rank in the race.",
			"Please put the book on the shelf.",
			"I need to recognize that face from somewhere.",
		],
		hint: "5 letters, Geography / Sports / Action / Memory",
	},
	{
		word: "WORK",
		contexts: [
			"He went to his job at the office.",
			"This is a great piece of art.",
			"The machine functions properly.",
			"He needs to exercise to get fit.",
		],
		hint: "4 letters, Occupation / Art / Mechanics / Fitness",
	},
	{
		word: "REST",
		contexts: [
			"You should relax and sleep for a while.",
			"The others will arrive later.",
			"The musician paused for a beat.",
			"Place the rifle on the support.",
		],
		hint: "4 letters, Health / Quantity / Music / Object",
	},
	{
		word: "CHANGE",
		contexts: [
			"Here is your coins back from the purchase.",
			"We need to alter our plans.",
			"He put on fresh clothes for dinner.",
			"The seasons transition from summer to fall.",
		],
		hint: "6 letters, Finance / Action / Clothing / Nature",
	},
	{
		word: "LIGHT",
		contexts: [
			"The sun provides brightness to the earth.",
			"This feather has very little weight.",
			"Please ignite the candle.",
			"The color is a pale shade of blue.",
		],
		hint: "5 letters, Physics / Measurement / Action / Color",
	},
	{
		word: "WATCH",
		contexts: [
			"He wore a timekeeper on his wrist.",
			"We like to view movies on weekends.",
			"Please guard the bag while I'm away.",
			"Be careful for ice on the road.",
		],
		hint: "5 letters, Accessory / Activity / Security / Caution",
	},
	{
		word: "STORE",
		contexts: [
			"We went to the shop to buy milk.",
			"Squirrels keep nuts for the winter.",
			"The computer memory can save data.",
			"He set great value by her opinion.",
		],
		hint: "5 letters, Commerce / Nature / Computing / Idiom",
	},
	{
		word: "TRACK",
		contexts: [
			"The train runs on the rail.",
			"The runners raced around the course.",
			"We followed the animal footprints.",
			"Listen to the third song on the album.",
		],
		hint: "5 letters, Transport / Sports / Hunting / Music",
	},
	{
		word: "RECORD",
		contexts: [
			"He set a new world best time.",
			"They keep a written file of all transactions.",
			"Please tape the TV show for me.",
			"She played a vinyl disc on the turntable.",
		],
		hint: "6 letters, Sports / Admin / Technology / Music",
	},
	{
		word: "ORDER",
		contexts: [
			"The judge called for calm in the court.",
			"Please arrange the files alphabetically.",
			"I would like to request a pizza.",
			"The monks belong to a religious group.",
		],
		hint: "5 letters, Law / Organization / Dining / Religion",
	},
	{
		word: "LEVEL",
		contexts: [
			"Ensure the shelf is perfectly horizontal.",
			"He reached the final stage of the game.",
			"The building collapsed to the ground.",
			"Please be honest with me.",
		],
		hint: "5 letters, Construction / Gaming / Destruction / Behavior",
	},
	{
		word: "PLANT",
		contexts: [
			"She watered the flower in the pot.",
			"They built a new manufacturing factory.",
			"The spy was placed to gather information.",
			"He decided to place his feet editing firmly.",
		],
		hint: "5 letters, Nature / Industry / Espionage / Action",
	},
	{
		word: "STAR",
		contexts: [
			"The sun is a burning ball of gas.",
			"She is the lead actor in the movie.",
			"He drew a five-pointed shape.",
			"This restaurant has a Michelin rating.",
		],
		hint: "4 letters, Astronomy / Entertainment / Geometry / Rating",
	},
	{
		word: "COLD",
		contexts: [
			"The temperature is widely freezing today.",
			"He has a runny nose and a viral infection.",
			"Her manner was very distant and unfriendly.",
			"He was knocked out unfelt in the ring.",
		],
		hint: "4 letters, Weather / Health / Emotion / State",
	},
	{
		word: "COOL",
		contexts: [
			"The breeze felt refreshing on a hot day.",
			"He remained calm under pressure.",
			"That is a very stylish jacket.",
			"We are just good friends, nothing more.",
		],
		hint: "4 letters, Weather / Emotion / Fashion / Slang",
	},
	{
		word: "WARM",
		contexts: [
			"The soup is hot enough to eat.",
			"She gave us a friendly reception.",
			"You need to exercise before the game.",
			"The colors red and orange are in this category.",
		],
		hint: "4 letters, Temperature / Emotion / Sports / Art",
	},
	{
		word: "HOT",
		contexts: [
			"The stove burner is very dangerous.",
			"This curry is very spicy.",
			"That is a popular topic right now.",
			"The stolen goods were difficult to sell.",
		],
		hint: "3 letters, Temperature / Taste / Trend / Crime",
	},
	{
		word: "DRY",
		contexts: [
			"The desert is a very arid place.",
			"Use a towel to wipe the dishes.",
			"He has a very sarcastic sense of humor.",
			"The alcohol prohibition era was waterless.",
		],
		hint: "3 letters, Climate / Chores / Personality / History",
	},
	{
		word: "WET",
		contexts: [
			"The rain made the ground soaked.",
			"The paint is not dry yet.",
			"The baby needs a fresh diaper.",
			"He is a weak and spineless person.",
		],
		hint: "3 letters, Weather / State / Parenting / Slang",
	},
	{
		word: "DUST",
		contexts: [
			"A layer of fine powder covered the furniture.",
			"Please clean the shelves.",
			"The car kicked up a cloud of dirt.",
			"Sprinkle sugar on the cake.",
		],
		hint: "4 letters, Dirt / Cleaning / Nature / Cooking",
	},
	{
		word: "TIP",
		contexts: [
			"Be careful with the sharp point of the knife.",
			"He gave the waiter a small gratuity.",
			"Here is a piece of helpful advice.",
			"The boat might overturn in the storm.",
		],
		hint: "3 letters, Object / Finance / Knowledge / Action",
	},
	{
		word: "TOP",
		contexts: [
			"The climbers reached the summit of the mountain.",
			"She wore a red shirt with jeans.",
			"The child spun the wooden toy on the floor.",
			"He is the best student in the class.",
		],
		hint: "3 letters, Geography / Clothing / Toy / Rank",
	},
	{
		word: "KEY",
		contexts: [
			"Use this metal object to open the door.",
			"Understanding this concept is crucial to success.",
			"The song is written in C major.",
			"Look at the map legend to understand the symbols.",
		],
		hint: "3 letters, Tool / Importance / Music / Guidance",
	},
	{
		word: "BAND",
		contexts: [
			"The rock group played a concert last night.",
			"She wore a rubber ring on her wrist.",
			"A stripe of color ran across the flag.",
			"The radio operates on a specific frequency.",
		],
		hint: "4 letters, Music / Jewelry / Pattern / Physics",
	},
	{
		word: "BASE",
		contexts: [
			"The soldiers returned to the military camp.",
			"The runner was safe at first plate.",
			"The statue stands on a marble pedestal.",
			"His actions were motivated by low instincts.",
		],
		hint: "4 letters, Military / Sports / Architecture / Morality",
	},
	{
		word: "BALL",
		contexts: [
			"The princess danced at the royal gala.",
			"He threw the sphere to his dog.",
			"She curled up into a fetal position.",
			"The pitcher threw a fourth bad pitch.",
		],
		hint: "4 letters, Social / Toy / Shape / Sports",
	},
	{
		word: "GAME",
		contexts: [
			"We played a fun board activity.",
			"They went on a safari to see wild animals.",
			"He is willing and ready to try anything.",
			"The politician played a political strategy.",
		],
		hint: "4 letters, Recreation / Hunting / Attitude / Metaphor",
	},
	{
		word: "STONE",
		contexts: [
			"He skipped a small rock across the water.",
			"The old castle is built of grey masonry.",
			"He weighs fourteen units of fourteen pounds.",
			"Watch out for the hard pit in the peach.",
		],
		hint: "5 letters, Nature / material / Measurement / Fruit",
	},
	{
		word: "SOIL",
		contexts: [
			"The gardener planted seeds in the dark earth.",
			"Do not dirt the clean carpet with your shoes.",
			"He returned to his native country.",
			"Corruption can taint the reputation of the company.",
		],
		hint: "4 letters, Agriculture / Cleanliness / Nation / Metaphor",
	},
	{
		word: "LAND",
		contexts: [
			"The plane is about to arrive on the runway.",
			"He owns a large plot of property.",
			"I hope I can catch a good job soon.",
			"The fish was too big to bring into the boat.",
		],
		hint: "4 letters, Aviation / Real Estate / Success / Fishing",
	},
	{
		word: "AREA",
		contexts: [
			"This is a restricted zone for authorized personnel.",
			"Calculate the length times width of the rectangle.",
			"She is an expert in the field of biology.",
			"We searched the entire vicinity for the lost dog.",
		],
		hint: "4 letters, Location / Math / Academics / Space",
	},
	{
		word: "ZONE",
		contexts: [
			"He was in a deep state of concentration.",
			"Cars are not allowed in the pedestrian area.",
			"The time region changes when you travel west.",
			"The defense uses a specific coverage strategy.",
		],
		hint: "4 letters, Psychology / Traffic / Geography / Sports",
	},
	{
		word: "WORD",
		contexts: [
			"I give you my promise that I will be there.",
			"She received news of her brother's arrival.",
			"Spell the term correctly on the paper.",
			"Please can I have a brief conversation with you.",
		],
		hint: "4 letters, Assurance / Communication / Language / Interaction",
	},
	{
		word: "TEXT",
		contexts: [
			"Please read the written passage carefully.",
			"Send me a message on my phone later.",
			"Get out your history book for class.",
			"The sermon was based on a biblical verse.",
		],
		hint: "4 letters, Reading / Digital / Education / Religion",
	},
	{
		word: "PAGE",
		contexts: [
			"Turn the sheet of the book to continue reading.",
			"The hotel announcement summoned the guest.",
			"The young boy served the knight faithfully.",
			"The web site took a long time to load.",
		],
		hint: "4 letters, Literature / Communication / History / Technology",
	},
	{
		word: "VIEW",
		contexts: [
			"The room has a beautiful outlook of the ocean.",
			"What is your opinion on this political issue?",
			"We will inspect the property tomorrow.",
			"The object is hidden from sight.",
		],
		hint: "4 letters, Scenery / Belief / Action / Vision",
	},
	{
		word: "SHOW",
		contexts: [
			"We went to see a musical performance.",
			"Please display your ticket at the door.",
			"He likes to boast off his new car.",
			"The evidence will prove his guilt.",
		],
		hint: "4 letters, Entertainment / Action / Behavior / Logic",
	},
	{
		word: "SEAT",
		contexts: [
			"Please take a chair in the waiting room.",
			"The government headquarters is in the capital.",
			"He won a place in the parliament election.",
			"The trousers are tight in the rear area.",
		],
		hint: "4 letters, Furniture / Location / Politics / Clothing",
	},
	{
		word: "HOST",
		contexts: [
			"The party giver greeted us at the door.",
			"A large number of angels appeared in the sky.",
			"The organism carries a parasite.",
			"The computer serves the website to users.",
		],
		hint: "4 letters, Social / Quantity / Biology / Technology",
	},
	{
		word: "MAIL",
		contexts: [
			"The knight wore armor made of metal rings.",
			"I sent a letter to my grandmother.",
			"The courier delivered the package today.",
			"Check your inbox for new messages.",
		],
		hint: "4 letters, History / Communication / Delivery / Digital",
	},
	{
		word: "SHIP",
		contexts: [
			"The large vessel sailed across the ocean.",
			"We need to send these goods to the customer.",
			"The fans want the two characters to be a couple.",
			"He will go to the naval base soon.",
		],
		hint: "4 letters, Nautical / Logistics / Fandom / Military",
	},
	{
		word: "DECK",
		contexts: [
			"We sat on the wooden patio in the backyard.",
			"Shuffle the cards before dealing.",
			"Look out, he might punch you!",
			"The sailors swabbed the floor of the boat.",
		],
		hint: "4 letters, Architecture / Gaming / Violence / Nautical",
	},
	{
		word: "LOAD",
		contexts: [
			"The truck is carrying a heavy cargo.",
			"Please insert the ammo into the weapon.",
			"He has a lot of worry on his mind.",
			"The sheer volume of work is overwhelming.",
		],
		hint: "4 letters, Transport / Action / Emotion / Quantity",
	},
	{
		word: "PUMP",
		contexts: [
			"She wore a high-heeled shoe to the party.",
			"The heart beats to circulate blood.",
			"Use the handle to inflate the tire.",
			"The police tried to ask him for information.",
		],
		hint: "4 letters, Fashion / Anatomy / Mechanics / Investigation",
	},
	{
		word: "CURRENT",
		contexts: [
			"The river has a very strong flow.",
			"Turn off the electric supply before repairing.",
			"Who is the present president of the company?",
			"Keep me updated with the news.",
		],
		hint: "7 letters, Nature / Physics / Time / Information",
	},
	{
		word: "TIME",
		contexts: [
			"Look at the clock to see the hour.",
			"We had a wonderful experience at the park.",
			"Do you remember the occasion we met?",
			"The musician needs to keep the rhythm.",
		],
		hint: "4 letters, Measurement / Memory / Event / Music",
	},
	{
		word: "MATCH",
		contexts: [
			"Use a stick to start the fire.",
			"The two colors correspond perfectly.",
			"We watched the football game on TV.",
			"They are a perfect couple for marriage.",
		],
		hint: "5 letters, Tool / Aesthetics / Sports / Relationships",
	},
	{
		word: "SECOND",
		contexts: [
			"Wait just a short moment.",
			"He finished after the winner.",
			"I will support your motion in the meeting.",
			"This is a lower quality merchandise.",
		],
		hint: "6 letters, Time / Rank / Politics / Commerce",
	},
	{
		word: "ROUND",
		contexts: [
			"The earth is a sphere shape.",
			"He fired a single bullet from the gun.",
			"Let's buy a serving of drinks for the table.",
			"The boxers started the first period of the fight.",
		],
		hint: "5 letters, Geometry / Weaponry / Social / Sports",
	},
	{
		word: "SQUARE",
		contexts: [
			"The shape has four equal sides.",
			"Meet me at the town plaza.",
			"He is a very boring and old-fashioned person.",
			"We need to settle the debt to be even.",
		],
		hint: "6 letters, Geometry / Location / Personality / Finance",
	},
	{
		word: "ANGLE",
		contexts: [
			"The triangle has three corners.",
			"Try to photograph it from a different perspective.",
			"She is trying to fish for a compliment.",
			"The story has a unique slant to it.",
		],
		hint: "5 letters, Geometry / Photography / Metaphor / Journalism",
	},
	{
		word: "EDGE",
		contexts: [
			"Don't stand too close to the cliff rim.",
			"He has a slight advantage over his opponent.",
			"He moved slowly across the room.",
			"Her voice had a sharp tone of anger.",
		],
		hint: "4 letters, Location / Competition / Action / Emotion",
	},
	{
		word: "FRONT",
		contexts: [
			"Please sit in the forward part of the bus.",
			"A cold weather system is moving in.",
			"The business is just a cover for illegal activity.",
			"He put on a brave facade despite the pain.",
		],
		hint: "5 letters, Location / Meteorology / Crime / Behavior",
	},
	{
		word: "REAR",
		contexts: [
			"The back entrance is locked.",
			"She wants to raise her children in the country.",
			"The horse stood up on its hind legs.",
			"Check the view in the mirror behind you.",
		],
		hint: "4 letters, Location / Parenting / Animal / Automotive",
	},
	{
		word: "EAR",
		contexts: [
			"She tucked her hair behind her hearing organ.",
			"He has a good ability for music.",
			"Shuck the corn cob before cooking.",
			"Please lend me your attention for a moment.",
		],
		hint: "3 letters, Anatomy / Talent / Food / Metaphor",
	},
	{
		word: "MOUTH",
		contexts: [
			"Open your lips so the dentist can see.",
			" The river flows into the sea at the delta.",
			"Don't give me any sass or back talk.",
			"The cave entrance was dark and scary.",
		],
		hint: "5 letters, Anatomy / Geography / Behavior / Geology",
	},
	{
		word: "BEAT",
		contexts: [
			"The heart works to pump blood.",
			"He managed to defeat his opponent.",
			"I am completely exhausted after work.",
			"The drummer kept a steady rhythm.",
		],
		hint: "4 letters, Anatomy / Competition / State / Music",
	},
	{
		word: "CELL",
		contexts: [
			"The prisoner was locked in a small room.",
			"The basic unit of life is microscopic.",
			"I need to charge my mobile phone.",
			"The spreadsheet block contains a number.",
		],
		hint: "4 letters, Law / Biology / Technology / Data",
	},
	{
		word: "BONE",
		contexts: [
			"The dog buried the skeleton part.",
			"I need to study hard for the exam.",
			"We need to remove the fish spines.",
			"This is the basic structure of the plan.",
		],
		hint: "4 letters, Anatomy / Slang / Cooking / Metaphor",
	},
	{
		word: "SKIN",
		contexts: [
			"The sun burned his outer layer.",
			"Please peel the apple before eating.",
			"The kayak frame is covered with a waterproof hull.",
			"He escaped by the barest margin.",
		],
		hint: "4 letters, Anatomy / Food / Nautical / Idiom",
	},
	{
		word: "SAFE",
		contexts: [
			"Put your money in the locked vault.",
			"The runner reached the base without being tagged.",
			"It is better to be cautious than sorry.",
			"The children are secure in their beds.",
		],
		hint: "4 letters, Security / Sports / Behavior / State",
	},
	{
		word: "NAIL",
		contexts: [
			"She painted her finger tip red.",
			"Hammer the metal spike into the wood.",
			"The police managed to catch the criminal.",
			"He performed the routine perfectly.",
		],
		hint: "4 letters, Anatomy / Construction / Law / Success",
	},
	{
		word: "PALM",
		contexts: [
			"He held the coin in his hand.",
			"The coconut grows on a tall tree.",
			"He tried to conceal the card in a magic trick.",
			"The city is full of tropical plants.",
		],
		hint: "4 letters, Anatomy / Botany / Action / Environment",
	},
	{
		word: "SOLE",
		contexts: [
			"There was a hole in the bottom of his shoe.",
			"He was the only survivor of the crash.",
			"We ate a delicious flatfish for dinner.",
			"She hurt the underside of her foot.",
		],
		hint: "4 letters, Clothing / Quantity / Food / Anatomy",
	},
	{
		word: "CHEST",
		contexts: [
			"He felt a pain in his upper torso.",
			"The pirate buried the treasure box.",
			"She stored her blankets in the cedar trunk.",
			"He got something off his conscience.",
		],
		hint: "5 letters, Anatomy / Pirates / Furniture / Emotion",
	},
	{
		word: "TRUNK",
		contexts: [
			"The elephant used its long nose to drink.",
			"Put the luggage in the back of the car.",
			"The tree has a thick wooden stem.",
			"She packed her clothes in a large travel box.",
		],
		hint: "5 letters, Animal / Automotive / Botany / Travel",
	},
	{
		word: "BARK",
		contexts: [
			"The dog began to make a loud noise.",
			"The tree skin was rough and brown.",
			"She gave a sharp command to the troops.",
			"He bumped his shin against the log.",
		],
		hint: "4 letters, Sound / Botany / Speech / Injury",
	},
	{
		word: "LEAF",
		contexts: [
			"The green foliage turned brown in autumn.",
			"Please turn the page of the book.",
			"We need to extend the table with an extra panel.",
			"He decided to turn over a new start.",
		],
		hint: "4 letters, Nature / Book / Furniture / Metaphor",
	},
	{
		word: "ROOT",
		contexts: [
			"The plant drinks water from the soil.",
			"We will cheer for the home team.",
			"Money is the origin of all evil.",
			"Calculate the square source of the number.",
		],
		hint: "4 letters, Botany / Sports / Metaphor / Math",
	},
	{
		word: "STEM",
		contexts: [
			"The flower stands on a long green stalk.",
			"We must stop the flow of blood.",
			"Her problems originate from her childhood.",
			"This is the main part of the word.",
		],
		hint: "4 letters, Botany / Medical / Cause / Grammar",
	},
	{
		word: "SEED",
		contexts: [
			"Plant the kernel in the ground.",
			"He is the top ranked player in the tournament.",
			"He vowed to spread his offspring.",
			"This is the beginning of a great idea.",
		],
		hint: "4 letters, Botany / Sports / Genealogy / Metaphor",
	},
	{
		word: "BUSH",
		contexts: [
			"The bird hid in the thick shrub.",
			"The president gave a speech from the rose garden.",
			"Stop trying to beat around the point.",
			"His hair was a wild, curly thicket.",
		],
		hint: "4 letters, Botany / Politics / Idiom / Appearance",
	},
	{
		word: "RUN",
		contexts: [
			"I need to sprint to catch the bus.",
			"She knows how to manage a successful business.",
			"There is a snag in my nylon stockings.",
			"The river flows into the sea.",
		],
		hint: "3 letters, Action / Business / Clothing / Nature",
	},
	{
		word: "FLY",
		contexts: [
			"There is a buzzing insect in the room.",
			"We will travel by air to Paris.",
			"Please zip up your trousers.",
			"He looks very stylish and cool today.",
		],
		hint: "3 letters, Insect / Travel / Clothing / Slang",
	},
	{
		word: "SINK",
		contexts: [
			"Put the dirty dishes in the basin.",
			"The heavy stone began to submerge in the water.",
			"The sun will go down below the horizon soon.",
			"He felt his heart drop with disappointment.",
		],
		hint: "4 letters, Kitchen / Physics / Action / Emotion",
	},
	{
		word: "FLOAT",
		contexts: [
			"The wood will stay on the water surface.",
			"I would like a root beer ice cream drink.",
			"We need a reserve of petty cash.",
			"The parade featured a colourful vehicle.",
		],
		hint: "5 letters, Physics / Food / Finance / Celebration",
	},
	{
		word: "RISE",
		contexts: [
			"Please stand up when the judge enters.",
			"We expect a salary increase this year.",
			"The people began to rebel against the king.",
			"The hill has a gentle upward slope.",
		],
		hint: "4 letters, Action / Finance / Politics / Geography",
	},
	{
		word: "LIFT",
		contexts: [
			"Take the elevator to the tenth floor.",
			"Can you pick up this heavy box?",
			"He tried to steal a candy bar.",
			"She gave me a ride to the station.",
		],
		hint: "4 letters, Mechanics / Action / Crime / Travel",
	},
	{
		word: "PICK",
		contexts: [
			"Please choose your favorite color.",
			"Use an ice tool to break the ice.",
			"He strummed the guitar with a plectrum.",
			"It is time to harvest the apples.",
		],
		hint: "4 letters, Choice / Tool / Music / Agriculture",
	},
	{
		word: "PACK",
		contexts: [
			"A group of wolves hunted in winter.",
			"Please fill your suitcase for the trip.",
			"He bought a deck of playing cards.",
			"She carried a heavy load on her back.",
		],
		hint: "4 letters, Animal / Travel / Gaming / Action",
	},
	{
		word: "SACK",
		contexts: [
			"He carried the potatoes in a large bag.",
			"The boss decided to fire him.",
			"The quarterback was tackled behind the line.",
			"He decided to hit the bed early.",
		],
		hint: "4 letters, Container / Job / Sports / Slang",
	},
	{
		word: "BOX",
		contexts: [
			"Put the toys in the cardboard container.",
			"The two fighters sparred in the ring.",
			"Note the shrubs used for the hedge.",
			"Turn on the television to watch the news.",
		],
		hint: "3 letters, Container / Sports / Botany / Electronics",
	},
	{
		word: "CAN",
		contexts: [
			"Open the metal tin of soup.",
			"She has the ability to sing well.",
			"He was thrown in prison for the night.",
			"May I use the toilet please?",
		],
		hint: "3 letters, Food / Verb / Slang / Slang",
	},
	{
		word: "POT",
		contexts: [
			"Cook the stew in a large metal vessel.",
			"Plant the flower in a clay container.",
			"The winner took the entire poker prize.",
			"The kettle called the black utensil black.",
		],
		hint: "3 letters, Kitchen / Gardening / Gambling / Idiom",
	},
	{
		word: "PAN",
		contexts: [
			"Fry the eggs in a skillet.",
			"The critics decided to harshy criticize the movie.",
			"Move the camera slowly across the scene.",
			"The mythological god played his pipes.",
		],
		hint: "3 letters, Kitchen / Review / Photography / Mythology",
	},
	{
		word: "MUG",
		contexts: [
			"Drink your coffee from a large cup.",
			"The robber tried to steal from him in the alley.",
			"He made a funny face for the camera.",
			"Don't be such a gullible fool.",
		],
		hint: "3 letters, Drinkware / Crime / Expression / Insult",
	},
	{
		word: "BOWL",
		contexts: [
			"Eat your cereal from a deep dish.",
			"Let's go play a game with ten pins.",
			"The football game was played in a large stadium.",
			"He filled his pipe with tobacco.",
		],
		hint: "4 letters, Dining / Sports / Architecture / Smoking",
	},
	{
		word: "FORK",
		contexts: [
			"Eat your dinner with a pronged utensil.",
			"Take the right turn at the split in the road.",
			"The chess tactic attacked two pieces at once.",
			"You have to pay over the money now.",
		],
		hint: "4 letters, Dining / Directions / Gaming / Slang",
	},
	{
		word: "SPOON",
		contexts: [
			"Stir your tea with the silver utensil.",
			"The couple lay in bed cuddling.",
			"He used a wood club for the golf shot.",
			" The fish bit the shiny metal lure.",
		],
		hint: "5 letters, Dining / Affection / Sports / Fishing",
	},
	{
		word: "KNIFE",
		contexts: [
			"Cut the steak with a sharp blade.",
			"The surgeon asked for a scalpel.",
			"His betrayal felt like a stab in the back.",
			"The ship's bow cut through the water like butter.",
		],
		hint: "5 letters, Cutlery / Medical / Metaphor / Nautical",
	},
	{
		word: "CUT",
		contexts: [
			"Use scissors to snip the paper.",
			"The director said to stop filming.",
			"He wants his share of the profits.",
			"She decided to ignore him at the party.",
		],
		hint: "3 letters, Action / Film / Finance / Social",
	},
	{
		word: "CHOP",
		contexts: [
			"Use an axe to split the wood.",
			"The dog licked his jaw hungrily.",
			"Buy a pork loin piece for dinner.",
			"He delivered a karate strike.",
		],
		hint: "4 letters, Action / Anatomy / Food / Sports",
	},
	{
		word: "CORE",
		contexts: [
			"This is the central part of the issue.",
			"Exercise to strengthen your abdominal muscles.",
			"Remove the seeds from the apple center.",
			"The computer has a fast processor unit.",
		],
		hint: "4 letters, Abstract / Anatomy / Fruit / Technology",
	},
	{
		word: "RANK",
		contexts: [
			"He holds the title of Captain.",
			"The soldiers stood in a straight line.",
			"The air smells foul and rotten.",
			"The weeds grew thick and overgrown.",
		],
		hint: "4 letters, Title / Military / Smell / Nature",
	},
	{
		word: "LEAN",
		contexts: [
			"Do not rest your weight against the glass.",
			"The meat has very little fat.",
			"You can depend on me for support.",
			"The company runs a very efficient operation.",
		],
		hint: "4 letters, Action / Food / Metaphor / Business",
	},
	{
		word: "RICH",
		contexts: [
			"He has a lot of money and assets.",
			"This chocolate cake is very heavy and sweet.",
			"The velvet fabric has a deep color.",
			"That is a very funny joke, coming from you.",
		],
		hint: "4 letters, Wealth / Food / Aesthetics / Irony",
	},
	{
		word: "POOR",
		contexts: [
			"They have very little money.",
			"The work was of very low quality.",
			"I feel pity for the stray dog.",
			"The attendance was very scant today.",
		],
		hint: "4 letters, Poverty / Quality / Emotion / Quantity",
	},
	{
		word: "CHEAP",
		contexts: [
			"The toy costs very little money.",
			"Don't be stingy, leave a tip.",
			"The decorations looked very tacky.",
			"That was a low and unfair shot.",
		],
		hint: "5 letters, Finance / Behavior / Aesthetics / Ethics",
	},
	{
		word: "DEAR",
		contexts: [
			"She is a very beloved friend.",
			"The price of food is very expensive.",
			"Start the letter with a formal greeting.",
			"Oh my, I forgot my keys!",
		],
		hint: "4 letters, Affection / Finance / Writing / Exclamation",
	},
	{
		word: "COST",
		contexts: [
			"What is the price of this item?",
			"Winning required a great effort.",
			"The mistake caused him to lose the game.",
			"The court ordered him to pay legal fees.",
		],
		hint: "4 letters, Finance / Metaphor / Consequence / Law",
	},
	{
		word: "PAY",
		contexts: [
			"Give money for the goods.",
			"I will get revenge for what he did.",
			"Please give attention to the speaker.",
			"We should make a visit to your mother.",
		],
		hint: "3 letters, Finance / Retaliation / Focus / Social",
	},
	{
		word: "TICK",
		contexts: [
			"Put a check mark next to the item.",
			"The clock makes a steady sound.",
			"Remove the blood-sucking insect.",
			"He bought the furniture on credit.",
		],
		hint: "4 letters, Writing / Sound / Insect / Finance",
	},
	{
		word: "LOCK",
		contexts: [
			"Secure the door with a key.",
			"She cut a strand of hair as a keepsake.",
			"The ship passed through the canal gate.",
			"The wrestler put his opponent in a hold.",
		],
		hint: "4 letters, Security / Anatomy / Nautical / Sports",
	},
	{
		word: "BOLT",
		contexts: [
			"Fasten the metal screw with a nut.",
			"The horse decided to run away suddenly.",
			"A flash of lightning struck the tree.",
			"Don't eat your food so quickly.",
		],
		hint: "4 letters, Tools / Action / Weather / Eating",
	},
	{
		word: "SCREW",
		contexts: [
			"Turn the metal fastener with a driver.",
			"Don't confident twist the cap too tight.",
			"The ship's propeller pushed it forward.",
			"He tried to cheat me out of my money.",
		],
		hint: "5 letters, Tools / Action / Nautical / Slang",
	},
	{
		word: "HAMMER",
		contexts: [
			"Strike the nail with the tool.",
			"The noise pounded in his ear.",
			"Pull back the firing pin of the gun.",
			"Our team will defeat them soundly.",
		],
		hint: "6 letters, Tools / Anatomy / Weaponry / Sports",
	},
	{
		word: "DRILL",
		contexts: [
			"Use the power tool to make a hole.",
			"The soldiers practiced their marching routine.",
			"This is a type of sturdy cotton fabric.",
			"The baboon has a colorful face.",
		],
		hint: "5 letters, Tools / Military / Textile / Animal",
	},
	{
		word: "PLANE",
		contexts: [
			"We flew on an aircraft to London.",
			"Use the tool to smooth the wood surface.",
			"The geometry figure is a flat surface.",
			"This is a type of large shade tree.",
		],
		hint: "5 letters, Aviation / Tools / Math / Botany",
	},
	{
		word: "VICE",
		contexts: [
			"Clamp the wood in the bench tool.",
			"Gambling was his only bad habit.",
			"He is the deputy president.",
			"The city police have a morality squad.",
		],
		hint: "4 letters, Tools / Behavior / Rank / Law",
	},
	{
		word: "GRIP",
		contexts: [
			"Hold the tennis racket continually tightly.",
			"Please carry my travel bag.",
			"The stagehand moved the scenery.",
			"He finally got an understanding of the situation.",
		],
		hint: "4 letters, Action / Travel / Theater / Cognition",
	},
	{
		word: "CROP",
		contexts: [
			"The farmer harvested the wheat.",
			"She cut her hair short.",
			"The rider used a whip on the horse.",
			"The bird stored food in its throat pouch.",
		],
		hint: "4 letters, Agriculture / Style / Equestrian / Anatomy",
	},
	{
		word: "STABLE",
		contexts: [
			"The horses are kept in the building.",
			"His condition is steady and not changing.",
			"She is a very balanced person emotionally.",
			"Carbon-12 is a non-radioactive isotope.",
		],
		hint: "6 letters, Agriculture / Medical / Psychology / Physics",
	},
	{
		word: "PEN",
		contexts: [
			"Write your name with ink.",
			"The sheep were kept in a small enclosure.",
			"He spent five years in the state prison.",
			"The female swan swam with her cygnets.",
		],
		hint: "3 letters, Writing / Agriculture / Law / Animal",
	},
	{
		word: "WARD",
		contexts: [
			"He was admitted to the hospital wing.",
			"The state took custody of the child.",
			"She represents the voters in her district.",
			"Use this charm to deflect evil spirits.",
		],
		hint: "4 letters, Medical / Legal / Politics / Magic",
	},
	{
		word: "PINE",
		contexts: [
			"The evergreen tree has needle leaves.",
			"He began to long for his home.",
			"The furniture is made of soft wood.",
			"She wasted away with grief.",
		],
		hint: "4 letters, Botany / Emotion / Material / Health",
	},
	{
		word: "CLIP",
		contexts: [
			"Fasten the papers together.",
			"He watched a short video segment.",
			"Load the ammo cartridge into the gun.",
			"She gave him a quick hit on the ear.",
		],
		hint: "4 letters, Office / Media / Weaponry / Violence",
	},
	{
		word: "LONG",
		contexts: [
			"The road distance is very great.",
			"The meeting took a lot of time.",
			"I desire for the holidays to arrive.",
			"He bought shares expecting the price to rise.",
		],
		hint: "4 letters, Measurement / Duration / Emotion / Finance",
	},
	{
		word: "SHORT",
		contexts: [
			"He is not very tall.",
			"The movie didn't last very much time.",
			"The electrical circuit caused a fuse to blow.",
			"His manner was very rude and abrupt.",
		],
		hint: "5 letters, Height / Duration / Physics / Behavior",
	},
	{
		word: "HIGH",
		contexts: [
			"The mountain peak is very tall.",
			"He is under the influence of drugs.",
			"The soprano hit a shrill note.",
			"The meat smells like it is rotting.",
		],
		hint: "4 letters, Measurement / State / Sound / Food",
	},
	{
		word: "LOW",
		contexts: [
			"The cloud ceiling is close to the ground.",
			"He felt depressed and sad.",
			"The cow made a quiet moo sound.",
			"Select the first gear for climbing the hill.",
		],
		hint: "3 letters, Measurement / Emotion / Animal / Mechanics",
	},
	{
		word: "PLAIN",
		contexts: [
			"She wore a simple dress with no pattern.",
			"The wagon crossed the flat grassland.",
			"I would like a bagel with nothing on it.",
			"It is obvious that he is lying.",
		],
		hint: "5 letters, Fashion / Geography / Food / Logic",
	},
	{
		word: "CLEAR",
		contexts: [
			"The water in the lake is very transparent.",
			"His explanation was very easy to understand.",
			"Please remove the dishes from the table.",
			"The horse managed to jump over the fence.",
		],
		hint: "5 letters, Vision / Cognition / Action / Sports",
	},
	{
		word: "FREE",
		contexts: [
			"The concert admission is no cost.",
			"He fought for his liberty and rights.",
			"Are you available for a meeting tomorrow?",
			"Please release the bird from the cage.",
		],
		hint: "4 letters, Finance / Politics / Time / Action",
	},
	{
		word: "FULL",
		contexts: [
			"The glass is filled to the brim.",
			"I ate too much and feel very sated.",
			"Please give me a complete report.",
			"The moon is a perfect circle tonight.",
		],
		hint: "4 letters, Volume / Food / Information / Astronomy",
	},
	{
		word: "SLOW",
		contexts: [
			"The turtle is a very unhurried animal.",
			"Business has been very quiet this week.",
			"My watch is running behind time.",
			"The movie was boring and dragged on.",
		],
		hint: "4 letters, Speed / Commerce / Mechanics / Entertainment",
	},
	{
		word: "DARK",
		contexts: [
			"It is hard to see in the absence of light.",
			"He has a very wicked and evil sense of humor.",
			"She is a mysterious horse in the competition.",
			"The navy blue suit is almost black.",
		],
		hint: "4 letters, Vision / Morality / Idiom / Color",
	},
	{
		word: "BRIGHT",
		contexts: [
			"The sun is very intense today.",
			"She is a very intelligent student.",
			"The room is painted a cheerful yellow.",
			"He has a very optimistic future.",
		],
		hint: "6 letters, Light / Intellect / Decor / Future",
	},
	{
		word: "FINE",
		contexts: [
			"He had to pay a penalty for speeding.",
			"This is a very high quality wine.",
			"The sand is made of very small particles.",
			"I am feeling okay, thank you.",
		],
		hint: "4 letters, Law / Quality / Texture / Health",
	},
	{
		word: "POUND",
		contexts: [
			"He used a hammer to hit the nail.",
			"The dog was taken to the stray enclosure.",
			"It costs five units of British currency.",
			"Add one unit of weight of butter.",
		],
		hint: "5 letters, Action / Animal / Finance / Measurement",
	},
	{
		word: "JUST",
		contexts: [
			"That is a fair and righteous decision.",
			"I have only one question for you.",
			"They moved here very recently.",
			"The picture fits exactly in the frame.",
		],
		hint: "4 letters, Ethics / Quantity / Time / Precision",
	},
	{
		word: "PAST",
		contexts: [
			"History studies events of former times.",
			"He walked by the store without stopping.",
			"It is ten minutes beyond three o'clock.",
			"She has a mysterious background.",
		],
		hint: "4 letters, Time / Direction / Time / Biography",
	},
	{
		word: "PRESS",
		contexts: [
			"Push the button to start the machine.",
			"The media reporters gathered outside.",
			"Please iron my shirt for the meeting.",
			"He tried to urge me to accept the offer.",
		],
		hint: "5 letters, Action / Journalism / Chores / Persuasion",
	},
	{
		word: "CHARGE",
		contexts: [
			"The soldiers began to attack the hill.",
			"How much do you cost for this service?",
			"The battery needs more electricity.",
			"He denied the accusation of theft.",
		],
		hint: "6 letters, Military / Finance / Technology / Law",
	},
	{
		word: "SEASON",
		contexts: [
			"Autumn is my favorite time of year.",
			"Add salt and pepper to flavor the food.",
			"He is a veteran of many campaigns.",
			"The deer mating period begins in November.",
		],
		hint: "6 letters, Time / Cooking / Experience / Nature",
	},
	{
		word: "CROSS",
		contexts: [
			"Look both ways before you go over the street.",
			"She was very angry with him.",
			"The necklace has a gold religious symbol.",
			"Don't betray me or you'll regret it.",
		],
		hint: "5 letters, Action / Emotion / Religion / Treachery",
	},
	{
		word: "BRIDGE",
		contexts: [
			"The road goes over the river structure.",
			"They played a game of cards all night.",
			"The dentist fixed his false tooth fixture.",
			"The song has a catchy middle section.",
		],
		hint: "6 letters, Architecture / Gaming / Medical / Music",
	},
	{
		word: "BOND",
		contexts: [
			"There is a strong connection between the brothers.",
			"He invested in a government security.",
			"Use glue to stick the pieces together.",
			"The atoms share a chemical link.",
		],
		hint: "4 letters, Relationships / Finance / Adhesion / Chemistry",
	},
	{
		word: "CHECK",
		contexts: [
			"Please inspect the engine for problems.",
			"Leave a mark in the box next to your choice.",
			"Ask the waiter for the restaurant bill.",
			"The king is in danger in the chess game.",
		],
		hint: "5 letters, Investigation / Writing / Dining / Gaming",
	},
	{
		word: "DRAFT",
		contexts: [
			"There is a cold wind coming from the window.",
			"He wrote a first sketch of the essay.",
			"He was called up for military conscription.",
			"I'll have a glass of tap beer please.",
		],
		hint: "5 letters, Weather / Writing / Military / Drink",
	},
	{
		word: "PULL",
		contexts: [
			"Tug the rope to ring the bell.",
			"The moon has a gravitational attraction.",
			"He tried to influence strings to get the job.",
			"I felt a sharp pain in my muscle.",
		],
		hint: "4 letters, Action / Physics / Metaphor / Injury",
	},
	{
		word: "DRINK",
		contexts: [
			"I need a glass of cold beverage.",
			"He likes to consume alcohol on weekends.",
			"The soil will absorb the water quickly.",
			"The sailors were lost on the big water.",
		],
		hint: "5 letters, Thirst / Social / Nature / Nautical",
	},
	{
		word: "SHAKE",
		contexts: [
			"The earthquake caused the ground to vibrate.",
			"He offered his hand to greet me.",
			"I would like a chocolate milk blend.",
			"It is hard to get rid of a bad habit.",
		],
		hint: "5 letters, Geology / Social / Food / Psychology",
	},
	{
		word: "SPIN",
		contexts: [
			"The dancer began to rotate quickly.",
			"Let's go for a ride on the bikes.",
			"The politician put a positive bias on the news.",
			"The spider began to weave a web.",
		],
		hint: "4 letters, Action / Recreation / Politics / Nature",
	},
	{
		word: "SLIP",
		contexts: [
			"Be careful not to slide on the ice.",
			"I made a small mistake in the calculation.",
			"She wore a silk undergarment.",
			"The boat was docked in its berth.",
		],
		hint: "4 letters, Action / Error / Clothing / Nautical",
	},
	{
		word: "CATCH",
		contexts: [
			"Try to capture the ball in your mitt.",
			"There must be a hidden snag in the deal.",
			"I hope I don't get a cold.",
			"Did you hear what he said?",
		],
		hint: "5 letters, Sports / Contract / Health / Perception",
	},
	{
		word: "MISS",
		contexts: [
			"The arrow failed to hit the target.",
			"The unmarried woman bought a house.",
			"I will long for you when you are gone.",
			"Please exclude me from the list.",
		],
		hint: "4 letters, Action / Title / Emotion / Administrative",
	},
	{
		word: "HIT",
		contexts: [
			"The bat connected with the ball.",
			"The song was a number one success.",
			"The website got a lot of views.",
			"The mob ordered a contract killing.",
		],
		hint: "3 letters, Sports / Music / Digital / Crime",
	},
	{
		word: "STRIKE",
		contexts: [
			"The workers decided to stop working.",
			"The clock began to chime twelve.",
			"The snake prepared to bite.",
			"He hopes to discover gold in the mine.",
		],
		hint: "6 letters, Labor / Time / Nature / Mining",
	},
	{
		word: "BLOW",
		contexts: [
			"The wind began to gust strongly.",
			"She gave the candle a puff to put it out.",
			"He received a hard hit to the head.",
			"It was a huge disappointment to his ego.",
		],
		hint: "4 letters, Weather / Action / Sports / Emotion",
	},
	{
		word: "DEAL",
		contexts: [
			"Shuffle the cards and distribute them.",
			"We signed a huge business agreement.",
			"I can't cope with this stress anymore.",
			"The table is made of pine wood.",
		],
		hint: "4 letters, Gaming / Commerce / Psychology / Material",
	},
	{
		word: "PIPE",
		contexts: [
			"Water flows through the copper tube.",
			"The old sailor smoked tobacco.",
			"He played a tune on the wind instrument.",
			"Please decorate the cake with icing.",
		],
		hint: "4 letters, Plumbing / Smoking / Music / Cooking",
	},
	{
		word: "MOLD",
		contexts: [
			"Green fungus grew on the old bread.",
			"Pour the jelly into the shape.",
			"He fits the template of a hero.",
			"His character was formed by hardship.",
		],
		hint: "4 letters, Biology / Cooking / Metaphor / Psychology",
	},
	{
		word: "SET",
		contexts: [
			"A group of dishes was on the table.",
			"He won the first match of tennis.",
			"The jelly needs time to solidify.",
			"The movie scenery was very realistic.",
		],
		hint: "3 letters, Collection / Sports / Cooking / Theater",
	},
	{
		word: "ACT",
		contexts: [
			"He performed a role in the play.",
			"Congress passed a new law.",
			"It is all a fake pretense.",
			"We need to do something immediately.",
		],
		hint: "3 letters, Theater / Politics / Behavior / Action",
	},
	{
		word: "SCENE",
		contexts: [
			"We filmed the first part of the movie.",
			"The view from the window is beautiful.",
			"Please don't make a loud tantrum here.",
			"He is part of the local music subculture.",
		],
		hint: "5 letters, Film / Landscape / Behavior / Social",
	},
	{
		word: "STAGE",
		contexts: [
			"The actors walked onto the platform.",
			"This is just a phase of development.",
			"They planned to organize a protest.",
			"The old coach was pulled by horses.",
		],
		hint: "5 letters, Theater / Time / Politics / Transport",
	},
	{
		word: "DASH",
		contexts: [
			"I need to run quickly to the store.",
			"Add a small pinch of salt.",
			"Use a hyphen mark in the word.",
			"The news will destroy his hopes.",
		],
		hint: "4 letters, Action / Cooking / Writing / Emotion",
	},
	{
		word: "RATE",
		contexts: [
			"The car was moving at a high speed.",
			"The interest percentage is very low.",
			"She scolded the child for misbehaving.",
			"I value his opinion very highly.",
		],
		hint: "4 letters, Physics / Finance / Parenting / Opinion",
	},
	{
		word: "SCORE",
		contexts: [
			"The final result was two to one.",
			"He bought the sheet music for the song.",
			"Use a knife to cut the surface of the meat.",
			"Four and twenty years ago.",
		],
		hint: "5 letters, Sports / Music / Cooking / History",
	},
	{
		word: "PLOT",
		contexts: [
			"The story of the book was very exciting.",
			"They planned a secret conspiracy.",
			"We marked the points on the graph.",
			"He bought a piece of land to build on.",
		],
		hint: "4 letters, Literature / Crime / Math / Real Estate",
	},
	{
		word: "STORY",
		contexts: [
			"Tell me a bedtime tale.",
			"The building is ten levels high.",
			"Don't tell a lie to your mother.",
			"We watched the news report on TV.",
		],
		hint: "5 letters, Literature / Architecture / Ethics / Journalism",
	},
	{
		word: "FLOOR",
		contexts: [
			"Don't sit on the dirty ground.",
			"The ocean bed is full of life.",
			"The boxer tried to knock down his opponent.",
			"We set a minimum price for the auction.",
		],
		hint: "5 letters, Architecture / Geography / Sports / Finance",
	},
	{
		word: "WALL",
		contexts: [
			"Hang the picture on the vertical barrier.",
			"The runner hit a fatigue limit at mile 20.",
			"The heart has a thick muscle divider.",
			"The city was protected by stone fortifications.",
		],
		hint: "4 letters, Architecture / Sports / Anatomy / Defense",
	},
	{
		word: "COURT",
		contexts: [
			"The judge presided over the trial.",
			"The king held an audience in the palace.",
			"We played tennis on the clay surface.",
			"He tried to woo the lady with flowers.",
		],
		hint: "5 letters, Law / Royalty / Sports / Romance",
	},
	{
		word: "CLAIM",
		contexts: [
			"He filed a demand for insurance money.",
			"He likes to assert that he knows everything.",
			"The prospector staked a mining right.",
			"The luggage area is near the exit.",
		],
		hint: "5 letters, Insurance / Rhetoric / History / Travel",
	},
	{
		word: "SUIT",
		contexts: [
			"He wore a jacket and tie to work.",
			"He filed a legal action against the company.",
			"Hearts is a red category in cards.",
			"Do whatever pleases you.",
		],
		hint: "4 letters, Fashion / Law / Gaming / Behavior",
	},
	{
		word: "TONE",
		contexts: [
			"The muscle has good tension.",
			"I didn't like his angry voice pitch.",
			"The painting has a warm color quality.",
			"He set the mood for the evening.",
		],
		hint: "4 letters, Anatomy / Communication / Art / Atmosphere",
	},
	{
		word: "TYPE",
		contexts: [
			"This is a specific category of plant.",
			"Please write the letter on the keyboard.",
			"He is not my preferred sort of person.",
			"The font style is easy to read.",
		],
		hint: "4 letters, Taxonomy / Action / Preference / Design",
	},
	{
		word: "GRADE",
		contexts: [
			"He got an A mark in the exam.",
			"The road has a steep slope.",
			"This is high quality beef.",
			"We need to sort the eggs by size.",
		],
		hint: "5 letters, Education / Geography / Commerce / Action",
	},
	{
		word: "DEGREE",
		contexts: [
			"The temperature dropped one unit.",
			"He earned a master's diploma.",
			"To what extent do you agree?",
			"A right angle is ninety units.",
		],
		hint: "6 letters, Science / Education / Logic / Geometry",
	},
	{
		word: "CLASS",
		contexts: [
			"The students sat in the school room.",
			"She has a lot of style and elegance.",
			"He belongs to the working social group.",
			"This is a specific biological category.",
		],
		hint: "5 letters, Education / Behavior / Sociology / Biology",
	},
	{
		word: "YEAR",
		contexts: [
			"It takes 365 days to complete the cycle.",
			"She was elected president of her class group.",
			"This wine is from a very good vintage.",
			"The dragon is a symbol in the Chinese zodiac.",
		],
		hint: "4 letters, Time / School / Alcohol / Astrology",
	},
	{
		word: "DRIVE",
		contexts: [
			"We will take the car to the beach.",
			"He has a strong motivation to succeed.",
			"Save the file to the hard disk.",
			"He hit a long shot down the fairway.",
		],
		hint: "5 letters, Travel / Psychology / Computing / Sports",
	},
	{
		word: "RIDE",
		contexts: [
			"I want to sit in the passenger seat.",
			"Don't tease and heckle him so much.",
			"The drummer hit the large cymbal.",
			"We went on the roller coaster attraction.",
		],
		hint: "4 letters, Travel / Behavior / Music / Entertainment",
	},
	{
		word: "WALK",
		contexts: [
			"Let's go for a stroll in the park.",
			" shovel the snow from the front path.",
			"The batter went to first base on four balls.",
			"The game was an easy victory for us.",
		],
		hint: "4 letters, Action / Infrastructure / Sports / Slang",
	},
	{
		word: "SAIL",
		contexts: [
			"The boat began to move across the water.",
			"The heavy canvas flapped in the wind.",
			"The submarine has a conning tower.",
			"She managed to coast through the exam.",
		],
		hint: "4 letters, Nautical / Material / Military / Action",
	},
	{
		word: "OIL",
		contexts: [
			"The car engine needs lubricant.",
			"We use olive liquid for cooking.",
			"He painted a portrait on canvas.",
			"His manner was full of smooth flattery.",
		],
		hint: "3 letters, Mechanics / Cooking / Art / Behavior",
	},
	{
		word: "GAS",
		contexts: [
			"I need to fill the car with fuel.",
			"Steam is water in a vapor state.",
			"The party was a lot of fun.",
			"He suffered from stomach pain.",
		],
		hint: "3 letters, Automotive / Physics / Slang / Medical",
	},
	{
		word: "FIRE",
		contexts: [
			"The camp flame burned brightly.",
			"The soldiers began to shoot their guns.",
			"The boss had to dismiss the employee.",
			"He spoke with great passion and enthusiasm.",
		],
		hint: "4 letters, Nature / Military / Job / Emotion",
	},
	{
		word: "WATER",
		contexts: [
			"Drink eight glasses of liquid a day.",
			"Please irrigate the plants in the garden.",
			"His eyes began to tear up from the smoke.",
			"His story holds no truth or validity.",
		],
		hint: "5 letters, Biology / Gardening / Physiology / Idiom",
	},
	{
		word: "ICE",
		contexts: [
			"The pond is covered in frozen water.",
			"Look at the dazzling diamonds on her ring.",
			"The skater performed on the rink.",
			"Put some cubes in my drink to cool it.",
		],
		hint: "3 letters, Nature / Slang / Sports / Drink",
	},
	{
		word: "RAIN",
		contexts: [
			"Water fell from the clouds.",
			"The archers began to shower arrows on the enemy.",
			"The parade was cancelled due to weather.",
			"He decided to lavish gifts upon her.",
		],
		hint: "4 letters, Weather / Military / Event / Action",
	},
	{
		word: "HAIL",
		contexts: [
			"Blocks of ice fell from the sky.",
			"We should greet the new chief.",
			"Wave your hand to call a taxi.",
			"She comes from a small town in Texas.",
		],
		hint: "4 letters, Weather / Social / Travel / Origin",
	},
	{
		word: "WIND",
		contexts: [
			"The breeze blew through the trees.",
			"Please twist the key to start the toy.",
			"The baby needs to burp to release air.",
			"The runner was out of breath.",
		],
		hint: "4 letters, Weather / Action / Physiology / Health",
	},
	{
		word: "STORM",
		contexts: [
			"Thunder and lightning raged outside.",
			"The troops prepared to attack the castle.",
			"He marched out of the room in anger.",
			"Put up the heavy shutters on the windows.",
		],
		hint: "5 letters, Weather / Military / Emotion / Architecture",
	},
	{
		word: "CLOUD",
		contexts: [
			"A white fluff floated in the blue sky.",
			"The smoke began to obscure the view.",
			"Save your data to the remote server.",
			"A shadow of suspicion hung over him.",
		],
		hint: "5 letters, Weather / Vision / Technology / Metaphor",
	},
	{
		word: "MOON",
		contexts: [
			"The satellite orbits the earth.",
			"It is a once in a blue month event.",
			"Stop wasting time dreaming about her.",
			"The prankster showed his bare bottom.",
		],
		hint: "4 letters, Astronomy / Time / Emotion / Slang",
	},
	{
		word: "EARTH",
		contexts: [
			"We live on the third planet from the sun.",
			"The gardener dug into the rich soil.",
			"The wire connects the device to the ground.",
			"The fox hid in its underground den.",
		],
		hint: "5 letters, Astronomy / Gardening / Electricity / Animal",
	},
	{
		word: "WORLD",
		contexts: [
			"He wants to travel around the globe.",
			"She is in a universe of her own.",
			"The event shocked the entire public.",
			"Biology studies the living kingdom.",
		],
		hint: "5 letters, Geography / Psychology / Society / Science",
	},
	{
		word: "LIFE",
		contexts: [
			"Water is essential for existence.",
			"He wrote a book about his biography.",
			"The judge gave him a prison sentence.",
			"She is the soul and vitality of the party.",
		],
		hint: "4 letters, Biology / Literature / Law / Social",
	},
	{
		word: "LOVE",
		contexts: [
			"He has a deep affection for his wife.",
			"The score in tennis is zero.",
			"Hello my darling, how are you?",
			"He has a passion for antique cars.",
		],
		hint: "4 letters, Emotion / Sports / Greeting / Hobby",
	},
	{
		word: "LIKE",
		contexts: [
			"She has a similar appearance to her mother.",
			"I enjoy reading mystery novels.",
			"He ran as fast as crazy.",
			"Click the button on the social media post.",
		],
		hint: "4 letters, Comparison / Preference / Parsing / Digital",
	},
	{
		word: "WILL",
		contexts: [
			"I promise I shall do it tomorrow.",
			"He has a strong determination to succeed.",
			"He left his money to her in his testament.",
			"You can fire at your own desire.",
		],
		hint: "4 letters, Grammar / Character / Law / Choice",
	},
	{
		word: "HEART",
		contexts: [
			"The organ pumps blood through the body.",
			"Let's get to the core of the problem.",
			"He drew a symbol of love on the paper.",
			"Have some courage and don't give up.",
		],
		hint: "5 letters, Anatomy / Abstract / Symbol / Emotion",
	},
	{
		word: "SOUL",
		contexts: [
			"He believes the spirit lives after death.",
			"It is a genre of African-American music.",
			"There was not a single person in sight.",
			"Brevity is the essence of wit.",
		],
		hint: "4 letters, Religion / Music / Quantity / Philosophy",
	},
	{
		word: "BODY",
		contexts: [
			"Exercise is good for your physical form.",
			"A large group of students attended.",
			"The police found the corpse in the woods.",
			"This wine has a full and rich flavor.",
		],
		hint: "4 letters, Health / Collection / Crime / Taste",
	},
	{
		word: "LEG",
		contexts: [
			"He broke his lower limb skiing.",
			"The first part of the journey was tiring.",
			"The table has a wobbly support.",
			"Stop joking and pulling my limb.",
		],
		hint: "3 letters, Anatomy / Travel / Furniture / Idiom",
	},
	{
		word: "NECK",
		contexts: [
			"She wore a scarf around her throat.",
			"We live on a narrow strip of land.",
			"The teenagers began to kiss in the car.",
			"Hold the bottle by the narrow part.",
		],
		hint: "4 letters, Anatomy / Geography / Romance / Object",
	},
	{
		word: "NOSE",
		contexts: [
			"He has a keen sense of smell.",
			"The plane dipped its front downward.",
			"Don't pry into my business.",
			"The dog nudged my hand with his snout.",
		],
		hint: "4 letters, Anatomy / Aviation / Behavior / Animal",
	},
	{
		word: "EYE",
		contexts: [
			"She has a blue vision organ.",
			"Thread the cotton through the needle hole.",
			"The potato has a sprouting bud.",
			"We are in the calm center of the storm.",
		],
		hint: "3 letters, Anatomy / Sewing / Botany / Weather",
	},
	{
		word: "TOOTH",
		contexts: [
			"The dentist filled the cavity in the molar.",
			"The gear has a broken cog.",
			"He has a craving for sweet foods.",
			"The new law has no real authority.",
		],
		hint: "5 letters, Anatomy / Mechanics / Taste / Metaphor",
	},
	{
		word: "LIP",
		contexts: [
			"She applied red color to her mouth.",
			"Don't give me any of your insolence.",
			"The cup has a chipped rim.",
			"The ball stopped on the edge of the hole.",
		],
		hint: "3 letters, Beauty / Behavior / Object / Sports",
	},
	{
		word: "TONGUE",
		contexts: [
			"The doctor checked his mouth organ.",
			"He speaks a foreign language.",
			"The shoe has a leather flap under the laces.",
			"The wagon was pulled by a wooden pole.",
		],
		hint: "6 letters, Anatomy / Communication / Clothing / Transport",
	},
	{
		word: "GUM",
		contexts: [
			"Brush your teeth and pink tissue.",
			"Use the sticky glue to seal the envelope.",
			"He was chewing a piece of candy.",
			"The tree produces a sticky sap.",
		],
		hint: "3 letters, Anatomy / Stationery / Food / Botany",
	},
	{
		word: "JAW",
		contexts: [
			"He broke his chin bone in the fight.",
			"We sat and talked for hours.",
			"He snatched victory from the mouth of defeat.",
			"The tool held the wood in a tight grip.",
		],
		hint: "3 letters, Anatomy / Slang / Metaphor / Tool",
	},
	{
		word: "WIRE",
		contexts: [
			"The electricity flows through the copper cable.",
			"Send the money via telegram.",
			"The spy wore a hidden microphone.",
			"Be careful not to trip on the trap line.",
		],
		hint: "4 letters, Technology / Communication / Espionage / Military",
	},
	{
		word: "SILVER",
		contexts: [
			"The coin is made of precious grey metal.",
			"The car is a shiny metallic color.",
			"Please set the table with the cutlery.",
			"He won the second place medal.",
		],
		hint: "6 letters, Material / Aesthetics / Dining / Sports",
	},
	{
		word: "COPPER",
		contexts: [
			"The pipe is made of reddish metal.",
			"The policeman arrested the thief.",
			"A small brown butterfly landed on the leaf.",
			"I only have a few small coins.",
		],
		hint: "6 letters, Material / Law / Nature / Finance",
	},
	{
		word: "BRASS",
		contexts: [
			"The trumpet is a yellow metal instrument.",
			"He has a lot of bold confidence.",
			"The top officers decided the strategy.",
			"Whatever you do, don't waste my money.",
		],
		hint: "5 letters, Music / Behavior / Military / Slang",
	},
	{
		word: "STEEL",
		contexts: [
			"The building frame is made of strong metal.",
			"You need to brace your nerves for the news.",
			"The knight drew his cold sword.",
			"He has a grip of iron.",
		],
		hint: "5 letters, Construction / Psychology / Weaponry / Metaphor",
	},
	{
		word: "METAL",
		contexts: [
			"Iron and gold are types of element.",
			"He plays in a loud rock music band.",
			"The road is paved with crushed stone.",
			"He showed his true spirit and character.",
		],
		hint: "5 letters, Chemistry / Music / Construction / Homonym",
	},
	{
		word: "SAND",
		contexts: [
			"Children played on the beach grain.",
			"Use paper to smooth the wood.",
			"He has the courage to fight back.",
			"The time ran out in the hourglass.",
		],
		hint: "4 letters, Nature / Action / Behavior / Time",
	},
	{
		word: "ASH",
		contexts: [
			"The fire left a pile of grey powder.",
			"The baseball bat is made of strong wood.",
			"His face turned pale with fear.",
			"There is a town named after this tree.",
		],
		hint: "3 letters, Chemistry / Botany / Color / Geography",
	},
	{
		word: "DIRT",
		contexts: [
			"Wash the soil off your hands.",
			"I don't want to hear the gossip.",
			"The house was full of filth.",
			"We drove down a rough unpaved road.",
		],
		hint: "4 letters, Hygiene / Social / State / Travel",
	},
	{
		word: "MUD",
		contexts: [
			"The rain turned the ground to sludge.",
			"This coffee tastes like sludge.",
			"They threw slander at his reputation.",
			"The oil rig pumps drilling fluid.",
		],
		hint: "3 letters, Weather / Food / Politics / Industry",
	},
	{
		word: "CLAY",
		contexts: [
			"Pottery is made from baked earth.",
			"We are all mortal human flesh.",
			"Nadal plays well on the red court.",
			"The old pipes were made of ceramic.",
		],
		hint: "4 letters, Art / Philosophy / Sports / Plumbing",
	},
	{
		word: "LIME",
		contexts: [
			"Add a slice of green fruit to the drink.",
			"Cement is made from burning limestone.",
			"He wore a shirt of a bright green color.",
			"The bird was caught with sticky glue.",
		],
		hint: "4 letters, Food / Construction / Color / Hunting",
	},
	{
		word: "MINT",
		contexts: [
			"He grew a fresh herb in the garden.",
			"I ate a refreshing after-dinner candy.",
			"The government facility makes coins.",
			"The vintage car is in perfect condition.",
		],
		hint: "4 letters, Botany / Food / Industry / Quality",
	},
	{
		word: "BULL",
		contexts: [
			"The large male cow grazed in the field.",
			"The stock market is very optimistic right now.",
			"That story is a load of nonsense.",
			"The Pope issued a formal decree.",
		],
		hint: "4 letters, Animal / Finance / Slang / Religion",
	},
	{
		word: "SEAL",
		contexts: [
			"The marine animal clapped its flippers.",
			"Close the envelope with a sticker.",
			"The navy special forces team arrived.",
			"This is a guarantee of quality.",
		],
		hint: "4 letters, Animal / Action / Military / Commerce",
	},
	{
		word: "MOLE",
		contexts: [
			"The small animal dug a tunnel in the garden.",
			"She has a small dark spot on her chin.",
			"There is a spy within the organization.",
			"This is a standard unit in chemistry.",
		],
		hint: "4 letters, Animal / Anatomy / Espionage / Science",
	},
	{
		word: "MOUSE",
		contexts: [
			"A small rodent ran across the floor.",
			"Click the button on your computer device.",
			"He is a very timid and quiet person.",
			"She has a black bruise under her eye.",
		],
		hint: "5 letters, Animal / Technology / Personality / Injury",
	},
	{
		word: "BUG",
		contexts: [
			"There is a crawling insect on the wall.",
			"The computer program has a glitch.",
			"Don't annoy me with your questions.",
			"The spy planted a microphone in the room.",
		],
		hint: "3 letters, Insect / Technology / Action / Espionage",
	},
	{
		word: "WORM",
		contexts: [
			"The bird caught the crawling creature.",
			"A virus infected the computer network.",
			"He managed to wiggle his way out of trouble.",
			"It is a threaded bolt used in gears.",
		],
		hint: "4 letters, Animal / Technology / Action / Mechanics",
	},
	{
		word: "WEB",
		contexts: [
			"The spider spun a sticky net.",
			"Search for the information on the internet.",
			"He was caught in a tangle of lies.",
			"The duck has skin between its toes.",
		],
		hint: "3 letters, Nature / Technology / Metaphor / Anatomy",
	},
	{
		word: "NET",
		contexts: [
			"The fisherman caught fish in the mesh.",
			"The company made a large profit after tax.",
			"The ball hit the center of the goal.",
			"We need to capture the butterfly.",
		],
		hint: "3 letters, Fishing / Finance / Sports / Action",
	},
	{
		word: "HOOD",
		contexts: [
			"Open the car cover to check the engine.",
			"She pulled her hat cover up in the rain.",
			"A dangerous gangster walked down the street.",
			"The cobra spread its neck skin.",
		],
		hint: "4 letters, Automotive / Clothing / Crime / Animal",
	},
	{
		word: "KNOT",
		contexts: [
			"Tie the rope in a secure loop.",
			"The wood has a hard dark spot.",
			"The ship traveled at a fast speed.",
			"My stomach feels tight with anxiety.",
		],
		hint: "4 letters, Action / Material / Nautical / Emotion",
	},
	{
		word: "LOOP",
		contexts: [
			"The rope formed a circle.",
			"The computer program repeated the code.",
			"The plane performed a vertical circle.",
			"Please keep me in the communication circle.",
		],
		hint: "4 letters, Shape / Technology / Aviation / Communication",
	},
	{
		word: "ARCH",
		contexts: [
			"The bridge has a curved support structure.",
			"I have a pain in the bottom of my foot.",
			"He gave me a playful and knowing look.",
			"He is the chief enemy of the hero.",
		],
		hint: "4 letters, Architecture / Anatomy / Behavior / Prefix",
	},
	{
		word: "BELT",
		contexts: [
			"Wear a leather strap to hold up your pants.",
			"He gave him a hard punch in the stomach.",
			"We drove through the Bible region.",
			"He took a long drink of whiskey.",
		],
		hint: "4 letters, Clothing / Violence / Geography / Slang",
	},
	{
		word: "TAPE",
		contexts: [
			"Use sticky strip to fix the tear.",
			"I recorded the song on a cassette.",
			"Use a measuring strip to check the size.",
			"The runner crossed the finish line.",
		],
		hint: "4 letters, Stationery / Media / Measurement / Sports",
	},
	{
		word: "PASTE",
		contexts: [
			"Use glue to stick the paper.",
			"The jewelry is made of fake gem glass.",
			"Copy and insert the text here.",
			"He decided to hit the ball hard.",
		],
		hint: "5 letters, Adhesion / Jewelry / Technology / Sports",
	},
	{
		word: "STAPLE",
		contexts: [
			"Fasten the papers with a metal clip.",
			"Rice is a main food in Asia.",
			"Cotton has a long fiber length.",
			"This is a main and important part.",
		],
		hint: "6 letters, Stationery / Food / Textile / Importance",
	},
	{
		word: "PIN",
		contexts: [
			"Fasten the fabric with a sharp needle.",
			"Knock down the bowling target.",
			"She has a metal plate in her leg.",
			"He tried to hold his opponent down.",
		],
		hint: "3 letters, Sewing / Sports / Medical / Wrestling",
	},
	{
		word: "NEEDLE",
		contexts: [
			"Use thread to sew the button.",
			"The pine tree has a sharp leaf.",
			"Don't annoy him with your comments.",
			"Place the stylus on the record.",
		],
		hint: "6 letters, Sewing / Botany / Behavior / Music",
	},
	{
		word: "THREAD",
		contexts: [
			"Sew the button with cotton string.",
			"I lost the line of the conversation.",
			"The screw has a spiral ridge.",
			"Follow the comments in the online discussion.",
		],
		hint: "6 letters, Sewing / Cognition / Mechanics / Digital",
	},
	{
		word: "STRING",
		contexts: [
			"Tie the package with a cord.",
			"He played the guitar with skill.",
			"The computer code handles text data.",
			"A series of events led to this.",
		],
		hint: "6 letters, Material / Music / Computing / Sequence",
	},
	{
		word: "CORD",
		contexts: [
			"Plug the electric cable into the wall.",
			"He tied the bundle with a rope.",
			"The baby brings nutrients through the navel.",
			"He bought a stack of firewood.",
		],
		hint: "4 letters, Technology / Material / Anatomy / Measurement",
	},
	{
		word: "SLIDE",
		contexts: [
			"The kids played on the playground ramp.",
			"Be careful not to slip on the floor.",
			"He showed a picture on the projector.",
			"Put the sample on the glass plate.",
		],
		hint: "5 letters, Recreation / Action / Presentation / Science",
	},
	{
		word: "STAIN",
		contexts: [
			"The coffee left a brown mark on the shirt.",
			"Apply a dark color to the wood.",
			"The scandal left a mark on his reputation.",
			"The window is made of colored glass.",
		],
		hint: "5 letters, Dirt / Decor / Abstract / Art",
	},
	{
		word: "SHADE",
		contexts: [
			"We sat in the cool darkness under the tree.",
			"This is a darker version of the color blue.",
			"Put a cover on the lamp.",
			"He saw a ghost in the haunted house.",
		],
		hint: "5 letters, Light / Color / Furniture / Supernatural",
	},
	{
		word: "COLOR",
		contexts: [
			"Red is a bright hue.",
			"The story adds interest to the lecture.",
			"She began to blush with embarrassment.",
			"Salute the flag as it passes.",
		],
		hint: "5 letters, Physics / Rhetoric / Emotion / Symbol",
	},
	{
		word: "LAYER",
		contexts: [
			"Add a level of cake on top.",
			"The hen is a good egg producer.",
			"Propagate the plant by burying a stem.",
			"This problem has a deeper meaning.",
		],
		hint: "5 letters, Cooking / Agriculture / Gardening / Abstract",
	},
	{
		word: "RUNG",
		contexts: [
			"Step on the ladder bar.",
			"The wheel has a broken spoke.",
			"He climbed to the top level of the company.",
			"The simple chair has a cross bar.",
		],
		hint: "4 letters, Tools / Mechanics / Hierarchy / Furniture",
	},
	{
		word: "SCALE",
		contexts: [
			"Stand on the machine to weigh yourself.",
			"The fish is covered in protective skin.",
			"He played the musical notes up and down.",
			"He decided to climb the mountain.",
		],
		hint: "5 letters, Measurement / Animal / Music / Action",
	},
	{
		word: "SMOOTH",
		contexts: [
			"The surface of the glass is equal.",
			"This is a very easy drinking whiskey.",
			"He is a very charming talker.",
			"She decided to remove hair from her legs.",
		],
		hint: "6 letters, Texture / Taste / Behavior / Grooming",
	},
	{
		word: "ROUGH",
		contexts: [
			"The sandpaper has a coarse texture.",
			"Here is an approximate guess of the cost.",
			"The game got a bit violent.",
			"The ball landed in the tall grass.",
		],
		hint: "5 letters, Material / Math / Behavior / Sports",
	},
	{
		word: "TENDER",
		contexts: [
			"The meat is soft and easy to chew.",
			"He made a formal offer to buy the house.",
			"This is legal currency for payment.",
			"The small boat carried passengers to the ship.",
		],
		hint: "6 letters, Food / Business / Finance / Nautical",
	},
	{
		word: "SOFT",
		contexts: [
			"The pillow is very comfortable.",
			"I would like a non-alcoholic drink.",
			"He is weak and stupid in the head.",
			"Please speak in a quiet voice.",
		],
		hint: "4 letters, Texture / Drink / Insult / Sound",
	},
	{
		word: "SOLID",
		contexts: [
			"The ice is a hard state of water.",
			"This is a reliable and dependable car.",
			"A cube is a three-dimensional shape.",
			"The shirt is a single pure color.",
		],
		hint: "5 letters, Physics / Quality / Geometry / Fashion",
	},
	{
		word: "PURE",
		contexts: [
			"The water is clean and filtered.",
			"It is a matter of theoretical math.",
			"It was a mere accident.",
			"She has a chaste and innocent reputation.",
		],
		hint: "4 letters, Hygiene / Science / Quantity / Morality",
	},
	{
		word: "SOUR",
		contexts: [
			"The lemon has a very sharp taste.",
			"The milk has gone bad.",
			"He is in a very grumpy mood.",
			"It is a whiskey drink mix.",
		],
		hint: "4 letters, Taste / Food / Emotion / Alcohol",
	},
	{
		word: "ACID",
		contexts: [
			"Vinegar contains a chemical substance.",
			"He took a hallucinogenic drug.",
			"He made a very sharp and sarcastic remark.",
			"I have an upset stomach condition.",
		],
		hint: "4 letters, Chemistry / Slang / Communication / Health",
	},
	{
		word: "SALT",
		contexts: [
			"Add the mineral seasoning to the food.",
			"He is an old experienced sailor.",
			"We need to preserve the meat.",
			"The treaty limited strategic arms.",
		],
		hint: "4 letters, Food / Job / Cooking / History",
	},
	{
		word: "PEPPER",
		contexts: [
			"Grind the black spice onto the salad.",
			"The reporters began to barrage him with questions.",
			"I like red and green capsicum vegetables.",
			"Sprinkle the speech with jokes.",
		],
		hint: "6 letters, Food / Action / Botany / Rhetoric",
	},
	{
		word: "WEED",
		contexts: [
			"Pull the unwanted plant from the garden.",
			"He was caught smoking a drug.",
			"We need to remove out the bad applicants.",
			"He is a weak and spineless person.",
		],
		hint: "4 letters, Gardening / Slang / Selection / Insult",
	},
	{
		word: "ROSE",
		contexts: [
			"She gave him a red flower.",
			"The sun came up at 6am.",
			"The glasses are tinted a pink color.",
			"The compass points to North.",
		],
		hint: "4 letters, Botany / Action / Color / Direction",
	},
	{
		word: "IRIS",
		contexts: [
			"The purple flower is blooming.",
			"The colored part of the eye contracted.",
			"She is the goddess of the rainbow.",
			"The camera aperture opened.",
		],
		hint: "4 letters, Botany / Anatomy / Mythology / Photography",
	},
	{
		word: "CONE",
		contexts: [
			"The ice cream is served in a wafer.",
			"The pine tree dropped a fruit.",
			"The eye cell detects color.",
			"Put a traffic marker on the road.",
		],
		hint: "4 letters, Food / Botany / Anatomy / Traffic",
	},
	{
		word: "BULB",
		contexts: [
			"Change the light lamp in the socket.",
			"Plant the tulip root in the fall.",
			"The brain stem part controls breathing.",
			"The end of the nose is round.",
		],
		hint: "4 letters, Technology / Gardening / Anatomy / Shape",
	},
	{
		word: "NUT",
		contexts: [
			"Crack the hard shell to eat the kernel.",
			"Tighten the metal fastener on the bolt.",
			"He is a crazy person.",
			"She is a huge fan of the team.",
		],
		hint: "3 letters, Food / Mechanics / Slang / Enthusiast",
	},
	{
		word: "CORN",
		contexts: [
			"We ate the yellow grain on the cob.",
			"He has a painful spot on his toe.",
			"That joke was very bad and old.",
			"The whiskey is made from maize.",
		],
		hint: "4 letters, Food / Health / Humor / Alcohol",
	},
	{
		word: "GRAIN",
		contexts: [
			"Wheat is a type of cereal crop.",
			"The wood has a beautiful texture pattern.",
			"There is not a small amount of truth in it.",
			"A single particle of sand.",
		],
		hint: "5 letters, Agriculture / Material / Measurement / Nature",
	},
	{
		word: "SHELL",
		contexts: [
			"The turtle hid in its hard cover.",
			"The artillery fired a bomb.",
			"Put the pasta shape in the water.",
			"The company is just a fake facade.",
		],
		hint: "5 letters, Animal / Military / Food / Business",
	},
	{
		word: "SHOOT",
		contexts: [
			"The plant sent up a new green sprout.",
			"Don't fire the gun.",
			"We will film the movie tomorrow.",
			"The pain began to radiate down his leg.",
		],
		hint: "5 letters, Botany / Action / Media / Medical",
	},
	{
		word: "STALK",
		contexts: [
			"The flower grows on a long stem.",
			"The lion began to hunt the prey.",
			"He walked away stiffly in anger.",
			"Celery is a vegetable stick.",
		],
		hint: "5 letters, Botany / Hunting / Action / Food",
	},
	{
		word: "BUD",
		contexts: [
			"The flower is about to open.",
			"He is my best friend.",
			"Have a cold beer.",
			"The taste cell is on the tongue.",
		],
		hint: "3 letters, Botany / Social / Slang / Anatomy",
	},
	{
		word: "BRANCH",
		contexts: [
			"The tree has a large limb.",
			"The bank opened a new local office.",
			"The river splits into a tributary.",
			"The road forks to the left.",
		],
		hint: "6 letters, Botany / Business / Geography / Transport",
	},
	{
		word: "PILE",
		contexts: [
			"He raked the leaves into a stack.",
			"The carpet has a thick weave.",
			"He made a fortune of money.",
			"Drive the foundation post into the ground.",
		],
		hint: "4 letters, Action / Decor / Finance / Construction",
	},
	{
		word: "RACK",
		contexts: [
			"Put the spices on the shelf.",
			"He was tortured on the device.",
			"We ordered a cut of lamb for dinner.",
			"Set up the billiard balls.",
		],
		hint: "4 letters, Furniture / History / Food / Sports",
	},
	{
		word: "LOG",
		contexts: [
			"Throw another piece of wood on the fire.",
			"The captain wrote in the record book.",
			"Calculate the math function of the number.",
			"He slept like a dead weight.",
		],
		hint: "3 letters, Fuel / Nautical / Math / Simile",
	},
	{
		word: "STAMP",
		contexts: [
			"Put a postage sticker on the letter.",
			"Don't pound your foot on the floor.",
			"The passport has an entry mark.",
			"His face bears the mark of honesty.",
		],
		hint: "5 letters, Mail / Action / Travel / Metaphor",
	},
	{
		word: "STAKE",
		contexts: [
			"Drive the wooden stick into the ground.",
			"He put a large gamble on the horse.",
			"He has a share in the company.",
			"Drive the wood through the vampire's heart.",
		],
		hint: "5 letters, Construction / Gambling / Business / Mythology",
	},
	{
		word: "POLE",
		contexts: [
			"The flag flies from a tall stick.",
			"The explorers reached the North end of the earth.",
			"He is a person from Poland.",
			"The magnet has a North and South end.",
		],
		hint: "4 letters, Object / Geography / Demonym / Physics",
	},
	{
		word: "STAFF",
		contexts: [
			"The wizard carried a magic stick.",
			"The office employees are helpful.",
			"Write the music notes on the lines.",
			"Bread is the support of life.",
		],
		hint: "5 letters, Fantasy / Business / Music / Idiom",
	},
	{
		word: "ROD",
		contexts: [
			"He fished with a pole and reel.",
			"Spare the stick and spoil the child.",
			"The eye cell detects low light.",
			"The engine piston connects to the shaft.",
		],
		hint: "3 letters, Sports / Idiom / Anatomy / Mechanics",
	},
	{
		word: "BAR",
		contexts: [
			"Meet me at the pub for a drink.",
			"The window has a metal security rod.",
			"He studied the law to become a lawyer.",
			"He ate a chocolate candy.",
		],
		hint: "3 letters, Social / Security / Legal / Food",
	},
	{
		word: "BEAM",
		contexts: [
			"The roof is supported by a large timber.",
			"The flashlight shone a ray of light.",
			"She began to smile with happiness.",
			"The gymnast balanced on the wood.",
		],
		hint: "4 letters, Construction / Physics / Emotion / Sports",
	},
	{
		word: "JET",
		contexts: [
			"The plane flew faster than sound.",
			"A stream of water shot from the hose.",
			"She has beautiful black hair.",
			"The jewelry is made of black stone.",
		],
		hint: "3 letters, Aviation / Physics / Color / Geology",
	},
	{
		word: "STREAM",
		contexts: [
			"We fished in the small river.",
			"The video data flows over the internet.",
			"A flow of people left the stadium.",
			"She was placed in the top school track.",
		],
		hint: "6 letters, Geography / Technology / Action / Education",
	},
	{
		word: "RUSH",
		contexts: [
			"I am in a hurry to get there.",
			"The river flows past the reed plants.",
			"He felt a surge of adrenaline.",
			"He joined the college fraternity.",
		],
		hint: "4 letters, Time / Botany / Emotion / Social",
	},
	{
		word: "DRAIN",
		contexts: [
			"The water flowed down the pipe.",
			"The work will exhaust your energy.",
			"The loss of talent is a brain problem.",
			"Drink the glass to the bottom.",
		],
		hint: "5 letters, Plumbing / Health / Sociology / Action",
	},
];
