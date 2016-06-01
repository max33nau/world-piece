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
- Client-side only. Human players take turns using the browser UI on one laptop.
- &quot;1-D&quot; game: All action takes place on a line between robots, who can't move. No aiming is required.
- One attack method: missle, costs energy and mass to build. Can build up to one per round, and fire at most one per round. Only one type of missle can be built (same damage capability).
- One defense method: shield, costs mass + small/medium amount of energy to build. Can build at most one per round. Only one type of shield can be built (same mass / defense capability).
- If missle hits robot, robot loses mass &amp; energy.
- If missle hits shield, shield loses mass.

### [Version 0.2]
Diffs:
- Server code to network two players (browsers) together
- Add basic registration, authenticate password-based sign-in
- Add "Best fighting record" leaderboard

### [Version 0.3]
Diffs:
- Missle consumes energy and mass to build, then consumes energy to target/fire.
- Can fire at most three missles per round.
- Shield absorbs part of a missle impact's energy, which is added to the robot's energy bank. Shields can be rebuilt, costing mass &amp; energy.

### [Version 0.4]
Diffs:
- &quot;2-D&quot;: missles must be targeted (left/right)
- A robot can evade a missle by moving left or right, and can move shields left or right, but moving either costs energy, and that energy cost is proportional to the mass being moved.
- Turns are simultaneous. Players must now guess where to aim missles (straight, left, or right) since the opponent may have decided to move.

### [Version 0.5]
- In-game money:
  - Players can buy mass and energy before each fight.
  - Players can buy a generator before a fight; they add energy to the robot each turn.
- Generators are stationary, and can be destroyed by missles. Shields can be built (at a cost) and placed in front of generators.

### [Version 0.6]
- Allow variable-sized shields. Smaller shields cost less to build, position, and move, but absorb less damage.
- Allow variable-sized missles. Smaller missles cost less to build and target/fire, but do less damage.
- As a robot looses mass, its building rate reduces (think "less usable muscle"). Its maximum possible shield and missle sizes per round decreases as the robot's mass shrinks.
- Allow multi-round building. A robot can build a larger shield or missle if it keeps "adding to" the equipment. Allow a maximum size of up to 1.5x the "standard" size.
