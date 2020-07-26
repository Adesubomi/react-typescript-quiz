import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    type: string;
    difficulty: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {

    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=18`;

    const data = await(await fetch(endpoint)).json();
    // console.log(data);

    return data.results.map((question: Question) =>  ({
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer]
            ),
        })
    );
};