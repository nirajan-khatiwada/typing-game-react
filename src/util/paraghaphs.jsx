const englishParagraphs = [
    "The golden rays of the early morning sun streamed through the window, casting intricate patterns of light and shadow on the wooden floor, as birds chirped merrily in the distance, welcoming the new day with their melodious songs.",
    "She carefully arranged the books on the shelf, making sure each one was perfectly aligned, while her thoughts drifted back to the stories hidden within their worn pages, each telling a tale of adventure, mystery, and romance.",
    "As the train sped through the countryside, fields of golden wheat swayed gently in the breeze, stretching as far as the eye could see, while the distant mountains stood tall and proud, their peaks shrouded in a misty haze.",
    "The aroma of freshly baked bread filled the kitchen, mingling with the scent of cinnamon and vanilla, as she carefully removed the tray from the oven, her heart swelling with pride at the sight of the perfectly golden loaves.",
    "Walking along the winding path, she marveled at the towering trees that lined the trail, their branches forming a natural canopy overhead, filtering the sunlight and creating a serene, almost magical atmosphere.",
    "The distant hum of the city could be heard faintly through the open window, blending with the occasional honk of passing cars and the chatter of pedestrians, painting a lively picture of urban life.",
    "The waves rolled in with rhythmic precision, their white crests crashing against the shore, leaving behind trails of foam that dissolved into the wet sand, as the salty sea breeze filled the air with its invigorating scent.",
    "He sat by the fireplace, staring into the flickering flames, lost in thought as memories of his childhood flooded back, each one a bittersweet reminder of days gone by and lessons learned along the way.",
    "The orchestra played a haunting melody, the violins soaring with emotion while the piano provided a steady rhythm, evoking feelings of nostalgia and longing in the hearts of the audience.",
    "The mountain trail stretched endlessly before them, winding its way through dense forests and rocky outcrops, offering breathtaking views of the valley below and the snow-capped peaks in the distance.",
    "The bustling market was alive with color and sound, vendors calling out their wares, customers haggling for the best prices, and the aroma of freshly cooked street food filling the air with an irresistible allure.",
    "The library was a haven of quiet and solitude, rows of towering bookshelves filled with countless volumes, each offering a gateway to a different world, waiting to be discovered by curious minds.",
    "The garden was in full bloom, vibrant flowers of every hue swaying gently in the breeze, while butterflies flitted from one blossom to the next, creating a scene straight out of a fairy tale.",
    "The sound of raindrops tapping against the windowpane was a soothing lullaby, creating a cozy atmosphere inside the house, where she sat curled up with a good book and a steaming cup of tea.",
    "The old lighthouse stood tall against the backdrop of the stormy sky, its beacon shining brightly through the darkness, guiding weary sailors safely to shore with its unwavering light.",
    "The festival brought the entire town together, with streets lined with colorful decorations, food stalls offering delectable treats, and musicians playing lively tunes that filled the air with joy.",
    "The crisp autumn air carried the scent of fallen leaves, as children bundled up in warm sweaters chased each other through the park, their laughter echoing in the cool breeze.",
    "She watched as the artist meticulously painted each stroke on the canvas, blending colors and textures with such precision that the final piece seemed to come alive with emotion.",
    "The heavy wooden door creaked open slowly, revealing a grand hall adorned with intricate chandeliers, plush velvet curtains, and ornate furniture that spoke of a bygone era.",
    "The clouds drifted lazily across the sky, their shapes constantly shifting and changing, as if they were telling a silent story to anyone patient enough to watch.",
    "The bustling airport was filled with travelers rushing to catch their flights, their suitcases rolling noisily behind them, while announcements echoed through the crowded terminals.",
    "The playful puppies tumbled around in the grass, their tails wagging excitedly as they discovered new scents and chased after fluttering butterflies in the warm afternoon sun.",
    "The teacher's voice carried across the classroom, explaining complex equations with such clarity and enthusiasm that even the most uninterested students found themselves drawn in.",
    "The towering skyscrapers cast long shadows over the city streets below, where people hurried about their business, weaving through the traffic and the constant hum of urban life.",
    "The gentle rocking of the boat lulled him into a peaceful slumber, the rhythmic sound of the water lapping against the hull providing a soothing backdrop to his dreams.",
    "The aroma of freshly brewed coffee filled the cozy café, where friends gathered to chat and strangers found solace in the comforting ambiance and the warm embrace of their favorite beverages.",
    "The detective studied the crime scene with a keen eye, noting every detail, from the placement of the furniture to the faint traces of footprints on the dusty floor.",
    "The soft glow of the streetlights illuminated the quiet neighborhood, casting long shadows that danced gently in the breeze as a lone figure walked down the empty sidewalk.",
    "The roar of the waterfall echoed through the canyon, its cascading waters crashing against the rocks below and sending up a fine mist that glistened in the sunlight.",
    "The abandoned house stood in eerie silence, its broken windows and crumbling walls telling stories of a once-thriving home now left to the ravages of time.",
    "The excitement in the air was palpable as the countdown to the New Year's fireworks began, with families and friends eagerly anticipating the dazzling display of colors in the night sky.",
    "The scent of blooming jasmine filled the garden, mingling with the cool evening breeze, as fireflies danced among the foliage, creating a mesmerizing display of light.",
    "The museum housed countless artifacts, each with its own history and significance, offering visitors a glimpse into the fascinating world of ancient civilizations and their remarkable achievements.",
    "The young pianist's fingers moved gracefully across the keys, each note resonating through the concert hall and weaving a beautiful melody that left the audience in awe.",
    "The narrow alleyways of the old town were lined with quaint shops and bustling cafés, their colorful awnings and inviting aromas drawing tourists and locals alike.",
    "The towering cliffs rose majestically above the ocean, their rugged surfaces standing as a testament to the power of nature and the passage of time.",
    "The scientist meticulously recorded each observation, carefully noting the smallest changes in the experiment, driven by an insatiable curiosity to uncover new knowledge.",
    "The wind whispered through the tall grass, carrying with it the sweet scent of wildflowers and the distant sound of a babbling brook meandering through the valley.",
    "The campsite was a flurry of activity as campers gathered around the fire, roasting marshmallows and sharing stories under the vast, star-studded sky.",
    "The towering oak tree stood proudly in the center of the park, its gnarled branches offering shade and shelter to those seeking a moment of quiet reflection."
  ];  
