# world-piece
You want a piece of me!?

A thinking-person's first person shooter game.

## Game Scenario &amp; Objective
You control a Piece Keeper robot and manage its resources, mass and energy, for offense and defense. Your robot fights other Piece Keepers robots, which are controlled by humans and by computers. Your goal is to win your fights by destroying your robot opponents. You start each round with a limited amount of mass and energy. Each attack and each defense consumes mass, energy, or both. When you are out of energy or mass before your opponent runs out, you lose.

##
Staged game development plan:

### [Version 0.1]
- 2 players only
- Turn-based
- &quot;1-D&quot; game: All action takes place on a line between robots, who can't move. No aiming is required.
- One attack method: missle, costs energy and mass to build. Can build up to one per round, and fire up to two per round.
- One defense method: shield, costs mass + small/medium amount of energy to build. Can build at most one per round.
- If missle hits robot, robot loses mass and energy.
- If missle hits shield, shield loses mass.

### [Version 0.2]
Diffs:
- Missle consumes energy and mass to build, then consumes energy to target/fire.
- Shield absorbs part of a missle impact's energy, which is added to the robot's energy bank. Shields can be rebuilt, costing mass &amp; energy.

### [Version 0.3]
Diffs:
- &quot;2-D&quot;: missles must be targeted (left/right)
- A robot can evade a missle by moving left or right, and can move shields left or right, but moving either costs energy, and that energy cost is proportional to the mass being moved.
- Turns are simultaneous. Players must now guess where to aim missles (straight, left, or right) since the opponent may have decided to move.

### [Version 0.4]
- In-game money:
  - Players can buy mass and energy before each fight.
  - Players can buy a generator before a fight; they add energy to the robot each turn.
- Generators are statinary, and can be destroyed by missles. Shields can be built (at a cost) and placed in front of generators.

### [Version 0.5]
-
-
