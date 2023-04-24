import { Button } from "@ui-kitten/components";

interface SongButtonProps {
  songName: string;
}
export const SongButton: React.FC<SongButtonProps> = ({ songName }) => {
  return (
    <Button
      onPress={() => {
        console.log(songName);
      }}
      style={{ margin: 10, width: 200, height: 100 }}
    >
      {songName}
    </Button>
  );
};
