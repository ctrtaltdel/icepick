import  React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, ScrollView, SafeAreaView, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
//npm install expo
//npm install @react-navigation/native
//npm install @react-navigation/native-stack
//npx expo install react-native-screens react-native-safe-area-context

function HomeScreen({navigation}) {
  return (
      <SafeAreaView style={styles.container}>
      <View style={[styles.menu, styles.one, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('One')}   style={[styles.one]}>Icebreakers Testing Testing Long Text</Text></View>
      <View style={[styles.menu, styles.two, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('Two')}   style={[styles.two]}>Pickup Lines</Text></View>
      <View style={[styles.menu, styles.three, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('Three')} style={[styles.three]}>Converstation Starters: Sports</Text></View>
      <View style={[styles.menu, styles.four, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('Four')}  style={[styles.four]}>Converstation Starters: Games</Text></View>
      <View style={[styles.menu, styles.five, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('Five')}  style={[styles.five]}>Get to Know You</Text></View>
      <View style={[styles.menu, styles.six, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('Six')}   style={[styles.six]}>Anti-Pickup Lines</Text></View>
      <View style={[styles.menu, styles.seven, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('Seven')} style={[styles.seven]}>Converstation Starters: Movies</Text></View>
      <View style={[styles.menu, styles.eight, {justifyContent: 'center'}]}><Text onPress={() => navigation.navigate('Eight')} style={[styles.eight]}>Details</Text></View>

    </SafeAreaView>
  );
}

function OneScreen() {

  const [iceBreaker, setIceBreaker] = useState('Your icebreaker will appear here...');

  const randomIceBreaker = () => {
      const iceBreakers = [
        "Hi, I'm [Your Name]. What's your name?",
        "What brings you here today?",
        "Have you been to an event like this before?",
        "What's your favorite book or movie?",
        "Do you have any exciting plans for the weekend?",
        "How do you like to spend your free time?",
        "What's the most interesting place you've traveled to?",
        "What's your favorite type of music?",
        "Are you a dog person or a cat person?",
        "What's your go-to comfort food?",
        "Do you have any hobbies or talents you're passionate about?",
        "If you could have dinner with anyone, living or dead, who would it be?",
        "What's the last show you binge-watched on Netflix?",
        "Are you a morning person or a night owl?",
        "What's the best piece of advice you've ever received?",
        "What's your dream job or career goal?",
        "Do you have any upcoming travel plans?",
        "What's your favorite outdoor activity or sport?",
        "Tell me about a recent adventure or memorable experience.",
        "If you could have one superpower, what would it be?",
        "What's the last thing that made you laugh really hard?",
        "What's your favorite season of the year and why?",
        "What's a skill or hobby you've always wanted to learn?",
        "Are you a coffee or tea person?",
        "Tell me something interesting about yourself that not many people know."];
      const iceBrkr = iceBreakers[Math.floor(Math.random() * iceBreakers.length)];
      setIceBreaker(iceBrkr);
    }

  return (
    <View style={styles.page}>
      <Text style={styles.textBox}>{iceBreaker}
      </Text>
      <View style={[styles.pressMe, styles.one, {justifyContent: 'center'}]}><Text onPress={randomIceBreaker} style={[styles.one]}>Press Here!</Text></View>
    </View>
  );
}
function TwoScreen() {

  const [iceBreaker, setIceBreaker] = useState('Your pickup line will appear here...');

  const randomPickupLine = () => {
    const pickupLines = [
      "Do you have a map? I keep getting lost in your eyes.",
      "Is your name Wi-Fi? Because I'm feeling a connection.",
      "Are you a magician? Every time I look at you, everyone else disappears.",
      "Are you a campfire? Because you're hot and I want s'more.",
      "Is your name Google? Because you have everything I've been searching for.",
      "Do you believe in love at first sight, or should I walk by again?",
      "Are you a time traveler? Because I can see you in my future.",
      "Is your name Cinderella? Because I've been searching for my princess.",
      "Do you have a name, or can I call you mine?",
      "Are you made of copper and tellurium? Because you're Cu-Te.",
      "You have a really warm and welcoming aura. It's a pleasure to meet you.",
      "I've been watching you from afar, and you have a captivating presence. Mind if I join you?",
      "I appreciate your sense of humor. It's not every day I meet someone who can make me laugh.",
      "You have a way of making everyone around you feel comfortable. That's a special quality.",
      "Your intelligence shines through. What's your favorite subject to discuss?",
      "I couldn't help but notice your smile. It's one of the first things that caught my eye.",
      "Your style is impeccable, and it says a lot about your personality. I'm intrigued.",
      "I love your energy. It's infectious, and I'd love to get to know you better.",
      "You seem like a genuinely kind person. Can I get to know you a bit more?",
      "I have to say, you have a magnetic personality. What's your secret.",
      "You have a very calming presence. It's a pleasure to be around you.",
      "Your confidence is inspiring. I'd love to learn more about what you do.",
      "I admire your determination. What's your biggest goal or aspiration right now?",
      "You have a great sense of empathy. It's clear you care about the people around you.",
      "I saw you helping that person earlier, and it was incredibly kind. Can I buy you a drink to show my appreciation?"
    ];
    const pickupLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    setIceBreaker(pickupLine);
  }

  return (
    <View style={styles.page}>
      <Text style={styles.textBox}>{iceBreaker}
      </Text>
      <View style={[styles.pressMe, styles.two, {justifyContent: 'center'}]}><Text onPress={randomPickupLine} style={[styles.two]}>Press Here!</Text></View>
      <StatusBar style="auto" />
    </View>    
      );
}
function ThreeScreen() {

  const [iceBreaker, setIceBreaker] = useState('Your sport conversation starter will appear here...');

  const randomSportsConversationStarter = () => {
      const sportsConversationStarters = [
        "What's your favorite sport to watch or play?",
        "Do you have a favorite sports team? If so, which one and why?",
        "Have you ever played any sports competitively or in a league?",
        "What's the most memorable sporting event you've attended or watched?",
        "Do you enjoy playing or watching individual sports or team sports more?",
        "Have you ever tried a sport that's considered unconventional or less common?",
        "Who is your sports idol or role model, and why do they inspire you?",
        "What's your opinion on the role of technology in sports, such as video replay and data analysis?",
        "Do you have any pre-game rituals or superstitions when watching your favorite team play?",
        "What's the most unusual or obscure sport you've ever encountered or heard of?",
        "Have you ever participated in a charity sports event, like a charity run or bike ride?",
        "What's your favorite sporting event to watch on TV, like the Super Bowl or the Olympics?",
        "If you could attend any major sporting event in the world, which one would it be?",
        "What's your favorite sport to play for exercise and staying active?",
        "Have you ever met a famous athlete or sports personality, and what was it like?",
        "Do you enjoy sports-related movies or documentaries? Any favorites?",
        "What's your take on the role of sports in promoting social change and activism?",
        "Have you ever tried sports like rock climbing, surfing, or skydiving?",
        "Do you have a favorite sports commentator or analyst, and why do you like them?",
        "What's your opinion on the use of performance-enhancing drugs in sports?",
        "Have you ever been to a live sports event, and what was your experience like?",
        "Do you enjoy playing sports video games, and if so, which ones are your favorites?",
        "What's your favorite sports-related memory from your childhood?",
        "Have you ever had the chance to meet your sports hero in person?",
        "Do you think college or university athletes should be paid for their participation?",
        "If you could be a professional athlete in any sport, which one would you choose and why?"
      ];
      const sportsConversationStarter = sportsConversationStarters[(Math.floor(Math.random() * sportsConversationStarters.length))];
      setIceBreaker(sportsConversationStarter);
    }

  return (
        <View style={styles.page}>
        <Text style={styles.textBox}>{iceBreaker}
        </Text>
        <View style={[styles.pressMe, styles.three, {justifyContent: 'center'}]}>
        <Text onPress={randomSportsConversationStarter} style={[styles.three]}>Press Here!</Text></View>
      </View>
  );
}
function FourScreen() {

  const [iceBreaker, setIceBreaker] = useState('Your game conversation starter will appear here...');

  const randomGameConversationStarter = () => {
    const gameConversationStarters = [
      "Do you enjoy playing board games, video games, or card games?",
      "What's your all-time favorite board game, and why do you love it?",
      "Have you ever competed in any gaming tournaments or competitions?",
      "What's the most challenging video game you've ever played, and did you beat it?",
      "Do you prefer cooperative games or competitive games when playing with friends?",
      "Have you ever created your own board game or game modifications?",
      "What's the most memorable gaming moment you've experienced?",
      "Do you have a favorite gaming console or platform?",
      "What's your go-to game for relaxing and unwinding after a long day?",
      "Are there any games you used to play as a child that you still enjoy today?",
      "If you could live in a video game world, which one would you choose, and why?",
      "Have you ever designed your own video game levels or maps?",
      "What's your take on the growing popularity of e-sports and professional gaming?",
      "Are you a fan of tabletop role-playing games like Dungeons & Dragons?",
      "What's the most underrated or lesser-known game that you think deserves more attention?",
      "If you could have any superpower from a video game, which one would it be?",
      "Do you enjoy multiplayer games or single-player experiences more?",
      "What's your opinion on the impact of games on cognitive skills and problem-solving?",
      "Have you ever participated in a game jam or game development project?",
      "What's your favorite gaming snack or beverage while playing?",
      "Is there a game that you find particularly therapeutic or stress-relieving?",
      "Do you enjoy exploring open-world games with expansive environments?",
      "What's the most impressive in-game achievement or trophy you've earned?",
      "If you could meet a game developer or designer, who would it be, and what would you ask them?",
      "Are there any upcoming game releases you're excited about or looking forward to playing?"
    ];
    const gameConversationStarter = gameConversationStarters[Math.floor(Math.random() * gameConversationStarters.length)];
    setIceBreaker(gameConversationStarter);
  }

  return (
    <View style={styles.page}>
      <Text style={styles.textBox}>{iceBreaker}
      </Text>
      <View style={[styles.pressMe, styles.four, {justifyContent: 'center'}]}>
      <Text onPress={randomGameConversationStarter} style={[styles.four]}>Press Here!</Text></View>
    </View>
  );
}
function FiveScreen() {

  const [iceBreaker, setIceBreaker] = useState('Your get to know you question will appear here...');

  const randomGettingToKnowYouQuestion= () => {
    const gettingToKnowYouQuestions = [
      "What's your proudest accomplishment in life so far?",
      "Is there a particular place in the world you'd love to visit but haven't had the chance to yet?",
      "How do you deal with stress or challenging situations?",
      "What's the most valuable lesson you've learned from a past relationship?",
      "Do you have a favorite quote or saying that resonates with you?",
      "What's a memorable childhood story or experience that shaped who you are today?",
      "Are there any cultural traditions or customs you hold dear to your heart?",
      "If you could have any job in the world for a day, what would it be?",
      "What's your favorite method for self-improvement or personal development?",
      "Is there a specific time or era in history that you find fascinating?",
      "What's your opinion on technology's role in our daily lives and society?",
      "If you could donate a large sum of money to a charitable cause, which one would you choose?",
      "Are there any hidden talents or skills you have that might surprise people?",
      "What's a goal you've set for yourself that you're actively working on achieving?",
      "How do you like to unwind and relax after a long and stressful day?",
      "Is there a place or activity that instantly brings you joy or calmness?",
      "What's the most unusual or exotic food you've ever tried and enjoyed?",
      "What's a pet peeve or habit that you can't stand in others?",
      "Do you have a favorite type of art, whether it's painting, sculpture, or music?",
      "How do you handle disagreements or conflicts in your relationships?",
      "If you had the power to make one positive change in the world, what would it be?",
      "Are there any unusual or unique travel destinations on your bucket list?",
      "What's your perspective on work-life balance and the pursuit of happiness?",
      "Is there a specific historical event that you find particularly fascinating or intriguing?",
      "If you could choose any mentor or role model for guidance, who would it be, and what advice would you seek from them?"
    ];
    const gettingToKnowYouQuestion = gettingToKnowYouQuestions[Math.floor(Math.random() * gettingToKnowYouQuestions.length)];
    setIceBreaker(gettingToKnowYouQuestion);
  }

  return (
    <View style={styles.page}>
      <Text style={styles.textBox}>{iceBreaker}
      </Text>
      <View style={[styles.pressMe, styles.five, {justifyContent: 'center'}]}>
      <Text onPress={randomGettingToKnowYouQuestion} style={[styles.five]}>Press Here!</Text></View>
    </View>
  );
}
function SixScreen() {

  const [iceBreaker, setIceBreaker] = useState('Your anti-pickup line will appear here...');

  const randomAntiPickupLine= () => {
  const antiPickupLines = [
    "Are you a traumatic memory from my past? Because I can't get you out of my mind.",
    "Are you a school on the weekend? Because you've got no class.",  
    "Hey girl, you shine as bright as a dumpster fire.",  
    "Are you a fire? Because you've got no chill.",  
    "Are you a bad wifi router? Because I'm feeling no connection.",  
    "Are you a clock? Because you tick me off.",  
    "Are you an uber driver? Because you're driving me away.",  
    "You remind me of my houseplants, because there's little to no life in you.",  
    "Are you JavaScript? Because you're very confusing and extremely frustrating.",  
    "Did you drink from the fountain of youth? Because you're acting like a child. ",  
    "Are you the square root of negative one? Because you're impossible."
  ];
    const antiPickupLine = antiPickupLines[Math.floor(Math.random() * antiPickupLines.length)];
    setIceBreaker(antiPickupLine); 
  }
  return (
    <View style={styles.page}>
      <Text style={styles.textBox}>{iceBreaker}
      </Text>
      <View style={[styles.pressMe, styles.six, {justifyContent: 'center'}]}>
      <Text onPress={randomAntiPickupLine} style={[styles.six]}>Press Here!</Text></View>
    </View>
  );
}
function SevenScreen() {

  const [iceBreaker, setIceBreaker] = useState('Your movie conversation starter will appear here...');

  const randomMovieConversationStarter = () => {
      const movieConversationStarters = [
        "What's the last movie you watched, and what did you think of it?",
        "Do you have a favorite movie genre, or do you enjoy a mix of genres?",
        "Is there a movie that had a significant impact on your life or changed your perspective?",
        "Are there any classic movies you've always wanted to watch but haven't seen yet?",
        "Do you prefer going to the cinema or watching movies at home, and why?",
        "What's the best film you've seen recently that you'd recommend to others?",
        "Are there any movie franchises or series you're a big fan of?",
        "Do you enjoy watching foreign films, and if so, do you have any favorites?",
        "Have you ever met a celebrity or been to a film premiere or festival?",
        "What's your all-time favorite movie, and what makes it so special to you?",
        "Are there any directors or filmmakers whose work you particularly admire?",
        "Do you enjoy analyzing movies and their deeper meanings, or do you watch for pure entertainment?",
        "What's your go-to movie snack or beverage when you're watching a film?",
        "Are there any movie soundtracks or scores that you love listening to outside of the film?",
        "Have you ever read a book and then watched its movie adaptation? How did they compare?",
        "If you could be a character from any movie, who would you choose, and why?",
        "Are there any movie quotes that you find particularly memorable or inspirational?",
        "What's your take on the debate between 3D and traditional 2D movies?",
        "Do you enjoy watching documentaries? If so, what's one that left a lasting impression?",
        "Have you ever participated in a movie marathon, and which movies did you include?",
        "Is there a film that you found overrated or just didn't understand the hype around?",
        "What's your opinion on movie remakes and reboots? Are there any you think improved upon the original?",
        "Do you have a favorite movie from your childhood that you still enjoy watching?",
        "Have you ever been to a themed movie night or a movie screening event?",
        "If you could create your own movie, what genre and storyline would it have?"
      ];
      const movieConversationStarter = movieConversationStarters[Math.floor(Math.random() * movieConversationStarters.length)];
      setIceBreaker(movieConversationStarter);
    }

  return (
    <View style={styles.page}>
      <Text style={styles.textBox}>{iceBreaker}
      </Text>
      <View style={[styles.pressMe, styles.seven, {justifyContent: 'center'}]}>
      <Text onPress={randomMovieConversationStarter} style={[styles.seven]}>Press Here!</Text></View>
    </View>
  );
}
function EightScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.textBox}>Details! Info! Put it Here!
      </Text>
      <Text style={[styles.pressMe, styles.one]}>Press Here!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}} />
        <Stack.Screen name="One" component={OneScreen} options={{title: "Icebreakers"}}/>
        <Stack.Screen name="Two" component={TwoScreen} options={{title: "Pickup Lines"}}/>
        <Stack.Screen name="Three" component={ThreeScreen} options={{title: "Sports"}}/>
        <Stack.Screen name="Four" component={FourScreen} options={{title: "Games"}}/>
        <Stack.Screen name="Five" component={FiveScreen} options={{title: "Get to Know You"}}/>
        <Stack.Screen name="Six" component={SixScreen} options={{title: "Anti Pickup Lines"}}/>
        <Stack.Screen name="Seven" component={SevenScreen} options={{title: "Movies"}}/>
        <Stack.Screen name="Eight" component={EightScreen} options={{title: "Details"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pressMe: {
    fontSize: 20,
    color: "white",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 40,
    padding: 20,
    margin: 40,
    marginBottom: 80,
    ...Platform.select({
      ios: {
        lineHeight: 140,
      },
      android: {},
    }),
    textAlign: "center",
    textAlignVertical: "center",
  },
  page: {
    flex:1,
    backgroundColor: '#bababa',

  },
  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    margin: 20,
    padding: 15,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#bababa",
    flexWrap: "wrap",
  },
  menu: {
    // flex:1 ,
    color: "white",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 40,
    height: '20%',
    width: '42%',
    margin: '4%',
    paddingLeft: '5%',
    paddingRight: '5%',
    ...Platform.select({
      ios: {
        lineHeight: 140,
        textAlign: "center",
        textAlignVertical: "center",
      },
      android: {},
    }),
    textAlign: "center",
    textAlignVertical: "center",
  },
  one: {
    backgroundColor: "#00d8d8",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
  two: {
    backgroundColor: "#00c4c4",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
  three: {
    backgroundColor: "#009d9d",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
  four: {
    backgroundColor: "#007676",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
  five: {
    backgroundColor: "#11c7c7",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
  six: {
    backgroundColor: "#00b1b1",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
  seven: {
    backgroundColor: "#008a8a",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
  eight: {
    backgroundColor: "#006262",
    borderRadius: 40,
    color: "white",
    textAlign: "center",
  },
});


export default App;