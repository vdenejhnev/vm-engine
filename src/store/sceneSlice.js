import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import voice from "../assets/audio/voice.mp3";

import back from "../assets/img/back_img.png";
import backMap from "../assets/img/back_img_map.png";

export const sceneSlice = createSlice({
    name: 'scene',
    initialState: {
        steps: [
                {
                    id: 0,
                    name: "Back",
                    time: "00:00:00,000",
                    content: back,
                    tag: "background_image",
                    setting: backMap,
                },
                {
                    id: 1,
                    name: "Voice",
                    time: "00:00:00,000",
                    content: voice,
                    tag: "voice_1",
                    setting: "",
                },
                {
                    id: 2,
                    name: "Music",
                    time: "00:00:00,000",
                    content: "https://nakid.world/novel/1.sound/gg/the-river-18557.mp3",
                    tag: "back_music",
                    setting: "loop"
                },
                {
                    id: 3,
                    name: "Диктор",
                    time: "00:00:00,000 --> 00:00:03,500",
                    content: "Это спальная комната, тут ничего не происходит",
                    tag: "",
                    setting: "voice_1",
                },
                {
                    id: 4,
                    name: "Диктор",
                    time: "00:00:03,900 --> 00:00:07,500",
                    content: "Ровно до тех пор, пока ты не посмотришь на часы",
                    tag: "",
                    setting: "voice_1"
                },
                {
                    id: 5,
                    name: "Sprite",
                    time: "00:00:00,000 --> 00:00:00,000",
                    content: "https://nakid.world/novel/gg_hand_alarm.png",
                    tag: "hand",
                    setting: "0.7"
                },
                {
                    id: 6,
                    name: "Игрок",
                    time: "00:00:7,900 --> 00:00:10,300",
                    content: "Вот чёрт, мне пора вставать!",
                    tag: "",
                    setting: "voice_1"
                },
                {
                    id: 7,
                    name: "Игрок",
                    time: "00:00:10,500 --> 00:00:12,800",
                    content: "Иначе я совсем опоздаю!",
                    tag: "",
                    setting: "voice_1"
                },
                {
                    id: 8,
                    name: "Игрок",
                    time: "00:00:13,300 --> 00:00:15,800",
                    content: "Сегодня первый день в моей новой школе",
                    tag: "",
                    setting: "voice_1"
                },
                {
                    id: 9,
                    name: "Игрок",
                    time: "00:00:16,000 --> 00:00:19,000",
                    content: "Я должен показать себя с лучшей стороны!",
                    tag: "",
                    setting: "voice_1"
                },
                {
                    id: 10,
                    name: "Игрок",
                    time: "00:00:19,000 --> 00:00:21,500",
                    content: "А не со стороны прогульщика и лентяя...",
                    tag: "",
                    setting: "voice_1"
                },
        ],
        sceneOptions: {
            backgroundImgUrls: [

            ],
            tracks: [

            ],
        },
        sceneContent: {
            replica: {
                name: "",
                colorHex: "",
                text: "",
            },
            sprites: [

            ],
            voices: [
                
            ]
        },
        currentStepNumber: 0,
        renderedStepNumber: -1,
        loading: false,
        autoplay: false,
        currentStepTime: 0,
        error: "",
    },

    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStepNumber = action.payload;
        },

        setRenderedStep: (state, action) => {
            state.renderedStepNumber = action.payload;
        },

        stepForward: (state) => {
            if (state.currentStepNumber < (state.steps.length - 1)) {
                while (true) {
                    state.currentStepNumber++;
                    let currentStepName = state.steps[state.currentStepNumber].name;
                    if (state.currentStepNumber == (state.steps.length - 1)) break;
                    if (
                        currentStepName !== "Back" &&
                        currentStepName !== "Music" &&
                        currentStepName !== "Sprite" &&
                        currentStepName !== "Voice"
                    ) break;
                }
            }
            sceneSlice.caseReducers.renderForward(state);
        },

        stepBack: (state, action) => {
            if (state.currentStepNumber > 0) {
                while (true) {
                    state.currentStepNumber--;
                    let currentStepName = state.steps[state.currentStepNumber].name;
                    if (state.currentStepNumber === 0) break;
                    if (
                        currentStepName !== "Back" &&
                        currentStepName !== "Music" &&
                        currentStepName !== "Sprite" &&
                        currentStepName !== "Voice"
                    ) break;
                }
                
                if (state.currentStepNumber === 0) {
                    let currentStepName = state.steps[state.currentStepNumber].name;
                    while (
                        currentStepName === "Back" ||
                        currentStepName === "Music" ||
                        currentStepName === "Sprite" ||
                        currentStepName === "Voice"
                    ) {
                        state.currentStepNumber++
                        currentStepName = state.steps[state.currentStepNumber].name;
                    }
                }
            }
            sceneSlice.caseReducers.renderBack(state);
        },

        renderForward: (state) => {
            for (; state.renderedStepNumber < state.currentStepNumber; state.renderedStepNumber++) {
                let currentStep = state.steps[state.renderedStepNumber + 1];
                switch (currentStep.name) {
                    case "Back":
                        state.sceneOptions.backgroundImgUrls.push({
                            img: currentStep.content,
                            map: currentStep.setting,
                        });
                        break;
                    case "Music":
                        state.sceneOptions.tracks.push({
                            src: currentStep.content,
                            tag: currentStep.tag,
                            volume: 0,
                        });
                        break;
                    case "Sprite":
                        state.sceneContent.sprites.push({
                            tag: currentStep.tag,
                            spriteUrl: currentStep.content,
                            positionX: 0,
                            scale: 50,
                            order: 1
                        });
                        break;
                    case "Voice":
                        state.sceneContent.voices.push({
                            tag: currentStep.tag,
                            src: currentStep.content,
                            volume: 1,
                            play: false,
                            isSkip: false,
                            playFrom: 0,
                            playTo: 0
                        });
                        break;
                    default:
                        state.sceneContent.replica.name = currentStep.name;
                        state.sceneContent.replica.colorHex = "#000";
                        state.sceneContent.replica.text = currentStep.content;
                        break;
                }
                let voiceTime = currentStep.time;
                voiceTime = voiceTime.split("-->");
                if (voiceTime.length === 2) {
                    let playVoiceFrom = voiceTime[0];
                    let playVoiceFromNumber = 0;
                    
                    let playVoiceTo = voiceTime[1];
                    let playVoiceToNumber = 0;

                    playVoiceFrom = playVoiceFrom.split(":");
                    playVoiceTo = playVoiceTo.split(":");
                    
                    playVoiceFrom[2] = playVoiceFrom[2].replace(/,/g, ".");
                    playVoiceTo[2] = playVoiceTo[2].replace(/,/g, ".");

                    playVoiceFromNumber += parseFloat(playVoiceFrom[2]);
                    playVoiceToNumber += parseFloat(playVoiceTo[2]);

                    state.sceneContent.voices.map((item) => {
                        if (item.tag === currentStep.setting) {
                            item.playFrom = playVoiceFromNumber;
                            item.playTo = playVoiceToNumber;
                            item.play = true;
                        }
                        return item;
                    });

                    state.currentStepTime = playVoiceToNumber - playVoiceFromNumber;
                }
            }
        },

        renderBack: (state) => {
            for (; state.renderedStepNumber > state.currentStepNumber; state.renderedStepNumber--) {
                let currentStep = state.steps[state.renderedStepNumber - 1];
                switch (currentStep.name) {
                    case "Back":
                        state.sceneOptions.backgroundImgUrls = state.sceneOptions.backgroundImgUrl.pop();
                        break;
                    case "Music":
                        state.sceneOptions.tracks = state.sceneOptions.tracks.filter((item) => item.tag !== currentStep.tag);
                        break;
                    case "Sprite":
                        state.sceneContent.sprites = state.sceneContent.sprites.filter((item) => item.tag !== currentStep.tag);
                        break;
                    case "Voice":
                        state.sceneContent.voices = state.sceneContent.voices.filter((item) => item.tag !== currentStep.tag);
                    default:
                        state.sceneContent.replica.name = currentStep.name;
                        state.sceneContent.replica.colorHex = "#000";
                        state.sceneContent.replica.text = currentStep.content;
                        break;
                }
                let voiceTime = currentStep.time;
                voiceTime = voiceTime.split("-->");
                if (voiceTime.length === 2) {
                    let playVoiceFrom = voiceTime[0];
                    let playVoiceFromNumber = 0;
                    
                    let playVoiceTo = voiceTime[1];
                    let playVoiceToNumber = 0;

                    playVoiceFrom = playVoiceFrom.split(":");
                    playVoiceTo = playVoiceTo.split(":");
                    
                    playVoiceFrom[2] = playVoiceFrom[2].replace(/,/g, ".");
                    playVoiceTo[2] = playVoiceTo[2].replace(/,/g, ".");

                    playVoiceFromNumber += parseFloat(playVoiceFrom[2]);
                    playVoiceToNumber += parseFloat(playVoiceTo[2]);

                    state.sceneContent.voices.map((item) => {
                        if (item.tag === currentStep.setting) {
                            item.playFrom = playVoiceFromNumber;
                            item.playTo = playVoiceToNumber;
                            item.play = true;
                        }
                        return item;
                    });
                }
            }
        },

        loadStep: (state, action) => {
            state.currentStepNumber = action.payload;

            if (state.currentStepNumber > state.renderedStepNumber) sceneSlice.caseReducers.renderForward(state);
            else sceneSlice.caseReducers.renderBack(state);
        },

        setLoadIsTrue: (state) => {
            state.isLoaded = true;
        },

        cleanSteps: (state) => {
            state.currentStepNumber = 0;
            state.renderedStepNumber = -1;
        },

        stopPlayVoice: (state, action) => {
            state.sceneContent.voices.map((item) => {
                if (item.tag === action.payload) item.play = false;
                return item;
            })
        },

        setAutoPlay: (state, action) => {
            state.autoplay = action.payload;
        },

        extraReducers: (builder) => {
            builder.addCase(fetchScene.pending, (state) => {
                state.loading = true;
            });
            builder.addCase(fetchScene.fulfilled, (state, action) => {
                state.loading = false;
                state.steps = action.payload;
            });
            builder.addCase(fetchScene.rejected, (state, action) => {
                state.loading = false;
                state.steps = [];
                state.error = action.error.message;
            });
        },
    },
});

export const fetchScene = createAsyncThunk("scene/fetchScene", async () => {
    let request = fetch("https://novel.nakid.world/stat.php?id=2&lang=rus", {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
        .then(responce => responce.json());
    console.log(request);
    return request;
})

export const { setCurrentStep, setRenderedStep, stepForward, stepBack, cleanSteps, loadStep, stopPlayVoice, setAutoPlay } = sceneSlice.actions;

export default sceneSlice.reducer;
