"Arena"-like scenario:
- Free-for-all
- Winner keeps all remaining mass, weapons, defense of loser

"Challenge" mode:
- Wager mass, energy, equipment, etc. "pink-slip" style
- Winner wins the wagered items

"Arena mode" and special items
- Make special items' info public: identity of owners, locations on map (visual "beacon" or radar blips).
- To avoid item-squatting, owners must defend items at least N times per week, and cannot fight the same person more than once per X days (to avoid using weak opponents to satisyf min. fight frequency so that owner can squat on item).

#### combat resolution:  
- each player has an instructions phase where instructions are stored, and actions take a certain no. of ticks per action. eg. a missile might take 3 ticks to travel whereas a laser does damage instantly.  
- A player might choose to move which will have a bearing on unguided slow weapons but not guided (and more expensive!) weapons.
- a shield might take 4 ticks to recharge with a base shield generator, but a better model can be purchased to reduce the time.
- There would be an arbitrary number of ticks between instruction phase. Once these are elapsed, still-pending actions are maintained for the next action phase, and players may choose more instructions.
- Or, players play realtime (yay websockets!), adding events (move, fire, recharge) to their queue to be carried out at each tick.
