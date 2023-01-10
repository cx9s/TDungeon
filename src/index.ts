import type { NewGame, Act } from "./TDungeon";

type Step1 = Act<NewGame, "left">;
type Step2 = Act<Step1, "Open the drawer">;
type Step3 = Act<Step2, "forward">;
type Step4 = Act<Step3, "forward">;
type Step5 = Act<Step4, "Exit from where you came">;
type Step6 = Act<Step5, "right">;
type Step7 = Act<Step6, "right">;
type Step8 = Act<Step7, "Use the Small key">;
type Step9 = Act<Step8, "left">;
type Step10 = Act<Step9, "left">;
type Step11 = Act<Step10, "forward">;
type Step12 = Act<Step11, "Put on the mask">;

// TDungeon is an adventure game that runs on Typescript's type system
// Use Act<Game, Action> to move through the dungeon and perform actions