const nepaliUnicodeParagraphs = [
  "एक राज्यमा अकबर नाम गरेका राजा बस्दथे । त्यो राज्यमा सबैले न्याय पाउंथे, र अपराधीले दण्ड पानी पाउंथे ।",
  "अकबर राजालाई राम्रो सल्हाहा दिन त्यहाँ उनको मन्त्री बिरबल थियो । एक पटक, एक धनी व्यापारी राजा अकबरको दरबारमा मद्दत लिन आएछ ।",
  "त्यो ब्यापारीको घरमा चोरी भएको रहेछ र उसलाई शंका रहेछ कि उसको अमुल्य सामान कुनै न कुनै एक नोकरले चोरेको हो ।",
  "धेरै सोधपुछ र तलासी गर्दा पनि उसले आफ्नो सामान नभेटाएर चोर पत्ता लगाउनु पर्यो भन्दै सहयोग माग्न आएको रहेछ ।",
  "सबै कुरा बुझेर बीरबलले एउटा चतुर योजनाको बनायो र व्यापारीका नोकरहरुलाई बोलाए । उसले प्रत्येक नोकरलाई एउटै लम्बाइको एक-एक ओटा लाठी दियो ।",
  "अनि उनले उनीहरुलाई भने: “तिमीहरुमै एक जना चोर छौ । मैले सबैलाई एउटै लम्बाईको लाठी दिएको छु।",
  "जसले त्यो सामान चोरेको हो, उसको लाठी भोलि दुइ इन्च बढ्नेछ। भोलि सबैको लाठी नाप्छु र चोर पत्ता लगाउँछु ।",
  "भोलिपल्ट बीरबलले नोकरहरुलाई फेरि बोलाए र पालै पालो लाठीको नाप लिगे । उनले देखे कि एक नोकरको लाठी अरु सबैको लाठी भन्दा दुई इन्च छोटो थियो ।",
  "मूर्ख चोरले, बिरबलले भनेको कुरा सत्य ठानेर, भोलि दुइ इन्च बढ्ला भनेर आफ्नो लाठीलाई दुई इन्च छोटो काटेको थियो ।",
  "यसरी बिरबले चोर पत्ता लगाए र अकबर राजाले चोरलाई सहि सजाय दियो।",
  "एक पटकको कुरा हो, त्यहाँ अलादीन नाम गरेको एक गरिब केटो थियो । उनी आफ्नी आमासँगै बस्थ्यो । एक दिन त्यहाँ, एक धनी अपरिचित मानिस अलादीनको घर मा आयो ।",
  "त्यो मानिसले अलादीनकी आमालाई भन्यो “म एक व्यापारी हुँ । म अरबबाट आएको हुँ । म तपाईंको केटालाई काममा लैजान चाहन्छु ।",
  "उस्को काम अनुसार धेरै पैसा तिर्नेछु अनि तिमी गरीब हुनु पर्ने छैन । अलादीनकी आमा चाँडै सहमत भए किनकि उनीहरूलाई वास्तवमै पैसाको आवश्यक थियो।",
  "तर उनीलाई थाहा थिएन कि त्यो व्यापारी हुँ भन्ने मानिस वास्तवमा एक जादूगर थियो ।",
  "भोलिपल्ट, अलादीनले आफ्ना सामानहरू राख्यो र व्यापारीसँगै गयो । तिनीहरूले धेरै घण्टा सम्म यात्रा गरे ।",
  "एक ठाउँमा गएर व्यापारी रोकियो । अलादीन छक्क परे, किनकि त्यो एक्लो ठाउँ थियो । त्यहाँ केही पनि थिएन र कोही पनि थिएन ।",
  "व्यापारीले आफ्नो खल्तीबाट केही रंगीन पाउडर निकाले । त्यसपछि उसले त्यसलाई भुइँमा फालिदियो र त्यहाँ वरिपरि धुवाँ आयो ।",
  "धुवाँ हटेपछि, अलादीनले जमीनमा एउटा गुफा जस्तो देखे । व्यापारीले अलादिनलाई ओडार भित्र जान भन्यो ।",
  "तिमीले भित्र धेरै सुन देख्नेछ, जुन तिमीले तिम्रो जीवनमा कैले पनि देख्न पाएको थिएन । तिमीले चाहेको जति सबै लिगेहुन्छ । ",
  "तर गुफा भित्र तिमीले एक पुरानो बत्ती देख्नेछौ । मात्र त्यो बत्ती मेरो लागि ल्याईदेऊ ।",
];

export {englishParagraphs,nepaliUnicodeParagraphs}