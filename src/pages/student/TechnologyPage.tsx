import { SubjectLayout } from "@/components/student/SubjectLayout";
import { GameCard } from "@/components/ui/game-card";
import { VillageLightUp, DebugDungeon, SystemBuilder } from "@/components/games";
import { Laptop, Zap, Bug, Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const techGames = [
  {
    title: "Village Light-Up",
    description: "Complete electrical circuits to light up the festival",
    emoji: "⚡",
    icon: Zap,
    path: "/student/technology/village-light-up",
    reward: 150,
    difficulty: "easy" as const,
  },
  {
    title: "System Builder",
    description: "Arrange steps in the correct order to make systems work",
    emoji: "🧩",
    icon: Cog,
    path: "/student/technology/system-builder",
    reward: 165,
    difficulty: "medium" as const,
  },
  {
    title: "Debug Dungeon",
    description: "Find and fix logical errors to escape the dungeon",
    emoji: "🐉",
    icon: Bug,
    path: "/student/technology/debug-dungeon",
    reward: 155,
    difficulty: "medium" as const,
  },
];

export default function TechnologyPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const handleGameSelect = (gameId: string) => {
    setActiveGame(gameId);
  };

  const handleGameClose = () => {
    setActiveGame(null);
  };

  return (
    <>
      <SubjectLayout
        title="Technology"
        icon={Laptop}
        iconColor="text-primary"
        progress={0}
        totalLessons={7}
        completedLessons={0}
        xpEarned={0}
      >
        <div className="slide-up" style={{ animationDelay: "150ms" }}>
          <h3 className="mb-4 font-heading font-semibold">Gamified Learning Missions</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Master technology concepts through interactive games. Each game teaches one key concept through hands-on learning.
          </p>
          <div className="space-y-3">
            {techGames.map((game, index) => (
              <div
                key={game.gameId}
                className="slide-up"
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <GameMissionCard
                  title={game.title}
                  description={game.description}
                  icon={game.icon}
                  reward={game.reward}
                  difficulty={game.difficulty}
                  status={game.status}
                  onClick={() => handleGameSelect(game.gameId)}
                />
              </div>
            ))}
          </div>
        </div>
      </SubjectLayout>

      {/* Game Components */}
      {activeGame === "lightup" && <VillageLightUp onClose={handleGameClose} />}
      {activeGame === "appbuilder" && <AppBuilderStudio onClose={handleGameClose} />}
      {activeGame === "debug" && <DebugDungeon onClose={handleGameClose} />}
      {activeGame === "system" && <SystemBuilder onClose={handleGameClose} />}
      {activeGame === "circuit" && <CircuitBuilder onClose={handleGameClose} />}
      {activeGame === "iolab" && <InputOutputLab onClose={handleGameClose} />}
      {activeGame === "network" && <NetworkBuilder onClose={handleGameClose} />}
    </>
  );
}
