import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PollOption } from ".";

export const Option: React.FC<{
  option: PollOption;
  totalVotes: number;
  onVote: (optionId: number) => void;
  hasVoted: boolean;
  isVotedChoice: boolean;
}> = ({ option, totalVotes, onVote, hasVoted, isVotedChoice }) => {
  return (
    <div
      className={cn(
        "relative h-24 w-[49%]",
        hasVoted && !isVotedChoice && "opacity-50",
      )}
    >
      <Button
        onClick={() => onVote(option.id)}
        disabled={hasVoted}
        variant={"secondary"}
        haveOverlay
        className={cn(
          "absolute left-0 top-0 h-full w-full border border-black drop-shadow-lg",
          !isVotedChoice && "opacity-70",
        )}
      >
        {hasVoted && (
          <div
            className="absolute inset-0 rounded-lg border border-status-offline bg-gradient-to-r from-white to-status-online drop-shadow-2xl transition-all duration-300"
            style={{
              width: `${
                totalVotes > 0 ? (option.votes.length / totalVotes) * 100 : 0
              }%`,
            }}
          ></div>
        )}
      </Button>
      <div className="absolute left-5 top-5 z-10">
        <p className="text-black">{option.description}</p>
      </div>

      {hasVoted && (
        <div className="z-2 absolute right-10 top-8 rounded-lg bg-gray-300 p-2 text-sm font-semibold">
          {option.votes.length} / {totalVotes}
        </div>
      )}
    </div>
  );
};
