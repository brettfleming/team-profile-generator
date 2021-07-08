class Team {
    constructor(name, teamMembers = []) {
        this.name = name;
        this.teamMembers = teamMembers;
    }
    addToTeam(addedTeamMember){
        this.teamMembers.push(addedTeamMember)
    }
}
module.exports = Team;