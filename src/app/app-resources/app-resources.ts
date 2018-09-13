import { AppResource } from "./app-resource"

export const APP_RESOURCES: AppResource[] = [
    { 
        "name" : "Trivia Competiton",
        "url": "http://10.207.80.227:4200",
        "pic": "assets/images/trivia.png",
        "description": "Test your knowledge",
        "active": true
    
    },
    { 
        "name" : "Emotional Recognition",
        "url": "http://localhost:8000",
        "pic": "assets/images/emotional.png",
        "description": "See how you're feeling today!",
        "active": true
    
    },
    { 
        "name" : "Value Bird",
        "url": "http://localhost:8800",
        "pic": "assets/images/game.png",
        "description": "Collect Dell Values!!",
        "active": true
    
    },
    { 
        "name" : "Skills Portal",
        "url": "",
        "pic": "assets/images/skills.png",
        "description": "Register your skills",
        "active": false
    
    },
    { 
        "name" : "Pictionary",
        "url": "",
        "pic": "assets/images/pictionary.png",
        "description": "Try out your drawing skills!",
        "active": false
    
    },
    { 
        "name" : "Suggestion Box",
        "url": "",
        "pic": "assets/images/suggestion.png",
        "description": "Let us know what you need!",
        "active": false
    
    }
]