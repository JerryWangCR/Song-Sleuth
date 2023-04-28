import { Button } from "@ui-kitten/components";

interface SongButtonProps {
  songName: string;
  nextQuestion: () => void;
  answer: string;
  setUserAnswer: (song: string) => void;
  setPressed: (press: boolean) => void;
}

export const SongButton: React.FC<SongButtonProps> = ({
  songName,
  nextQuestion,
  answer,
  setUserAnswer,
  setPressed,
}) => {
  return (
    <Button
      onPress={() => {
        setPressed(true);
        setUserAnswer(songName);
        if (songName == answer) {
          console.log(
            `User Answer: ${songName} | Actual Answer: ${answer} -> Correct!`
          );
        } else {
          console.log(
            `User Answer: ${songName} | Actual Answer: ${answer} -> Wrong!`
          );
        }

        setTimeout(nextQuestion, 2000);
      }}
      style={{ margin: 10, width: 200, height: 100 }}
    >
      {songName}
    </Button>
  );
};
